function coins(){
    if(frameCount % 90 === 0) {
        var coin = createSprite(width + 35,height / 3,10,40);
        coin.addImage(coinImg);
        coin.velocity.x = ground.velocity.x;
    
        //assign scale and life to the coins          
        coin.scale = 1.25;

        if(coin.position.x <= 0){
          coin.life = 0;
        }
        else{
          coin.life = -1;
        }
        
        //add each coin to the group
        coinSpawner.add(coin);
      }
    }