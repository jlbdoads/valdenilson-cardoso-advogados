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
    .insert(payload)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
