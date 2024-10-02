import { adicionarItem } from "./scripts/adicionarItem.js"

const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarItem);