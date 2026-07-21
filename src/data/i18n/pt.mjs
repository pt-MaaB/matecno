// ---------------------------------------------------------------------------
// i18n/pt.mjs — Portuguese (pt-PT) string pack. Default locale.
// Shape is shared by en.mjs and es.mjs. Merged with structure.mjs in site.mjs.
// ---------------------------------------------------------------------------
export default {
  seo: {
    titleHome: 'Matecno — Software à Medida em Coimbra',
    descHome:
      'Software à medida, automações, websites e backends para empresas. Código escrito de raiz sobre Next.js, Prisma e PostgreSQL — a mesma stack dos nossos produtos em produção.',
    jsonldDescription:
      'Construímos software à medida, automações, websites, backends e integrações para empresas, em Coimbra e remoto. Código escrito de raiz.',
    ownsDescription:
      'Plataforma de marcações multi-tenant, com três idiomas e lembretes automáticos. Em produção.',
    areaServedRemote: 'Remoto — Portugal e resto do mundo',
    knowsAbout: [
      'Desenvolvimento de software à medida',
      'Automação de processos',
      'Websites e aplicações web',
      'Backends e APIs',
      'Integrações de sistemas',
      'Next.js',
      'Prisma',
      'PostgreSQL',
    ],
    makesOffer: [
      { name: 'Software à medida', description: 'Aplicações web e plataformas construídas de raiz para o teu negócio.' },
      { name: 'Automações', description: 'Automatização de tarefas e fluxos de trabalho para PMEs.' },
      { name: 'Websites', description: 'Websites rápidos, escritos à mão, com SEO técnico tratado de origem.' },
      { name: 'Backends e integrações', description: 'Backends, APIs e integrações entre as ferramentas que já usas.' },
    ],
  },
  core: {
    tagline: 'Software à medida para empresas. E produtos próprios, em produção.',
  },
  ui: {
    navAria: 'Principal',
    back: 'voltar ao sistema',
    hint: 'arrasta — orbitar · scroll — zoom · passa o rato — caminho até ao núcleo · clica — dissecar',
    detailLabel: 'Detalhe',
    dissected: 'nó dissecado',
    viewPage: 'ver página {label}',
    sectionEyebrow: 'nó do sistema',
    detalhe: 'Detalhe',
    nextStep: 'Próximo passo',
    otherNodes: 'Outros nós',
    backToGraph: 'voltar ao grafo',
    waMessage: 'Olá, gostaria de agendar um diagnóstico gratuito',
    floatingWaAria: 'Fale connosco no WhatsApp',
    floatingWaMessage: 'Olá, gostaria de saber mais sobre os vossos serviços',
  },
  contact: {
    ctaKicker: 'Fala connosco',
    ctaSub: 'Resposta em menos de 24 horas · PT ou EN · Coimbra e remoto para o país',
    stepsHeading: 'O que acontece a seguir',
    steps: [
      {
        title: 'Respondemos em menos de 24h',
        body: 'Escreve por WhatsApp ou email. Responde uma pessoa — o Mauro ou a equipa — não um bot nem um comercial.',
      },
      {
        title: 'Diagnóstico gratuito de 30 min',
        body: 'Por chamada ou pessoalmente. Percorremos o processo em causa, os sistemas que já usas e o que custa tempo à equipa.',
      },
      {
        title: 'Orçamento claro — ou um não honesto',
        body: 'Se vale a pena construir, sais com âmbito, fases e preço. Se não vale, dizemos porquê na hora.',
      },
    ],
    formKicker: 'Preferes escrever',
    formHeading: 'Conta-nos o que precisas',
    formSub: 'Resposta em menos de 24 horas.',
    labelName: 'Nome',
    labelCompany: 'Empresa',
    labelEmail: 'Email',
    labelPhone: 'Telefone',
    labelMessage: 'O que precisas construir',
    phName: 'O teu nome',
    phCompany: 'Opcional',
    phEmail: 'email@aempresa.pt',
    phPhone: '+351 9xx xxx xxx',
    phMessage: 'Descreve brevemente o problema ou a ideia...',
    submit: 'Enviar mensagem',
    formFootnote: 'Respondemos sempre em menos de 24 horas',
  },
  hubs: {
    serv: {
      label: 'Serviços',
      aspects: [
        {
          label: 'Software',
          title: 'Software à medida',
          desc: 'Aplicações web e plataformas multi-tenant, construídas de raiz para o teu negócio.',
          items: [
            'Plataformas multi-tenant e painéis de gestão',
            'Autenticação, pagamentos, faturação, notificações',
            'O código-fonte é teu, sem lock-in',
          ],
        },
        {
          label: 'Automação',
          title: 'Automação de processos',
          desc: 'Processos repetitivos passam a correr sozinhos — com registo, alertas e recuperação de falhas.',
          items: [
            'Faturação, emails, relatórios, sincronização entre sistemas',
            'Agendada ou disparada por eventos',
            'Logs e alertas para saberes o que correu',
          ],
        },
        {
          label: 'Websites',
          title: 'Websites e plataformas',
          desc: 'Sites rápidos, escritos à mão, com SEO técnico tratado de origem.',
          items: [
            'Estáticos e leves — este site é um exemplo',
            'Multi-idioma nativo (PT · EN · ES)',
            'Schema, hreflang e Core Web Vitals tratados',
          ],
        },
        {
          label: 'Backends',
          title: 'Backends, APIs e integrações',
          desc: 'A engenharia por trás dos sistemas que já usas — e as ligações entre eles.',
          items: [
            'APIs REST e webhooks',
            'Stripe, Google Workspace, WhatsApp, email',
            'Filas, crons e sincronização entre sistemas',
          ],
        },
        {
          label: 'Leads & Dados',
          title: 'Leads & Dados',
          desc: 'Listas B2B verificadas, enriquecimento de dados e monitorização de mercado.',
          items: [
            'Geração de leads B2B verificadas',
            'Enriquecimento e limpeza de dados',
            'Inteligência de mercado',
          ],
          linkTo: 'leads',
        },
      ],
      page: {
        title: 'Serviços — Software à Medida, Automação e Leads B2B | Matecno',
        description:
          'Software à medida, automação de processos, websites, backends e integrações — e leads B2B e dados. Código escrito de raiz, sobre Next.js, Prisma e PostgreSQL.',
        h1: 'O que construímos',
        paras: [
          'Cinco áreas de trabalho: software à medida, automação de processos, websites, backends e dados B2B. Tudo escrito de raiz, sobre a mesma stack que corre nos nossos próprios produtos.',
        ],
        cta: 'Diagnóstico gratuito de 30 minutos — WhatsApp +351 919 642 845 ou geral@matecno.pt.',
      },
    },
    leads: {
      label: 'Leads & Dados',
      aspects: [
        {
          label: 'Oferta',
          title: 'O que entregamos',
          items: [
            'Geração de leads B2B verificadas e qualificadas',
            'Enriquecimento e limpeza de listas que já tens',
            'Inteligência de mercado — recolha de dados públicos à medida',
            'Geração contínua — fluxo mensal de leads novas',
            'Tudo segmentado por setor e região',
          ],
        },
        {
          label: 'Cada lead',
          title: 'Cada contacto, completo',
          items: [
            'Nome e cargo do decisor',
            'Email verificado — que não volta',
            'Telefone direto',
            'Sem duplicados, sempre atualizado',
            'Entregue em folhas de cálculo, relatórios ou feeds',
          ],
        },
        {
          label: 'Confiança',
          title: 'Fontes públicas, RGPD',
          items: [
            'Só dados de fontes públicas',
            'Em conformidade com o RGPD',
            'Sem listas compradas',
            'Sem spam',
            'Análise de mercado gratuita antes de avançar',
          ],
        },
      ],
      page: {
        title: 'Geração de Leads B2B e Dados | Matecno Coimbra',
        description:
          'Leads B2B verificadas — nome, cargo, email e telefone do decisor. Enriquecimento de dados e inteligência de mercado. Fontes públicas, RGPD.',
        h1: 'Leads B2B e dados de mercado, verificados',
        paras: [
          'Construímos os sistemas que recolhem, cruzam e verificam dados de empresas — e usamo-los para entregar leads B2B qualificadas e inteligência de mercado.',
          'Geração de leads: contactos segmentados por setor e região, com nome e cargo do decisor, email verificado e telefone direto. Se já tens uma lista, enriquecemos e limpamos: registos completos, sem duplicados, com emails que não voltam.',
          'Inteligência de mercado: recolha de dados públicos à medida — preços da concorrência, listagens, monitorização contínua — entregue em folhas de cálculo, relatórios ou feeds automáticos. Para quem precisa de fluxo regular, a geração contínua entrega leads novas todos os meses, sobre um perfil de cliente ideal definido contigo.',
          'Trabalhamos só com fontes públicas, em conformidade com o RGPD — sem listas compradas, sem spam. Antes de avançar, verificamos se existe volume no teu mercado; essa análise é gratuita.',
        ],
        cta: 'Pede a análise gratuita do teu mercado — WhatsApp +351 919 642 845 ou geral@matecno.pt.',
      },
    },
    produtos: {
      label: 'Produtos',
      aspects: [
        {
          label: 'HoraCerta',
          title: 'O produto, em produção',
          items: [
            'HoraCerta — plataforma de marcações online',
            'Multi-tenant: vários negócios, uma base, dados isolados',
            'PT · EN · ES com i18n nativo',
            'Lembretes automáticos em cada marcação',
            'Centenas de marcações geridas por mês',
          ],
        },
        {
          label: 'Stack',
          title: 'A engenharia por trás',
          items: [
            'Next.js — aplicação e frontend',
            'Prisma + Postgres — modelo de dados',
            'Isolamento de dados por tenant, desenhado de raiz',
            'Backends e integrações à medida',
            'Código nosso, ponta a ponta',
          ],
        },
        {
          label: 'A linha',
          title: 'A linha vai crescer',
          items: [
            'HoraCerta é o primeiro produto próprio',
            'Próximo passo: um produto para marketing',
            'Cada produto entra nesta página depois de estar em produção',
            'Sobre a mesma stack do trabalho para clientes',
          ],
        },
      ],
      page: {
        title: 'Produtos — HoraCerta e a linha Matecno | Coimbra',
        description:
          'HoraCerta: plataforma de marcações multi-tenant em produção — Next.js, Prisma, Postgres, PT/EN/ES. O software próprio da Matecno.',
        h1: 'Os nossos produtos',
        paras: [
          'Construímos software à medida para clientes — e lançamos os nossos próprios produtos. O primeiro é o HoraCerta: uma plataforma de marcações em produção, a gerir centenas de marcações por mês.',
          'É multi-tenant — vários negócios sobre a mesma base, cada um com os dados isolados — em três idiomas e com lembretes automáticos em cada marcação. Next.js na aplicação, Prisma e Postgres no modelo de dados, com o isolamento por tenant desenhado de raiz.',
          'A linha vai crescer — o próximo produto é para marketing — e cada um entra nesta página depois de estar em produção.',
          'O HoraCerta é também o nosso cartão de visita: antes de construirmos para ti, podes ver o que construímos para nós. Se tens um produto em mente, o diagnóstico gratuito de 30 minutos serve para o mapear — Coimbra ou remoto.',
        ],
        cta: 'Marca um diagnóstico gratuito — WhatsApp +351 919 642 845 ou geral@matecno.pt.',
      },
    },
    method: {
      label: 'Método',
      aspects: [
        {
          label: 'Fases',
          title: 'Do diagnóstico à entrega',
          items: [
            'Diagnóstico — 30 minutos sobre o processo e os sistemas que já existem, antes de qualquer orçamento',
            'Arquitetura — dados, fluxos e integrações, desenhados e validados contigo antes de escrever código',
            'Construção em ciclos curtos — vês o software a correr a cada fase',
            'Entrega — em produção, com deploy, testes e documentação',
          ],
        },
        {
          label: 'Entregáveis',
          title: 'O que fica contigo',
          items: [
            'Código-fonte num repositório teu',
            'Documentação: como corre, como se altera, como se faz deploy',
            'Acessos, ambiente, base de dados e deploy nas tuas mãos',
            'Fluxos, integrações e APIs prontos a escalar',
          ],
        },
        {
          label: 'Suporte',
          title: 'Depois de entregar',
          items: [
            'Suporte feito por quem escreveu o código',
            'Prazos de resposta combinados por escrito à partida',
            'Evoluções por fases, ao teu ritmo',
            'WhatsApp direto — +351 919 642 845',
          ],
        },
      ],
      page: {
        title: 'Método Matecno — do diagnóstico à entrega',
        description:
          'Como construímos software à medida: diagnóstico, arquitetura validada, construção em ciclos curtos e entrega em produção com o código no teu repositório.',
        h1: 'Como trabalhamos — do diagnóstico à entrega',
        paras: [
          'Quatro fases: diagnóstico, arquitetura, construção em ciclos curtos e entrega em produção. O orçamento aparece depois do diagnóstico — quando o âmbito está claro para os dois lados.',
          'A arquitetura — dados, fluxos, integrações — é desenhada e validada contigo antes da primeira linha de código. A construção corre em ciclos curtos, com o software a funcionar à vista a cada fase. No fim fica em produção, documentado, num repositório teu.',
          'Foi este método que produziu o HoraCerta: plataforma de marcações multi-tenant, em três idiomas, com lembretes automáticos, em produção sobre Next.js, Prisma e Postgres.',
          'Depois da entrega, o suporte é feito por quem escreveu o código, com prazos de resposta combinados por escrito. Evoluções entram por fases, ao teu ritmo. O diagnóstico marca-se por WhatsApp (+351 919 642 845) ou email (geral@matecno.pt).',
        ],
        cta: 'Começa pelo diagnóstico: 30 minutos, gratuito — WhatsApp +351 919 642 845 ou geral@matecno.pt.',
      },
    },
    about: {
      label: 'Sobre',
      aspects: [
        {
          label: 'Engenharia',
          title: 'Código escrito de raiz',
          items: [
            'Software à medida, do modelo de dados ao deploy',
            'Next.js, Node.js e TypeScript — app e backend',
            'Prisma e PostgreSQL — modelo de dados',
            'Python para automações e integrações',
            'Integrações com Stripe, Google Workspace, WhatsApp e email',
          ],
        },
        {
          label: 'Onde',
          title: 'Coimbra e remoto para o país',
          items: [
            'Base em Coimbra, região Centro presencial',
            'Remoto para todo o Portugal e além',
            'Acesso direto a quem constrói',
            'WhatsApp e email — resposta em menos de 24h',
            'Diagnóstico por chamada ou pessoalmente',
          ],
        },
        {
          label: 'Princípios',
          title: 'O que fica combinado',
          items: [
            'O código-fonte fica teu, num repositório teu',
            'Âmbito, prazos e suporte por escrito',
            'O HoraCerta em produção é a referência pública',
            'Um não claro quando não vale a pena construir',
          ],
        },
      ],
      page: {
        title: 'Sobre a Matecno — Engenharia de Software à Medida em Coimbra',
        description:
          'A Matecno escreve software de raiz — Next.js, Prisma, PostgreSQL — em Coimbra e remoto para todo o país. O HoraCerta, em produção, é a referência.',
        h1: 'Engenharia de software, feita em Coimbra',
        paras: [
          'A Matecno constrói software à medida — aplicações web, automações, websites, backends e integrações — em Next.js, Node.js, TypeScript, Prisma e PostgreSQL, com Python nas automações. Integramos Stripe, Google Workspace, email e WhatsApp. E construímos também produtos próprios.',
          'O HoraCerta é a referência: plataforma de marcações multi-tenant, três idiomas, lembretes automáticos, centenas de marcações geridas por mês, em produção sobre Next.js, Prisma e Postgres. Este site é outro exemplo — estático, trilingue, com o grafo 3D escrito de raiz.',
          'O código-fonte fica do cliente, num repositório do cliente. Âmbito, prazos e suporte ficam por escrito. E quando um projeto não vale a pena, dizemo-lo no diagnóstico — antes de custar dinheiro a alguém.',
          'Base em Coimbra, trabalho presencial na região Centro e remoto para todo o país. O primeiro passo é um diagnóstico gratuito de 30 minutos, por chamada ou pessoalmente.',
        ],
        cta: 'Fala connosco — WhatsApp +351 919 642 845 ou geral@matecno.pt.',
      },
    },
    contact: {
      label: 'Contacto',
      aspects: [
        {
          label: 'Direto',
          title: 'Linha direta',
          items: [
            'WhatsApp — +351 919 642 845',
            'mauro@matecno.pt — linha direta',
            'geral@matecno.pt',
            'Coimbra · remoto para todo o país',
            'Falas com quem constrói',
          ],
        },
        {
          label: 'Resposta',
          title: 'Resposta em menos de 24h',
          items: [
            'Email respondido em menos de 24h',
            'WhatsApp durante o dia de trabalho',
            'Português ou inglês',
            'Do primeiro contacto ao deploy, uma só conversa',
            'Responde quem escreve o código',
          ],
        },
        {
          label: 'Passo',
          title: 'Diagnóstico gratuito — 30 min',
          items: [
            '30 minutos, por chamada ou pessoalmente',
            'Percorremos o processo e os sistemas atuais',
            'Sais com âmbito e orçamento — ou com um não claro',
            'Marcas por WhatsApp ou email',
          ],
        },
      ],
      page: {
        title: 'Contacto — Diagnóstico Gratuito | Matecno Coimbra',
        description:
          'Fala direto com quem constrói o teu software. Diagnóstico gratuito de 30 minutos, resposta em menos de 24 horas.',
        h1: 'Vamos falar do teu projeto',
        paras: [
          'Falas diretamente com quem constrói — sem gestores de conta, sem camadas até uma resposta técnica.',
          'A primeira conversa são 30 minutos, gratuitos: percorremos o processo ou a ideia e os sistemas que já usas. No fim tens um orçamento com âmbito claro — ou um não fundamentado, na hora.',
          'Escreve por WhatsApp (+351 919 642 845) ou email (geral@matecno.pt). Respondemos em menos de 24 horas, em português ou inglês.',
        ],
        cta: 'WhatsApp +351 919 642 845 · geral@matecno.pt — resposta em menos de 24 horas',
      },
    },
  },
};
