import { adicionarItem } from "/scripts/adicionarItemLista.js";

const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarItem);