class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200);
    car1.addImage(carimge);
    car1.scale = 0.4;
    car2=createSprite(300,200);
    car2.addImage(carimge2);
    car2.scale = 0.4;
    // car3=createSprite(500,200);
    // car4=createSprite(700,200);
cars = [car1,car2];
    
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var index = 0;
      var x = 200;
      var y ;
            background(ground);
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
     
    
      for(var plr in allPlayers){
        index = index+1;
        x = x+200;
        y = displayHeight-allPlayers[plr].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;
        if (index === player.index){
          fill("red")
        camera.position.x = displayWidth/2
        camera.position.y = cars[index-1].y
      }
        else
          fill("black");

        
     
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
      //background(backgroundImage);
    }
    if(player.distance>3900){
      console.log(player.distance);
      this.update(2);
    gameState = 2;
    }
  }
}
