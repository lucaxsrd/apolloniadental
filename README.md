## Project Apollonia Dental

O projeto Apollonia Dental, é um projeto guiado disponibilizado pela Coursera.
Com ele estou exercitando e praticando, toda o aprendizado adquirido durante o curso de back-end desenvolvido pela Microsoft.

## A aplicação
É uma API RESTful, desenvolvida em Node.js e Express, com persistência de dados no MongoDB, tudo orquestrado com Docker.

Seguindo a lógica esse é o primeiro passo da aplicação, entretanto notei que fui precipitado e não segui algumas das solicitações que me foi passada como por exemplo, a organização do projeto pelos controllers (apenas criei a pasta e acabei por não utiliza-la).


## Ferramentas usadas nesse projeto

. Node.js: 
    Ambiente de execução JavaScript.

. Express: 
    Framework web para Node.js.

. Mongoose: 
    Modelagem de objetos para MongoDB.

. MongoDB: 
    Banco de dados NoSQL.

. Docker & Docker Compose: 
    Para empacotar e executar a aplicação e o banco de dados em ambientes isolados e consistentes.

## Estrutura do Projeto

. /models: 
    Contém os schemas do Mongoose para as entidades Employee e Department.

. /database.js: 
    Lógica para a conexão com o MongoDB.

. /server.js: 
    O arquivo principal que define o servidor Express e as rotas.

. docker-compose.yml: 
    Orquestra os serviços da aplicação e do banco de dados.

. Dockerfile: 
    Define a imagem Docker da aplicação Node.js.


## Endpoints da API

Rotas de gerenciamento: 

Funcionários (/api/employees)
. GET /api/employees

Retorna a lista de todos os funcionários.

. POST /api/employees

Cria um novo registro de funcionário.

. Corpo da requisição (JSON):

{
  "name": "Nome",
  "surname": "Sobrenome",
  "department": "ID_DO_DEPARTAMENTO"
}

. PUT /api/employees/:id

Atualiza um registro de funcionário pelo ID.

Corpo da requisição (JSON): Os campos são opcionais.

{
  "name": "Novo Nome",
  "surname": "Novo Sobrenome",
  "department": "NOVO_ID_DO_DEPARTAMENTO"
}

. DELETE /api/employees/:id

Deleta um registro de funcionário pelo ID.

Departamentos (/api/departments)
GET /api/departments/:id

Retorna os detalhes de um único departamento pelo seu ID.

ver. 0.0.1