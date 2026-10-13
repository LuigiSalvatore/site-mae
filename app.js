/* Mockup Landing Page BioCursos - RHA UFRGS */

// Source: new-documents/Informações sobre as disciplinas.docx
const courseDisciplinas = [
  {
    "id": 1,
    "category": "teorica",
    "num": "01",
    "title": "Administração e Gerenciamento de Clínicas de Reprodução Humana Assistida",
    "duration": "15 horas",
    "format": "Teórica",
    "gradient": "linear-gradient(135deg, #12386b, #3f6ca8)",
    "teachers": [
      {
        "name": "Adriana Bos-Mikich",
        "title": "Responsável",
        "initials": "AB"
      }
    ],
    "summary": "Fundamentos de administração aplicados a serviços de saúde de alta complexidade.",
    "topics": [
      {
        "text": "Estruturas organizacionais: configurações, desenhos e governança em clínicas de reprodução humana; introdução ao gerenciamento de processos de negócio (BPM)",
        "heading": false
      },
      {
        "text": "Infraestrutura de apoio estratégico: TI (segurança de dados, sistemas e integrações) e jurídico (contratos, gestão de riscos e termos de consentimento)",
        "heading": false
      },
      {
        "text": "Gestão Financeira: interpretação de demonstrativos (DRE, balanço), precificação no mercado particular e gestão de receitas recorrentes",
        "heading": false
      },
      {
        "text": "Cultura \"AI First\": aplicação de IA generativa, RAG (Retrieval-Augmented Generation) e agentes autônomos na otimização da gestão clínica",
        "heading": false
      }
    ]
  },
  {
    "id": 2,
    "category": "pratica",
    "num": "02",
    "title": "Atividade Prática de Observação",
    "duration": "45 horas",
    "format": "Prática",
    "gradient": "linear-gradient(135deg, #12386b, #3f6ca8)",
    "teachers": [
      {
        "name": "Adriana Bos-Mikich",
        "title": "Responsável",
        "initials": "AB"
      },
      {
        "name": "Daiane Pagliarin",
        "title": "Colaboradora",
        "initials": "DP"
      },
      {
        "name": "Gabriela Mamede Andrade",
        "title": "Colaboradora",
        "initials": "GM"
      },
      {
        "name": "Marcelo Ferreira",
        "title": "Colaborador",
        "initials": "MF"
      },
      {
        "name": "Marcos Iuri Roos Kulmann",
        "title": "Colaborador",
        "initials": "MI"
      },
      {
        "name": "Norma Pagnoncelli Oliveira",
        "title": "Colaboradora",
        "initials": "NP"
      },
      {
        "name": "Simone Mattiello",
        "title": "Colaboradora",
        "initials": "SM"
      }
    ],
    "summary": "Observação supervisionada da rotina clínica e laboratorial em um centro de reprodução assistida humana, abrangendo desde a avaliação inicial dos pacientes até finalização dos tratamentos de fertilização in vitro.",
    "topics": [
      {
        "text": "Acompanhamento observacional de procedimentos clínicos e laboratoriais em um serviço de reprodução humana assistida.",
        "heading": false
      },
      {
        "text": "Atividades clínicas (20h)",
        "heading": true
      },
      {
        "text": "Acompanhamento de consultas médicas iniciais e de retorno",
        "heading": false
      },
      {
        "text": "Diagnóstico de infertilidade: história clínica, exames laboratoriais e de imagem",
        "heading": false
      },
      {
        "text": "Discussão sobre direcionamento dos tratamentos de reprodução assistida (FIV, ICSI, ovodoação, preservação de fertilidade, etc.)",
        "heading": false
      },
      {
        "text": "Acompanhamento de procedimentos clínicos: ultrassonografia, punção folicular, transferência embrionária",
        "heading": false
      },
      {
        "text": "Atividades laboratoriais (20h)",
        "heading": true
      },
      {
        "text": "Acompanhamento de procedimentos: preparo seminal, manipulação de oócitos, verificação da maturidade oocitária, inseminação por injeção intracitoplasmática de espermatozoides (ICSI), cultivo embrionário e avaliação da morfologia em diferentes estágios de desenvolvimento, biópsia embrionária, criopreservação de gametas e embriões",
        "heading": false
      },
      {
        "text": "Integração e discussão crítica (5h)",
        "heading": true
      },
      {
        "text": "Reuniões com médicos e embriologistas para revisão dos casos observados",
        "heading": false
      },
      {
        "text": "Discussão das decisões clínicas e embriológicas frente aos casos acompanhados",
        "heading": false
      },
      {
        "text": "Reflexão sobre implicações éticas, legais e comunicacionais na prática reprodutiva",
        "heading": false
      }
    ]
  },
  {
    "id": 3,
    "category": "mista",
    "num": "03",
    "title": "Embriologia Aplicada à Reprodução",
    "duration": "60 horas",
    "format": "Teórica e prática",
    "gradient": "linear-gradient(135deg, #12386b, #3f6ca8)",
    "teachers": [
      {
        "name": "Adriana Bos-Mikich",
        "title": "Responsável",
        "initials": "AB"
      },
      {
        "name": "Alexandre Tavares Duarte de Oliveira",
        "title": "Colaborador",
        "initials": "AT"
      },
      {
        "name": "Daiane Pagliarin",
        "title": "Colaboradora",
        "initials": "DP"
      },
      {
        "name": "Gabriela Mamede Andrade",
        "title": "Colaboradora",
        "initials": "GM"
      },
      {
        "name": "João Henrique Correa Kanan",
        "title": "Colaborador",
        "initials": "JH"
      },
      {
        "name": "José Artur Bogo Chies",
        "title": "Colaborador",
        "initials": "JA"
      },
      {
        "name": "Lucas Rosa Fraga",
        "title": "Colaborador",
        "initials": "LR"
      }
    ],
    "summary": "Embriologia básica e aspectos clínicos envolvidos com a reprodução assistida.",
    "topics": [
      {
        "text": "Módulo básico:",
        "heading": true
      },
      {
        "text": "Embriologia humana clássica e histórico da fertilização e do desenvolvimento embrionário humano em laboratório",
        "heading": false
      },
      {
        "text": "Conceitos clássicos em RHA, superovulação",
        "heading": false
      },
      {
        "text": "Ciclo natural; ciclo com indução ovariana",
        "heading": false
      },
      {
        "text": "Fertilização: técnicas de inseminação em reprodução assistida",
        "heading": false
      },
      {
        "text": "Técnicas de criopreservação: congelamento e vitrificação",
        "heading": false
      },
      {
        "text": "Implantação, placentação, origem e função das membranas embrionárias e fetais",
        "heading": false
      },
      {
        "text": "Participação do sistema imune na implantação",
        "heading": false
      },
      {
        "text": "Câncer ginecológico",
        "heading": false
      },
      {
        "text": "Módulo específico:",
        "heading": true
      },
      {
        "text": "Análise de sêmen",
        "heading": false
      },
      {
        "text": "IVM de resgate e verdadeira",
        "heading": false
      },
      {
        "text": "Criopreservação de gametas e embriões (congelamento, vitrificação)",
        "heading": false
      },
      {
        "text": "Anomalias da fertilização",
        "heading": false
      },
      {
        "text": "Anomalias do desenvolvimento embrionário",
        "heading": false
      },
      {
        "text": "Emprego da tecnologia de timelapse para o monitoramento do desenvolvimento embrionário",
        "heading": false
      },
      {
        "text": "Erros de implantação",
        "heading": false
      },
      {
        "text": "Opções de gestação solo (do homem e da mulher)",
        "heading": false
      },
      {
        "text": "Adds on em RHA",
        "heading": false
      },
      {
        "text": "Mitos e verdades envolvendo a reprodução humana",
        "heading": false
      },
      {
        "text": "Classificação de gametas e embriões em laboratório",
        "heading": false
      }
    ]
  },
  {
    "id": 4,
    "category": "teorica",
    "num": "04",
    "title": "Ética e Legislação em Reprodução Humana Assistida",
    "duration": "15 horas",
    "format": "Teórica",
    "gradient": "linear-gradient(135deg, #12386b, #3f6ca8)",
    "teachers": [
      {
        "name": "Rossana Colla Soletti",
        "title": "Responsável",
        "initials": "RC"
      },
      {
        "name": "Adriana Bos-Mikich",
        "title": "Colaboradora",
        "initials": "AB"
      }
    ],
    "summary": "Aspectos legais e éticos atuais relacionados à reprodução assistida.",
    "topics": [
      {
        "text": "Conhecimento sobre a legislação brasileira envolvendo processos de reprodução assistida visando a discussão e comparação normas internacionais",
        "heading": false
      },
      {
        "text": "O que é a ética em Reprodução assistida?",
        "heading": false
      },
      {
        "text": "O papel do marketing no emprego das tecnologias de reprodução assistida",
        "heading": false
      },
      {
        "text": "Aspectos da comunicação com o paciente na infertilidade",
        "heading": false
      }
    ]
  },
  {
    "id": 5,
    "category": "teorica",
    "num": "05",
    "title": "Exames de Imagem Aplicados à Reprodução Humana Assistida",
    "duration": "15 horas",
    "format": "Teórica",
    "gradient": "linear-gradient(135deg, #12386b, #3f6ca8)",
    "teachers": [
      {
        "name": "Henrique Zaquia Leão",
        "title": "Responsável",
        "initials": "HZ"
      },
      {
        "name": "Marcelo Ferreira",
        "title": "Colaborador",
        "initials": "MF"
      },
      {
        "name": "Simone Mattiello",
        "title": "Colaboradora",
        "initials": "SM"
      }
    ],
    "summary": "Estudo dos principais exames de imagem utilizados na avaliação e no acompanhamento de pacientes em reprodução humana assistida. Ênfase na ultrassonografia transvaginal, histerossonografia, histerossalpingografia, ressonância magnética e métodos complementares. Aplicações no diagnóstico de anomalias uterinas, patologias endometriais e ovarianas, monitorização da ovulação, avaliação da reserva ovariana e suporte aos procedimentos de reprodução assistida (punção folicular, transferência embrionária). Discussão de casos clínicos integrando imagem, endocrinologia e embriologia.",
    "topics": [
      {
        "text": "Patologias pélvicas na infertilidade",
        "heading": false
      },
      {
        "text": "Miomas, pólipos e sinéquias",
        "heading": false
      },
      {
        "text": "Malformações müllerianas",
        "heading": false
      },
      {
        "text": "Síndrome dos ovários policísticos",
        "heading": false
      },
      {
        "text": "Endometriose pélvica profunda",
        "heading": false
      },
      {
        "text": "Tumores ovarianos",
        "heading": false
      },
      {
        "text": "Exames funcionais",
        "heading": false
      },
      {
        "text": "Protocolos de imagem em fertilidade",
        "heading": false
      },
      {
        "text": "Contagem de folículos antrais e reserva ovariana",
        "heading": false
      },
      {
        "text": "Doppler uterino e ovariano",
        "heading": false
      },
      {
        "text": "Monitorização folicular e da ovulação",
        "heading": false
      },
      {
        "text": "Avaliação da receptividade endometrial",
        "heading": false
      },
      {
        "text": "Exames complementares",
        "heading": false
      },
      {
        "text": "Histerossalpingografia convencional e digital",
        "heading": false
      },
      {
        "text": "Histerossonografia",
        "heading": false
      },
      {
        "text": "Ressonância magnética pélvica na infertilidade",
        "heading": false
      },
      {
        "text": "Tomografia e histeroscopia virtual (situações especiais)",
        "heading": false
      },
      {
        "text": "Imagem nos procedimentos de reprodução assistida",
        "heading": false
      },
      {
        "text": "Ultrassonografia guiando a punção folicular",
        "heading": false
      },
      {
        "text": "Transferência embrionária assistida por imagem",
        "heading": false
      },
      {
        "text": "Avaliação endometrial pré e pós-transferência",
        "heading": false
      },
      {
        "text": "Imagem no congelamento e descongelamento de gametas/embriões",
        "heading": false
      },
      {
        "text": "Discussão interdisciplinar de casos clínicos",
        "heading": false
      }
    ]
  },
  {
    "id": 6,
    "category": "teorica",
    "num": "06",
    "title": "Farmacologia na Infertilidade",
    "duration": "15 horas",
    "format": "Teórica",
    "gradient": "linear-gradient(135deg, #12386b, #3f6ca8)",
    "teachers": [
      {
        "name": "Rossana Colla Soletti",
        "title": "Responsável",
        "initials": "RC"
      },
      {
        "name": "Marcelo Ferreira",
        "title": "Colaborador",
        "initials": "MF"
      }
    ],
    "summary": "Aspectos laboratoriais e farmacológicos relacionado à reprodução humana assistida.",
    "topics": [
      {
        "text": "Medicamentos de suporte na reprodução assistida",
        "heading": false
      },
      {
        "text": "Medicamentos que afetam a fertilidade masculina",
        "heading": false
      },
      {
        "text": "Medicamentos que interferem no desenvolvimento embrionário",
        "heading": false
      },
      {
        "text": "Contaminantes emergentes e persistentes e infertilidade",
        "heading": false
      },
      {
        "text": "Evidências científicas atuais acerca dos suplementos alimentares e infertilidade",
        "heading": false
      },
      {
        "text": "Prática baseada em evidências (PBE) na farmacoterapia da reprodução humana",
        "heading": false
      },
      {
        "text": "Orientação referente à aplicação de medicamentos na reprodução humana",
        "heading": false
      }
    ]
  },
  {
    "id": 7,
    "category": "mista",
    "num": "07",
    "title": "Fisiologia da Reprodução",
    "duration": "45 horas",
    "format": "Teórica e prática",
    "gradient": "linear-gradient(135deg, #12386b, #3f6ca8)",
    "teachers": [
      {
        "name": "Eloisa da Silveira Loss",
        "title": "Responsável",
        "initials": "ED"
      },
      {
        "name": "Charles Francisco Ferreira",
        "title": "Colaborador",
        "initials": "CF"
      }
    ],
    "summary": "Aspectos endócrinos relacionados à reprodução humana.",
    "topics": [
      {
        "text": "Módulo básico:",
        "heading": true
      },
      {
        "text": "Papel hormonal na diferenciação sexual nos desenvolvimentos embrionários masculino e feminino.",
        "heading": false
      },
      {
        "text": "Vias de retroalimentação e controle hormonal da função reprodutiva. Eixo hipotálamo - hipófise - gônadas (masculino e feminino)",
        "heading": false
      },
      {
        "text": "Regulação hormonal no desenvolvimento testicular e de características secundárias masculinas",
        "heading": false
      },
      {
        "text": "Estrutura testicular e controle hormonal da espermatogênese.",
        "heading": false
      },
      {
        "text": "Andrógenos: síntese, transporte, conversão, metabolismo e efeitos. Efeitos dos andrógenos nas diferentes fases da vida no homem.",
        "heading": false
      },
      {
        "text": "Desenvolvimento das estruturas secundárias femininas.",
        "heading": false
      },
      {
        "text": "Desenvolvimento folicular a partir do folículo primordial até o corpo albicans.",
        "heading": false
      },
      {
        "text": "Fases ovarianas e uterinas do ciclo menstrual.",
        "heading": false
      },
      {
        "text": "Controle hormonal e os padrões de retroalimentação do ciclo menstrual às diferentes fases dos ciclos ovariano.",
        "heading": false
      },
      {
        "text": "Alterações estruturais induzidas por hormônios no endométrio - preparação para implantação e mecanismos da menstruação.",
        "heading": false
      },
      {
        "text": "Hormônios na fertilização.",
        "heading": false
      },
      {
        "text": "Mudanças endócrinas na gestação.",
        "heading": false
      },
      {
        "text": "Parto e amamentação",
        "heading": false
      },
      {
        "text": "Menopausa, e terapia hormonal pós menopausa.",
        "heading": false
      },
      {
        "text": "Módulo específico:",
        "heading": true
      },
      {
        "text": "Anovulação funcional hipotalâmica",
        "heading": false
      },
      {
        "text": "Contracepção hormonal feminina",
        "heading": false
      },
      {
        "text": "Anabolizantes na função gonadal masculina e feminina",
        "heading": false
      },
      {
        "text": "Erros de maturação oocitária/crescimento folicular",
        "heading": false
      },
      {
        "text": "Bloqueio da espermatogênese",
        "heading": false
      },
      {
        "text": "Hipogonadismo masculino",
        "heading": false
      },
      {
        "text": "Síndrome do ovário policístico (SOP)",
        "heading": false
      },
      {
        "text": "Disfunção sexual relacionada a outras doenças endócrinas: diabetes, hiper ou hipotiroidismo, estresse crônico, etc.",
        "heading": false
      }
    ]
  },
  {
    "id": 8,
    "category": "teorica",
    "num": "08",
    "title": "Genética Aplicada à Reprodução",
    "duration": "45 horas",
    "format": "Teórica",
    "gradient": "linear-gradient(135deg, #12386b, #3f6ca8)",
    "teachers": [
      {
        "name": "Eduardo Cremonese Filippi Chiela",
        "title": "Responsável",
        "initials": "EC"
      },
      {
        "name": "Marcos Iuri Roos Kulmann",
        "title": "Colaborador",
        "initials": "MI"
      },
      {
        "name": "Maria Teresa Vieira Sanseverino",
        "title": "Colaboradora",
        "initials": "MT"
      }
    ],
    "summary": "Genética básica e aspectos clínicos envolvidos com a reprodução. Disciplina voltada ao estudo dos fundamentos da genética aplicados à reprodução humana, com ênfase nos mecanismos moleculares e cromossômicos que influenciam a fertilidade, desenvolvimento embrionário e sucesso das técnicas de reprodução assistida. Inclui tópicos de genética básica, citogenética, testes genéticos pré e pós-implantacionais, implicações clínicas e éticas no manejo de casais inférteis.",
    "topics": [
      {
        "text": "Módulo básico:",
        "heading": true
      },
      {
        "text": "1) Fundamentos de genética molecular e citogenética",
        "heading": true
      },
      {
        "text": "Estrutura e organização do DNA (gene, cromossomo, histonas, grau de compactação)",
        "heading": false
      },
      {
        "text": "Mitose e meiose (ênfase nos erros meióticos femininos e masculinos)",
        "heading": false
      },
      {
        "text": "Módulo específico:",
        "heading": true
      },
      {
        "text": "2) Alterações genéticas e reprodutivas",
        "heading": true
      },
      {
        "text": "Mutações gênicas",
        "heading": false
      },
      {
        "text": "Erros cromossômicos numéricos e estruturais, mosaicismo",
        "heading": false
      },
      {
        "text": "Relação da idade materna e paterna com erros genéticos",
        "heading": false
      },
      {
        "text": "3) Diagnóstico genético em Reprodução Assistida",
        "heading": true
      },
      {
        "text": "Testes genéticos pré-concepção (cariótipo, FISH, CGT, fragmentação do DNA espermático)",
        "heading": false
      },
      {
        "text": "Testes genéticos pré-implantacionais (PGT-A, PGT-M, PGT-SR)",
        "heading": false
      },
      {
        "text": "Testes genéticos pré-natais (líquido amniótico, vilosidades coriônicas, NIPT)",
        "heading": false
      },
      {
        "text": "Diagnósticos embrionários não-invasivos (DNA livre, metabolômica, secretoma)",
        "heading": false
      },
      {
        "text": "4) Implicações clínicas e éticas",
        "heading": true
      },
      {
        "text": "Aconselhamento genético em Reprodução Assistida",
        "heading": false
      },
      {
        "text": "Discussão de casos clínicos",
        "heading": false
      }
    ]
  },
  {
    "id": 9,
    "category": "mista",
    "num": "09",
    "title": "Histologia dos Sistemas Reprodutores Masculino e Feminino",
    "duration": "30 horas",
    "format": "Teórica e prática",
    "gradient": "linear-gradient(135deg, #12386b, #3f6ca8)",
    "teachers": [
      {
        "name": "Ana Helena da Rosa Paz",
        "title": "Responsável",
        "initials": "AH"
      },
      {
        "name": "Eduardo Cambruzzi",
        "title": "Colaborador",
        "initials": "EC"
      },
      {
        "name": "Lisiane Bernardi",
        "title": "Colaboradora",
        "initials": "LB"
      },
      {
        "name": "Paula Rigon da Luz Soster",
        "title": "Colaboradora",
        "initials": "PR"
      },
      {
        "name": "Tatiana Luft",
        "title": "Colaboradora",
        "initials": "TL"
      }
    ],
    "summary": "Histologia dos Sistemas Reprodutores Masculino e Feminino. Patologias e/ou procedimentos dos sistemas reprodutores masculino e feminino que se relacionam à reprodução.",
    "topics": [
      {
        "text": "Módulo básico:",
        "heading": true
      },
      {
        "text": "Histologia do sistema reprodutor masculino",
        "heading": false
      },
      {
        "text": "Histologia do sistema reprodutor feminino",
        "heading": false
      },
      {
        "text": "Módulo específico:",
        "heading": true
      },
      {
        "text": "Endometriose",
        "heading": false
      },
      {
        "text": "Ovários policísticos",
        "heading": false
      },
      {
        "text": "Falência ovariana precoce",
        "heading": false
      },
      {
        "text": "Síndrome de células de Sertoli",
        "heading": false
      },
      {
        "text": "Vasectomia",
        "heading": false
      },
      {
        "text": "Laqueadura",
        "heading": false
      },
      {
        "text": "Inflamações pélvicas",
        "heading": false
      },
      {
        "text": "Miomas",
        "heading": false
      },
      {
        "text": "Pólipos",
        "heading": false
      }
    ]
  },
  {
    "id": 10,
    "category": "teorica",
    "num": "10",
    "title": "Metodologia da Pesquisa e TCC",
    "duration": "45 horas",
    "format": "Teórica",
    "gradient": "linear-gradient(135deg, #12386b, #3f6ca8)",
    "teachers": [
      {
        "name": "Ana Helena da Rosa Paz",
        "title": "Responsável",
        "initials": "AH"
      },
      {
        "name": "Dirce Maria Santin",
        "title": "Colaboradora",
        "initials": "DM"
      }
    ],
    "summary": "Estudo da metodologia científica, dos principais métodos e técnicas de investigação. Desenvolvimento do projeto de pesquisa e elaboração do trabalho de conclusão de curso (TCC), seguindo a redação científica e o template de TCC indicado pelo curso.",
    "topics": [
      {
        "text": "Fundamentos da metodologia científica",
        "heading": false
      },
      {
        "text": "Métodos de pesquisa: tipos, revisão de literatura, ética e normas de referências",
        "heading": false
      },
      {
        "text": "Organização e elaboração do projeto de pesquisa para o TCC",
        "heading": false
      },
      {
        "text": "Elaboração, redação e formatação do TCC",
        "heading": false
      }
    ]
  },
  {
    "id": 11,
    "category": "mista",
    "num": "11",
    "title": "Origem e Anatomia dos Sistemas Reprodutores Masculino e Feminino",
    "duration": "30 horas",
    "format": "Teórica e prática",
    "gradient": "linear-gradient(135deg, #12386b, #3f6ca8)",
    "teachers": [
      {
        "name": "Taís Malysz",
        "title": "Responsável",
        "initials": "TM"
      },
      {
        "name": "Adriana Bos-Mikich",
        "title": "Colaboradora",
        "initials": "AB"
      },
      {
        "name": "Henrique Zaquia Leão",
        "title": "Colaborador",
        "initials": "HZ"
      }
    ],
    "summary": "Anatomia clínica da pelve e suas relações com peritônio. Embriologia e anatomia dos sistemas reprodutores masculino e feminino; Mal formações, patologias e procedimentos que envolvem os sistemas reprodutores masculino e feminino que se relacionam à reprodução.",
    "topics": [
      {
        "text": "Módulo básico:",
        "heading": true
      },
      {
        "text": "Anatomia clínica da pelve e suas relações com peritônio.",
        "heading": false
      },
      {
        "text": "Embriologia do sistema reprodutor masculino",
        "heading": false
      },
      {
        "text": "Embriologia do sistema reprodutor feminino",
        "heading": false
      },
      {
        "text": "Anatomia do sistema reprodutor masculino",
        "heading": false
      },
      {
        "text": "Anatomia do sistema reprodutor feminino",
        "heading": false
      },
      {
        "text": "Módulo específico:",
        "heading": true
      },
      {
        "text": "Mal formações uterinas",
        "heading": false
      },
      {
        "text": "Mal formações gonadais",
        "heading": false
      },
      {
        "text": "Pseudo-hermafroditismo",
        "heading": false
      },
      {
        "text": "Problemas das glândulas anexas masculinas",
        "heading": false
      },
      {
        "text": "Impotência masculina",
        "heading": false
      },
      {
        "text": "Vasectomia/laqueadura",
        "heading": false
      },
      {
        "text": "Endometriose",
        "heading": false
      },
      {
        "text": "Varicocele",
        "heading": false
      }
    ]
  },
  {
    "id": 12,
    "category": "teorica",
    "num": "12",
    "title": "Preservação da Fertilidade",
    "duration": "15 horas",
    "format": "Teórica",
    "gradient": "linear-gradient(135deg, #12386b, #3f6ca8)",
    "teachers": [
      {
        "name": "Rossana Colla Soletti",
        "title": "Responsável",
        "initials": "RC"
      },
      {
        "name": "Adriana Bos-Mikich",
        "title": "Colaboradora",
        "initials": "AB"
      }
    ],
    "summary": "Estudo dos métodos e técnicas atuais de preservação da fertilidade masculina e feminina. Abordagem das indicações médicas, aspectos éticos, legais e psicológicos envolvidos. Discussão de avanços em biotecnologia reprodutiva e implicações na saúde pública.",
    "topics": [
      {
        "text": "Indicações clínicas da preservação da fertilidade: preservação da fertilidade social; pacientes oncológicos; transgêneros",
        "heading": false
      },
      {
        "text": "Métodos de preservação da fertilidade feminina: criopreservação de embriões; criopreservação de óvulos; criopreservação de tecido ovariano",
        "heading": false
      },
      {
        "text": "Métodos de preservação da fertilidade masculina: criopreservação de sêmen; criopreservação de tecido testicular; técnicas emergentes",
        "heading": false
      },
      {
        "text": "Aspectos éticos, legais e psicológicos; apoio psicológico ao paciente",
        "heading": false
      },
      {
        "text": "Avanços e perspectivas futuras: gametogênese in vitro; Engenharia de tecidos e células-tronco",
        "heading": false
      }
    ]
  },
  {
    "id": 13,
    "category": "teorica",
    "num": "13",
    "title": "Reprodução Humana Assistida voltada à população LGBTQIAPN+",
    "duration": "15 horas",
    "format": "Teórica",
    "gradient": "linear-gradient(135deg, #12386b, #3f6ca8)",
    "teachers": [
      {
        "name": "Adriana Bos-Mikich",
        "title": "Responsável",
        "initials": "AB"
      },
      {
        "name": "Daiane Pagliarin",
        "title": "Colaborador",
        "initials": "DP"
      }
    ],
    "summary": "Conhecimento de exames de imagens necessários a diagnósticos e tratamentos em reprodução humana assistida.",
    "topics": [
      {
        "text": "Exposição de forma inclusiva das práticas de reprodução assistida voltadas à população LGBTQIAPN+, considerando os aspectos clínicos, laboratoriais, psicossociais, éticos e legais envolvidos para casais homoafetivos e transgêneros",
        "heading": false
      }
    ]
  }
];

const specific = [
  "Preparar profissionais graduados nas áreas da saúde e biológicas para um mercado de trabalho cada vez mais competitivo e em franca expansão: a reprodução humana assistida;",
  "Expor a relevância e a relação entre o conhecimento teórico e as práticas clínicas e laboratoriais, de forma a criar uma atitude crítica e capacitada no profissional, capaz de contribuir efetivamente nas tomadas de decisões;",
  "Incentivar e habilitar os profissionais a buscar conhecimento baseado em rigorosos critérios científicos, de forma a capacitá-los a elaborar propostas de pesquisa e manuscritos relacionados a seus interesses específicos, dentre os inúmeros tópicos da reprodução humana assistida;",
  "Proporcionar a oportunidade única de vivenciar a rotina de uma clínica de RHA, desde a entrevista inicial com os pacientes, até o final de um ciclo de RHA, através do acompanhamento presencial em atividades clínicas e laboratoriais;",
  "Oportunizar a observação de atividades laboratoriais práticas de preparo de material seminal para exame de rotina para emprego nas diferentes técnicas de inseminação/fertilização."
];

const subjects = [
  "Origem e Anatomia dos Sistemas Reprodutores Masculino e Feminino",
  "Histologia dos Sistemas Reprodutores Masculino e Feminino",
  "Fisiologia da Reprodução",
  "Embriologia Aplicada à Reprodução",
  "Genética Aplicada à Reprodução",
  "Farmacologia na Infertilidade",
  "Exames de Imagem Aplicados à Reprodução Humana Assistida",
  "Preservação da Fertilidade",
  "Reprodução Humana Assistida voltada à população LGBTQIAPN+",
  "Ética e Legislação em Reprodução Humana Assistida",
  "Administração e Gerenciamento de Clínicas de Reprodução Humana Assistida",
  "Metodologia da Pesquisa e TCC",
  "Atividade Prática de Observação"
];

const teamUfrgs = [
  ["Adriana Bos-Mikich", "Doutora · Coordenadora"],
  ["Paula Rigon da Luz Soster", "Doutora · Coord. Adjunta"],
  ["Alexandre Tavares Duarte de Oliveira", "Doutor"],
  ["Ana Helena da Rosa Paz", "Doutora"],
  ["Charles Francisco Ferreira", "Doutor"],
  ["Dirce Maria Santin", "Doutora"],
  ["Eduardo Cambruzzi", "Doutor"],
  ["Eduardo Cremonese Filippi Chiela", "Doutor"],
  ["Eloisa da Silveira Loss", "Doutora"],
  ["Henrique Zaquia Leão", "Doutor"],
  ["João Henrique Correa Kanan", "Doutor"],
  ["José Artur Bogo Chies", "Doutor"],
  ["Lisiane Bernardi", "Doutora"],
  ["Lucas Rosa Fraga", "Doutor"],
  ["Rossana Colla Soletti", "Doutora"],
  ["Taís Malysz", "Doutora"],
  ["Tatiana Luft", "Doutora"]
];

const teamExt = [
  ["Daiane Pagliarin", "Mestre · Nilo Frantz"],
  ["Gabriela Mamede Andrade", "Doutora · Nilo Frantz"],
  ["Marcelo Ferreira", "Mestre · Nilo Frantz"],
  ["Marcos Iuri Roos Kulmann", "Doutor · Nilo Frantz"],
  ["Maria Teresa Vieira Sanseverino", "Doutora · HCPA"],
  ["Norma Pagnoncelli Oliveira", "Mestre · Nilo Frantz"],
  ["Simone Mattiello", "Especialista · Nilo Frantz"]
];

const testimonials = [
  {
    name: "Drª. Camile Mendonça",
    role: "Biomédica Embriologista",
    text: "A imersão prática na Clínica Nilo Frantz foi o diferencial divisor de águas na minha carreira. Ver a rotina real de um laboratório de RHA de alta precisão não tem preço.",
    avatar: "CM"
  },
  {
    name: "Juliano Silveira",
    role: "Biólogo & Pesquisador",
    text: "O corpo docente da UFRGS traz fundamentação científica de altíssimo nível. Recomendo fortemente para quem deseja se posicionar com autoridade em Reprodução Assistida.",
    avatar: "JS"
  },
  {
    name: "Mariana Alencar",
    role: "Farmacêutica",
    text: "O formato híbrido com EaD síncrono e aulas presenciais permitiu conciliar o trabalho com uma formação de referência nacional.",
    avatar: "MA"
  }
];

const $ = id => document.getElementById(id);

// Render specific objectives
if ($("specific")) {
  $("specific").innerHTML = specific.map(t => `<li>${t}</li>`).join("");
}

// Render legacy subjects list
if ($("subjects")) {
  $("subjects").innerHTML = subjects.map((t, i) =>
    `<li${i === subjects.length - 1 ? ' class="practical"' : ""}>${t}</li>`).join("");
}

// Profile filenames use lowercase ASCII slugs, shared across every faculty display.
const profileSlug = name => name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const teacherPhoto = (name, className) => `<img class="${className} teacher-photo" src="assets/profiles/${profileSlug(name)}.png" alt="" loading="lazy" decoding="async">`;

document.querySelectorAll("[data-teacher]").forEach(element => {
  element.insertAdjacentHTML("afterbegin", teacherPhoto(element.dataset.teacher, "avatar"));
});

// Render team
const person = ([n, t]) => `<li>
  ${teacherPhoto(n, "avatar")}
  <div><strong>${n}</strong><span>${t}</span></div>
</li>`;

if ($("team-ufrgs")) $("team-ufrgs").innerHTML = teamUfrgs.map(person).join("");
if ($("team-ext")) $("team-ext").innerHTML = teamExt.map(person).join("");

// Render Testimonials
if ($("testimonials-grid")) {
  $("testimonials-grid").innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="test-header">
        <div class="test-avatar">${t.avatar}</div>
        <div>
          <strong>${t.name}</strong>
          <span>${t.role}</span>
        </div>
      </div>
      <p class="test-text">"${t.text}"</p>
      <div class="test-rating">★★★★★</div>
    </div>
  `).join("");
}

// Render Course Cards (13 Disciplinas)
function renderCourseCards(filter = "all") {
  const container = $("course-grid");
  if (!container) return;

  const filtered = filter === "all" ? courseDisciplinas : courseDisciplinas.filter(m => m.category === filter);

  container.innerHTML = filtered.map(c => `
    <div class="course-card" tabindex="0" data-id="${c.id}">
      <div class="card-inner">
        <!-- Front of Card -->
        <div class="card-front" style="background: ${c.gradient}">

          <div class="card-header-badge">
            <span class="badge-format">${c.format}</span>
            <span class="badge-duration">⏱️ ${c.duration}</span>
          </div>

          <div class="card-num-label">Disciplina ${c.num} de 13</div>
          <h3 class="card-title">${c.title}</h3>

          <!-- Foreground Teachers Display -->
          <div class="teacher-foreground">
            <span class="teachers-label">Corpo docente:</span>
            <div class="teacher-avatars-row">
              ${c.teachers.map(t => `
                <div class="teacher-chip" title="${t.name} (${t.title})">
                  ${teacherPhoto(t.name, "chip-avatar")}
                  <span class="chip-name">${t.name}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="card-hover-hint">
            <span>Ver ementa e tópicos da disciplina</span>
            <span class="hint-icon">🔄</span>
          </div>
        </div>

        <!-- Back of Card (Revealed Details) -->
        <div class="card-back">
          <div class="card-back-header">
            <div class="card-back-header-top">
              <div>
                <span class="back-disc-tag">Disciplina ${c.num} · ${c.duration}</span>
                <h4>${c.title}</h4>
              </div>
              <button type="button" class="btn-card-close" aria-label="Fechar detalhes" title="Voltar ao resumo">✕</button>
            </div>
          </div>

          <div class="card-syllabus">
            <h5>Súmula</h5>
            <p class="discipline-summary">${c.summary}</p>
            <h5>Conteúdo programático</h5>
            <ul>
              ${c.topics.map(tp => `<li${tp.heading ? ' class="syllabus-heading"' : ""}>${tp.text}</li>`).join("")}
            </ul>
          </div>

          <div class="card-teachers-detail">
            <h5>Corpo Docente:</h5>
            ${c.teachers.map(t => `
              <div class="t-detail-item">
                ${teacherPhoto(t.name, "t-avatar-sm")}
                <div>
                  <strong>${t.name}</strong>
                  <span class="t-title-sm">${t.title}</span>
                </div>
              </div>
            `).join("")}
          </div>


        </div>
      </div>
    </div>
  `).join("");

  // Attach card interaction events (click, hover-reset, keyboard, close)
  document.querySelectorAll(".course-card").forEach(card => {
    // Click toggle or close
    card.addEventListener("click", (e) => {
      if (e.target.closest(".btn-card-close")) {
        e.stopPropagation();
        card.classList.remove("flipped");
        return;
      }
      if (e.target.tagName !== "A" && !e.target.closest("a")) {
        card.classList.toggle("flipped");
      }
    });

    // Reset interaction state on mouse leave
    card.addEventListener("mouseleave", () => {
      card.classList.remove("flipped");
    });

    // Keyboard support
    card.addEventListener("keydown", (e) => {
      if (e.target !== card) return;
      if (e.key === "Enter" || (e.key === " " && !card.matches(":hover, .flipped"))) {
        if (e.target.tagName !== "A" && !e.target.closest("a")) {
          e.preventDefault();
          card.classList.toggle("flipped");
        }
      } else if (e.key === "Escape") {
        card.classList.remove("flipped");
      }
    });

    // Reset when keyboard focus leaves card
    card.addEventListener("focusout", (e) => {
      if (!card.contains(e.relatedTarget)) {
        card.classList.remove("flipped");
      }
    });
  });
}

// Global click outside listener to unflip any open cards
document.addEventListener("click", (e) => {
  if (!e.target.closest(".course-card")) {
    document.querySelectorAll(".course-card.flipped").forEach(c => c.classList.remove("flipped"));
  }
});

// Filter tabs
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCourseCards(btn.dataset.filter);
  });
});

// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = $("menu");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  navLinks.addEventListener("click", e => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}

/* Situação das inscrições (13/10/2026 a 15/01/2027) */
(() => {
  const open = new Date(2026, 9, 13), close = new Date(2027, 0, 15, 23, 59, 59), now = new Date();
  const days = Math.ceil((open - now) / 864e5);
  const statusEl = $("status");
  if (statusEl) {
    statusEl.textContent =
      now < open ? `Inscrições abrem em ${days} ${days === 1 ? "dia" : "dias"} (em 13/10/2026).` :
        now <= close ? "Inscrições abertas até 15/01/2027." : "Período de inscrições encerrado.";
  }
})();

// Initial render
renderCourseCards();
