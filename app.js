let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);

    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Nenhum amigo disponível para sortear.</li>";
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indice];
    resultado.innerHTML = `<li>${nomeSorteado}</li>`;
}