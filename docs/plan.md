# Plano de Implementação - Mockup Landing Page BioCursos / UFRGS

## 1. Grade Interativa de Cursos e Módulos (#cursos)
- Criar cards interativos com rotação 3D (Hover / Clique) para cada grande módulo do curso.
- **Frente do Card:**
  - Imagem de fundo temática do módulo (gradiente SVG e ilustração médica/biológica).
  - Foto/Badge dos professores responsáveis em destaque no primeiro plano.
  - Título do módulo, Carga Horária, Data de Início e Término.
  - Indicador de modalidade (EaD ou Presencial).
- **Verso do Card (Revealed):**
  - Ementa detalhada e tópicos das aulas (programação).
  - Nome completo e titulação dos professores responsáveis.
  - Datas das aulas síncronas e avaliações.
  - Botão "Ver Detalhes do Módulo".

## 2. Seção de Investimento e Formas de Pagamento (#investimento)
- Reestruturar a seção de preços com cards modernos:
  - Opção Parcelada: Matrícula de R$ 400,00 + 15x de R$ 800,00 no cartão de crédito.
  - Opção À Vista no Pix: Desconto de 10% (R$ 11.160,00).
- Adicionar selos visuais de bandeiras de pagamento:
  - Cartão de Crédito (até 12x sem juros ou 15x no carne/boleto).
  - Pix com aprovação imediata.
  - Boleto Bancário.
- Inserir selos de certificação oficial UFRGS e parceiro Nilo Frantz.

## 3. Seção de Credibilidade & Prova Social (#diferenciais e #depoimentos)
- Seção "Por que se especializar conosco?":
  - 1ª Edição com imersão na Clínica Nilo Frantz (45h práticas).
  - Certificação emitida por Universidade Federal de Excelência (UFRGS).
  - Corpo docente formado por Doutores e Especialistas renomados em Reprodução Humana Assistida.
- Seção de Depoimentos / Social Proof para conversão de anúncios (Ads).

## 4. Funcionalidades JavaScript em `app.js`
- Suporte a suporte a clique/touch para virar o card no mobile e hover no desktop.
- Filtros por tipo de módulo (Todos, Teóricos EaD, Imersão Prática).
- Contador e status em tempo real do período de inscrições.
