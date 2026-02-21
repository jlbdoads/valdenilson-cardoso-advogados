import Image from "next/image";

export default function Home() {
  return (
    <div className="gradient-bg">
      {/* Hero Section - Innovative */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1B5E3E]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 border border-[#C9A227]/30 rounded-full mb-6">
                <span className="text-[#C9A227] text-xs font-medium tracking-widest uppercase">Advocacia Empresarial</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-light text-white mb-2 leading-tight">
                Defendemos
              </h1>
              <h1 className="text-5xl lg:text-7xl font-bold text-gradient mb-6">
                o seu negócio
              </h1>
              
              <p className="text-white/50 text-lg mb-10 max-w-lg leading-relaxed">
                Soluções jurídicas completas para empresas. Atuação estratégica em direito trabalhista, tributário e empresarial.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20conhecer%20os%20serviços%20do%20escritório."
                  className="bg-[#C9A227] text-[#0D0D0D] px-8 py-4 rounded font-semibold hover:bg-[#D4B94A] transition-all hover:scale-105 glow-gold"
                >
                  Agendar Consulta
                </a>
                <a href="#areas" className="border border-white/20 text-white px-8 py-4 rounded font-medium hover:bg-white/5 transition-all">
                  Nossas Áreas
                </a>
              </div>
            </div>
            
            {/* Logo Placeholder - Large */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-40 lg:w-80 lg:h-48 bg-[#808080] rounded-lg flex items-center justify-center glow-gold">
                  <span className="text-[#0D0D0D] text-lg font-bold tracking-widest">LOGO</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-white/5">
            {[
              { number: "15+", label: "Anos de experiência" },
              { number: "500+", label: "Clientes atendidos" },
              { number: "98%", label: "Taxa de sucesso" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas - Cards Grid */}
      <section id="areas" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] text-xs font-medium tracking-widest uppercase">Expertise</span>
            <h2 className="text-4xl lg:text-5xl font-light text-white mt-4">Áreas de Atuação</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <div key={index} className="bg-[#1A1A1A] border border-white/5 p-8 rounded-2xl card-hover group">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-[#C9A227] transition-colors">{area.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre - Two Column */}
      <section id="sobre" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#C9A227] text-xs font-medium tracking-widest uppercase">Quem Somos</span>
              <h2 className="text-4xl lg:text-5xl font-light text-white mt-4 mb-8">
                Filosofia de Trabalho
              </h2>
              
              <div className="space-y-6">
                <p className="text-white/60 leading-relaxed">
                  O escritório <strong className="text-white">Valdenilson Cardoso de Sá Advogados Associados</strong> nasceu com a missão de oferecer assessoria consultiva e contenciosa para empresas de médio e grande porte.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Atuamos com foco na <strong className="text-[#C9A227]">prevenção de conflitos</strong>, oferecendo soluções jurídicas estratégicas que protegem e agregam valor ao negócio dos nossos clientes.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Nossa equipe oferece atendimento personalizado, com atenção aos detalhes e compromisso com os resultados.
                </p>
              </div>
            </div>
            
            <div className="grid gap-4">
              {[
                { title: "Missão", desc: "Oferecer soluções jurídicas excelência que protegem e agregam valor aos nossos clientes." },
                { title: "Visão", desc: "Ser referência em advocacia empresarial no Paraná." },
                { title: "Valores", desc: "Ética, excelência, compromisso e atendimento personalizado." },
              ].map((item, i) => (
                <div key={i} className="bg-[#1A1A1A] border border-white/5 p-6 rounded-2xl">
                  <h3 className="text-[#C9A227] font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] text-xs font-medium tracking-widest uppercase">Profissionais</span>
            <h2 className="text-4xl lg:text-5xl font-light text-white mt-4">Nossa Equipe</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-[#1A1A1A] border border-white/5 rounded-2xl overflow-hidden card-hover">
                <div className="h-64 bg-gradient-to-br from-[#1B5E3E]/20 to-[#C9A227]/10 flex items-center justify-center">
                  <span className="text-8xl opacity-50">{member.emoji}</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-[#C9A227] text-sm mb-3">{member.role}</p>
                  <p className="text-white/40 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] text-xs font-medium tracking-widest uppercase">Planos</span>
            <h2 className="text-4xl lg:text-5xl font-light text-white mt-4">Pacotes Mensalistas</h2>
            <p className="text-white/50 mt-4">Plansos flexíveis para atender empresas de todos os tamanhos</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-[#1A1A1A] border ${plan.highlight ? 'border-[#C9A227]/50 glow-gold' : 'border-white/5'} p-8 rounded-2xl ${plan.highlight ? 'transform scale-105' : ''}`}>
                {plan.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-[#C9A227] text-[#0D0D0D] text-xs font-bold px-3 py-1 rounded-full">MAIS POPULAR</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-white font-semibold text-xl mb-2">{plan.name}</h3>
                  <p className="text-white/40 text-sm mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-gradient">
                    Sob Consulta
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/50 text-sm">
                      <span className="text-[#C9A227]">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20${plan.name}`}
                  className={`block w-full text-center py-3 rounded font-medium transition-all ${
                    plan.highlight 
                      ? 'bg-[#C9A227] text-[#0D0D0D] hover:bg-[#D4B94A]' 
                      : 'border border-white/20 text-white hover:bg-white/5'
                  }`}
                >
                  Quero este plano
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] text-xs font-medium tracking-widest uppercase">Contato</span>
            <h2 className="text-4xl lg:text-5xl font-light text-white mt-4">Vamos conversar?</h2>
            <p className="text-white/50 mt-4">Entre em contato e agende uma consultoria</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "📍", title: "Endereço", value: "Maringá - PR" },
              { icon: "📱", title: "Telefone", value: "(44) 99986-2409" },
              { icon: "📧", title: "E-mail", value: "contato@valdenilson.adv.br" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-medium mb-1">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.value}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="https://wa.me/5544999862409?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria."
              className="inline-flex items-center gap-3 bg-[#C9A227] text-[#0D0D0D] px-10 py-5 rounded-full font-semibold hover:bg-[#D4B94A] transition-all hover:scale-105 glow-gold"
            >
              <span>Falar no WhatsApp</span>
              <span>→</span>
            </a>
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
    emoji: "⚖️"
  },
  {
    name: "Leonardo Botti",
    role: "Gestor Jurídico",
    bio: "Responsável pela gestão operacional e estratégias do escritório.",
    emoji: "💼"
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
