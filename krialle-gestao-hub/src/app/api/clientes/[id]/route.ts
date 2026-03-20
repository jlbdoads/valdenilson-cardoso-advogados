import { NextRequest, NextResponse } from 'next/server';

import { getSupabase, type ClientePayload } from '@/lib/supabase';

const MAX_NOME_LENGTH = 255;
const MAX_EMAIL_LENGTH = 255;
const MAX_TELEFONE_LENGTH = 50;
const MAX_EMPRESA_LENGTH = 255;
const MAX_OBSERVACOES_LENGTH = 2000;

function sanitizePayload(body: Partial<ClientePayload>) {
  return {
    nome: body.nome?.trim(),
    email: body.email?.trim().toLowerCase() || null,
    telefone: body.telefone?.trim() || null,
    empresa: body.empresa?.trim() || null,
    observacoes: body.observacoes?.trim() || null,
    updated_at: new Date().toISOString(),
  };
}

function validatePayload(payload: ReturnType<typeof sanitizePayload>) {
  if (!payload.nome) {
    return 'O campo nome é obrigatório.';
  }

  if (payload.nome.length > MAX_NOME_LENGTH) {
    return 'O campo nome excede o tamanho máximo permitido.';
  }

  if (payload.email) {
    if (payload.email.length > MAX_EMAIL_LENGTH) {
      return 'O campo email excede o tamanho máximo permitido.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      return 'O campo email é inválido.';
    }
  }

  if (payload.telefone && payload.telefone.length > MAX_TELEFONE_LENGTH) {
    return 'O campo telefone excede o tamanho máximo permitido.';
  }

  if (payload.empresa && payload.empresa.length > MAX_EMPRESA_LENGTH) {
    return 'O campo empresa excede o tamanho máximo permitido.';
  }

  if (payload.observacoes && payload.observacoes.length > MAX_OBSERVACOES_LENGTH) {
    return 'O campo observações excede o tamanho máximo permitido.';
  }

  return null;
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

  let body: Partial<ClientePayload>;

  try {
    body = (await request.json()) as Partial<ClientePayload>;
  } catch {
    return NextResponse.json({ error: 'JSON inválido.' }, { status: 400 });
  }

  const payload = sanitizePayload(body);
  const validationError = validatePayload(payload);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
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
