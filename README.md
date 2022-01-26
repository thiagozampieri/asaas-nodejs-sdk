# asaas-nodejs-sdk
A wrapper to Asaas API

Um wrapper em NodeJS para a [API V3 Asaas](https://asaasv3.docs.apiary.io/)
Para utilizá-la, você deve fazer um cadastro para receber sua Access Token.

Para utilizar este wrapper, simplesmente inclua o módulo através de um require

```javascript
var asaas = require('asaas-nodejs-sdk');
```

Configure seu ambiente `sandbox` ou `production` e sua access token:

```javascript
asaas.settings.config({
	environment: 'sandbox || production',
	apiKey: 'sua_access_token',
	version: 'v3',
	debug: false,
});
``` 

Toda chamada a API deve conter uma função `callback` seguindo o padrão NodeJS, ou seja, primeiro argumento deve ser uma váriavel de erro(se existir) e o segundo uma variável de sucesso(se não houver erro).

Os métodos que tiverem um parâmetro `filter` devem receber um objeto chave-valor referente ao filtro ou o valor `null`.

```javascript
//com filtros
asaas.payment.getAll({ status:'OVERDUE' });

//sem filtros
asaas.payment.getAll(null);
```


Os métodos que tiverem um parâmetro `data` devem receber um objeto chave-valor contendo os dados.

Exemplo:

```javascript
asaas.customer.create({ name: 'nodejs', email: 'nodejs@nodejs.com' });
```

## Clientes

```javascript
//retorna todos os clientes
asaas.customer.getAll(filters || null);

//retorna determinado cliente por id
asaas.customer.getById(id);

//retorna cliente por email
asaas.customer.getByEmail(email);

//cria um cliente
asaas.customer.create({ name: 'nome', email: 'email@email.com' });

//atualiza determinado cliente por id
asaas.customer.update('cus_abc123',{ name: 'novo nome', address: 'nova rua' });

//exclui determinado cliente por id
asaas.customer.delete(id);
```

## Assinaturas

```javascript
//retorna todas as assinaturas
asaas.subscriptions.getAll(filters || null);

//retorna determinada assinatura por id
asaas.subscriptions.getById(id);

//retorna as assinaturas de determinado cliente com o customer_id
asaas.subscriptions.getByCustomer(filters || null, customer_id);

//cria uma nova assinatura
asaas.subscriptions.create(data);

//atualiza determinada assinatura por id
asaas.subscriptions.update(id, data);

//deleta determinada assinatura por id
asaas.subscriptions.delete(id);

```

## Cobranças

```javascript
//retorna todas as cobranças
asaas.payments.getAll(filters || null);

//retorna determinada cobrança por id
asaas.payments.getById(id);

//retorna cobranças de um determinado cliente
asaas.payments.getByCustomer(filters || null, customer_id);

//retorna cobranças de uma determinada assinatura
asaas.payments.getBySubscription(filters || null, subscription_id);

//cria uma nova cobrança
asaas.payments.create(data);

//atualiza uma determinada cobrança por id
asaas.payments.update(id, data);

//deleta uma determinada cobrança por id
asaas.payments.delete(id);

```

## Cidades

```javascript
//retorna todas as cidades
asaas.cities.getAll(filters || null);

//retorna determinada cidade por id
asaas.cities.getById(id);

//retorna determinada cidade por nome
asaas.cities.getByName(name);

```