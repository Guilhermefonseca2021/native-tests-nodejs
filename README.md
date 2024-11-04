## ListManager

Este projeto foi desenvolvido para gerenciar listas com capacidade limitada e demonstrar testes unitários de funcionalidades em JavaScript.

## Pré-requisitos

- [Node.js-v22.1+](https://nodejs.org/en)
  
## Funcionalidades

Capacidade inicial: Quando um valor de capacidade máxima não é fornecido, a capacidade será inicializada como 0.
Capacidade definida: A capacidade pode ser definida no momento da criação da instância.
Redução da capacidade ao adicionar itens: A capacidade diminui conforme itens são adicionados, até o limite definido.
Exemplos de uso
Instanciação sem capacidade definida
javascript

```js
const empty = new ListManager();
console.log(empty.capacity()); // Saída: 0
```

Instanciação com capacidade definida
javascript

```js
const fruits = new ListManager(5);
console.log(fruits.capacity()); // Saída: 5
```

Redução de capacidade ao adicionar itens
javascript

```js
const fruits = new ListManager(5);
fruits.addItem("apple");
console.log(fruits.capacity()); // Saída: 4
```

## Testes

Abaixo estão os testes que garantem o funcionamento correto da classe ListManager.

Inicialização com capacidade 0 (sem capacidade máxima fornecida)
```js
it("should be initialized to 0 when a maximum capacity is not provided", () => {
  const empty = new ListManager();
  assert.strictEqual(empty.capacity(), 0);
});
```

Capacidade definida de 5
```js
it("should have a capacity of 5", () => {
  const fruits = new ListManager(5);
  assert.strictEqual(fruits.capacity(), 5);
});
```

Redução da capacidade de 5 para 4 após adicionar um item
javascript
```js
it("should reduce capacity from 5 to 4 when an item is added", () => {
  const fruits = new ListManager(5);
  fruits.addItem("apple");
  assert.strictEqual(fruits.capacity(), 4);
});
```











