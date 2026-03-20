import { NextRequest, NextResponse } from 'next/server';

import { getSupabase, type ClientePayload } from '@/lib/supabase';

function sanitizePayload(body: Partial<ClientePayload>) {
  return {
    nome: body.nome?.trim(),
    email: body.email?.trim() || null,
    telefone: body.telefone?.trim() || null,
    empresa: body.empresa?.trim() || null,
    observacoes: body.observacoes?.trim() || null,
  };
}

export async function GET() {
  const supabase = getSupabase();

  const { data, error } = await supabase
    .from('clientes')
    .select('*')
    .is('deleted_at', null)
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function POST(request: NextRequest) {
  const supabase = getSupabase();
  const body = (await request.json()) as Partial<ClientePayload>;
  const payload = sanitizePayload(body);

  if (!payload.nome) {
    return NextResponse.json({ error: 'O campo nome é obrigatório.' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('clientes')
    .insert(payload)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
