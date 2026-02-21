"use client";

import { useState, useEffect } from "react";
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
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
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
    { href: "#home", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#areas", label: "Áreas" },
    { href: "#equipe", label: "Equipe" },
    { href: "#planos", label: "Planos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-4">
            {/* Logo Placeholder - Cinza Retângulo */}
            <div className="w-12 h-8 bg-[#808080] rounded flex items-center justify-center">
              <span className="text-[#0D0D0D] text-xs font-bold">LOGO</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-semibold text-sm tracking-wide">
                Valdenilson Cardoso de Sá
              </span>
            </div>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-white/60 hover:text-[#C9A227] transition-colors text-sm font-medium tracking-wide"
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
              className="hidden sm:flex bg-[#C9A227] text-[#0D0D0D] px-5 py-2.5 rounded font-semibold text-sm hover:bg-[#D4B94A] transition-all hover:scale-105"
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
      <div className={`mobile-menu fixed inset-0 z-40 bg-[#0D0D0D] lg:hidden ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="p-6 pt-20">
          <nav className="space-y-6">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl text-white font-light hover:text-[#C9A227] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria."
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-[#C9A227] text-[#0D0D0D] text-center px-6 py-4 rounded font-semibold mt-8"
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
    <footer className="bg-[#0D0D0D] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            {/* Logo Placeholder */}
            <div className="w-24 h-12 bg-[#808080] rounded mb-4 flex items-center justify-center">
              <span className="text-[#0D0D0D] text-sm font-bold">LOGO</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              OAB/PR 102.384<br/>
              Advocacia empresarial e trabalhista em Maringá - PR.<br/>
              Soluções jurídicas completas para empresas.
            </p>
          </div>
          
          <div>
            <h4 className="text-[#C9A227] font-medium mb-4">快速 Links</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Áreas</a></li>
              <li><a href="#equipe" className="hover:text-white transition-colors">Equipe</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#C9A227] font-medium mb-4">Contato</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li>📍 Maringá - PR</li>
              <li>📱 (44) 99986-2409</li>
              <li>📧 contato@valdenilson.adv.br</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 text-center text-white/30 text-sm">
          © 2026 Valdenilson Cardoso de Sá Advogados. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
