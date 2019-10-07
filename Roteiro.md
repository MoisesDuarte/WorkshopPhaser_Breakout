# Roteiro de apresentação

## Workshop Phaser

1. Estrutura do projeto
   
   1. Apresentar o index.php com chamada de bibliotecas.
   
   2. Explicar o uso da pasta assets para guardar recursos.
   
   3. Mostrar o código javascript inicial e explicar o estado principal do phaser, junto com a inicialização do projeto.

2. Inicializando o jogo com uma palheta
   
   1. Em preload, o recurso gráfico para a palheta é carregado. Uma imagem é atribúida uma chave para referência no código.
   
   2. Em create, definimos uma cor de fundo padrão para o jogo e inicializamos a física que será usada, no caso o módulo arcade do phaser. Com enableBody estendemos essa física a todos os objetos que seram usados no jogo. Ainda em create, definimos listeners para a tecla direita e esquerda do teclado, inicializamos a palheta como um sprite nas coordenadas 160, 400, com a imagem palheta como recurso gráfico, definindo ela como immovable para que não se mova quando atingida pela bola.
   
   3. Em update, que é o loop principal do jogo, definimos a resposta para as ações do jogador no decorrer do jogo. No caso, checamos se a tecla esquerda ou direita está pressionada e definimos uma velocidade de movimento horizontal equivalente a direção. Caso não apertar nada, a velocidade da palheta será igualada a zero, parando ela. 

3. Desenhando os blocos na tela.
   
   1. Carregamento de recurso em preload.
   
   2. Em create, definição de um grupo de blocos para guardar todos os blocos do jogo, estrutura de repetição para desenhar os blocos na tela  com imagem referente e adiciona los ao grupo definido.
   
   3. Explicando calculo: Valor inicial define o intervalo entre os blocos e o valor secundário incrementa o valor dos blocos anteriores ao valor de um intervalo para colocar ele a frente dos outros.

4. Pintando os blocos
   
   1. Carregando demais recursos em preload
   
   2. Na estrutura de repetição, concatenando o valor de i ao bloco para para pegar chave de bloco consequente em repetição.

5. Desenhando e inicializando a bola
   
   1. Carregamento de recurso em preload
   
   2. Inicialização do sprite, com velocidade x e y padrão para que ela já se movimenta ao começar o jogo, definindo bounce como true para que a bola quice nas superfícies e definindo colisão com o mundo, isso é, o tamanho total da tela definido na inicialização.

6. Definindo a comunicação entre os elementos do jogo, finalizando o loop principal
   
   1. Em create, Alterações no x e y da palheta para melhor jogabilidade, definição de colisão com o mundo
   
   2. Em update, definindo colisão simples entre palheta e bola (relevar simplicidade da função collide se comparada a javascript puro), definindo colisão entre bola e blocos para chamar uma função acertaBloco (null se refere a um callback inutilizado e this se refere a callback a função principal)
   
   3. Uma estrutura if checando se a coordenada y vertical da bola está abaixo do y da palheta, reiniciando o estado do jogo.
   
   4. Função acerta bloco pega bloco referente e o 'mata', o eliminando do grupo blocos sem necessidade de referenciar seu id ou posição
   
   5. Loop principal do jogo finalizado.

7. Adicionando contador de score
   
   1. Em create, criando labels para pontuação em x e y, com texto e fonte utilizada
   
   2. Em função acertaBloco, incrementar pontuação a cada acerto e igualar texto da label com score atual;

8. Dúvidas.
