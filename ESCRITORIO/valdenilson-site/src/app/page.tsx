import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section - Reference Style */}
      <section id="home" className="min-h-[90vh] flex items-center bg-[#0B1C2E] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C9A227]/20 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                EXPERIENCE THAT
                <span className="block text-[#C9A227]">PROTECTS</span>
              </h1>
              <p className="text-white/70 text-lg mb-8 max-w-lg">
                Soluções jurídicas completas para empresas. Atuação em direito trabalhista, tributário e empresarial com competência e ética.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20conhecer%20os%20serviços%20do%20escritório."
                  className="bg-[#C9A227] text-[#0B1C2E] px-8 py-4 rounded font-semibold hover:bg-[#D4B94A] transition-colors"
                >
                  Agendar Consulta
                </a>
                <a href="#areas" className="border border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10 transition-colors">
                  Nossas Áreas
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/20 to-transparent rounded-3xl"></div>
                <div className="relative bg-[#152535] rounded-3xl p-6 border border-white/10 flex items-center justify-center h-full">
                  <Image 
                    src="/logo.png" 
                    alt="Valdenilson Cardoso de Sá"
                    width={250}
                    height={250}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas - Reference Style */}
      <section id="areas" className="py-24 bg-[#0B1C2E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-4"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">ÁREAS DE ATUAÇÃO</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <div key={index} className="bg-[#152535] border border-white/10 p-8 rounded hover:border-[#C9A227]/50 transition-colors group">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-[#C9A227] transition-colors">{area.title}</h3>
                <p className="text-white/60 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20áreas%20de%20atuação."
              className="inline-block border border-[#C9A227] text-[#C9A227] px-8 py-3 rounded font-medium hover:bg-[#C9A227] hover:text-[#0B1C2E] transition-colors"
            >
              Falar com um advogado
            </a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 bg-[#0B1C2E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-4"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">SOBRE NÓS</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                O escritório <strong className="text-[#C9A227]">Valdenilson Cardoso de Sá Advogados Associados</strong> nasceu com a missão de oferecer assessoria consultiva e contenciosa para empresas de médio e grande porte, tanto no âmbito judicial quanto extrajudicial.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                Atuamos com foco na <strong className="text-[#C9A227]">prevenção de conflitos</strong>, oferecendo soluções jurídicas estratégicas que protegem e agregam valor ao negócio dos nossos clientes.
              </p>
              <p className="text-white/70 leading-relaxed">
                Nossa equipe oferece atendimento personalizado, com atenção aos detalhes e compromisso com os resultados. Acreditamos que cada cliente é único e merece uma estratégia jurídica personalizada às suas necessidades.
              </p>
            </div>
            
            <div className="grid gap-4">
              <div className="bg-[#152535] border border-white/10 p-6 rounded">
                <h3 className="text-white font-semibold mb-2">Missão</h3>
                <p className="text-white/60 text-sm">Oferecer soluções jurídicas excelência que protegem e agregam valor aos nossos clientes.</p>
              </div>
              <div className="bg-[#152535] border border-white/10 p-6 rounded">
                <h3 className="text-white font-semibold mb-2">Visão</h3>
                <p className="text-white/60 text-sm">Ser referência em advocacia empresarial no Paraná.</p>
              </div>
              <div className="bg-[#152535] border border-white/10 p-6 rounded">
                <h3 className="text-white font-semibold mb-2">Valores</h3>
                <p className="text-white/60 text-sm">Ética, excelência, compromisso e atendimento personalizado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe - Reference Style */}
      <section id="equipe" className="py-24 bg-[#0B1C2E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-4"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">NOSSA EQUIPE</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-[#152535] border border-white/10 rounded overflow-hidden group">
                <div className="h-64 bg-gradient-to-br from-[#1B5E3E]/30 to-[#C9A227]/20 flex items-center justify-center">
                  <span className="text-7xl">{member.emoji}</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-[#C9A227] text-sm mb-3">{member.role}</p>
                  <p className="text-white/60 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-24 bg-[#0B1C2E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-4"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">PLANOS MENSALISTAS</h2>
            <p className="text-white/60 mt-4">Plansos flexíveis para atender empresas de todos os tamanhos</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-[#152535] border ${plan.highlight ? 'border-[#C9A227]' : 'border-white/10'} p-8 rounded ${plan.highlight ? 'transform scale-105' : ''}`}>
                {plan.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-[#C9A227] text-[#0B1C2E] text-xs font-bold px-3 py-1 rounded-full">MAIS POPULAR</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-white font-semibold text-xl mb-2">{plan.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-[#C9A227]">
                    Sob Consulta
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="text-[#C9A227]">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20${plan.name}`}
                  className={`block w-full text-center py-3 rounded font-medium transition-colors ${
                    plan.highlight 
                      ? 'bg-[#C9A227] text-[#0B1C2E] hover:bg-[#D4B94A]' 
                      : 'border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0B1C2E]'
                  }`}
                >
                  Quero este plano
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato - Reference Style */}
      <section id="contato" className="py-24 bg-[#0B1C2E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-4"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">CONTATO</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-white font-semibold text-xl mb-6">Fale Conosco</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#152535] border border-white/10 rounded flex items-center justify-center text-[#C9A227]">📍</div>
                  <div>
                    <p className="text-white font-medium">Endereço</p>
                    <p className="text-white/60 text-sm">Maringá - PR</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#152535] border border-white/10 rounded flex items-center justify-center text-[#C9A227]">📱</div>
                  <div>
                    <p className="text-white font-medium">Telefone</p>
                    <p className="text-white/60 text-sm">(44) 99986-2409</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#152535] border border-white/10 rounded flex items-center justify-center text-[#C9A227]">📧</div>
                  <div>
                    <p className="text-white font-medium">E-mail</p>
                    <p className="text-white/60 text-sm">contato@valdenilson.adv.br</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold text-xl mb-6">Envie uma Mensagem</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Seu Nome" 
                  className="w-full bg-[#152535] border border-white/10 rounded px-4 py-3 text-white placeholder-white/40 focus:border-[#C9A227] outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Seu E-mail" 
                  className="w-full bg-[#152535] border border-white/10 rounded px-4 py-3 text-white placeholder-white/40 focus:border-[#C9A227] outline-none"
                />
                <input 
                  type="tel" 
                  placeholder="Seu Telefone" 
                  className="w-full bg-[#152535] border border-white/10 rounded px-4 py-3 text-white placeholder-white/40 focus:border-[#C9A227] outline-none"
                />
                <textarea 
                  placeholder="Sua Mensagem" 
                  rows={4}
                  className="w-full bg-[#152535] border border-white/10 rounded px-4 py-3 text-white placeholder-white/40 focus:border-[#C9A227] outline-none resize-none"
                ></textarea>
                <a 
                  href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20enviar%20uma%20mensagem."
                  className="block w-full bg-[#C9A227] text-[#0B1C2E] text-center py-4 rounded font-semibold hover:bg-[#D4B94A] transition-colors"
                >
                  Enviar Mensagem
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const areas = [
  {
    icon: "⚖️",
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

const team = [
  {
    name: "Valdenilson Cardoso de Sá",
    role: "OAB/PR 102.384",
    bio: "Fundador do escritório, especialista em direito empresarial e tributário.",
    emoji: "👨‍⚖️"
  },
  {
    name: "Leonardo Botti",
    role: "Gestor Jurídico",
    bio: "Responsável pela gestão operacional e estratégias do escritório.",
    emoji: "👨‍💼"
  },
  {
    name: "Nossa Equipe",
    role: "Advogados Associados",
    bio: "Equipe multidisciplinar com ampla experiência em diversas áreas do direito.",
    emoji: "👥"
  }
];

const plans = [
  {
    name: "Básico",
    description: "Para empresas em crescimento",
    features: [
      "Consultas jurídicas mensais",
      "Análise de contratos básicos",
      "Orientação trabalhista",
      "E-mail de suporte"
    ],
    highlight: false
  },
  {
    name: "Profissional",
    description: "Para empresas consolidadas",
    features: [
      "Consultas ilimitadas",
      "Análise completa de contratos",
      "Representação trabalhista",
      "Atendimento prioritário",
      "Reuniões presenciais"
    ],
    highlight: true
  },
  {
    name: "Corporate",
    description: "Para grandes empresas",
    features: [
      "Todo o plano Profissional",
      "Equipe dedicada",
      "Planejamento tributário",
      "Jurídico in-house",
      "SLA prioritário"
    ],
    highlight: false
  }
];
