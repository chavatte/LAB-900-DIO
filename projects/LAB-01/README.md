
# Machine Learning na Prática: Um Guia com Azure ML

Seguindo as diretrizes do site **[Microsoft Learn](https://microsoftlearning.github.io/mslearn-ai-fundamentals/Instructions/Labs/01-machine-learning.html)**, o trabalho foi desenvolvido através das seguintes etapas:

- **Experimentação com diversos algoritmos e parâmetros:** O aprendizado de máquina automatizado possibilitou a avaliação de diferentes modelos, permitindo a seleção do mais eficiente para o conjunto de dados utilizado.

- **Treinamento de um modelo preditivo:** Um conjunto de dados históricos de aluguel de bicicletas foi utilizado para treinar um modelo capaz de prever o número de aluguéis esperados em um determinado dia, levando em consideração fatores sazonais e climáticos.

## Jornada completa de Machine Learning: Criando, Treinando, Implantando, Testando e Excluído um modelo

<details>
<summary>Acesse o Portal do Azure e Crie seu Workspace do Azure Machine Learning</summary>

### Autenticação:
Acesse o portal do Azure com suas credenciais da Microsoft.

### Criando um Novo Recurso:
- Na barra de pesquisa, digite "+ Criar um recurso".
- Selecione "Machine Learning" e clique em "Criar".

### Configurando o Workspace:
- **Assinatura:** Selecione a assinatura do Azure que deseja usar.
- **Grupo de Recursos:** Crie ou selecione um grupo de recursos para o workspace.
- **Nome:** Insira um nome exclusivo para o seu workspace.
- **Região:** Escolha a região geográfica mais próxima de você.
- **Conta de Armazenamento:** Observe a conta de armazenamento padrão que será criada para o workspace.
- **Cofre de Chaves:** Observe o cofre de chaves padrão que será criado para o workspace.
- **Insights de Aplicativos:** Observe o recurso de insights de aplicativos padrão que será criado para o workspace.
- **Registro de Contêiner:** Nenhum (será criado automaticamente na primeira vez que você implantar um modelo em um contêiner).

### Criando o Workspace:
- Clique em **"Revisar + Criar"** e, em seguida, em **"Criar"**.
- Aguarde a criação do workspace (pode levar alguns minutos).

### Acessando o Azure Machine Learning Studio:
- Na página do recurso implantado, clique em **"Launch Studio"**.
-  Você também pode abrir uma nova guia do navegador e acessar o Azure Machine Learning Studio usando sua conta da Microsoft.
- Feche todas as mensagens exibidas.

### Localizando o Workspace:
- No Azure Machine Learning Studio, você verá seu workspace recém-criado.
- Caso não o encontre, clique em **"Todos os Espaços de Trabalho"** no menu à esquerda e selecione o workspace que você criou.
</details>
<details>
<summary>Criando um Trabalho de ML Automatizado com Configurações Detalhadas</summary>
  
### Informações Básicas:
- **Nome do Trabalho:** mslearn-bike-automl
- **Novo Nome do Experimento:** mslearn-bike-rental
- **Descrição:** Previsão de Aluguel de Bicicletas com Aprendizado de Máquina Automatizado
- **Marcadores:** Nenhum
  
### Tipo de Tarefa e Dados:
- **Tipo de Tarefa:** Regressão
- **Conjunto de Dados:** Novo conjunto de dados com as seguintes configurações:

### Dados:
- **Nome:** bike-rentals
- **Descrição:** Dados Históricos de Aluguel de Bicicletas
- **Tipo:** Tabular
- **Fonte de Dados:** De arquivos da Web
- **URL da Web:** https://aka.ms/bike-rentals
- **Validação de Dados:** Não selecionar
  
### Configurações:
- **Formato do Arquivo:** Delimitado
- **Delimitador:** Vírgula
- **Codificação:** UTF-8
- **Cabeçalhos de Coluna:** Apenas o primeiro arquivo possui cabeçalhos
- **Ignorar Linhas:** Nenhum
- **Conjunto de Dados com Dados de Várias Linhas:** Não selecionar
  
### Esquema:
- **Incluir todas as colunas exceto Path**
- **Revise os tipos detectados automaticamente**
  
### Criar:
#### Selecione **Criar** Após a criação do conjunto de dados, selecione-o para continuar.

#### Configurações de Tarefa:
- **Tipo de Tarefa:** Regressão
- **Conjunto de Dados:** bike-rentals
- **Coluna de Destino:** rentals (Integer)
  
### Configurações Adicionais:
- **Métrica Primária:** Normalized root mean squared error
- **Explicar o Melhor Modelo:** Não selecionado
- **Usar Todos os Modelos Suportados:** Desmarcado

### Modelos Permitidos:
- **Selecione apenas RandomForest e LightGBM**

### Limites:
- **Máximo de Avaliações:** 3
- **Máximo de Avaliações Simultâneas:** 3
- **Máximo de Nós:** 3
- **Limite de Pontuação da Métrica:** 0,085
- **Tempo Limite do Experimento (minutos):** 15
- **Tempo Limite de Iteração (minutos):** 15
- **Habilitar Encerramento Antecipado:** Selecionado

### Validação e Teste:
- **Tipo de Validação:** Divisão de Validação de Treinamento
- **Validação de Percentual de Dados:** 10
- **Dados de Teste:** Nenhum

### Computação:
- **Tipo de Computação:** Sem servidor
- **Tipo de Máquina Virtual:** CPU
- **Camada de Máquina Virtual:** Dedicado
- **Tamanho da Máquina Virtual:** Standard_DS3_V2
- **Número de Instâncias:** 1

### Envio e Treinamento:
- **Envie o trabalho para treinamento.**
- **O treinamento iniciará automaticamente.**
- **Aguarde a conclusão do trabalho.**
</details>
<details>
<summary>Analisando o Melhor Modelo Treinado</summary>
  
Após a conclusão do trabalho de Machine Learning Automatizado, você pode revisar o melhor modelo treinado para entender seu desempenho e confiabilidade.

### Resumo do Melhor Modelo:
#### Na guia Visão geral do trabalho, observe o resumo do melhor modelo. Este resumo inclui informações como:
- Nome do Algoritmo
- Métricas de Desempenho
- Detalhes da Configuração

### Mensagem de Aviso:
É possível que você encontre uma mensagem informando **"Aviso: pontuação de saída especificada pelo usuário alcançada..."**. Essa mensagem é esperada e indica que o trabalho atingiu o nível de precisão definido por você.

### Visualizando Detalhes do Modelo:
- Clique no nome do algoritmo do melhor modelo para visualizar seus detalhes.
- Na guia Métricas, selecione os gráficos **"residuals"** e **"predicted_true"** para analisar o desempenho do modelo.

### Compreendendo os Gráficos:
- O gráfico **"residuals"** mostra os resíduos (diferenças entre os valores previstos e reais) como um histograma.
- O gráfico **"predicted_true"** compara os valores previstos com os valores reais.
  
### Interpretando os Gráficos:
- Um histograma de resíduos com formato de sino indica que os erros do modelo são aleatórios e normalmente distribuídos.
- No gráfico **"predicted_true"**, pontos próximos à linha diagonal indicam alta correlação entre os valores previstos e reais.
  
### Considerações Importantes:
- Avalie os gráficos em conjunto com as métricas de desempenho para ter uma visão completa do modelo.
- Utilize seu conhecimento sobre o problema em questão para interpretar os resultados e determinar se o modelo é satisfatório.

### Próximos Passos:
#### Com base na análise do melhor modelo, você pode:
- Refinar o modelo ajustando parâmetros ou selecionando outros algoritmos.
- Implantar o modelo em produção para gerar previsões reais.
- Explorar outros modelos com bom desempenho para comparação.
  
</details>
<details>
<summary>Implementando e Testando o Modelo</summary>

Após analisar o melhor modelo treinado, você pode implantá-lo e testá-lo para verificar seu desempenho em um ambiente real.

### Implantação do Modelo:
- Na guia **"Modelo"** do melhor modelo, clique em **"Implantar"**.
- Selecione a opção **"Serviço Web"** para implantar o modelo como um serviço acessível via API.

### Configure as seguintes opções:
- **Nome:** predict-rentals
- **Descrição:** Prever aluguel de bicicletas
- **Tipo de computação:** Instância de Contêiner do Azure
- **Habilitar autenticação:** selecionado
- Aguarde a conclusão da implantação, que pode levar alguns segundos.
- O status da implantação do endpoint de previsão de aluguel será mostrado como **"Running"** na página principal.

### Aguardando a Conclusão:
Aguarde até que o status da implantação mude para **"Succeeded"**. Isso pode levar até 15 minutos.

### Testando o Modelo:
Após a implantação bem-sucedida, você pode testar o modelo enviando dados de entrada e verificando as previsões geradas.

### Considerações Importantes:
- Certifique-se de que o modelo esteja funcionando de acordo com o esperado antes de utilizá-lo em produção.
- Monitore o desempenho do modelo em produção e faça ajustes conforme necessário.

### Próximos Passos:
#### Com o modelo implantado e testado, você pode:
- Integrá-lo a outros sistemas ou aplicativos.
- Utilizá-lo para gerar previsões em tempo real.

### Testando o Serviço Implantado
Com o modelo implantado, você pode testá-lo para verificar se está funcionando como esperado.

### Acessando o Ponto de Extremidade:
- No Azure Machine Learning Studio, selecione **"Pontos de Extremidade"** no menu à esquerda.
- Abra o ponto final em tempo real **"predict-rentals"**.

### Testando o Modelo:
- Na página do ponto final, vá para a guia "Testar".
- No painel "Inserir dados para teste de ponto de extremidade", substitua o modelo JSON pelos seguintes

### dados de entrada:
**Json File** - [/test.json](./test.json)
```json
 {
   "Inputs": { 
     "data": [
       {
         "day":1,
         "mnth": 1,   
         "year": 2022,
         "season": 2,
         "holiday": 0,
         "weekday": 1,
         "workingday": 1,
         "weathersit": 2, 
         "temp": 0.3, 
         "atemp": 0.3,
         "hum": 0.3,
         "windspeed": 0.3 
       }
     ]    
   },   
   "GlobalParameters": 1.0
 }
```

- Clique no botão "Testar".
Analisando os Resultados:
- Revise os resultados do teste, que incluem uma previsão do número de aluguéis com base nos dados de entrada.
- O resultado gerado, no meui caso, foi esse:
**Json File** - [/result.json](./result.json)
```json
{
"Results": [
    373.6210153685091
  ]
}
```

### Compreendendo o Teste:
- O painel de teste utilizou os dados de entrada e o modelo treinado para gerar a previsão do número de aluguéis.
- Este teste demonstra como o modelo pode ser usado para prever o número de aluguéis de bicicletas em um determinado dia, com base em características sazonais e meteorológicas.

### Revisão do Processo:
- Você utilizou um conjunto de dados históricos de aluguel de bicicletas para treinar um modelo.
- O modelo foi implantado como um serviço web acessível via API.
- O serviço implantado foi testado com dados de entrada específicos, gerando uma previsão do número de aluguéis.
</details>
<details>
<summary>Limpeza e Exclusão</summary>

### Serviço Web:
O serviço web criado está hospedado em uma instância de contêiner do Azure. Se você não pretende usá-lo mais, é recomendável excluí-lo para evitar cobranças desnecessárias de recursos do Azure.

### Para excluir o serviço web:
- No Azure Machine Learning Studio, acesse a guia **"Pontos de Extremidade"**.
- Selecione o ponto de extremidade **"predict-rentals"**.
- Clique em **"Excluir"** e confirme a exclusão.

### Computação:
**Excluir a computação garante que você não seja cobrado por recursos computacionais**. No entanto, você ainda poderá ser cobrado por uma pequena quantia de armazenamento de dados enquanto o espaço de trabalho do Azure Machine Learning existir na sua assinatura.

### Espaço de Trabalho:
Se você terminou de explorar o Azure Machine Learning, pode excluir o espaço de trabalho e os recursos associados.

### Para excluir o espaço de trabalho:
- No portal do Azure, acesse a página **"Grupos de Recursos"**.
- Abra o grupo de recursos que você especificou ao criar o seu espaço de trabalho.
- Clique em **"Excluir Grupo de Recursos"**.
- Digite o nome do grupo de recursos para confirmar a exclusão e clique em **"Excluir"**.
</details>
