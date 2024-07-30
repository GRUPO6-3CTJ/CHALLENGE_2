![image](https://github.com/user-attachments/assets/976cb173-4eed-43e1-bde0-ca675c82a55a)

# CHALLENGE_2

## Book Management API | Tech Challenge - FIAP
Este projeto é uma API CRUD para gerenciamento de livros, desenvolvida como parte do Tech Challenge da FIAP. A API permite criar, ler, atualizar e deletar registros de livros. A aplicação é construída utilizando Node.js, Express e MongoDB.

### Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose

### Pré-requisitos
Antes de começar, certifique-se de ter o Node.js e o npm instalados em sua máquina. Além disso, você precisará de uma instância do MongoDB em execução. Você pode usar o MongoDB localmente ou via Docker.

#### Instalação
##### Clone este repositório:
git clone <URL_DO_SEU_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>

##### Instale as dependências:
- `npm init -y`
- `npm install nodemon@3.0.1`
- `npm install dotenv`
- `npm install express`
- `npm install mongoose`

#### Configure o MongoDB:

Certifique-se de que o MongoDB está em execução. Se estiver usando Docker, execute: `docker run -d -p 27017:27017 --name mongodb mongo`

### Estrutura do Projeto
![Estrutura do projeto](https://github.com/user-attachments/assets/f70e62bb-e2bc-4751-9297-7a658db4fe38)

### Configuração do Banco de Dados
A configuração da conexão com o MongoDB está localizada em config/database.js. Certifique-se de que o MongoDB está em execução e acessível na porta padrão 27017.

### Executando a Aplicação
Para iniciar o servidor, execute:
`npm start`

O servidor estará em execução na porta 3000.

## Endpoints da API
### Criar um Livro

##### URL: /livros
##### Método: POST
##### Body: (JSON

![image](https://github.com/user-attachments/assets/08415af6-5cb9-48b1-bb1b-c14f602e793f)

## Listar Todos os Livros

- URL: /livros
- Método: GET
 
## Obter um Livro pelo ID

- URL: /livros/:id
- Método: GET

## Atualizar um Livro

- URL: /livros/:id
- Método: PUT
- Body: (JSON)


Corpo do request deve possuir variavel a ser atualizada
| Parameter |	Type |
|-----------|------|
| titulo | String |
| editora |	String |
| preco |	Number |
| paginas |	Number |
| autor |	ObjectId |

![image](https://github.com/user-attachments/assets/1f76d733-f439-4f06-879d-84bc34c33ae8)


## Deletar um Livro
''
URL: /livros/:id
Método: DELETE
''

Possui como parametros obrigatórios para a inclusão do id do livro a ser atualizado na rota

(ex 66a2f286e9cf4da83108e8d4)

Não possui corpo no request 

![image](https://github.com/user-attachments/assets/8c30a987-015c-4291-bb9c-5c811f13549a)


# Testando a API
Você pode testar a API usando o Postman ou qualquer outra ferramenta de sua preferência.

## Exemplo de Requisição POST no Postman

Doc Postman: https://documenter.getpostman.com/view/37035119/2sA3kaCK16
- Endpoint: http://localhost:3000/livros
  - Método: POST
  - Body: (raw, JSON)


![image](https://github.com/user-attachments/assets/b7a8cf35-aa83-466f-9671-316a53212c44)


## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
