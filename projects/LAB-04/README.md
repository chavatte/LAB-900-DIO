# Azure Cognitive Search: Utilizando AI Search para indexação e consulta de Dados

O Azure Cognitive Search (anteriormente conhecido como "Azure Search") é uma solução de pesquisa robusta que permite indexar e consultar dados de texto e estruturados assim como imagem. Este guia  desenvolvido no laborátorio do bootcamp poderá ser de grande serventia para a criação de cada etapa do processo, desde a criação de um serviço de pesquisa até a consulta e análise de seus dados enriquecidos.

<details>
<summary>Criando um Serviço de Pesquisa</summary>

1. **Crie um Recurso do Azure AI Search:**
   * Acesse o portal do Azure e procure por "Azure AI Search".
   * Configure as opções de assinatura, grupo de recursos, local, nome da conta de armazenamento, modelo de implantação, desempenho e replicação.
   * Revise as configurações e finalize a criação do serviço.
   
2. **Crie um Recurso de Serviços de IA do Azure:**
   * Volte à página inicial do portal do Azure e procure por "Serviços de IA do Azure".
   * Configure as opções de assinatura, grupo de recursos e plano.
   * Revise as configurações e finalize a criação do serviço.

</details>

<details>
<summary>Carregando seus Documentos</summary>

1. **Crie um Contêiner de Armazenamento do Azure:**
   * Acesse o portal do Azure e procure por "Armazenamento de Blobs do Azure".
   * Crie um novo contêiner com as configurações de acesso público e nome desejados.
   
2. **Faça Upload dos seus Documentos:**
   * Baixe o conjunto de dados de exemplo [avaliações de café](https://aka.ms/mslearn-coffee-reviews) e extraia os arquivos.
   * No portal do Azure, acesse o contêiner criado e faça upload dos arquivos de avaliação.

</details>

<details>
<summary>Indexando seus Documentos</summary>

1. **Importe seus Dados:**
   * No portal do Azure, navegue até o serviço Azure AI Search e selecione "Importar dados".
   * Selecione "Armazenamento de Blobs do Azure" como fonte de dados e configure os detalhes de conexão.
   * Escolha "Conteúdos e metadados" como dados a extrair e defina o modo de análise como "Padrão".
   * Selecione a conta de armazenamento, o contêiner de avaliações e deixe a pasta Blob vazia.
   * Insira uma descrição para seus dados e avance para a próxima etapa.
   
2. **Adicione Habilidades Cognitivas (opcional):**
   * Selecione o serviço de Serviços de IA do Azure criado anteriormente.
   * Na seção "Adicionar enriquecimentos", habilite o OCR e mescle todo o texto no campo "merged_content".
   * Configure o nível de granularidade de enriquecimento para "Páginas" e selecione os campos enriquecidos desejados.
   * Escolha as projeções de blob do Azure "Documento" e configure o nome do contêiner com as exibições preenchidas automaticamente.
   
3. **Personalize o Índice de Destino:**
   * Altere o nome do índice para "coffee-index" e configure a chave como "metadata_storage_path".
   * Revise as configurações padrão dos campos de índice e marque "filtrável" para os campos selecionados.
   
4. **Crie um Indexador:**
   * Altere o nome do indexador para "coffee-indexer" e deixe a programação como "Once".
   * Expanda as opções avançadas e certifique-se de que a opção "Base-64 Encode Keys" esteja selecionada.
   * Clique em "Enviar" para criar a fonte de dados, o conjunto de habilidades, o índice e o indexador.

</details>

<details>
<summary>Consultando o Índice</summary>

1. **Utilize o Search Explorer:**
   * Na página Visão geral do serviço de pesquisa, selecione "Explorador de pesquisa".
   * Verifique se o índice selecionado é "coffee-index" e altere a visualização para "JSON".
   
2. **Execute Consultas:**
   * No campo do editor de consultas JSON, cole o seguinte código:JSON
     ```json
     { "search": "*", "count": true }
     ```
   * Clique em "Pesquisar" para ver todos os documentos no índice e a contagem total.
   * Experimente outras consultas para filtrar por localização, sentimento, frases-chave e outras propriedades.

</details>

<details>
<summary>Analisando o Armazenamento de Conhecimento</summary>

1. **Acesse o Armazenamento de Conhecimento:**
   * No portal do Azure, navegue até o contêiner "coffee-skillset-knowledge-store".
   * Explore os arquivos JSON para visualizar os dados enriquecidos extraídos pelas habilidades de IA.
   
2. **Visualize Imagens:**
* No contêiner "coffee-skillset-image-projection", você encontrará as imagens originais e suas projeções com metadados extraídos.
* Selecione um arquivo .jpg e clique em "Editar" para visualizar a imagem.
* Observe como as informações de texto da imagem, como legendas e descrições, são armazenadas em formato JSON.

3. **Explore as Projeções:**
* O contêiner "coffee-skillset-knowledge-store" contém projeções JSON para cada documento indexado.
* Cada projeção inclui metadados, campos de texto enriquecidos e entidades extraídas.
* Explore os arquivos JSON para entender a estrutura dos dados e os insights que eles podem fornecer.

4. **Identifique Insights:**
* Utilize ferramentas de análise de dados para explorar e visualizar os dados no armazenamento de conhecimento.
* Procure por padrões, tendências e insights acionáveis que podem ser usados para melhorar seus produtos, serviços e decisões de negócios.

</details>

<details>
<summary>Considerações Finais</summary>

* **Enriquecimento de dados** : O Azure Cognitive Search oferece uma gama de habilidades cognitivas que podem extrair insights valiosos dos dados, como entidades, frases-chave, sentimentos e imagens.
* **Análise de dados** : A consulta avançada permite que você explore os dados enriquecidos e identifique padrões, tendências e insights acionáveis.
* **Escalabilidade** : O Azure Cognitive Search é altamente escalável, permitindo lidar com grandes volumes de dados e consultas complexas com muita facilidade.
* **Custo** : O serviço é baseado em um modelo de preços de pagamento por uso, o que significa que você paga apenas pelos recursos que utiliza.

O Azure Cognitive Search é uma ferramenta poderosa para desenvolvedores e empresas que desejam:

* **Melhorar a experiência de pesquisa** : Crie interfaces de pesquisa intuitivas e relevantes que forneçam aos usuários os resultados que eles desejam.
* **Extrair insights de dados** : Descubra insights ocultos em seus dados e tome decisões mais inteligentes baseadas em dados.
* **Aumentar a eficiência** : Automatize tarefas manuais e otimize seus processos de negócios.

Ao utilizar o Azure Cognitive Search, podemos desbloquear o potencial de nossos dados e criar aplicativos inovadores que impulsionam o sucesso do negócio.

</details>
