// ---------------------------------------------------------------------------
// site.mjs — single source of truth for the MATECNO graph-explorer experience.
//
// Consumed by <GraphExplorer /> via a `content` prop assembled from these
// exports. The client script reads the serialised JSON (see GraphExplorer.astro)
// and builds the whole graph from CORE + HUBS — nothing is hardcoded in the
// component. The server-rendered nav / sr-only / <noscript> safety-net and the
// crawlable per-route pages are also built from these same exports, so crawlers
// and no-JS users get the full content + link graph.
//
// Content (aspects + page copy) and SEO/JSON-LD are authored real content,
// produced by the copy + SEO agents. Colours and positions are ported verbatim
// from the locked V14 prototype (matecno-v14-dissect.html). Do NOT introduce
// force-directed physics — the layout is hand-placed here on purpose.
// ---------------------------------------------------------------------------

// Route map (key -> route). Kept next to HUBS so nav + graph stay in sync.
export const ROUTES = {
  serv: '/servicos',
  produtos: '/produtos',
  method: '/metodo',
  about: '/sobre',
  contact: '/contacto',
};

// Brand colours per hub (hex). core is the dark MATECNO centre.
export const COLORS = {
  serv: '#2f6fe0',
  produtos: '#12a06a',
  method: '#7a52e0',
  about: '#c07d16',
  contact: '#e5412a',
  core: '#1b1b1e',
};

// ProfessionalService structured data (from the content file's seo.jsonld).
const JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  additionalType: 'https://schema.org/SoftwareCompany',
  '@id': 'https://matecno.pt/#organization',
  name: 'Matecno',
  alternateName: 'Matecno IT Services',
  description:
    'Construímos software à medida, automações, websites, backends e integrações para empresas, em Coimbra e remoto. Código escrito de raiz, a resolver problemas reais.',
  url: 'https://matecno.pt',
  email: 'geral@matecno.pt',
  telephone: '+351919642845',
  priceRange: '€€',
  image: 'https://matecno.pt/og.png',
  logo: 'https://matecno.pt/logo.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Coimbra',
    addressRegion: 'Coimbra',
    addressCountry: 'PT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.2033,
    longitude: -8.4103,
  },
  areaServed: [
    { '@type': 'Country', name: 'Portugal' },
    { '@type': 'AdministrativeArea', name: 'Remoto — Portugal e resto do mundo' },
  ],
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
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Software à medida',
        description: 'Aplicações web e plataformas construídas de raiz para o teu negócio.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Automações',
        description: 'Automatização de tarefas e fluxos de trabalho para PMEs.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Websites',
        description: 'Websites e páginas rápidas, feitas à mão — sem templates.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Backends e integrações',
        description: 'Backends, APIs e integrações entre as ferramentas que já usas.',
      },
    },
  ],
  owns: {
    '@type': 'SoftwareApplication',
    name: 'HoraCerta',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'Plataforma de marcações multi-tenant, com três idiomas e lembretes automáticos. Em produção.',
  },
  founder: {
    '@type': 'Person',
    name: 'Mauro Abrantes',
  },
  sameAs: [],
};

export const SEO = {
  title: 'Matecno — Software à Medida em Coimbra',
  description:
    'Construímos software à medida, automações, websites e backends para empresas. Código escrito de raiz, stack moderna, integrações reais. Diagnóstico gratuito.',
  jsonld: JSONLD,
};

export const CORE = {
  label: 'MATECNO',
  route: '/',
  tagline: 'Construímos software à medida para empresas — e criamos os nossos próprios produtos.',
};

// The five hubs. Each hub carries:
//  - pos: hand-placed 3D coordinates from V14 (do not re-solve)
//  - aspects: dissect cards (label + title + items). Aspect labels also become
//    the primary satellite-node labels around the hub.
//  - page: full-page copy for the safety-net + crawlable per-route pages.
export const HUBS = [
  {
    key: 'serv',
    route: ROUTES.serv,
    label: 'Serviços',
    color: COLORS.serv,
    pos: [-2.9, 0.9, 0.4],
    aspects: [
      {
        label: 'Construímos',
        title: 'O que construímos',
        items: [
          'Software à medida — web apps multi-tenant que aguentam utilizadores reais',
          'Automações que eliminam trabalho repetitivo de processos inteiros',
          'Websites e plataformas rápidos, escritos de raiz',
          'Backends, APIs e painéis de gestão robustos',
          'Integrações que ligam os sistemas que já usas',
        ],
      },
      {
        label: 'Stack',
        title: 'Tecnologias que dominamos',
        items: [
          'Next.js e React — frontend e aplicações',
          'Node.js e TypeScript — backend e APIs',
          'PostgreSQL e Prisma — modelo de dados',
          'Python — automações e processamento',
          'i18n nativo — multi-idioma (PT · EN · ES)',
        ],
      },
      {
        label: 'Integrações',
        title: 'Ligamos ao que já usas',
        items: [
          'Stripe — pagamentos e subscrições',
          'Google Workspace e Calendar',
          'Email transacional e webmail',
          'WhatsApp — notificações e lembretes',
          'Webhooks e APIs REST — sistema a sistema',
        ],
      },
    ],
    page: {
      title: 'Serviços — Software à Medida em Coimbra | Matecno',
      description:
        'Software à medida, automações, websites, backends e integrações para empresas. Escrevemos o código de raiz, com stack moderna e integrações reais. Diagnóstico gratuito.',
      h1: 'O que a Matecno constrói',
      paras: [
        'Construímos o que o software de prateleira não resolve: aplicações à medida, automações que eliminam trabalho repetitivo, websites e plataformas, backends robustos e integrações entre os sistemas que já usas. Escrevemos o código de raiz — não montamos templates.',
        'Dominamos uma stack moderna e comprovada: Next.js e React no frontend, Node.js e TypeScript no backend, PostgreSQL e Prisma nos dados, e Python para automações. Ligamos tudo a Stripe, Google Workspace, email e WhatsApp, com APIs REST e webhooks a pôr os teus sistemas a falar entre si.',
        'A prova é a HoraCerta: plataforma de marcações multi-tenant, em três idiomas e com lembretes automáticos, em produção sobre Next.js, Prisma e Postgres. Software real, a correr, a resolver um problema de negócio concreto — não uma demonstração.',
        'Tens um processo que devia ser automático, uma ideia para virar produto, ou sistemas que não falam uns com os outros? Agenda um diagnóstico gratuito — 30 minutos onde mapeamos o que dói e dizemos, com honestidade, se vale a pena construir.',
      ],
      cta: 'Agenda um diagnóstico gratuito: WhatsApp +351 919 642 845 ou geral@matecno.pt — 30 min, mapeamos o processo e orçamentamos sem compromisso.',
    },
  },
  {
    key: 'produtos',
    route: ROUTES.produtos,
    label: 'Produtos',
    color: COLORS.produtos,
    pos: [2.9, 1.1, -0.7],
    aspects: [
      {
        label: 'HoraCerta',
        title: 'O produto, em produção',
        items: [
          'HoraCerta — plataforma de marcações a correr todos os dias',
          'Multi-tenant: vários negócios, uma base, dados isolados',
          'PT · EN · ES com i18n nativo',
          'Lembretes automáticos em cada marcação',
          'Utilizadores e agendamentos reais — não é demo',
        ],
      },
      {
        label: 'Stack',
        title: 'A engenharia por trás',
        items: [
          'Next.js — aplicação e frontend',
          'Prisma + Postgres — modelo de dados sólido',
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
          'Cada produto entra aqui só quando corre a sério',
          'Mostramos o que já funciona, não promessas',
          'Software que aguenta produção — zero vaporware',
        ],
      },
    ],
    page: {
      title: 'Produtos — HoraCerta e a linha Matecno | Coimbra',
      description:
        'HoraCerta: plataforma de marcações multi-tenant em produção (Next.js, Prisma, Postgres, PT/EN/ES). A prova de que a Matecno constrói software que aguenta utilizadores reais.',
      h1: 'Os nossos produtos',
      paras: [
        'Construímos software à medida para clientes — e lançamos os nossos próprios produtos. O primeiro é o HoraCerta: uma plataforma de marcações que gere agendamentos reais, hoje, em produção.',
        'É multi-tenant — vários negócios sobre a mesma base, cada um com os seus dados isolados — em três idiomas (PT, EN, ES) e com lembretes automáticos em cada marcação. Construído à medida sobre Next.js, Prisma e Postgres. A prova de que o que fazemos aguenta utilizadores reais, e não apenas uma demo.',
        'O HoraCerta abre uma linha que vai crescer, a começar por um produto para marketing. Cada produto é construído com o mesmo rigor e só entra aqui quando corre a sério. Mostramos o que já funciona — sem vaporware.',
        'A mesma engenharia que construiu o HoraCerta pode construir o teu produto. Num diagnóstico gratuito de 30 minutos mapeamos a ideia e dizemos-te, sem rodeios, se vale a pena construí-la — orçamento sem compromisso. Coimbra ou remoto, com acesso direto e sem intermediários.',
      ],
      cta: 'Agenda o teu diagnóstico gratuito: WhatsApp +351 919 642 845 ou geral@matecno.pt.',
    },
  },
  {
    key: 'method',
    route: ROUTES.method,
    label: 'Método',
    color: COLORS.method,
    pos: [-1.6, -2.7, 1.1],
    aspects: [
      {
        label: 'Fases',
        title: 'Do diagnóstico à entrega',
        items: [
          'Diagnóstico gratuito — 30 min a mapear o processo que dói, antes de qualquer orçamento',
          'Arquitetura — desenhamos dados, fluxos e integrações, e validamos contigo antes de escrever código',
          'Construção em ciclos curtos — vês o software a correr a cada fase, sem meses de silêncio',
          'Entrega — em produção, com deploy, testes e documentação',
        ],
      },
      {
        label: 'Entregáveis',
        title: 'O que fica contigo',
        items: [
          'Código-fonte teu, num repositório teu — zero lock-in de template',
          'Documentação de como corre, como se mexe e como se faz deploy',
          'Acessos, ambiente, base de dados e deploy nas tuas mãos',
          'Fluxos, integrações e APIs prontos a usar e a escalar',
        ],
      },
      {
        label: 'Suporte',
        title: 'Depois de entregar',
        items: [
          'Suporte direto e responsável por quem domina o teu código',
          'Correções e prazos de resposta combinados por escrito à partida',
          'Evoluções por fases, ao teu ritmo e orçamento',
          'WhatsApp direto — +351 919 642 845',
        ],
      },
    ],
    page: {
      title: 'Método Matecno — do diagnóstico à entrega',
      description:
        'Como construímos software à medida: diagnóstico gratuito, arquitetura, construção em ciclos e entrega com código teu. A HoraCerta nasceu deste método. Agenda o teu.',
      h1: 'Como trabalhamos — do diagnóstico à entrega',
      paras: [
        'Não vendemos horas nem templates. Começamos por um diagnóstico gratuito de 30 minutos: mapeamos o processo que te custa tempo ou dinheiro e dizemos-te com honestidade se vale a pena construir. Só depois falamos de âmbito e preço — sem orçamento no ar.',
        'Desenhamos a arquitetura — dados, fluxos, integrações — e validamo-la contigo antes da primeira linha de código. Depois construímos em ciclos curtos, com o software a correr à vista, para validares cedo em vez de esperares por uma entrega-surpresa. No fim fica em produção, documentado, e o código é teu: sem depender de ninguém para lhe mexer.',
        'Foi este método que produziu a HoraCerta — a nossa plataforma de marcações multi-tenant, em três idiomas e com lembretes automáticos, hoje em produção sobre Next.js, Prisma e Postgres. Não é um slide: é software real, a aguentar utilizadores reais todos os dias. Construímos o teu com o mesmo rigor de engenharia.',
        'O suporte é direto e responsável: falas diretamente com quem domina o código, com correções e evoluções combinadas por escrito à partida. E a primeira fase, o diagnóstico, não te custa nada: 30 minutos, sem compromisso, para mapearmos juntos o que vale a pena construir. Manda mensagem para +351 919 642 845 (WhatsApp) ou geral@matecno.pt.',
      ],
      cta: 'Agenda o teu diagnóstico gratuito: WhatsApp +351 919 642 845 ou geral@matecno.pt — 30 min, sem compromisso.',
    },
  },
  {
    key: 'about',
    route: ROUTES.about,
    label: 'Sobre',
    color: COLORS.about,
    pos: [2.2, -1.8, 1.7],
    aspects: [
      {
        label: 'Engenharia',
        title: 'Código escrito de raiz',
        items: [
          'Software à medida, do modelo de dados ao deploy',
          'Next.js, Node.js e TypeScript — app e backend',
          'Prisma e PostgreSQL — dados sólidos e escaláveis',
          'Python para automações e integrações',
          'Sem templates: cada linha construída para o problema',
        ],
      },
      {
        label: 'Onde',
        title: 'Coimbra e remoto para o país',
        items: [
          'Base em Coimbra, região Centro presencial',
          'Remoto para todo o Portugal e além',
          'Acesso direto, sem intermediários',
          'WhatsApp e email — resposta em menos de 24h',
          'Diagnóstico por chamada ou pessoalmente',
        ],
      },
      {
        label: 'Princípios',
        title: 'Só prometemos o que entregamos',
        items: [
          'Zero vaporware: o HoraCerta está em produção',
          'O código-fonte fica teu, sem lock-in',
          'Honestidade técnica, do orçamento à entrega',
          'Dizemos que não quando não vale a pena construir',
          'Falamos do que corre a sério, não de slides',
        ],
      },
    ],
    page: {
      title: 'Sobre a Matecno — Engenharia de Software à Medida em Coimbra',
      description:
        'A Matecno escreve software de raiz — Next.js, Prisma, PostgreSQL — em Coimbra e remoto para todo o país. O HoraCerta está em produção como prova. Diagnóstico gratuito de 30 min.',
      h1: 'Escrevemos o software que o teu negócio precisa',
      paras: [
        'A Matecno constrói software à medida: aplicações web, automações, websites, backends e integrações. Escrevemos o código de raiz — não compramos o template — em Next.js, Node.js, TypeScript, Prisma e PostgreSQL, com Python para automações, e ligamos tudo a Stripe, Google Workspace, email e WhatsApp. E não construímos só para clientes: lançamos também os nossos próprios produtos.',
        'A prova está em produção. O HoraCerta é a nossa plataforma de marcações multi-tenant — vários negócios sobre a mesma base, cada um com os seus dados isolados — em três idiomas (PT, EN, ES) e com lembretes automáticos, a gerir agendamentos reais todos os dias sobre Next.js, Prisma e Postgres. Não é uma demonstração: é software a aguentar utilizadores, com o mesmo rigor com que construímos para clientes.',
        'Guiamo-nos por princípios simples: escrevemos de raiz e o código-fonte fica teu, sem lock-in de fornecedor nem de template; só prometemos o que já sabemos entregar; e dizemos-te com honestidade quando algo não vale a pena construir. Falamos do que corre a sério — não de slides nem de vaporware.',
        'Estamos em Coimbra e trabalhamos remoto para o país inteiro, com acesso direto e sem intermediários. O primeiro passo é um diagnóstico gratuito de 30 minutos: mapeamos o processo que te dói e dizemos, sem rodeios, se vale a pena construir — com orçamento sem compromisso.',
      ],
      cta: 'Agenda o teu diagnóstico gratuito: WhatsApp +351 919 642 845 ou geral@matecno.pt — 30 min, mapeamos o problema e dizemos com honestidade se vale a pena construir.',
    },
  },
  {
    key: 'contact',
    route: ROUTES.contact,
    label: 'Contacto',
    color: COLORS.contact,
    pos: [0.7, 2.8, -1.6],
    aspects: [
      {
        label: 'Direto',
        title: 'Linha direta',
        items: [
          'WhatsApp — +351 919 642 845',
          'mauro@matecno.pt — linha direta',
          'geral@matecno.pt',
          'Coimbra · remoto para todo o país',
          'Sem intermediários entre ti e o código',
        ],
      },
      {
        label: 'Resposta',
        title: 'Resposta em menos de 24h',
        items: [
          'Email respondido em menos de 24h',
          'WhatsApp durante o dia de trabalho',
          'Português ou inglês, como preferires',
          'Do primeiro contacto ao deploy, uma só conversa',
          'Respondemos com quem domina a stack',
        ],
      },
      {
        label: 'Passo',
        title: 'Diagnóstico gratuito — 30 min',
        items: [
          'Mapeamos o processo que te custa tempo',
          'Dizemos com honestidade se vale a pena construir',
          'Orçamento claro, sem compromisso',
          'Se não fizer sentido, dizemos já',
          'Marcas por WhatsApp ou email',
        ],
      },
    ],
    page: {
      title: 'Contacto — Diagnóstico Gratuito | Matecno Coimbra',
      description:
        'Fala direto com quem constrói o teu software. Diagnóstico gratuito de 30 min: mapeamos o processo que dói e dizemos com honestidade se vale a pena construir. Resposta em menos de 24h.',
      h1: 'Vamos falar do teu projeto',
      paras: [
        'Falas diretamente com a engenharia — sem intermediários, sem camadas até uma resposta técnica. Uma linha direta com quem domina a tecnologia e mete as mãos no código.',
        'O primeiro passo é uma conversa de 30 minutos, gratuita. Mapeamos o processo que te custa tempo ou dinheiro e dizemos com honestidade se vale a pena construir. Se não fizer sentido, dizemos já e poupamos-te o resto. Se fizer, sais com um orçamento claro e sem compromisso.',
        'A HoraCerta — a nossa plataforma de marcações multi-tenant, em três idiomas e em produção sobre Next.js, Prisma e Postgres — nasceu exatamente assim: de um problema concreto e uma conversa direta. Software real, a aguentar utilizadores todos os dias. O teu projeto pode ser o próximo.',
        'Marca o diagnóstico agora: WhatsApp para +351 919 642 845 ou email para geral@matecno.pt. Respondemos em menos de 24 horas, em português ou inglês.',
      ],
      cta: 'Agendar diagnóstico gratuito — WhatsApp +351 919 642 845 ou geral@matecno.pt',
    },
  },
];

// Convenience: the full content object a page passes to <GraphExplorer content={...} />.
export const CONTENT = { seo: SEO, core: CORE, hubs: HUBS, colors: COLORS };

export default CONTENT;
