class Personagem {
  constructor(imagem,personagemSize) 
  {
    this.imagem = imagem;
    this.xSize = personagemSize[0];
    this.ySize = personagemSize[1];
    this.auxSizeX = imagemPersonagem.get().width/this.xSize;
    this.auxSizeY = imagemPersonagem.get().height/this.ySize;
    
    this.matriz = [];
    this.constroiMatriz(this.matriz);

    this.frameAtual = 0;
  }
  
  exibe()
  {
    image(this.imagem, 0, height - (this.ySize / 2) , this.xSize / 2, this.ySize / 2, 
          this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.xSize, this.ySize);
    
    this.anima();
  }
  
  anima()
  {
    this.frameAtual++;
    
    if(this.frameAtual >= this.matriz.length - 1) 
    {
      this.frameAtual = 0;
    }   
  }

  constroiMatriz(matriz)
  {
    
    for(var j = 0; j < this.auxSizeY; j++)
    {
      for(var i = 0; i < this.auxSizeX; i++)
      {
          matriz.push([i * this.xSize, j * this.ySize]);
      }
    }
  }
}