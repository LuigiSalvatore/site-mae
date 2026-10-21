# Plano de migração para a hospedagem UFRGS

Preparado em 19/10/2026. Escopo: planejamento; sem conexão remota, upload ou alteração do site nesta etapa.

## Decisão de arquitetura

Publicar o site existente como HTML, CSS, JavaScript e arquivos estáticos em `www.ufrgs.br/cursoreproducaoembrio/`. O projeto não exige instalação, compilação, WordPress ou banco de dados. JavaScript é executado no navegador; confirmar na hospedagem as regras de entrega de scripts e eventuais políticas de segurança.

Este é o plano principal para o acesso SFTP informado. O documento `../wordpress-migration/README.md` permanece como alternativa caso a instituição passe a exigir WordPress. Hospedar sob o domínio UFRGS não implica, por si só, integrar o conteúdo a um tema ou editor do portal institucional.

## 1. Confirmar acesso e diretório público

Responsável: operador com acesso institucional.

- Segundo o e-mail recebido: servidor `hospedagem-web05.ufrgs.br`, SFTP na porta `9022`; VPN necessária fora da rede UFRGS. Consultar o usuário e a senha no canal seguro, sem copiá-los para código ou documentação.
- Confirmar com a TI a impressão digital da chave do servidor antes de aceitar a primeira conexão.
- Identificar o diretório que corresponde à URL pública; não presumir que seja a raiz do login, `public_html` ou uma pasta com o nome do curso.
- Listar o conteúdo existente e confirmar o arquivo inicial aceito, permissões, limites de armazenamento e possibilidade de criar uma pasta temporária de homologação.
- Confirmar HTTPS, redirecionamento de HTTP e comportamento da URL com barra final. Não exigir acesso de shell: SFTP não garante SSH interativo.

Referência fornecida: https://www.ufrgs.br/documentacaoti/como-conectar-no-servico-de-sftp/ . A página não pôde ser consultada nesta revisão; os parâmetros acima vêm do e-mail e ainda não foram verificados no servidor.

Saída: diretório público e URL HTTPS confirmados; acesso funcional. O banco disponibilizado não participa desta migração e não precisa ser acessado.

## 2. Fechar conteúdo e inscrição para produção

Responsável: coordenação do curso, com implementação no site após definição.

- Confirmar datas, valores, parcelamento (15 parcelas versus indicação de até 12x), contatos, docentes e conteúdo das disciplinas.
- Resolver as pendências de conteúdo já documentadas no plano anterior: distribuição 309h/81h e divergência entre súmula e programa da disciplina LGBTQIAPN+.
- Escolher o canal oficial de inscrição: documento enviado manualmente a um destinatário aprovado ou sistema institucional. Substituir o destinatário de teste nas três páginas de inscrição e ajustar os textos somente após essa definição.
- O formulário atual gera um HTML para baixar e imprimir; o usuário precisa anexar e enviar o arquivo manualmente. Não recebe inscrições, não grava no banco e não envia confirmações. Se isso for mantido, explicar o processo na versão pública.
- Se for necessário envio automático, tratar backend, anexos, acesso aos dados e confirmação como uma etapa separada. Não colocar credenciais de banco ou SFTP no JavaScript.
- Revisar a lógica de datas: hoje depende do relógio e fuso do dispositivo. Definir o fuso de São Paulo para os avisos; a página estática não fiscaliza prazos de recebimento.

Saída: conteúdo e fluxo de inscrição aprovados, sem destinatários ou avisos de teste na versão de produção.

## 3. Preparar um pacote de publicação

Responsável: manutenção do site.

Criar uma pasta de entrega fora do diretório público usando apenas os arquivos necessários:

| Publicar | Finalidade |
| --- | --- |
| `index.html`, `style.css`, `app.js` | Página principal e interações |
| `inscricao.html`, `inscricao-instrucoes.html`, `inscricao-online.html` | Fluxo de inscrição, conforme aprovação |
| `registration.css`, `registration.js` | Estilo e comportamento das inscrições |
| `assets/` | Logos, fotos e formulário público |

Revisar os arquivos de `assets/` antes de incluí-los. Não enviar `.git/`, `.agents/`, `.codex/`, `.aws/`, `docs/`, `tests/`, `new-documents/`, os diretórios de planejamento, backups ou credenciais. Usar lista explícita de inclusão, em vez de copiar todo o repositório.

Preservar caminhos relativos para funcionar sob `/cursoreproducaoembrio/` e em uma subpasta de homologação. Verificar também os caminhos de fotos construídos dinamicamente em `app.js` e diferenças de maiúsculas/minúsculas. O site usa Google Fonts; verificar seu carregamento e a legibilidade com fontes alternativas caso o recurso externo seja bloqueado.

Registrar a revisão Git de origem e um inventário dos arquivos da entrega, mantidos fora da área pública. Há alterações locais anteriores a este plano; revisar e selecionar a versão aprovada antes de montar o pacote.

## 4. Homologar antes da troca

- Executar `python3 tests/check_registration.py`, `python3 tests/check_profiles.py` e `git diff --check` na versão preparada.
- Servir o pacote localmente com `python3 -m http.server 8000` e conferir também a navegação dentro de uma subpasta equivalente ao destino.
- Se a hospedagem permitir, enviar o pacote por SFTP a uma pasta temporária e testar pela URL correspondente. Uma pasta com nome diferente não é privada; usar apenas dados fictícios nos testes e proteção de acesso quando disponível.
- Validar as quatro páginas, logos, fotos, download DOCX, geração do HTML preenchido, links de retorno, âncoras, menu móvel, filtros e cartões das 13 disciplinas.
- Conferir celular e desktop, teclado, foco, legibilidade e console/rede do navegador: sem erros de JavaScript, arquivos ausentes ou conteúdo HTTP em página HTTPS.
- Avaliar a página com JavaScript indisponível: objetivos, disciplinas e docentes dependem dele hoje. Se houver exigência institucional de conteúdo essencial sem scripts, incluir uma versão HTML desses conteúdos antes do lançamento.
- Conferir os avisos de inscrição antes, durante e depois do prazo. Testar abertura do cliente de e-mail sem confundir isso com envio ou recebimento.

Saída: lista de validação aprovada. Os testes locais não substituem a verificação no endereço UFRGS.

## 5. Publicar com possibilidade de retorno

Responsável: operador SFTP, após homologação e definição da janela com a coordenação.

1. Baixar uma cópia completa do conteúdo remoto que será substituído, com data e inventário, para armazenamento privado fora da área pública. Identificar arquivos institucionais que devem permanecer.
2. Carregar a versão aprovada. Se o serviço permitir troca de diretórios sem afetar o mapeamento público, preparar a troca; caso contrário, usar janela curta, enviando recursos antes das páginas e evitando versões misturadas.
3. Não executar sincronização com exclusão automática. Remover arquivos antigos apenas após conferir sua propriedade e necessidade.
4. Validar imediatamente a URL pública em HTTPS, as páginas de inscrição, as fotos e os downloads, também fora da VPN para confirmar o acesso dos visitantes.
5. Se houver falha relevante, restaurar os arquivos substituídos a partir do backup e remover apenas arquivos novos da entrega que causem conflito. Revalidar a versão restaurada.
6. Após aceite, retirar a homologação e manter backup e inventário em local privado. Verificar cache do navegador/servidor quando houver conteúdo antigo.

Não há mudança de DNS prevista para a URL já fornecida. Confirmar com a TI se há configuração de encaminhamento pendente; HTTPS e diretório público ainda são pontos de verificação.

## Segurança e manutenção

As senhas compartilhadas na conversa não constam deste plano. Recomenda-se trocá-las pelo canal institucional antes da publicação e guardá-las em um gerenciador de senhas. Não usar senhas em comandos, arquivos públicos, URLs ou histórico Git.

Após a migração, a edição continua sendo feita nos arquivos do projeto, seguida de revisão, testes e novo envio SFTP. A hospedagem estática não acrescenta painel editorial. Manter uma pessoa responsável por conteúdo, outra pelo acesso/publicação e uma cópia privada de cada versão publicada.

## Critério de conclusão

Site aprovado disponível na URL UFRGS por HTTPS, recursos e navegação funcionando, fluxo oficial de inscrição claro, ausência de arquivos internos na área pública e restauração documentada e viável. A execução depende de VPN/acesso institucional, confirmação do diretório e aprovação do conteúdo de produção.
