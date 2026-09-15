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
    tagline: 'O teu concorrente aparece primeiro no Google. Nós tratamos disso.',
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
    waMessage: 'Olá, gostaria de marcar a minha avaliação gratuita',
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
          desc: 'Plataformas web e ferramentas internas feitas à medida para escalar a tua operação.',
          items: [
            { k: 'O que construímos', v: 'Painéis de gestão, portais de clientes e aplicações SaaS multi-tenant.' },
            { k: 'Como entregamos', v: 'Código-fonte 100% teu, infraestrutura escalável e autenticação/pagamentos integrados.' },
            { k: 'Vantagem', v: 'Total controlo sobre o produto, sem licenças de terceiros nem limitações de software pronto.' },
          ],
        },
        {
          label: 'Automação',
          title: 'Automação de processos',
          desc: 'Elimina trabalho manual repetitivo entre as ferramentas que a tua equipa já usa.',
          items: [
            { k: 'O que automatizamos', v: 'Sincronização de dados, emissão de faturação, envios de email e relatórios automáticos.' },
            { k: 'Infraestrutura', v: 'Execução agendada ou por eventos, com logs de auditoria e alertas instantâneos se algo falhar.' },
            { k: 'Vantagem', v: 'Processos a correr 24/7 com zero erro humano.' },
          ],
        },
        {
          label: 'Websites',
          title: 'Websites e plataformas',
          desc: 'Sites ultrarrápidos desenvolvidos à mão para máxima performance e visibilidade.',
          items: [
            { k: 'O que inclui', v: 'Arquitetura estática leve, i18n nativo (multi-idioma), Schema e Core Web Vitals otimizados.' },
            { k: 'Vantagem', v: 'Ranking superior no Google e carregamento instantâneo, sem dependência de plugins pesados.' },
          ],
        },
        {
          label: 'Backends',
          title: 'Backends, APIs e integrações',
          desc: 'Ligamos os sistemas que já usas para que os dados fluam sem trabalho manual.',
          items: [
            { k: 'O que integramos', v: 'Stripe, Google Workspace, WhatsApp, email e os teus ERP/CRM, via APIs REST e webhooks.' },
            { k: 'Como entregamos', v: 'Filas, crons e sincronização com retries, monitorização e documentação da API.' },
            { k: 'Vantagem', v: 'Um único fluxo de dados fiável entre ferramentas, sem exportar e importar folhas à mão.' },
          ],
        },
        {
          label: 'Leads & Dados',
          title: 'Leads & Dados',
          desc: 'Listas B2B verificadas e inteligência de mercado para a tua equipa comercial.',
          items: [
            { k: 'O que entregamos', v: 'Leads B2B verificadas, enriquecimento e limpeza de listas, recolha de dados públicos à medida.' },
            { k: 'Como entregamos', v: 'Email verificado antes da entrega, telefone direto, sem duplicados, fluxo mensal segmentado por setor e região.' },
            { k: 'Vantagem', v: 'A tua equipa fala com quem interessa, em vez de procurar contactos.' },
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
          'Trabalhamos em cinco áreas: software à medida, automação de processos, websites, backends e integrações, e leads B2B. A mesma stack em tudo o que fazemos, incluindo nos nossos próprios produtos.',
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
          desc: 'Leads B2B verificadas, entregues todos os meses e segmentadas para a tua equipa comercial.',
          items: [
            { k: 'O que entregamos', v: 'Geração de leads B2B qualificadas, enriquecimento e limpeza de listas existentes, recolha de dados públicos à medida.' },
            { k: 'Como entregamos', v: 'Fluxo mensal de leads novas, segmentado por setor e região, no formato que usas: folha de cálculo, relatório ou feed.' },
            { k: 'Vantagem', v: 'A equipa começa cada mês com contactos novos e qualificados, sem tempo perdido a procurar.' },
          ],
        },
        {
          label: 'Cada lead',
          title: 'Cada contacto, completo',
          desc: 'Um contacto só entra na lista quando dá para ligar e escrever hoje.',
          items: [
            { k: 'O que inclui', v: 'Nome e cargo do decisor, telefone direto e email verificado antes da entrega.' },
            { k: 'Como garantimos', v: 'Verificação de email antes de entregar e desduplicação em toda a lista.' },
            { k: 'Vantagem', v: 'Zero bounces e zero chamadas repetidas para o mesmo negócio.' },
          ],
        },
        {
          label: 'Confiança',
          title: 'Fontes públicas, RGPD',
          desc: 'Dados de fontes públicas, tratados dentro do RGPD, sem listas compradas.',
          items: [
            { k: 'De onde vêm', v: 'Só fontes públicas; sem listas compradas nem revenda de contactos.' },
            { k: 'Como trabalhamos', v: 'Conformidade com o RGPD e uma análise de mercado gratuita antes de avançar.' },
            { k: 'Vantagem', v: 'Contactas com legitimidade e sabes o tamanho do mercado antes de pagar.' },
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
          desc: 'Plataforma de marcações online, em produção, com negócios reais a usá-la todos os dias.',
          items: [
            { k: 'O que é', v: 'Marcações online multi-tenant, com dados isolados por negócio, lembretes automáticos e três idiomas nativos.' },
            { k: 'Em produção', v: 'Centenas de marcações geridas por mês.' },
            { k: 'Vantagem', v: 'Vês o que construímos a correr antes de nos confiares o teu projeto.' },
          ],
        },
        {
          label: 'Stack',
          title: 'A engenharia por trás',
          desc: 'A mesma stack que usamos nos projetos para clientes, a provar-se num produto nosso.',
          items: [
            { k: 'O que usamos', v: 'Next.js na aplicação, Prisma e PostgreSQL no modelo de dados, backends e integrações à medida.' },
            { k: 'Como está feito', v: 'Isolamento de dados por tenant desenhado de raiz; código nosso de ponta a ponta.' },
            { k: 'Vantagem', v: 'Nenhuma decisão técnica no teu projeto é teoria: já a tomámos num produto em produção.' },
          ],
        },
        {
          label: 'A linha',
          title: 'A linha vai crescer',
          desc: 'O HoraCerta é o primeiro; cada produto seguinte entra aqui quando está em produção.',
          items: [
            { k: 'O que vem', v: 'O próximo produto será para marketing, na mesma stack.' },
            { k: 'Como entra', v: 'Só aparece nesta página quando está em produção com utilizadores reais.' },
            { k: 'Vantagem', v: 'Esta página mostra o que funciona, não o que está planeado.' },
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
          desc: 'Quatro fases, com software a correr desde a segunda.',
          items: [
            { k: 'Como começa', v: 'Diagnóstico de 30 minutos sobre o processo e os sistemas atuais, antes de qualquer orçamento.' },
            { k: 'Como construímos', v: 'Arquitetura de dados e integrações validada contigo; construção em ciclos curtos com o software a correr em cada fase; entrega em produção com deploy, testes e documentação.' },
            { k: 'Vantagem', v: 'Vês progresso real em cada ciclo, e o orçamento assenta num diagnóstico, não numa estimativa cega.' },
          ],
        },
        {
          label: 'Entregáveis',
          title: 'O que fica contigo',
          desc: 'No fim, o projeto é teu por inteiro, sem dependência de nós.',
          items: [
            { k: 'O que recebes', v: 'Código-fonte num repositório teu; documentação de como corre, como se altera e como se faz deploy.' },
            { k: 'Como fica', v: 'Acessos, ambiente e base de dados nas tuas mãos; fluxos, integrações e APIs prontos a escalar.' },
            { k: 'Vantagem', v: 'Podes continuar connosco ou com qualquer outra equipa. A escolha é tua.' },
          ],
        },
        {
          label: 'Suporte',
          title: 'Depois de entregar',
          desc: 'O suporte é dado por quem escreveu o código, em prazos combinados por escrito.',
          items: [
            { k: 'O que inclui', v: 'Prazos de resposta por escrito e evoluções por fases, ao teu ritmo.' },
            { k: 'Como funciona', v: 'WhatsApp direto, +351 919 642 845, para quem construiu o sistema.' },
            { k: 'Vantagem', v: 'Nunca explicas o teu sistema a alguém que não o conhece.' },
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
          desc: 'Software à medida, do modelo de dados ao deploy, sem plataformas prontas por baixo.',
          items: [
            { k: 'O que fazemos', v: 'Software à medida, automações e integrações, do modelo de dados ao deploy.' },
            { k: 'Com o quê', v: 'Next.js, Node.js e TypeScript na app e no backend; Prisma e PostgreSQL no modelo de dados; Python nas automações; Stripe, Google Workspace, WhatsApp e email nas integrações.' },
            { k: 'Vantagem', v: 'Uma stack só, dominada de ponta a ponta, sem camadas que ninguém na equipa sabe manter.' },
          ],
        },
        {
          label: 'Onde',
          title: 'Coimbra e remoto para o país',
          desc: 'Base em Coimbra, trabalho remoto para todo o país, e falas sempre com quem constrói.',
          items: [
            { k: 'Onde estamos', v: 'Base em Coimbra, com presença na região Centro; remoto para todo o país.' },
            { k: 'Como chegas', v: 'Resposta em menos de 24h por WhatsApp e email; diagnóstico por chamada ou pessoalmente.' },
            { k: 'Vantagem', v: 'Acesso direto a quem constrói, sem gestores de conta pelo meio.' },
          ],
        },
        {
          label: 'Princípios',
          title: 'O que fica combinado',
          desc: 'Quatro compromissos, por escrito, em todos os projetos.',
          items: [
            { k: 'O que prometemos', v: 'O código-fonte fica teu, num repositório teu; âmbito, prazos e suporte por escrito.' },
            { k: 'O que mostramos', v: 'O HoraCerta em produção como referência pública.' },
            { k: 'Vantagem', v: 'Um não claro quando o projeto não se justifica. Poupas o dinheiro e o tempo.' },
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
          desc: 'Um contacto, uma pessoa: falas com quem constrói.',
          items: [
            { k: 'Como chegas', v: 'WhatsApp +351 919 642 845; mauro@matecno.pt para contacto direto; geral@matecno.pt.' },
            { k: 'Onde', v: 'Coimbra, e remoto para todo o país.' },
            { k: 'Vantagem', v: 'Sem formulários que ninguém lê. A mensagem chega a quem escreve o código.' },
          ],
        },
        {
          label: 'Resposta',
          title: 'Resposta em menos de 24h',
          desc: 'Email respondido em menos de 24h; WhatsApp durante o horário de trabalho.',
          items: [
            { k: 'Como respondemos', v: 'Email em menos de 24h, WhatsApp em horário de trabalho, em português ou inglês.' },
            { k: 'Quem responde', v: 'Quem escreve o código, numa só conversa do primeiro contacto ao deploy.' },
            { k: 'Vantagem', v: 'Nunca repetes o contexto a uma segunda pessoa.' },
          ],
        },
        {
          label: 'Passo',
          title: 'Diagnóstico gratuito de 30 min',
          desc: 'Trinta minutos sobre o teu processo e sistemas, sem compromisso.',
          items: [
            { k: 'O que fazemos', v: 'Vemos o processo e os sistemas atuais, por chamada ou pessoalmente.' },
            { k: 'Com o que sais', v: 'Âmbito e orçamento, ou um não claro.' },
            { k: 'Vantagem', v: 'Decides com um plano concreto na mão, não com uma promessa.' },
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
