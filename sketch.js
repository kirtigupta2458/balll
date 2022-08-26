
var pos
function setup(){
  createCanvas(800,800)
  db=firebase.database()
  ball=createSprite(200,200,50,50)

  db.ref("ball/position").on("value",x=>{
    pos=x.val()
    ball.x=pos.x
    ball.y=pos.y
  })

}

function draw(){
 background("black")
 drawSprites()
 
if(pos!==undefined)
 {
  if(keyDown("left")){
    db.ref("ball/position").update({
      "x":pos.x-5,
      "y":pos.y
    })

 }
 if(keyDown("right")){
  db.ref("ball/position").update({
    "x":pos.x+5,
    "y":pos.y
  })
}
if(keyDown("up")){
  db.ref("ball/position").update({
    "x":pos.x,
    "y":pos.y-5
  })
}
if(keyDown("down")){
  db.ref("ball/position").update({
    "x":pos.x,
    "y":pos.y+5
  })
}
}

}