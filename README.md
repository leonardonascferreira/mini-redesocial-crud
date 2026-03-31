## Mini Rede Social - CRUD em JavaScript 🐦

Este é um **projeto de uma mini rede social** desenvolvido com **JavaScript puro (Vanilla JS)**, HTML e CSS.
O objetivo do projeto é demonstrar na prática o funcionamento das operações **CRUD (Create, Read, Update e Delete)** utilizando manipulação do **DOM** e estruturas de dados em JavaScript.

A aplicação permite criar posts, visualizar os posts existentes, editar o conteúdo diretamente na interface e excluir publicações.

---

## Funcionalidades 🛠️

* Criar novos posts através de um campo de input;
* Visualizar os posts em uma lista dinâmica na interface;
* Editar o conteúdo de um post diretamente na tela;
* Excluir posts da lista com um botão de delete;
* Atualização imediata da interface utilizando manipulação do DOM.

---

## Tecnologias e Conceitos 💻

* **HTML5** – Estrutura da interface da aplicação;
* **CSS3** – Estilização e layout da página;
* **JavaScript (Vanilla JS)** – Lógica da aplicação;
* **Manipulação do DOM** – Criação, atualização e remoção de elementos HTML;
* **Eventos JavaScript** – Uso de `submit`, `click` e `input`;
* **Estruturas de dados** – Uso de arrays e objetos para armazenar os posts;
* **CRUD** – Implementação das operações Create, Read, Update e Delete.

---

## Como usar ▶️

1. Clone este repositório:

```bash
git clone https://github.com/leonardonascferreira/mini-redesocial-crud
```

2. Abra a pasta do projeto.

3. Execute o arquivo `index.html` no navegador.

Não é necessário instalar dependências.

---

## Estrutura dos dados

Os posts são armazenados em memória utilizando um **array de objetos**:

```javascript
posts: [
  {
    id: 1710000000000,
    owner: "leoheith",
    content: "Meu primeiro tweet :D"
  }
]
```

Cada post possui:

* **id** – identificador único gerado com `Date.now()`;
* **owner** – usuário que criou o post;
* **content** – conteúdo do post.

---

## Objetivo do Projeto 🎯

Este projeto foi desenvolvido com fins de estudo para praticar:

* lógica de programação em JavaScript;
* manipulação do DOM;
* gerenciamento de eventos;
* organização de código em aplicações front-end;
* implementação prática de um sistema CRUD.

---

## Contato 📧

- [LinkedIn](https://linkedin.com/in/leonardonascferreira)
- [Meu E-mail](mailto:leonardonascferreira@gmail.com)
