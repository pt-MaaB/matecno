// ---------------------------------------------------------------------------
// i18n/pt.mjs — Portuguese (pt-PT) string pack. Default locale.
// Shape is shared by en.mjs and es.mjs. Merged with structure.mjs in site.mjs.
// Voice: plain, factual, showcase-first. No em-dashes in prose, no colon-frame
// openers, no negation-sell formulas. Em-dashes allowed only in <title> tags.
// ---------------------------------------------------------------------------
export default {
  seo: {
    titleHome: 'Matecno — Software à Medida em Coimbra',
    descHome:
      'Software à medida, automações, websites e backends para empresas. Código escrito de raiz com Next.js, Prisma e PostgreSQL, a mesma stack dos nossos produtos em produção.',
    jsonldDescription:
      'Construímos software à medida, automações, websites, backends e integrações para empresas, em Coimbra e remoto. Código escrito de raiz.',
    ownsDescription:
      'Plataforma de marcações multi-tenant, com três idiomas e lembretes automáticos. Em produção.',
    areaServedRemote: 'Remoto: Portugal e resto do mundo',
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
      { name: 'Websites', description: 'Websites rápidos, escritos à mão, com o SEO técnico resolvido desde o início.' },
      { name: 'Backends e integrações', description: 'Backends, APIs e integrações entre as ferramentas que já usas.' },
    ],
  },
  core: {
    tagline: 'Software à medida para empresas. Produtos próprios em produção.',
  },
  ui: {
    navAria: 'Principal',
    back: 'voltar ao sistema',
    hint: 'arrasta para orbitar · scroll para zoom · clica num nó para explorar',
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
        body: 'Escreve por WhatsApp ou email. Quem responde é o Mauro ou alguém da equipa.',
      },
      {
        title: 'Diagnóstico gratuito de 30 min',
        body: 'Por chamada ou pessoalmente. Vemos contigo o processo em causa e os sistemas que já usas.',
      },
      {
        title: 'Orçamento claro, ou um não honesto',
        body: 'Se fizer sentido avançar, sais com âmbito, fases e preço. Se não fizer, explicamos porquê.',
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
            'Autenticação, pagamentos, faturação e notificações',
            'O código-fonte fica teu',
          ],
        },
        {
          label: 'Automação',
          title: 'Automação de processos',
          desc: 'Processos repetitivos passam a correr sem intervenção, com registo e alertas.',
          items: [
            'Faturação, emails, relatórios e sincronização entre sistemas',
            'Execução agendada ou por eventos',
            'Logs e alertas quando algo falha',
          ],
        },
        {
          label: 'Websites',
          title: 'Websites e plataformas',
          desc: 'Sites rápidos, escritos à mão, com o SEO técnico resolvido desde o início.',
          items: [
            'Páginas estáticas e leves, como este site',
            'Três idiomas com i18n nativo',
            'Schema, hreflang e Core Web Vitals',
          ],
        },
        {
          label: 'Backends',
          title: 'Backends, APIs e integrações',
          desc: 'APIs, integrações e a engenharia que liga os sistemas que já usas.',
          items: [
            'APIs REST e webhooks',
            'Stripe, Google Workspace, WhatsApp e email',
            'Filas, crons e sincronização de dados',
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
          'Software à medida, automação de processos, websites, backends e integrações, e ainda leads B2B e dados. Código escrito de raiz com Next.js, Prisma e PostgreSQL.',
        h1: 'O que construímos',
        paras: [
          'Trabalhamos em cinco áreas: software à medida, automação de processos, websites, backends e dados B2B. Usamos a mesma stack em tudo o que fazemos, incluindo nos nossos próprios produtos.',
        ],
        cta: 'Diagnóstico gratuito de 30 minutos. WhatsApp +351 919 642 845 ou geral@matecno.pt.',
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
            'Enriquecimento e limpeza de listas existentes',
            'Recolha de dados públicos à medida',
            'Fluxo mensal de leads novas',
            'Segmentação por setor e região',
          ],
        },
        {
          label: 'Cada lead',
          title: 'Cada contacto, completo',
          items: [
            'Nome e cargo do decisor',
            'Email verificado antes da entrega',
            'Telefone direto',
            'Sem duplicados',
            'Entregue em folha de cálculo, relatório ou feed',
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
          'Leads B2B verificadas com nome, cargo, email e telefone do decisor. Enriquecimento de dados e inteligência de mercado. Fontes públicas, RGPD.',
        h1: 'Leads B2B e dados de mercado',
        paras: [
          'Construímos sistemas que recolhem, cruzam e verificam dados de empresas. São os mesmos sistemas que usamos para entregar leads B2B qualificadas e estudos de mercado a clientes.',
          'Na geração de leads entregamos contactos segmentados por setor e região, com nome e cargo do decisor, email verificado e telefone direto. Se já tens uma lista, tratamos do enriquecimento e da limpeza, e devolvemos registos completos, sem duplicados e com emails verificados.',
          'Também recolhemos dados públicos à medida, como preços da concorrência, listagens e monitorização contínua, entregues em folha de cálculo, relatório ou feed automático. Para quem precisa de fluxo regular, definimos um perfil de cliente ideal e entregamos leads novas todos os meses.',
          'Trabalhamos apenas com fontes públicas e em conformidade com o RGPD. Não compramos listas nem enviamos spam. Antes de avançar, verificamos gratuitamente se existe volume suficiente no teu mercado.',
        ],
        cta: 'Pede uma análise gratuita do teu mercado. WhatsApp +351 919 642 845 ou geral@matecno.pt.',
      },
    },
    produtos: {
      label: 'Produtos',
      aspects: [
        {
          label: 'HoraCerta',
          title: 'O produto em produção',
          items: [
            'HoraCerta, plataforma de marcações online',
            'Multi-tenant, com dados isolados por negócio',
            'Três idiomas com i18n nativo',
            'Lembretes automáticos em cada marcação',
            'Centenas de marcações geridas por mês',
          ],
        },
        {
          label: 'Stack',
          title: 'A engenharia por trás',
          items: [
            'Next.js na aplicação e no frontend',
            'Prisma e Postgres no modelo de dados',
            'Isolamento de dados por tenant desenhado de raiz',
            'Backends e integrações à medida',
            'Código nosso de ponta a ponta',
          ],
        },
        {
          label: 'A linha',
          title: 'A linha vai crescer',
          items: [
            'O HoraCerta é o primeiro produto próprio',
            'O próximo produto será para marketing',
            'Cada produto entra nesta página quando está em produção',
            'A stack é a mesma do trabalho para clientes',
          ],
        },
      ],
      page: {
        title: 'Produtos — HoraCerta e a linha Matecno | Coimbra',
        description:
          'HoraCerta, plataforma de marcações multi-tenant em produção com Next.js, Prisma e Postgres, em três idiomas. O software próprio da Matecno.',
        h1: 'Os nossos produtos',
        paras: [
          'Além do trabalho para clientes, lançamos os nossos próprios produtos. O primeiro é o HoraCerta, uma plataforma de marcações em produção que gere centenas de marcações por mês.',
          'É multi-tenant, com vários negócios sobre a mesma base e dados isolados por tenant, em três idiomas e com lembretes automáticos em cada marcação. A aplicação corre em Next.js, com Prisma e Postgres no modelo de dados.',
          'A linha vai crescer. O próximo produto será para marketing, e cada um entra nesta página quando estiver em produção.',
          'O HoraCerta é também o nosso cartão de visita. É a forma mais direta de avaliar o nosso trabalho antes de nos contratar. Se tens um produto em mente, o diagnóstico gratuito de 30 minutos serve para o mapear, em Coimbra ou remoto.',
        ],
        cta: 'Marca um diagnóstico gratuito. WhatsApp +351 919 642 845 ou geral@matecno.pt.',
      },
    },
    method: {
      label: 'Método',
      aspects: [
        {
          label: 'Fases',
          title: 'Do diagnóstico à entrega',
          items: [
            'Diagnóstico de 30 minutos sobre o processo e os sistemas atuais, antes de qualquer orçamento',
            'Arquitetura de dados, fluxos e integrações, validada contigo antes de escrevermos código',
            'Construção em ciclos curtos, com o software a correr em cada fase',
            'Entrega em produção, com deploy, testes e documentação',
          ],
        },
        {
          label: 'Entregáveis',
          title: 'O que fica contigo',
          items: [
            'Código-fonte num repositório teu',
            'Documentação de como corre, como se altera e como se faz deploy',
            'Acessos, ambiente e base de dados nas tuas mãos',
            'Fluxos, integrações e APIs prontos a escalar',
          ],
        },
        {
          label: 'Suporte',
          title: 'Depois de entregar',
          items: [
            'Suporte dado por quem escreveu o código',
            'Prazos de resposta combinados por escrito',
            'Evoluções por fases, ao teu ritmo',
            'WhatsApp direto: +351 919 642 845',
          ],
        },
      ],
      page: {
        title: 'Método Matecno — do diagnóstico à entrega',
        description:
          'Como construímos software à medida: diagnóstico, arquitetura validada, construção em ciclos curtos e entrega em produção com o código no teu repositório.',
        h1: 'Como trabalhamos, do diagnóstico à entrega',
        paras: [
          'São quatro fases: diagnóstico, arquitetura, construção em ciclos curtos e entrega em produção. O orçamento aparece depois do diagnóstico, quando o âmbito está claro para os dois lados.',
          'A arquitetura de dados, fluxos e integrações é desenhada e validada contigo antes da primeira linha de código. A construção avança em ciclos curtos e vais vendo o software a correr em cada fase. No fim fica em produção, documentado, num repositório teu.',
          'Foi este método que produziu o HoraCerta, a nossa plataforma de marcações multi-tenant em três idiomas, hoje em produção sobre Next.js, Prisma e Postgres.',
          'Depois da entrega, o suporte é dado por quem escreveu o código, com prazos de resposta combinados por escrito. As evoluções entram por fases, ao teu ritmo. Para marcar o diagnóstico, escreve para o +351 919 642 845 (WhatsApp) ou geral@matecno.pt.',
        ],
        cta: 'O diagnóstico são 30 minutos, gratuitos. WhatsApp +351 919 642 845 ou geral@matecno.pt.',
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
            'Next.js, Node.js e TypeScript na app e no backend',
            'Prisma e PostgreSQL no modelo de dados',
            'Python nas automações e integrações',
            'Stripe, Google Workspace, WhatsApp e email nas integrações',
          ],
        },
        {
          label: 'Onde',
          title: 'Coimbra e remoto para o país',
          items: [
            'Base em Coimbra, com presença na região Centro',
            'Remoto para todo o país',
            'Acesso direto a quem constrói',
            'Resposta em menos de 24h por WhatsApp e email',
            'Diagnóstico por chamada ou pessoalmente',
          ],
        },
        {
          label: 'Princípios',
          title: 'O que fica combinado',
          items: [
            'O código-fonte fica teu, num repositório teu',
            'Âmbito, prazos e suporte por escrito',
            'O HoraCerta em produção como referência pública',
            'Um não claro quando o projeto não se justifica',
          ],
        },
      ],
      page: {
        title: 'Sobre a Matecno — Engenharia de Software à Medida em Coimbra',
        description:
          'A Matecno escreve software de raiz com Next.js, Prisma e PostgreSQL, em Coimbra e remoto para todo o país. O nosso produto HoraCerta está em produção.',
        h1: 'Engenharia de software feita em Coimbra',
        paras: [
          'A Matecno desenvolve aplicações web, automações, websites, backends e integrações. Trabalhamos com Next.js, Node.js, TypeScript, Prisma e PostgreSQL, e usamos Python nas automações. Ligamos os sistemas a Stripe, Google Workspace, email e WhatsApp. Além do trabalho para clientes, temos produtos próprios.',
          'O nosso principal produto é o HoraCerta, uma plataforma de marcações multi-tenant em três idiomas, com lembretes automáticos, que gere centenas de marcações por mês em produção. Este site também é trabalho nosso, incluindo o grafo 3D da página inicial.',
          'O código-fonte fica no repositório do cliente. Âmbito, prazos e suporte ficam definidos por escrito antes de começarmos. Quando achamos que um projeto não se justifica, dizemos isso logo no diagnóstico.',
          'Estamos em Coimbra e trabalhamos presencialmente na região Centro e remoto para o resto do país. O primeiro passo é um diagnóstico gratuito de 30 minutos, por chamada ou pessoalmente.',
        ],
        cta: 'Fala connosco pelo WhatsApp +351 919 642 845 ou por geral@matecno.pt.',
      },
    },
    contact: {
      label: 'Contacto',
      aspects: [
        {
          label: 'Direto',
          title: 'Linha direta',
          items: [
            'WhatsApp: +351 919 642 845',
            'mauro@matecno.pt para contacto direto',
            'geral@matecno.pt',
            'Coimbra, e remoto para todo o país',
            'Falas com quem constrói',
          ],
        },
        {
          label: 'Resposta',
          title: 'Resposta em menos de 24h',
          items: [
            'Email respondido em menos de 24h',
            'WhatsApp durante o horário de trabalho',
            'Português ou inglês',
            'Uma só conversa, do primeiro contacto ao deploy',
            'Responde quem escreve o código',
          ],
        },
        {
          label: 'Passo',
          title: 'Diagnóstico gratuito de 30 min',
          items: [
            '30 minutos, por chamada ou pessoalmente',
            'Vemos o processo e os sistemas atuais',
            'Sais com âmbito e orçamento, ou com um não claro',
            'Marca por WhatsApp ou email',
          ],
        },
      ],
      page: {
        title: 'Contacto — Diagnóstico Gratuito | Matecno Coimbra',
        description:
          'Fala direto com quem constrói o teu software. Diagnóstico gratuito de 30 minutos e resposta em menos de 24 horas.',
        h1: 'Vamos falar do teu projeto',
        paras: [
          'Falas diretamente com quem constrói, sem gestores de conta pelo meio.',
          'A primeira conversa são 30 minutos, gratuitos. Vemos o processo ou a ideia e os sistemas que já usas. No fim tens um orçamento com âmbito definido, ou um não com explicação.',
          'Escreve por WhatsApp (+351 919 642 845) ou email (geral@matecno.pt). Respondemos em menos de 24 horas, em português ou inglês.',
        ],
        cta: 'WhatsApp +351 919 642 845 · geral@matecno.pt · resposta em menos de 24 horas',
      },
    },
  },
};
