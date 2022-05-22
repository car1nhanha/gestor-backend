<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# API gestor do povo

Api gestor do povo feita em [Nest.js](https://nestjs.com/).

## Etiquetas

[![NPM Version](https://img.shields.io/npm/v/@nestjs/core.svg)](https://www.npmjs.com/~nestjscore)
[![Package License](https://img.shields.io/npm/l/@nestjs/core.svg)](https://www.npmjs.com/~nestjscore)
[![NPM Downloads](https://img.shields.io/npm/dm/@nestjs/common.svg)](https://www.npmjs.com/~nestjscore)
[![CircleCI](https://img.shields.io/circleci/build/github/nestjs/nest/master)](https://circleci.com/gh/nestjs/nest)
[![Coverage](https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9)](https://coveralls.io/github/nestjs/nest?branch=master)
[![Discord](https://img.shields.io/badge/discord-online-brightgreen.svg)](https://discord.gg/G7Qnnhy)
[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
[![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)
[![](https://img.shields.io/badge/Donate-PayPal-ff3f59.svg)](https://paypal.me/kamilmysliwiec)
[![Support us](https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg)](https://opencollective.com/nest#sponsor)
[![](https://img.shields.io/badge/%F0%9F%93%B7%20instagram-214%20-e000a8)](https://www.instagram.com/lucascarinhanha/)

## Autores

- [@car1nhanha](https://github.com/car1nhanha)

## 🚀 Documentação da API

🗒 Lista de rotas suportadas e seus respectivos parametros.

#### Verbos suportados

- 🔵 GET
- 🟢 POST
- 🟡 PUT
- 🔴 DELETE

### Tag Usuário

#### Retorna todos os usuários

```http
  GET /api/users 🔵
```

| Parâmetro | Tipo | Descrição |
| :-------- | :--- | :-------- |
| \_        | \_   | \_        |

#### Retorna um único usuário com base no id

```http
  GET /api/users/{id} 🔵
```

| Parâmetro | Tipo | Descrição |
| :-------- | :--- | :-------- |
| \_        | \_   | \_        |

#### Criação de um novo usuário

```http
  POST /api/users 🟢
```

| Parâmetro   | Tipo       | Descrição                                                               |
| :---------- | :--------- | :---------------------------------------------------------------------- |
| `name`      | `string`   | **Obrigatório**. Nome do usuário                                        |
| `email`     | `string`   | **Obrigatório**. Email do usuário                                       |
| `function`: | `string`   | **Obrigatório**. Função do usuário, a maioria daz vezes será voluntário |
| `avatar`    | `string`   | Foto do usuário, não é obrigatório                                      |
| `password`  | `string`   | **Obrigatório**. Senha do usuário, sempre acima de 8 caracteres         |
| `level`:    | `number`   | Aínda tem que ser definido                                              |
| `pasta`:    | `[string]` | Array de pastas                                                         |
| `cep`:      | `string`   | **Obrigatório**. Cep sem o traço                                        |

#### Atualização de um usuário previamente cadastrado

- não pode ser passado um email

```http
  POST /api/users/{id} 🟡
```

| Parâmetro   | Tipo       | Descrição                                              |
| :---------- | :--------- | :----------------------------------------------------- |
| `name`      | `string`   | Nome do usuário                                        |
| `function`: | `string`   | Função do usuário, a maioria daz vezes será voluntário |
| `avatar`    | `string`   | Foto do usuário, não é obrigatório                     |
| `password`  | `string`   | Senha do usuário, sempre acima de 8 caracteres         |
| `level`:    | `number`   | Aínda tem que ser definido                             |
| `pasta`:    | `[string]` | Array de pastas                                        |
| `cep`:      | `string`   | Cep sem o traço                                        |

#### Deletar um usuário

```http
  DELETE /api/users/{id} 🔴
```

| Parâmetro | Tipo | Descrição |
| :-------- | :--- | :-------- |
| \_        | \_   | \_        |

### Tag pastas

As pastas são as áreas dentro do projeto como por exemplo: saúde, educação segurança, entre outros.

#### Retorna todas as pastas

```http
  GET /api/pastas 🔵
```

| Parâmetro | Tipo | Descrição |
| :-------- | :--- | :-------- |
| \_        | \_   | \_        |

#### Retorna uma única pasta com base no id

```http
  GET /api/pastas/{id} 🔵
```

| Parâmetro | Tipo | Descrição |
| :-------- | :--- | :-------- |
| \_        | \_   | \_        |

#### Criação de uma nova pasta

```http
  POST /api/pastas 🟢
```

| Parâmetro | Tipo     | Descrição                         |
| :-------- | :------- | :-------------------------------- |
| `name`    | `string` | **Obrigatório**. Nome do da pasta |

#### Atualização de uma pasta previamente cadastrada

```http
  POST /api/pastas/{id} 🟡
```

| Parâmetro | Tipo     | Descrição     |
| :-------- | :------- | :------------ |
| `name`    | `string` | Nome da pasta |

#### Deletar um pasta

```http
  DELETE /api/pastas/{id} 🔴
```

| Parâmetro | Tipo | Descrição |
| :-------- | :--- | :-------- |
| \_        | \_   | \_        |

## Referência

- [Modelo da api](https://github.com/car1nhanha/gestor-backend)
- [README.md](https://github.com/car1nhanha/gestor-backend/blob/main/README.md)

## Scripts do projeto

Para fazer o deploy desse projeto rode

## Instalação

```bash
$ npm install
```

## Rodando o app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Teste

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Documentação

[Documentação](https://link-da-documentação)

## Roadmap

- Melhorar o suporte de navegadores

- Adicionar mais integrações
