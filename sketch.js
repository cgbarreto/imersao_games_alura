let imagemCenario;
let personagem;
let cenario;
let somDoJogo;

function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  //personagem = new Personagem(imagemPersonagem,personagemSize);
  personagem = new Personagem(imagemPersonagem,[220,270]);
  frameRate(40);
  somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  
}

