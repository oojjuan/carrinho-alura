import { adicionarItem } from "/scripts/adicionarItemLista.js";
import { verificarListaComprados } from "./scripts/verificarListaComprados.js";

const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarItem);

const listaComprados = document.getElementById("lista-comprados");
verificarListaComprados(listaComprados);