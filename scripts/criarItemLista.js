/* GUIA DE ESTRUTURA

document.createElement("tag") -> cria uma tag com base no que foi escrito nos parênteses

classList.add("exemplo") -> adiciona a classe dentro dos parênteses no elemento armazenado na variável 

_____________

.currentTarget -> aciona o evento apenas do elemento que foi chamado

.closest("tag") -> procura o elemento específicado nos parênteses mais próximo

.querySelector('exemplo') -> seleciona o elemento especificado nos parênteses e seleciona o que tem dentro dele

.appendChild('elemento') -> insere o elemento que está dentro do parênteses dentro do elemento especificado
*/

const listaComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

// Função que cria elemento da lista de compras
export function criarItemLista(item) {
    // Variável que cria um elemento 'li'
    const itemDaLista = document.createElement("li");
    // Variável que cria uma 'div' -- container que enquadra o container da checkbox, container dos botões de editar / excluir e nome do item
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");

    // Variável que cria  uma 'div' -- container que enquadra o nome do item e o container da checkbox
    const containerNomeDoItem = document.createElement("div");

    // Variável que cria uma 'div' -- container que enquadra a checkbox
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");

    // Variável que cria um 'input'
    const checkboxInput = document.createElement("input");
    // Modifica o 'type' do elemento armazenado na variável (o input, nesse caso) para 'checkbox'
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("input-checkbox");
    // Modifica a 'id' do elemento armazenado na variável (o input, nesse caso) para 'checkbox-' + contador++ -- Cria um ID diferente para cada input, que aumenta de 1 em 1 para cada vez que um for criado
    checkboxInput.id = "checkbox-" + contador++;

    // Variável que cria um 'label' -- armazena o checkboxInput e a 'div' do checkbox customizado
    const checkboxLabel = document.createElement("label");
    
    // Modifica o atributo especificado antes da virgula para o que foi escrito após a virgula -- Associa o 'label' criado com o 'input' 
    checkboxLabel.setAttribute("for", checkboxInput.id);

    // Cria um evento que acontece toda vez que o 'checkbox' for clicado
    checkboxLabel.addEventListener("click", function(evento) {
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        // Ao acionar o 'checkbox', procura o 'li' mais próximo dele e após isso ele procura DENTRO deste 'li' a tag com ID de 'item-titulo' -- por fim, salva o nome dentro da 'tag' e armazena na variável
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo")
                // Caso o 'checkbox' não estiver selecionado ao clicar:
        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista)
        } else {// Caso o 'checkbox' já esteja selecionado ao clicar:
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista)
        }
    })
    
    // Variável que cria uma 'div' -- responsável pelo checkbox customizado
    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    // Input entra dentro do 'Label'
    checkboxLabel.appendChild(checkboxInput);
    // 'div' do checkbox customizado entra dentro do 'Label'
    checkboxLabel.appendChild(checkboxCustomizado);

    // 'Label' entra dentro da 'div' do 'checkbox'
    containerCheckbox.appendChild(checkboxLabel);
    // Container do checkbox entra dentro da 'div' do item
    containerNomeDoItem.appendChild(containerCheckbox)

    const nomeDoItem = document.createElement("p");
    // Modifica a 'id' do nome do item para 'item-titulo'
    nomeDoItem.id = "item-titulo";
    // Modifica o texto do item para o 'valor' do parâmetro da função
    nomeDoItem.innerText = item;
    // Nome do item entra dentro do container do item
    containerNomeDoItem.appendChild(nomeDoItem)

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button")

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    const itemData = document.createElement("p");
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;
    itemData.classList.add("texto-data");

    itemDaLista.appendChild(containerItemLista);
    itemDaLista.appendChild(itemData);

    return itemDaLista; // Retorna o 'li' gerado para ser utilizado na função de adicionnar item, que recebe o valor do input e une na lista, assim fazendo a conexão entre os elementos.
}