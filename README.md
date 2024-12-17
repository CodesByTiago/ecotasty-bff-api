# Projeto EcoTasty BFF API

Projeto BFF API idealizado para fins de estudo para uma aplicação ficticia de
produtos orgânicos.

- Aplicado TypeORM.
- Usei PostgreSQL como banco de dados.
- Utilizei Docker para criar o banco local e o PgAdmin.
- Foi implementado sistema de auth e guard nas rotas principais de criaçàode clientes.
- Organização do projeto seguindo conceitos de clean architecture.

<hr />

![Home Screenshot](https://github.com/CodesByTiago/ecotasty-bff-api/blob/main/screenshots/home.png)

<hr />

**O que foi usado para ter esse projeto base:**

- Node.js
- Nest.js
- TypeORM
- JWT
- Swagger
- PostgreSQL
- Docker
- BCrypt

<hr />

**Variavéis de ambiente local para o projeto**

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=ecotasty
DB_PASSWORD=ecotasty
DB_NAME=ecotasty
DB_SYNCHRONIZE=true
DB_LOGGING=true
JWT_SECRET=COLOQUE AQUI O SEU JWT SECRET
```

**Configurando para rodar em sua máquina:**

```
1 - Clone ou baixe o repositório <br />
2 - Tenha instalado e rodando o Docker em sua máquina
3 - Execute o comando para instalar os pacotes necessários: `npm run install` <br />
4 - Rode o comando para executar os containers e subir o banco: `docker compose up -d`
3 - Rode o projeto executando o comando: `npm run start:dev` <br />
```

**Swagger Documentação**

Acesso a documentaçao com Swagger

```
Acessar a rota: http://localhost:3000/api
```

**PgAdmin: http://localhost:5050/browser**

Ao abrir o PgAdmin usar as seguintes informações:

```
Aba Geral
 - Nome: O de sua escolha

Aba Conexão
 - Host name/address: db
 - Username: ecotasty
 - Senha: ecotasty
```
