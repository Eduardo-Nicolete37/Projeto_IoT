# Pesquisa Conceitual – ARI

## O que é uma API?
A sigla API se refere a “Application Programming Interface”. Em português “Interface de Programação de Aplicações”. Ela é utilizada como um intermediário para o banco de dados e o cliente. Algo similar a um Shell, o cliente faz um pedido, o Shell envia para o “fala” com o Kernel, o Kernel responde e o Shell te devolve a resposta. Também pode ser imaginado como uma relação de Cliente X Garçom X Cozinha.

A API se tornou uma das bases da TI na atualidade, sendo de grande importância para diversos projetos na área de:
* Integração de Redes e Compartilhamento de Dados
* Automação de Projetos
* Serviços Financeiros
* Internet of Things (IoT)
* Desenvolvimento de Software e Nuvem

---

## O que é REST e como se conecta com API?
Se referindo a Representational State Transfer, ou Transferência de Estado Representacional, tratando-se de um estilo de arquitetura de Software, se baseando em um conjunto de restrições e princípios para o desenvolvimento de serviços web escaláveis, de forma que seja fácil de manter e simples de usar.

Foi criada por Roy Fielding e seu doutorado de 2000, REST não se resume em um simples protocolo ou tecnologia, mas sim se mostra ser uma verdadeira abstração de arquitetura web, visando atingir a melhor forma de comunicação entre sistemas distribuídos.

Para que uma API seja considerada RESTful, ela precisa seguir alguns princípios:
* Utilizar HTTP
* O servidor não deve guardar memória de requisições anteriores
* Tudo na API deve ser tratado como um “recurso” (EX: /clientes, /temperatura, etc)

---

## O que é CRUD?
Em resumo, CRUD é um acrônimo para Create, Read, Update, Delete. Sendo as 4 funções fundamentais de um sistema de manipulação de dados. Tais ações são os pilares fundamentais de toda a área de Desenvolvimento de Sistemas, permitindo toda e qualquer mudança e tratamento de dados de um banco de dados.

Foi visto pela primeira vez no livro “Principles of Database Management Systems”, publicado em 1976 por James Martin.

Mesmo sendo o mais famoso, o CRUD não é o único acrônimo bom para as 4 funções fundamentais, outros muito bons são:
* **ABCD:** Add, Browse, Change and Delete
* **BREAD:** Browse, Read, Edit, Add and Delete
* **VADE(R):** View, Add, Delete, Edit (e Restore, para sistemas com processos transacionais)
* **VEIA:** Visualizar, Excluir, Inserir, Alterar

---

## O que é HTTP e Status Code?
Se referindo a Hypertext Transfer Protocol, ou em português Protocolo de Transferência de Hipertexto, é como o próprio nome diz, um protocolo de comunicação utilizado para sistemas de hipermídia, sendo a base para a World Wide Web (WWW).

Funciona como um protocolo de Requisição-Resposta, utilizando o método de Cliente-Servidor. Em resumo, se baseia em um método de troca de informações de forma organizada e segura.

Já o Status Code são números dentro do protocolo HTTP, usados para que o servidor emita como resposta a um pedido do cliente, elas são divididas em 5 categorias:
* **1XX** – Informativa
* **2XX** – Sucesso
* **3XX** – Redirecionamento
* **4XX** – Erro do Cliente
* **5XX** – Outros erros

### Detalhamento dos Códigos

| Categoria | Código e Nome | Descrição |
| :--- | :--- | :--- |
| **1xx** | 100 Continue | O servidor deu o "ok" para você enviar o corpo da mensagem (muito usado em uploads grandes). |
| **1xx** | 101 Switching Protocols | Comum quando você tenta estabelecer uma conexão WebSocket. |
| **2xx** | 200 OK | O sucesso padrão. |
| **2xx** | 201 Created | Sucesso após um POST ou PUT que criou um novo recurso (ex: novo usuário cadastrado). |
| **2xx** | 204 No Content | O servidor processou tudo, mas não tem nada para te mostrar (comum em ações de DELETE). |
| **3xx** | 301 Moved Permanently | O endereço mudou para sempre. Importante para SEO. |
| **3xx** | 302 Found | Mudou só agora, mas pode voltar ao normal depois. |
| **3xx** | 304 Not Modified | "Use o que você já tem no seu cache". Economiza muita banda de internet. |
| **4xx** | 400 Bad Request | A requisição veio "torta" (erro de sintaxe ou dados faltando). |
| **4xx** | 401 Unauthorized | Você não disse quem você é (falta de login). |
| **4xx** | 403 Forbidden | Eu sei quem você é, mas você não tem permissão para acessar isso. |
| **4xx** | 404 Not Found | O clássico "não encontrei esta página". |
| **4xx** | 429 Too Many Requests | Você está enviando requisições rápido demais (limite de taxa). |
| **5xx** | 500 Internal Server Error | O erro genérico. O código deu "crash" ou o servidor configurou algo errado. |
| **5xx** | 502 Bad Gateway | O servidor que você acessou recebeu uma resposta inválida de outro servidor (comum quando o Nginx não consegue falar com o Node.js/PHP). |
| **5xx** | 503 Service Unavailable | O servidor está sobrecarregado ou em manutenção. |
| **5xx** | 504 Gateway Timeout | O servidor demorou tanto para responder que a conexão caiu. |

---

## O que é JSON?
Refere-se a Javascript Object Notation, é um formato otimizado para troca de dados, como o nome diz, se derivou do Javascript, porém, ele se mostrou tão otimizado e superior que estourou a bolha e é utilizado em diversas linguagens de programação, não apenas Javascript.

Se baseia em simplesmente uma chave e o que a chave recebe, como por exemplo:

```json


{
  "rua": "Dr. Angelino Sanches",
  "numero": "800"
}
```

---

## PARTE 2 — DOCUMENTAÇÃO DOS ENDPOINTS/ROTAS

Esta é a seção técnica da documentação, detalhando como interagir com a API de monitoramento de sensores.

### 1. Listar Todos os Dados
* **Método e Rota:** `GET /api/dados`
* **Descrição:** Retorna o array completo com todo o histórico de sensores armazenado.
* **Parâmetros:** Nenhum.
* **Exemplo de Requisição:** `GET http://localhost:3000/api/dados`
* **Resposta de Sucesso:**
    * **Status Code:** 200 OK
    * **Body:**
        ```json
        [
          { "id": 1, "temperatura": 30, "umidade": 40, "hora": "09:03" },
          { "id": 2, "temperatura": 27, "umidade": 50, "hora": "10:03" },
          { "id": 3, "temperatura": 26, "umidade": 35, "hora": "11:03" }
        ]
        ```

---

### 2. Buscar Dado Específico
* **Método e Rota:** `GET /api/dados/:id`
* **Descrição:** Busca e retorna as informações de um único registro através do ID.
* **Parâmetros:** `id` (parâmetro de rota).
* **Exemplo de Requisição:** `GET http://localhost:3000/api/dados/1`
* **Resposta de Sucesso:**
    * **Status Code:** 200 OK
    * **Body:**
        ```json
        { "id": 1, "temperatura": 30, "umidade": 40, "hora": "09:03" }
        ```
* **Resposta de Erro:**
    * **Status Code:** 404 Not Found
    * **Body:** `{ "mensagem": "ID não encontrado!" }`

---

### 3. Criar Novo Registro
* **Método e Rota:** `POST /api/dados`
* **Descrição:** Recebe dados de temperatura, umidade e hora para salvar um novo registro.
* **Parâmetros:** Body em JSON contendo `temperatura`, `umidade` e `hora`.
* **Exemplo de Requisição:** `POST http://localhost:3000/api/dados`
    * **Body:**
        ```json
        {
          "temperatura": 28,
          "umidade": 45,
          "hora": "12:00"
        }
        ```
* **Resposta de Sucesso:**
    * **Status Code:** 201 Created
    * **Body:**
        ```json
        {
          "mensagem": "Dados enviados com sucesso!",
          "dados": { "id": 4, "temperatura": 28, "umidade": 45, "hora": "12:00" }
        }
        ```
* **Resposta de Erro:**
    * **Status Code:** 400 Bad Request
    * **Body:** `{ "mensagem": "Dados incompletos!" }`

---

### 4. Atualizar Registro
* **Método e Rota:** `PUT /api/dados/:id`
* **Descrição:** Substitui as informações de um registro existente baseado no ID.
* **Parâmetros:** `id` (rota) e Body em JSON.
* **Exemplo de Requisição:** `PUT http://localhost:3000/api/dados/2`
    * **Body:**
        ```json
        {
          "temperatura": 22,
          "umidade": 55,
          "hora": "15:30"
        }
        ```
* **Resposta de Sucesso:**
    * **Status Code:** 200 OK
    * **Body:** `{ "mensagem": "Dados atualizados com sucesso!" }`
* **Resposta de Erro:**
    * **Status Code:** 404 Not Found
    * **Body:** `{ "mensagem": "Não é possivel atualizar algo inexistente!" }`

---

### 5. Deletar Registro
* **Método e Rota:** `DELETE /api/dados/:id`
* **Descrição:** Remove um registro do banco de dados através do ID informado.
* **Parâmetros:** `id` (parâmetro de rota).
* **Exemplo de Requisição:** `DELETE http://localhost:3000/api/dados/3`
* **Resposta de Sucesso:**
    * **Status Code:** 200 OK
    * **Body:** `{ "mensagem": "Dados excluidos com sucesso!" }`
* **Resposta de Erro:**
    * **Status Code:** 404 Not Found
    * **Body:** `{ "mensagem": "Não é possivel deletar algo inexistente!" }`
