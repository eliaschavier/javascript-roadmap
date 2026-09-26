# Variáveis — pontos principais

## `var`, `let` e `const`

* `var` → **function-scoped**
* `let` / `const` → **block-scoped**
* `const` impede **reatribuição** da variável, mas objetos/arrays ainda são mutáveis.

```js
const user = { name: "Elias" };
user.name = "João"; // ✅
user = {};          // ❌
```

## Hoisting

As declarações/bindings são processadas antes da execução normal, mas **a inicialização/atribuição não é movida**.

```js
console.log(a); // undefined
var a = 10;
```

É aproximadamente como:

```js
var a;
console.log(a);
a = 10;
```

## TDZ — Temporal Dead Zone

`let` e `const` têm o binding criado, mas **não podem ser acessados antes da inicialização**.

```js
console.log(a); // ReferenceError
let a = 10;
```

⚠️ Isso também acontece quando existe uma variável externa com o mesmo nome:

```js
let a = 10;

{
    console.log(a); // ReferenceError
    let a = 20;
}
```

O `a` interno **sombreia** o externo desde o início do bloco, mesmo antes da linha `let a = 20`.

## Declaração × inicialização × atribuição

```js
let x;    // declaração + inicialização com undefined
x = 10;   // atribuição
x = 20;   // nova atribuição
```

`const` precisa ser inicializado na declaração:

```js
const x; // ❌
```

## Shadowing ≠ redeclaração

**Shadowing:** existem bindings diferentes em scopes diferentes.

```js
let x = 10;

{
    let x = 20; // outro x
}
```

**Redeclaração:** tenta criar outro binding com o mesmo nome no mesmo scope.

```js
let x = 10;
let x = 20; // ❌
```

## `var` e blocos

```js
{
    var x = 10;
}

console.log(x); // 10
```

Um `{}` sozinho cria um **block scope**, mas `var` não usa esse bloco como seu scope.

Já:

```js
{
    let x = 10;
}

console.log(x); // ReferenceError
```

## `for` + `let` + closure

`let` em um `for` pode criar uma **binding diferente para cada iteração**, algo especialmente importante quando callbacks/closures estão envolvidos.

```js
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}

// 0
// 1
// 2
```

Com `var`:

```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}

// 3
// 3
// 3
```

**A diferença aqui não é simplesmente "`let` é melhor que `var`". É `scope + binding + closure + execução posterior`.**

---

## 🧠 Regra mental

> **Scope determina onde uma variável pode ser acessada.**
> **Hoisting determina como o binding é tratado antes da execução.**
> **TDZ impede o acesso a `let`/`const` antes da inicialização.**
> **Shadowing faz um binding interno esconder o externo.**
> **Closure permite que uma função continue acessando bindings do seu scope léxico.**
