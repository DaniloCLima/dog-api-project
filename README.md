# Dog Breed Lookup

Este projeto tem como objetivo buscar todas as raças de cachorros disponíveis em uma API pública e permitir que o usuário selecione uma raça, insira o nome do cachorro, estilize a fonte e a cor do texto sobre a imagem do cachorro selecionado. Todas as informações selecionadas pelo usuário serão armazenadas no local storage do navegador.

## Documentação da Dog API
Para este projeto, utilizo a [Dog API](https://dog.ceo/dog-api/) para buscar informações sobre as raças de cachorros disponíveis.

## Funcionalidades
- Seleção de raça de cachorro através de um menu dropdown.
- Inserção do nome do cachorro pelo usuário.
- Seleção da cor da fonte entre cinco opções disponíveis.
- Seleção da fonte entre cinco opções disponíveis do Google Fonts.
- Exibição da imagem do cachorro selecionado com o texto sobreposto utilizando a fonte e cor selecionadas.
- Botão de salvar para armazenar as informações selecionadas pelo usuário no local storage, incluindo data e horário da ação.
- Mensagem de sucesso exibida após a ação de salvar.
- As informações salvas pelo usuário permanecerão na tela mesmo após a página ser recarregada.

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript

## Como Utilizar
1. Clone este repositório em sua máquina local.
2. Abra o arquivo `index.html` em seu navegador.
3. Selecione a raça de cachorro desejada, insira o nome do cachorro (há validações caso isso não ocorra), escolha a cor e a fonte da fonte e clique em salvar.
4. Visualize a mensagem de sucesso e verifique que as informações foram armazenadas no local storage.
5. Mesmo após recarregar a página, as informações salvas permanecerão visíveis.
