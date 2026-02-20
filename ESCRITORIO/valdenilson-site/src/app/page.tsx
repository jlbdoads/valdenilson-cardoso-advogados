import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f1f1a] to-[#0a0a0a]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#1B5E3E] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C9A227] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1B5E3E]/20 border border-[#1B5E3E]/30 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-[#C9A227] rounded-full animate-pulse"></span>
                <span className="text-[#C9A227] text-sm font-medium">Advocacia Empresarial</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Excelência em
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1B5E3E] to-[#C9A227]">
                  Direito Empresarial
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                Soluções jurídicas completas para empresas. Atuação em direito trabalhista, tributário e empresarial com competência e ética.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20conhecer%20os%20serviços%20do%20escritório."
                  className="bg-gradient-to-r from-[#1B5E3E] to-[#145230] text-white px-8 py-4 rounded-full font-semibold hover:from-[#2a7a5a] hover:to-[#1B5E3E] transition-all transform hover:scale-105 shadow-lg shadow-[#1B5E3E]/25"
                >
                  Agendar Consulta
                </a>
                <a href="#areas" className="border border-[#C9A227] text-[#C9A227] px-8 py-4 rounded-full font-semibold hover:bg-[#C9A227] hover:text-black transition-all">
                  Nossas Áreas
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E3E] to-[#C9A227] rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-white/10">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1B5E3E] to-[#C9A227] flex items-center justify-center">
                      <span className="text-white text-5xl font-bold">V</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Valdenilson Cardoso de Sá</h3>
                    <p className="text-[#C9A227] mb-4">OAB/PR 102.384</p>
                    <div className="flex justify-center gap-4 text-gray-400 text-sm">
                      <span>✓ Direito Empresarial</span>
                      <span>✓ Trabalhista</span>
                      <span>✓ Tributário</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre / Filosofia */}
      <section id="sobre" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] text-sm font-medium uppercase tracking-wider">Quem Somos</span>
            <h2 className="text-4xl font-bold text-white mt-4">Filosofia de Trabalho</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                O escritório Valdenilson Cardoso de Sá Advogados Associados nasceu com a missão de oferecer <strong className="text-[#C9A227]">assessoria consultiva</strong> e contenciosa para empresas de médio e grande porte, tanto no âmbito judicial quanto extrajudicial.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Atuamos com foco na <strong className="text-[#1B5E3E]">prevenção de conflitos</strong>, oferecendo soluções jurídicas estratégias que protegem e agregam valor ao negócio dos nossos clientes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Nossa equipe oferece atendimento personalizado, com atenção aos detalhes e compromisso com os <strong className="text-[#C9A227]">resultados</strong>. Acreditamos que cada cliente é único e merece uma estratégia jurídica tailored às suas necessidades.
              </p>
            </div>
            
            <div className="grid gap-4">
              <div className="bg-gray-900/50 border border-white/10 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#1B5E3E]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#1B5E3E] text-2xl">⚖️</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Assessoria Consultiva</h3>
                <p className="text-gray-400 text-sm">Prevenção de conflitos com análise jurídica completa</p>
              </div>
              
              <div className="bg-gray-900/50 border border-white/10 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#C9A227]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#C9A227] text-2xl">📋</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Contencioso Estratégico</h3>
                <p className="text-gray-400 text-sm">Defesa judicial com foco em resultados</p>
              </div>
              
              <div className="bg-gray-900/50 border border-white/10 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#1B5E3E]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#1B5E3E] text-2xl">🤝</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Atendimento Personalizado</h3>
                <p className="text-gray-400 text-sm">Cada cliente recebe atenção dedicada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] text-sm font-medium uppercase tracking-wider">Equipe</span>
            <h2 className="text-4xl font-bold text-white mt-4">Nossos Profissionais</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-[#1B5E3E]/30 to-[#C9A227]/30 flex items-center justify-center">
                <span className="text-8xl">👨‍⚖️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Valdenilson Cardoso de Sá</h3>
                <p className="text-[#C9A227] text-sm mb-3">OAB/PR 102.384</p>
                <p className="text-gray-400 text-sm">Fundador do escritório, especialista em direito empresarial e tributário.</p>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-[#1B5E3E]/20 to-gray-900 flex items-center justify-center">
                <span className="text-8xl">👨‍💼</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Leonardo Botti</h3>
                <p className="text-[#1B5E3E] text-sm mb-3">Gestor Jurídico</p>
                <p className="text-gray-400 text-sm">Responsável pela gestão operacional e estratégias do escritório.</p>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-[#C9A227]/20 to-gray-900 flex items-center justify-center">
                <span className="text-8xl">👥</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">Nossa Equipe</h3>
                <p className="text-[#C9A227] text-sm mb-3">Advocados Associados</p>
                <p className="text-gray-400 text-sm">Equipe multidisciplinar com ampla experiência em diversas áreas do direito.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] text-sm font-medium uppercase tracking-wider">Expertise</span>
            <h2 className="text-4xl font-bold text-white mt-4">Áreas de Atuação</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <div key={index} className="bg-gray-900/50 border border-white/10 p-6 rounded-xl hover:border-[#1B5E3E]/50 transition-colors group">
                <div className="text-3xl mb-4">{area.icon}</div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-[#C9A227] transition-colors">{area.title}</h3>
                <p className="text-gray-400 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20áreas%20de%20atuação."
              className="inline-flex items-center gap-2 bg-[#1B5E3E] text-white px-6 py-3 rounded-full font-medium hover:bg-[#145230] transition-colors"
            >
              <span>Falar com um advogado</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section id="clientes" className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] text-sm font-medium uppercase tracking-wider">Parcerias</span>
            <h2 className="text-4xl font-bold text-white mt-4">Clientes e Parceiros</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-900 border border-white/10 rounded-xl p-8 flex items-center justify-center">
                <span className="text-gray-500 text-lg font-medium">Empresa {i}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-500 mt-8">
            Diversas empresas confiam em nosso trabalho. Entre em contato para conhecer nossos casos de sucesso.
          </p>
        </div>
      </section>

      {/* Contato CTA */}
      <section id="contato" className="py-24 bg-gradient-to-br from-[#1B5E3E] to-[#0a2e1f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A227] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para resolver suas questões jurídicas?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Entre em contato conosco e agende uma consultoria. Nossa equipe está pronta para ajudar sua empresa.
          </p>
          <a 
            href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria."
            className="inline-flex items-center gap-3 bg-[#C9A227] text-black px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors transform hover:scale-105"
          >
            <span>💬</span>
            <span>Falar no WhatsApp</span>
          </a>
          
          <div className="flex justify-center gap-8 mt-12 text-white/70 text-sm">
            <span>📍 Maringá - PR</span>
            <span>📱 (44) 99986-2409</span>
            <span>📧 contato@valdenilson.adv.br</span>
          </div>
        </div>
      </section>
    </div>
  );
}

const areas = [
  {
    icon: "🏢",
    title: "Direito Empresarial",
    description: "Consultoria jurídica completa para empresas, desde a constituição até operações societárias."
  },
  {
    icon: "💼",
    title: "Direito Trabalhista",
    description: "Defesa em reclamações trabalhistas, consultoria preventiva e acordos extrajudiciais."
  },
  {
    icon: "💰",
    title: "Direito Tributário",
    description: "Planejamento tributário, recuperação de créditos e defesa em execuções fiscais."
  },
  {
    icon: "📄",
    title: "Contratos",
    description: "Elaboração, revisão e negociação de contratos empresariais e comerciais."
  },
  {
    icon: "⚖️",
    title: "Contencioso Cível",
    description: "Representação judicial em disputas comerciais, responsabilidade civil e indenizações."
  },
  {
    icon: "🔒",
    title: "Direito Penal Empresarial",
    description: "Defesa em processos criminais envolvendo pessoas jurídicas e gestores."
  }
];
