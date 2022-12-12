class Navio{
  constructor(x,y,largura,altura,navioPos,animacaoNavio){
    this.body = Bodies.rectangle(x,y,largura,altura);
    World.add(world,this.body);
      
    this.largura = largura;
    this.altura = altura;
    this.navioPos = navioPos;
    this.imagem = loadImage("./assets/boat/boat1.png");
    this.animacao = animacaoNavio;
    this.velocidade = 0.05;
    this.quebrado = false;
  }

  animar() {
    this.velocidade += 0.05;
  }

  display(){
    var angle = this.body.angle;
    var pos = this.body.position;
    var indice = floor(this.velocidade % this.animacao.length);
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animacao[indice],0,this.navioPos,this.largura,this.altura);
    pop();
  }

  remover(indice){
    this.quebrado = true;
    this.animacao = animacaoNavioQuebrado;
    this.velocidade = 0.05;
    this.largura = 300;
    this.altura = 300;
    setTimeout(() => {
      Matter.World.remove(world, this.body);
      delete navios[indice];
  }, 2000);
  }
}