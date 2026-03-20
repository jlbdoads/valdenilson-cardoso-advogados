import { NextRequest, NextResponse } from 'next/server';

import { getSupabase, type ClientePayload } from '@/lib/supabase';

function sanitizePayload(body: Partial<ClientePayload>) {
  return {
    nome: body.nome?.trim(),
    email: body.email?.trim() || null,
    telefone: body.telefone?.trim() || null,
    empresa: body.empresa?.trim() || null,
    observacoes: body.observacoes?.trim() || null,
    updated_at: new Date().toISOString(),
  };
}

type RouteContext = {
  params: {
    id: string;
  };
};

export async function GET(_request: NextRequest, { params }: RouteContext) {
  const supabase = getSupabase();
  const { id } = params;

  const { data, error } = await supabase
    .from('clientes')
    .select('*')
    .eq('id', id)
    .is('deleted_at', null)
    .single();

  if (error) {
    const status = error.code === 'PGRST116' ? 404 : 500;
    return NextResponse.json({ error: error.message }, { status });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function PUT(request: NextRequest, { params }: RouteContext) {
  const supabase = getSupabase();
  const { id } = params;
  const body = (await request.json()) as Partial<ClientePayload>;
  const payload = sanitizePayload(body);

  if (!payload.nome) {
    return NextResponse.json({ error: 'O campo nome é obrigatório.' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('clientes')
    .update(payload)
    .eq('id', id)
    .is('deleted_at', null)
    .select()
    .single();

  if (error) {
    const status = error.code === 'PGRST116' ? 404 : 500;
    return NextResponse.json({ error: error.message }, { status });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function DELETE(_request: NextRequest, { params }: RouteContext) {
  const supabase = getSupabase();
  const { id } = params;

  const { data, error } = await supabase
    .from('clientes')
    .update({ deleted_at: new Date().toISOString(), updated_at: new Date().toISOString() })
    .eq('id', id)
    .is('deleted_at', null)
    .select()
    .single();

  if (error) {
    const status = error.code === 'PGRST116' ? 404 : 500;
    return NextResponse.json({ error: error.message }, { status });
  }

  return NextResponse.json(data, { status: 200 });
}
