import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section - Estilo Apple */}
      <section id="home" className="min-h-[90vh] flex items-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-[#1B5E3E] rounded-full animate-pulse"></span>
                <span className="text-[#1B5E3E] text-sm font-medium">Advocacia Empresarial</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Excelência em
                <span className="block text-[#1B5E3E]">
                  Direito Empresarial
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Soluções jurídicas completas para empresas. Atuação em direito trabalhista, tributário e empresarial com competência e ética.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a 
                  href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20conhecer%20os%20serviços%20do%20escritório."
                  className="bg-[#1B5E3E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#145230] transition-all shadow-lg shadow-green-900/20"
                >
                  Agendar Consulta
                </a>
                <a href="#areas" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all">
                  Nossas Áreas
                </a>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E3E]/10 to-[#C9A227]/10 rounded-3xl"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex items-center justify-center h-full">
                  <Image 
                    src="/logo.png" 
                    alt="Valdenilson Cardoso de Sá"
                    width={220}
                    height={220}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre / Filosofia */}
      <section id="sobre" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] text-sm font-medium uppercase tracking-wider">Quem Somos</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">Filosofia de Trabalho</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                O escritório Valdenilson Cardoso de Sá Advogados Associados nasceu com a missão de oferecer <strong className="text-[#1B5E3E]">assessoria consultiva</strong> e contenciosa para empresas de médio e grande porte, tanto no âmbito judicial quanto extrajudicial.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Atuamos com foco na <strong className="text-[#1B5E3E]">prevenção de conflitos</strong>, oferecendo soluções jurídicas estratégias que protegem e agregam valor ao negócio dos nossos clientes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe oferece atendimento personalizado, com atenção aos detalhes e compromisso com os <strong className="text-[#C9A227]">resultados</strong>. Acreditamos que cada cliente é único e merece uma estratégia jurídica personalizada às suas necessidades.
              </p>
            </div>
            
            <div className="grid gap-4">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-[#1B5E3E] text-2xl">⚖️</span>
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">Assessoria Consultiva</h3>
                <p className="text-gray-500 text-sm">Prevenção de conflitos com análise jurídica completa</p>
              </div>
              
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-[#C9A227] text-2xl">📋</span>
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">Contencioso Estratégico</h3>
                <p className="text-gray-500 text-sm">Defesa judicial com foco em resultados</p>
              </div>
              
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-[#1B5E3E] text-2xl">🤝</span>
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">Atendimento Personalizado</h3>
                <p className="text-gray-500 text-sm">Cada cliente recebe atenção dedicada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] text-sm font-medium uppercase tracking-wider">Equipe</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">Nossos Profissionais</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-56 bg-gradient-to-br from-[#1B5E3E]/10 to-[#C9A227]/10 flex items-center justify-center">
                <span className="text-7xl">👨‍⚖️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Valdenilson Cardoso de Sá</h3>
                <p className="text-[#1B5E3E] text-sm mb-3 font-medium">OAB/PR 102.384</p>
                <p className="text-gray-500 text-sm">Fundador do escritório, especialista em direito empresarial e tributário.</p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-56 bg-gradient-to-br from-[#1B5E3E]/10 to-gray-50 flex items-center justify-center">
                <span className="text-7xl">👨‍💼</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Leonardo Botti</h3>
                <p className="text-[#1B5E3E] text-sm mb-3 font-medium">Gestor Jurídico</p>
                <p className="text-gray-500 text-sm">Responsável pela gestão operacional e estratégias do escritório.</p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-56 bg-gradient-to-br from-[#C9A227]/10 to-gray-50 flex items-center justify-center">
                <span className="text-7xl">👥</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Nossa Equipe</h3>
                <p className="text-[#C9A227] text-sm mb-3 font-medium">Advogados Associados</p>
                <p className="text-gray-500 text-sm">Equipe multidisciplinar com ampla experiência em diversas áreas do direito.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] text-sm font-medium uppercase tracking-wider">Expertise</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">Áreas de Atuação</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <div key={index} className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-[#1B5E3E]/30 hover:shadow-md transition-all group">
                <div className="text-3xl mb-4">{area.icon}</div>
                <h3 className="text-gray-900 font-semibold mb-2 group-hover:text-[#1B5E3E] transition-colors">{area.title}</h3>
                <p className="text-gray-500 text-sm">{area.description}</p>
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

      {/* Planos / Mensalistas */}
      <section id="planos" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] text-sm font-medium uppercase tracking-wider">Planos</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">Pacotes Mensalistas</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Plansos flexíveis para atender empresas de todos os tamanhos. Escolha o que melhor se adapta às necessidades do seu negócio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Básico</h3>
                <p className="text-gray-500 text-sm mb-6">Para empresas em crescimento</p>
                <div className="text-4xl font-bold text-[#1B5E3E] mb-6">
                  Sob Consulta
                </div>
                <ul className="text-left space-y-3 mb-8 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-[#1B5E3E]">✓</span> Consultas jurídicas mensais
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1B5E3E]">✓</span> Análise de contratos básicos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1B5E3E]">✓</span> Orientação trabalhista
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1B5E3E]">✓</span> E-mail de suporte
                  </li>
                </ul>
                <a 
                  href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Básico."
                  className="block w-full border border-[#1B5E3E] text-[#1B5E3E] py-3 rounded-full font-medium text-center hover:bg-[#1B5E3E] hover:text-white transition-colors"
                >
                  Quero este plano
                </a>
              </div>
            </div>
            
            <div className="bg-[#1B5E3E] border border-[#1B5E3E] rounded-2xl p-8 shadow-xl transform scale-105">
              <div className="text-center">
                <div className="inline-block bg-[#C9A227] text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-4">MAIS POPULAR</div>
                <h3 className="text-xl font-bold text-white mb-2">Profissional</h3>
                <p className="text-white/70 text-sm mb-6">Para empresas consolidadas</p>
                <div className="text-4xl font-bold text-white mb-6">
                  Sob Consulta
                </div>
                <ul className="text-left space-y-3 mb-8 text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <span className="text-[#C9A227]">✓</span> Consultas ilimitadas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C9A227]">✓</span> Análise completa de contratos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C9A227]">✓</span> Representação trabalhista
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C9A227]">✓</span> Atendimento prioritário
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C9A227]">✓</span> Reuniões presenciais
                  </li>
                </ul>
                <a 
                  href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Profissional."
                  className="block w-full bg-white text-[#1B5E3E] py-3 rounded-full font-medium text-center hover:bg-gray-100 transition-colors"
                >
                  Quero este plano
                </a>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate</h3>
                <p className="text-gray-500 text-sm mb-6">Para grandes empresas</p>
                <div className="text-4xl font-bold text-[#1B5E3E] mb-6">
                  Sob Consulta
                </div>
                <ul className="text-left space-y-3 mb-8 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-[#1B5E3E]">✓</span> Todo o plano Profissional
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1B5E3E]">✓</span> Equipe dedicada
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1B5E3E]">✓</span> Planejamento tributário
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1B5E3E]">✓</span> Jurídico in-house
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1B5E3E]">✓</span> SLA prioritário
                  </li>
                </ul>
                <a 
                  href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Corporate."
                  className="block w-full border border-[#1B5E3E] text-[#1B5E3E] py-3 rounded-full font-medium text-center hover:bg-[#1B5E3E] hover:text-white transition-colors"
                >
                  Quero este plano
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section id="clientes" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] text-sm font-medium uppercase tracking-wider">Parcerias</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">Clientes e Parceiros</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex items-center justify-center">
                <span className="text-gray-400 font-medium">Empresa {i}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-500 mt-8">
            Diversas empresas confiam em nosso trabalho. Entre em contato para conhecer nossos casos de sucesso.
          </p>
        </div>
      </section>

      {/* Contato CTA */}
      <section id="contato" className="py-24 bg-[#1B5E3E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para resolver suas questões jurídicas?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Entre em contato conosco e agende uma consultoria. Nossa equipe está pronta para ajudar sua empresa.
          </p>
          <a 
            href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria."
            className="inline-flex items-center gap-3 bg-white text-[#1B5E3E] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>💬</span>
            <span>Falar no WhatsApp</span>
          </a>
          
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-white/70 text-sm">
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
