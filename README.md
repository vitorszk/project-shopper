# Projeto Shopper

Link da aplicação rodando: [Surge](http://shopper-vitorszk.surge.sh).

## Descrição

Este repositório faz parte de um projeto Full-Stack, o qual simula uma aplicação de compras de mercado.
Repositório do back-end disponível em: [BACKEND](https://github.com/vitorszk/project-shopper-backend).


### Funcionalidades

* Listagem de todos os produtos exibindo quantidade em estoque. 
* Armazenamento de itens no carrinho.
* Formulário de cadastro de pedidos, contendo "Nome", "Data e hora" e "lista de produtos".
* O usuário pode alterar a quantidade de produtos já cadastrados ou excluir itens já adicionados no carrinho.
* O sistema calcula o valor total do pedido.
* Todas as informações são salvas em um banco de dados.
* Cada pedido debita a quantidade do produto correspondente do estoque.
* O sistema informa o usuário caso o item não esteja disponível em estoque.

### `Como rodar o projeto localmente`

Na raíz do projeto, rode o comando a seguir:
```
$ npm install
```

Assim que instalado, rode:
```
$ npm run start
```




