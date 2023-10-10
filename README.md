# API de Gerenciamento de Produtos

Esta é uma API simples para gerenciar informações de produtos em um banco de dados.

## Funcionalidades

A API oferece as seguintes funcionalidades:

1. **Cadastrar Produto**: Você pode cadastrar informações sobre um novo produto, incluindo nome, descrição, valor e disponibilidade.

2. **Listar Produtos**: A API permite listar todos os produtos armazenados no banco de dados, exibindo suas informações.

3. **Deletar Produto**: É possível excluir um produto específico com base no seu ID.

4. **Editar Produto**: A API permite atualizar as informações de um produto existente, incluindo nome, descrição, valor e disponibilidade.

## Rotas da API

- `POST /CriarProduto`: Rota para cadastrar um novo produto.
- `GET /ListarProduto`: Rota para listar todos os produtos.
- `PUT /EditarProduto/:id/`: Rota para obter detalhes de um produto específico.
- `DELETE /DeletarProduto/:id`: Rota para excluir um produto específico.

## Requisitos

Para usar esta API, você precisa das seguintes dependências:

- Node.js
- Express.js
- MongoDB (ou outro banco de dados de sua escolha)

## Como Usar

1. Clone o repositório para o seu ambiente local.

2. Instale as dependências usando o comando:

3. Configure as variáveis de ambiente, como a conexão com o banco de dados, em um arquivo `.env`.

4. Inicie o servidor usando o comando:


5. Acesse a API através das rotas especificadas acima para cada funcionalidade.

## Exemplo de Uso

Aqui está um exemplo de como usar a API para cadastrar um novo produto:

```http
POST /api/produtos
Content-Type: application/json

{
"nome": "Produto A",
"descricao": "Descrição do Produto A",
"valor": 19.99,
"disponivel": true
}
