CREATE TABLE IF NOT EXISTS public.clientes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT UNIQUE,
  telefone TEXT,
  empresa TEXT,
  observacoes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ,
  deleted_at TIMESTAMPTZ
);

-- RLS
ALTER TABLE public.clientes ENABLE ROW LEVEL SECURITY;

-- Policy: usuários autenticados podem visualizar registros não removidos
CREATE POLICY "Authenticated users can view active clientes" ON public.clientes
  FOR SELECT TO authenticated USING (deleted_at IS NULL);

-- Policy: usuários autenticados podem inserir registros
CREATE POLICY "Authenticated users can insert clientes" ON public.clientes
  FOR INSERT TO authenticated WITH CHECK (true);

-- Policy: usuários autenticados podem atualizar registros não removidos
CREATE POLICY "Authenticated users can update active clientes" ON public.clientes
  FOR UPDATE TO authenticated USING (deleted_at IS NULL) WITH CHECK (deleted_at IS NULL OR deleted_at IS NOT NULL);
