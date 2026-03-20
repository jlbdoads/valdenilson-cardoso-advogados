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

-- Policy: todos os usuários autenticados podem ver
CREATE POLICY "Todos veem clientes" ON public.clientes
  FOR SELECT TO authenticated USING (deleted_at IS NULL);

-- Policy: apenas anonimos podem inserir (vai usar service role key)
CREATE POLICY "Anonimos criam clientes" ON public.clientes
  FOR INSERT TO authenticated WITH CHECK (true);

-- Policy: anonimos podem atualizar
CREATE POLICY "Anonimos atualizam clientes" ON public.clientes
  FOR UPDATE TO authenticated USING (deleted_at IS NULL);
