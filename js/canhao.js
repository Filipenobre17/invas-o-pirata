class Canhao {
  constructor(x,y,largura,altura,angulo){
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.angulo = angulo;
    this.canhao_img = loadImage("./assets/canon.png");
    this.canhao_base = loadImage("./assets/cannonBase.png");
  }
  display(){

    if (keyIsDown(RIGHT_ARROW) && this.angulo < 70) {
      this.angulo += 1;
    }

    if (keyIsDown(LEFT_ARROW) && this.angulo > -30) {
      this.angulo -= 1;
    }
    
    //cano do canhão
    push();
    translate(this.x,this.y);
    rotate(this.angulo);
    imageMode(CENTER);
    image(this.canhao_img,0, 0, this.largura,this.altura);
    pop();

    //corpo do canhão
    image(this.canhao_base,70,20,200,200);
  }
}