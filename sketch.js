var car,wall
var speed,weight


function setup(){
  createCanvas(1600,1000);
speed = random (55,90)
weight = random (400,1500)

car = createSprite(50,200,20,20)
car.shapeColor = ("orange")
wall = createSprite(1500,200,30,100)
wall.shapeColor = ("purple")

car1 = createSprite(1470,350,20,20)
car1.shapeColor = ("yellow")
wall1 = createSprite(1500,350,30,100)
wall1.shapeColor = ("cyan")

car2 = createSprite(1470,500,20,20)
car2.shapeColor = ("blue")
wall2 = createSprite(1500,500,30,100)
wall2.shapeColor = ("cyan")

car3 = createSprite(1470,650,20,20)
car3.shapeColor = ("red")
wall3 = createSprite(1500,650,30,100)
wall3.shapeColor = ("cyan")
}

function draw(){
  background("green")

  car.velocityX = 5
  

  if(car.x - wall.x < wall.width/2 + car.width/2){
    car.shapeColor = "orange"
    wall.shapeColor = "purple"
  }
  else{
    car.shapeColor = "cyan"
    wall.shapeColor = "purple"
  }

  drawSprites();
}
