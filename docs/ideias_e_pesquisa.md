# BioCursos Launch Mockup - Planejamento & Pesquisa

## 1. Pesquisa de UX/UI para Páginas de Curso (Coursera, Udemy, Hotmart)

Fizemos uma breve análise de como funcionam as maiores plataformas de cursos hoje e o que podemos aplicar para tornar esse projeto atraente para campanhas (Ads):

- **Hierarquia Visual Direta:**
  - O herói (*Hero Section*) foca na transformação do aluno (ex: "Aprenda a Vida") e tem um *Call-to-Action* (CTA) bastante óbvio.
- **Estruturação do Card do Curso:**
  - Capa muito visual, títulos claros.
  - Informações vitais logo no card: Avaliações (estrelas), dificuldade do curso, duração.
  - **Requisito do mockup:** Mostrar Professor + Tópico. Uma opção muito moderna é, ao passar o mouse (*hover*), revelar uma "traseira" do card com detalhes rápidos: cronograma da aula, nomes dos professores.
- **Preços e Formas de Pagamento:**
  - Precisa ser transparente.
  - Vamos dedicar uma área de FAQ rápida ou uma tabela de benefícios com ícones das opções (Cartão, Pix, Boleto) no próprio card principal ou em uma seção "Investimento".
- **Datas Claras:**
  - "Início: data" e "Fim/Duração prevista". Plataformas de lançamento (*Launch*) usam gatilho de escassez e limitam as datas.

## 2. Sugestão de Melhorias Arquiteturais / Interação

Para alinhar com os requisitos pedidos, proponho estas melhorias sobre a base atual:

1. **Card de Cursos Dinâmico (Hover Effect):**
   - **Frente:** Imagem do tema no fundo, com recorte de imagem dos professores (PNG sem fundo) se sobrepondo, nome do curso, preço.
   - **Verso (Hover):** Nome dos professores detalhado, programação/módulos principais (Bullet points), data de início e término. Mostra também os botões de ação ("Matricular").
2. **Seção "Investimento e Pagamento":**
   - Melhorar os cards para deixar em evidência as bandeiras aceitas e as possibilidades de parcelamento. Lading pages deAds adoram mostrar "12x de R$ X,XX".
3. **Seção Testemunhos/Credibilidade:**
   - Adicionar depoimentos de ex-alunos/profissionais e selos de acreditação (UFRGS + Nilo Frantz).

## 3. Plano de Ação Proposto

1. **Grade / Cards de Cursos com Hover & Interação:**
   - Exibir os módulos/disciplinas em cards visuais interativos.
   - Na frente do card: imagem do professor/tópico, título da disciplina, carga horária e datas.
   - Ao passar o mouse/clicar: revela detalhes da ementa, professores responsáveis e botão de ação.
2. **Seção de Investimento e Opções de Pagamento:**
   - Apresentar planos de pagamento (ex: 12x no cartão, PIX com desconto, boleto bancário).
   - Inserir selos das bandeiras e modalidade de inscrição.
3. **Cronograma com Prazos Claras:**
   - Destacar data de início (13/10/2026), término das inscrições (15/01/2027) e tempo de imersão.

## 4. Perguntas para Validação

- Deseja que a grade de cursos/módulos exiba imagens individuais para cada professor ou avatares/recortes específicos por disciplina?
- As formas de pagamento possuem valores/parcelamento pré-definidos (ex: valor total do investimento da pós-graduação)?
- Prefere que os cards alternem o conteúdo ao passar o mouse (*hover*) ou ao clicar (abrir modal/drawer de detalhes)? seção curta abaixo dos cursos para "O que dizem nossos alunos" (Social Proof é vital emAds).
4. **Bilinguismo contínuo:**
   - Manter todo o sistema traduzível para EN/PT como você validou.

---

O que acha dessas ideias para o mockup? Posso prosseguir com a implementação (mudança no CSS para os cards interativos, adição de mais metadados aos cursos e formatação amigável de Landing Page moderna)?