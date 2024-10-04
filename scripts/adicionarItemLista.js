import { criarItemLista } from "./criarItemLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) {
    // Evita que a função padrão seja acionada, como no forms que ao envia-lo a página é recarregada, e ao utilizar o 'preventDefault()' isso não acontece
    evento.preventDefault();

    // Cria um item da lista utilizando a função e adiciona o valor do input do item que será adicionado, como parâmetro 
    const itemDaLista = criarItemLista(item.value);
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
}