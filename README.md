<p align="center">
  <img src="https://user-images.githubusercontent.com/99821267/205466663-064f40ea-654a-435b-a4e5-5911b68890df.jpg" alt="ilustação carro" />
</p>


# :car: Car Shop

Car Shop uma API com CRUD para gerenciar uma concessionária de veículos,  utilizando o banco de dados MongoDB através do framework do Mongoose.

---

<br>

## 📋 Instalação

Clone o repositório:

```
git clone git@github.com:MatheusNF123/car-shop.git
cd car-shop
npm install
```
<br>

### Rodando localmente

```
Crie um arquivo `.env` com sua conexão ao MySQL.

cd car-shop
npm run dev


 - ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
```
<br>

## 🔎 Documentação da API

<br>

### Cadastrar um carro

```
 POST /cars
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `model` | `string` | **Obrigatório**. |
| `year` | `number` | **Obrigatório**. |
| `color` | `string` | **Obrigatório**. |
| `status` | `boolean` | **Obrigatório**. |
| `buyValue` | `number` | **Obrigatório**. |
| `doorsQty` | `number` | **Obrigatório**. |
| `seatsQty` | `number` | **Obrigatório**. |

<details close>
  <summary>Retorno da Api</summary>

    - JSON com os com seguinte formato:
    ```json
      {
        "id": "6348513f34c397abcad040b2",
        "model": "Marea",
        "year": 2002,
        "color": "Black",
        "status": true,
        "buyValue": 15.990,
        "doorsQty": 4,
        "seatsQty": 5
      }
 
    ```

  <br>
</details>

---

<br>

### listando todos os carros

```
  GET /cars
```

<details close>
 
  <summary>Retorno da Api</summary>

 - JSON com os com seguinte formato:
 
 ```json
        [
          {
            "id": "634852326b35b59438fbea2f",
            "model": "Marea",
            "year": 2002,
            "color": "Black",
            "status": true,
            "buyValue": 15.99,
            "doorsQty": 4,
            "seatsQty": 5
          },
          {
            "id": "634852326b35b59438fbea31",
            "model": "Tempra",
            "year": 1995,
            "color": "Black",
            "buyValue": 39,
            "doorsQty": 2,
            "seatsQty": 5
          }
        ]   
 ```
 
  <br>
</details>

---

<br>

### listando carro específico

```
  GET /cars/:id
```
<details close>
<summary>Retorno da Api</summary>

- JSON com os com seguinte formato:
   ```json
      {
          "id": "634852326b35b59438fbea2f",
          "model": "Marea",
          "year": 2002,
          "color": "Black",
          "status": true,
          "buyValue": 15.99,
          "doorsQty": 4,
          "seatsQty": 5
      }        
   ```
 <br> 
</details>

---

<br>

### Atualizando carro por ID

```
  PUT /cars/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `model` | `string` | **Obrigatório**. |
| `year` | `number` | **Obrigatório**. |
| `color` | `string` | **Obrigatório**. |
| `status` | `boolean` | **Obrigatório**. |
| `buyValue` | `number` | **Obrigatório**. |
| `doorsQty` | `number` | **Obrigatório**. |
| `seatsQty` | `number` | **Obrigatório**. |


<details close>
 <summary>Retorno da Api</summary>

 - JSON com os com seguinte formato:
 ```json
      {
        "id": "634852326b35b59438fbea2f",
        "model": "Marea",
        "year": 1992,
        "color": "Red",
        "status": true,
        "buyValue": 12.000,
        "doorsQty": 2,
        "seatsQty": 5
      }
 ``` 
 <br>
 
</details>

---

<br>

### Cadastrar uma moto

```
 POST /motorcycles
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `model` | `string` | **Obrigatório**. |
| `year` | `number` | **Obrigatório**. |
| `color` | `string` | **Obrigatório**. |
| `status` | `boolean` | **Obrigatório**. |
| `buyValue` | `number` | **Obrigatório**. |
| `category` | `string` | **Obrigatório**. |
| `engineCapacity` | `number` | **Obrigatório**. |

<details close>
<summary>Retorno da Api</summary>

 - JSON com os com seguinte formato:
```json
      {
        "id": "6348513f34c397abcad040b2",
        "model": "Honda Cb 600f Hornet",
        "year": 2005,
        "color": "Yellow",
        "status": true,
        "buyValue": 30.000,
        "category": "Street",
        "engineCapacity": 600
      }
```
 
  <br>
</details>

---

<br>

### listando todas as motos

```
  GET /motorcycles
```
<details close>
<summary>Retorno da Api</summary>

- JSON com os com seguinte formato:
```json
        [
          {
            "id": "634852326b35b59438fbea2f",
            "model": "Honda Cb 600f Hornet",
            "year": 2005,
            "color": "Yellow",
            "status": true,
            "buyValue": 30.000,
            "category": "Street",
            "engineCapacity": 600
          },
          {
            "id": "634852326b35b59438fbea31",
            "model": "Honda Cbr 1000rr",
            "year": 2011,
            "color": "Orange",
            "status": true,
            "buyValue": 59.900,
            "category": "Street",
            "engineCapacity": 1000
          }
        ]
```
 
<br>
 
</details>

---

<br>

### listando uma moto específica

```
  GET /motorcycles/:id
```
<details close>
<summary>Retorno da Api</summary>

- JSON com os com seguinte formato:
```json
        {
          "id": "634852326b35b59438fbea31",
          "model": "Honda Cbr 1000rr",
          "year": 2011,
          "color": "Orange",
          "status": true,
          "buyValue": 59.900,
          "category": "Street",
          "engineCapacity": 1000
        }
```
<br>
 
</details>

---

<br>

### Atualizando uma moto por ID

```
  PUT /motorcycles/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `model` | `string` | **Obrigatório**. |
| `year` | `number` | **Obrigatório**. |
| `color` | `string` | **Obrigatório**. |
| `status` | `boolean` | **Obrigatório**. |
| `buyValue` | `number` | **Obrigatório**. |
| `category` | `string` | **Obrigatório**. |
| `engineCapacity` | `number` | **Obrigatório**. |


<details close>
<summary>Retorno da Api</summary>

- JSON com os com seguinte formato:
```json
      {
        "id": "634852326b35b59438fbea2f",
        "model": "Honda Cb 600f Hornet",
        "year": 2014,
        "color": "Red",
        "status": true,
        "buyValue": 45.000,
        "category": "Street",
        "engineCapacity": 600
      }
``` 
<br>
 
</details>

---

<br>

### Deletando um carro pelo ID

```
  DELETE /cars/:id
```
<details close>
<summary>Retorno da Api</summary>

- Ao excluir com sucesso, retorne `status 204` sem body;  
  <br>
 
</details>

---

 <br>

### Deletando uma moto pelo ID

```
  DELETE /motorcycles/:id
```
<details close>
<summary>Retorno da Api</summary>

- Ao excluir com sucesso, retorne `status 204` sem body;     

 <br>
 
</details>

---
<br>

## 🛠️ Ferramentas & Metodologias Utilizadas

- [Node.js](https://nodejs.org/en/);
- [Express.js](https://expressjs.com/);
- [Mongoose](https://mongoosejs.com/).
- [Mongo](https://www.mongodb.com/)
- [Docker](https://www.docker.com/);
- [TypeScript](https://www.typescriptlang.org/);
- [MSC (model, service, controller)](https://martinfowler.com/architecture/).
- [REST](https://restfulapi.net/).
- [POO](https://www.alura.com.br/artigos/poo-programacao-orientada-a-objetos).
- [Mocha](https://mochajs.org/);
- [Chai](https://www.chaijs.com/);
- [Sinon.js](https://sinonjs.org/);

---
⌨️ desenvolvido por [Matheus Almeida Saporito](https://www.linkedin.com/in/matheus-almeida-saporito/) 😄

