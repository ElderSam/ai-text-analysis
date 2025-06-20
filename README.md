# API com integração de IA
API para analisar texto e detectar sentimentos usando IA.

A API foi desenvolvida em Node.js, onde é possível chamar um endpoint onde é enviado um texto e a API da ``Higging Face AI`` vai retornar o resultado da análise desse texto c

## ferramentas utilizadas
- [``Node.js``](https://nodejs.org/) (ambiente de execução de [``JavaScript``](https://developer.mozilla.org/docs/Web/JavaScript))
- [``Fastify``](https://fastify.dev/) (framework para criação da API)
- [``Swagger``](https://swagger.io/) (para documentação da rotas da API)
- [``dotenv``](https://www.npmjs.com/package/dotenv) (para o arquivo .env com variáveis de ambiente)
- API da [``Higging Face AI``](https://huggingface.co). [Link do modelo utilizado](https://huggingface.co/distilbert/distilbert-base-uncased-finetuned-sst-2-english). 
OBSERVAÇÃO: só retorna a porcentagem de sentimento `positivo` ou `negativo`. Exemplo: ![alt text](/public/feeling-analysis-by-AI.png)

## Como testar

1. Instale dependências:
``npm install``

2. Crie o arquivo `.env` com sua Hugging Face API Key:
``HF_API_KEY=your_huggingface_api_key_here``

Você pode gerar uma key gratuita em: https://huggingface.co/settings/tokens. Escolha a tipo 'Read' e um nome.


3. Inicie o server: ``npm start``

4. Testar rotas (no Swagger)
http://localhost:3000/docs

----------------------------------------
## Desafio

### Objetivo
Criar uma API simples que:
	1.	Analisa um texto de entrada.
	2.	Retorna estatísticas básicas.
	3.	Integra com uma API pública de IA para detectar sentimento.

### Requisitos obrigatórios
Crie um endpoint POST /analyze-text que receba um JSON com o seguinte formato:
```
{
  "text": "Seu texto livre aqui..."
}
```
A resposta da API deve conter:
- A contagem total de palavras.
- As 5 palavras mais frequentes (ignorando stopwords, se possível).
- Um resumo de sentimento do texto, utilizando alguma API pública de IA como:
  - OpenAI (ex: `gpt-3.5-turbo` ou `gpt-4`)
  - Claude (Anthropic)
  - Hugging Face (ex: `distilbert-base-uncased-finetuned-sst-2-english`)

### Opcional
Adicionar um endpoint GET /search-term?term=... que retorne:
- Se o termo informado foi encontrado na última análise.
- Pode manter o histórico em cache/memória ou SQLite.

### Tecnologias sugeridas
- Linguagens: Node.js ou Python
- Frameworks: Express, FastAPI, Django ou similar
- Armazenamento: pode usar cache em memória, JSON local ou SQLite
- Outras boas práticas:
- Organização do código
- Tratamento de erros
- Uso de status codes HTTP adequados
- Documentação simples (ex: Swagger ou README)

## Readme do Repositório

- Deve conter o título do projeto
- Uma descrição sobre o projeto em frase
- Deve conter uma lista com linguagem, framework e/ou tecnologias usadas
- Como instalar e usar o projeto (instruções)
- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore)
- Se está usando github pessoal, referencie que é um challenge by coodesh:  

>  This is a challenge by [Coodesh](https://coodesh.com/)

## Finalização e Instruções para a Apresentação

1. Adicione o link do repositório com a sua solução no teste
2. Verifique se o Readme está bom e faça o commit final em seu repositório;
3. Envie e aguarde as instruções para seguir. Caso o teste tenha apresentação de vídeo, dentro da tela de entrega será possível gravar após adicionar o link do repositório. Sucesso e boa sorte. =)


## Suporte

Para tirar dúvidas sobre o processo envie uma mensagem diretamente a um especialista no chat da plataforma. 
