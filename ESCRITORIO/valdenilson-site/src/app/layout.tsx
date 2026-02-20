import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valdenilson Cardoso de Sá Advogados",
  description: "Escritório de advocacia em Maringá - PR. Expertise em direito empresarial, trabalhista e tributário.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B5E3E] to-[#C9A227] flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <span className="text-white font-semibold text-lg hidden sm:block">
            Valdenilson Cardoso de Sá
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-300 hover:text-[#C9A227] transition-colors">Home</a>
          <a href="#sobre" className="text-gray-300 hover:text-[#C9A227] transition-colors">Quem Somos</a>
          <a href="#equipe" className="text-gray-300 hover:text-[#C9A227] transition-colors">Equipe</a>
          <a href="#areas" className="text-gray-300 hover:text-[#C9A227] transition-colors">Áreas</a>
          <a href="#contato" className="text-gray-300 hover:text-[#C9A227] transition-colors">Contato</a>
        </nav>

        <a 
          href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#1B5E3E] to-[#145230] text-white px-5 py-2 rounded-full font-medium hover:from-[#2a7a5a] hover:to-[#1B5E3E] transition-all transform hover:scale-105"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B5E3E] to-[#C9A227] flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-white font-semibold">Valdenilson Cardoso de Sá</span>
            </div>
            <p className="text-gray-400 text-sm">
              OAB/PR 102.384<br/>
              Advocacia empresarial e trabalhista em Maringá - PR
            </p>
          </div>
          
          <div>
            <h4 className="text-[#C9A227] font-semibold mb-4">快速 Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#equipe" className="hover:text-white transition-colors">Equipe</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Áreas de Atuação</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#C9A227] font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📍 Maringá - PR</li>
              <li>📱 (44) 99986-2409</li>
              <li>📧 contato@valdenilson.adv.br</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#C9A227] font-semibold mb-4">Horário</h4>
            <p className="text-gray-400 text-sm">
              Segunda a Sexta<br/>
              08:00 - 18:00
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500 text-sm">
          © 2026 Valdenilson Cardoso de Sá Advogados. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
