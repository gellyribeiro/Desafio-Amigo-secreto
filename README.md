# Amigo Secreto

Este projeto é basicamente uma aplicação interativa para gerenciar e sortear participantes de um "Amigo Secreto". Os usuários podem adicionar nomes, visualizar uma lista e sortear aleatoriamente um nome da lista. O código foi desenvolvido com HTML, CSS e JavaScript.

## Funcionalidades

1. **Para Adicionar Participantes**:
   - O usuário insere o nome no campo de texto e clica no botão "Adicionar".
   - Nomes válidos são adicionados à lista e exibidos na tela.
   - É exibido um alerta caso o campo esteja vazio.

2. **Exibir Lista de Participantes**:
   - Todos os nomes adicionados aparecem em uma lista.
   - Cada item da lista pode ser removido com um único clique sobre o nome que deseja ser eliminado.

3. **Remover Participantes**:
   - Ao clicar sobre um nome, o participante é removido da lista e do array interno.

4. **Sortear Amigo Secreto**:
   - O botão "Sortear Amigo" seleciona aleatoriamente um participante.
   - O nome sorteado é destacado na lista.
   - O participante é removido automaticamente da lista após ser sorteado.
   - Caso todos os participantes tenham sido sorteados, um alerta é exibido informando que não há mais nomes para sortear.

## Estrutura do Projeto

- **HTML**: Estrutura a interface do usuário, com elementos como campos de entrada, botões e listas dinâmicas.
- **CSS**: Proporciona estilização e organização visual da aplicação.
- **JavaScript**: Gerencia as funcionalidades interativas, como adição, remoção e sorteio de nomes.

## Como Usar

1. Abra o arquivo HTML em qualquer navegador web.
2. Insira um nome no campo de texto e clique em "Adicionar".
3. Verifique se o nome foi adicionado à lista exibida na tela.
4. Clique em "Sortear Amigo" para selecionar um nome aleatório.
5. Remova nomes clicando no ícone de lixeira ao lado de cada participante.

## Observações

- Apenas nomes válidos (não vazios) podem ser adicionados.
- O sorteio é realizado apenas se houver nomes na lista.
- Cada nome é sorteado apenas uma vez.

## Tecnologias Utilizadas

- **HTML**: Estrutura do documento.
- **CSS**: Estilização dos elementos.
- **JavaScript**: Manipulação da lógica e interatividade.
  
---

Este projeto é uma demonstração de habilidades em desenvolvimento web e pode ser expandido com novas funcionalidades conforme necessário.

