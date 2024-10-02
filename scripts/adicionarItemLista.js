import { criarItemLista } from "./criarItemLista";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
let contador = 0;

export function adicionarItem(evento) {
    evento.preventDefault()

    const itemDaLista = criarItemLista(item.value);
    listaDeCompras.appendChild(itemDaLista)
}