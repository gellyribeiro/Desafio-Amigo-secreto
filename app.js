let amigos = [];

function adicionarAmigo() {
    let nomeAtual = document.getElementById('amigo').value;
    if (nomeAtual && nomeAtual.trim() !== '') {
        amigos.push(nomeAtual);
        document.getElementById('amigo').value = '';
        console.log(amigos);
        atualizarLista(nomeAtual);
    } else {
        alert('Você esqueceu de inserir o nome do seu amigo.');
    }
}

function atualizarLista(nome) {
    let lista = document.getElementById('listaAmigos');

    let itemLista = document.createElement('li');
    itemLista.onclick = () => removerAmigo(itemLista);

    let texto = document.createElement('span');
    texto.textContent = nome;

    let lixeiraIcon = document.createElement('i');
    lixeiraIcon.classList.add('bi', 'bi-trash3-fill', 'trash');

    itemLista.appendChild(texto);
    itemLista.appendChild(lixeiraIcon);
    lista.appendChild(itemLista);
}

function removerAmigo(item) {
    let nome = item.querySelector('span').textContent;
    amigos = amigos.filter(amigo => amigo !== nome);
    item.remove();
}

let sorteadoAnterior;

function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let sorteado = amigos[indiceSorteado];

        if (sorteadoAnterior) {
            sorteadoAnterior.classList.remove('bordaDourado');
        }

        let listaAmigos = document.querySelectorAll('#listaAmigos li');
        listaAmigos[indiceSorteado].classList.add('bordaDourado');
        sorteadoAnterior = listaAmigos[indiceSorteado];

        document.getElementById('resultado').textContent = `${sorteado} foi o seu amigo secreto!`;

        amigos.splice(indiceSorteado, 1);
    } else {
        alert('Todos os amigos já foram sorteados ou a lista está vazia.');
    }
}
