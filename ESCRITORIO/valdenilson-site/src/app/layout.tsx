"use client";

import { useState } from "react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean; setMobileMenuOpen: (open: boolean) => void }) {
  const navItems = [
    { href: "#home", label: "HOME" },
    { href: "#sobre", label: "SOBRE" },
    { href: "#areas", label: "ÁREAS" },
    { href: "#equipe", label: "EQUIPE" },
    { href: "#planos", label: "PLANOS" },
    { href: "#contato", label: "CONTATO" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1C2E]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <Image 
                src="/logo.png" 
                alt="Valdenilson Cardoso de Sá"
                width={48}
                height={48}
                className="rounded-lg"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-semibold text-sm leading-tight block">
                Valdenilson Cardoso de Sá
              </span>
              <span className="text-[#C9A227] text-xs">ADVOGADOS ASSOCIADOS</span>
            </div>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-white/80 hover:text-[#C9A227] transition-colors text-xs font-medium tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex bg-[#C9A227] text-[#0B1C2E] px-5 py-2.5 rounded font-medium text-sm hover:bg-[#D4B94A] transition-colors"
            >
              WhatsApp
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed inset-0 z-40 bg-[#0B1C2E] lg:hidden ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-semibold text-white">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl text-white font-medium py-2 border-b border-white/10"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria."
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-[#C9A227] text-[#0B1C2E] text-center px-6 py-4 rounded font-medium mt-6"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0B1C2E] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white font-semibold mb-4">Valdenilson Cardoso de Sá</h3>
            <p className="text-white/60 text-sm">
              OAB/PR 102.384<br/>
              Advocacia empresarial e trabalhista em Maringá - PR
            </p>
          </div>
          
          <div>
            <h4 className="text-[#C9A227] font-semibold mb-4">快速 Links</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#home" className="hover:text-[#C9A227] transition-colors">Home</a></li>
              <li><a href="#sobre" className="hover:text-[#C9A227] transition-colors">Sobre</a></li>
              <li><a href="#areas" className="hover:text-[#C9A227] transition-colors">Áreas de Atuação</a></li>
              <li><a href="#equipe" className="hover:text-[#C9A227] transition-colors">Equipe</a></li>
              <li><a href="#planos" className="hover:text-[#C9A227] transition-colors">Planos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#C9A227] font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>📍 Maringá - PR</li>
              <li>📱 (44) 99986-2409</li>
              <li>📧 contato@valdenilson.adv.br</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-8 text-center text-white/40 text-sm">
          © 2026 Valdenilson Cardoso de Sá Advogados. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
