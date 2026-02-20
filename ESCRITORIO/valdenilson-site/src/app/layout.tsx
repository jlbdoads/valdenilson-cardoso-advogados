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
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#equipe", label: "Equipe" },
    { href: "#areas", label: "Áreas" },
    { href: "#planos", label: "Planos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
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
              <span className="text-gray-900 font-semibold text-sm leading-tight block">
                Valdenilson Cardoso de Sá
              </span>
              <span className="text-gray-500 text-xs">Advogados Associados</span>
            </div>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-gray-600 hover:text-[#1B5E3E] transition-colors text-sm font-medium"
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
              className="hidden sm:flex bg-[#1B5E3E] text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-[#145230] transition-colors"
            >
              WhatsApp
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600"
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
      <div className={`mobile-menu fixed inset-0 z-40 bg-white lg:hidden ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-semibold text-gray-900">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2">
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
                className="block text-xl text-gray-900 font-medium py-2 border-b border-gray-100"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria."
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-[#1B5E3E] text-white text-center px-6 py-4 rounded-full font-medium mt-6"
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
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Valdenilson Cardoso de Sá</h3>
            <p className="text-gray-400 mb-4">
              OAB/PR 102.384<br/>
              Advocacia empresarial e trabalhista em Maringá - PR
            </p>
            <p className="text-gray-400 text-sm">
              Soluções jurídicas completas para empresas. Atuação com excelência em direito trabalhista, tributário e empresarial.
            </p>
          </div>
          
          <div>
            <h4 className="text-[#C9A227] font-semibold mb-4">快速 Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#equipe" className="hover:text-white transition-colors">Equipe</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Áreas de Atuação</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#C9A227] font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📍 Maringá - PR</li>
              <li>📱 (44) 99986-2409</li>
              <li>📧 contato@valdenilson.adv.br</li>
              <li className="pt-2">🕐 Seg a Sex: 08:00 - 18:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500 text-sm">
          © 2026 Valdenilson Cardoso de Sá Advogados. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
