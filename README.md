##Projeto-M4-API


Projeto de educacional do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/) referente ao Módulo 04.

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/).

## Objetivo
Esse projeto tem como objetivo criar uma API RESTful de um restaurante, onde será possível aplicar as operações CRUD na entidade`Motoboys` .

## Pré-Requisitos

* Node.js  v.16.14.0
* NPM v.8.3.1

## Pacotes utilizados
* [Express](https://www.npmjs.com/package/express) v.4.17.3
* [Nodemon](https://www.npmjs.com/package/nodemon) v.2.0.15
* [SQLite](https://www.npmjs.com/package/sqlite3)  v.5.0.0
* [Jest](https://jestjs.io/docs/getting-started)   v.27.5.1
* [Supertest](https://www.npmjs.com/package/supertest) v.6.2.2

## Instalação da Aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:
```
git clone https://github.com/andre21cavalcante/Projeto-M4-API
```
Entrando na pasta:
```
cd Projeto-M4-API

```

Instalando os pacotes:
```
npm install
```

Criando o banco de dados:
```
npm run database
```

Iniciando o servidor:
```
npm run dev
```

---

## Rotas implementadas

### Usuário

 * **GET /motoboy**
 
    Schema da resposta
    ```
    {
        motoboy: [
            {
                "nome" : <String>,
                "moto": <String>,
                "contato" : <String>,
                "pedido" : <String>
            }
        ],
        erro: <Boleano>

    }
    ```

 * **GET /motoboy/moto/{moto}**
 
    Schema da resposta
    ```
    {
        motoboy: [
            {
                "nome" : <String>,
                "moto": <String>,
                "contato" : <String>,
                "pedido" : <String>
            }
        ],
        erro: <Boleano>

    }
    ```

 * **POST /motoboy**

     Schema da requisição
    ```
    {
                "nome" : <String>,
                "moto": <String>,
                "contato" : <String>,
                "pedido" : <String>
    }
    ```

    Schema da resposta
    ```
    {   
        mensagem: <String>
        motoboy: {
                "nome" : <String>,
                "moto": <String>,
                "contato" : <String>,
                "pedido" : <String>
        },
        erro: <Boleano>
    }
    ```

 * **PUT /motoboy/id/{id}**

     Schema da requisição
    ```
    {   
                "nome" : <String>,
                "moto": <String>,
                "contato" : <String>,
                "pedido" : <String>
    }
    ```

    Schema da resposta
    ```
    {   
        mensagem: <String>
        motoboy: {
                "nome" : <String>,
                "moto": <String>,
                "contato" : <String>,
                "pedido" : <String>
        },
        erro: <Boleano>
    }
    ```

 * **DELETE /motoboy/id/{id}**

    Schema da resposta
    ```
    {   
        mensagem: <String>
        erro: <Boleano>
    }
    ```



---

Projeto desenvolvido por [André Cavalcante](https://github.com/andre21cavalcante)
