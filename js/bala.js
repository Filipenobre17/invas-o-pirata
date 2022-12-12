class Bala {
  constructor(x,y){
    var options = {
      isStatic:true
    };
    this.r = 15;
    this.body = Bodies.circle(x,y,this.r,options);
    World.add(world,this.body);
    this.imagem = loadImage("./assets/cannonball.png");
    this.velocidade = 0.05;
    this.animacao = [this.imagem];
    this.afundada = false;
  }

  animar() {
    this.velocidade += 0.05;
  }

  display(){
    var pos = this.body.position;
    var indice = floor(this.velocidade % this.animacao.length);
    push();
    imageMode(CENTER);
    image(this.animacao[indice],pos.x,pos.y,this.r*2,this.r*2);
    pop();
  }
  
  atirar() { 
    var novoAngulo = canhao.angulo*PI/180-0.5;
    var velocidade = p5.Vector.fromAngle(novoAngulo);
    velocidade.mult(0.4);
    Matter.Body.setStatic(this.body,false);
    Matter.Body.setVelocity(this.body,{
      x: velocidade.x * 180/PI,
      y: velocidade.y * 180/PI
    });
  }

  remover(indice){
    this.afundada = true;
    this.animacao = animacaoRespingo;
    this.velocidade = 0.05;
    this.r = 50;
    Matter.Body.setVelocity(this.body, {x:0,y:0});
    setTimeout(() => {
      Matter.World.remove(world, this.body);
      delete balas[indice];
  }, 1000);
  }
}