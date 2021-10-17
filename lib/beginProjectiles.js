function beginProjectiles(){
    //blade spawner
    if(frameCount % 350 === 0) {
        var blade = createSprite(width + 35,50,10,40);
        blade.setDefaultCollider();
        blade.addAnimation("bladeanimation", bladeAnimation);
        blade.changeAnimation("bladeanimation")
        blade.velocity.x = ground.velocity.x;
        blade.scale = 0.09;

        if(blade.position.x <= 0){
          blade.life = 0;
        }
        else{
          blade.life = -1;
        }
        
        //add each blade to the group
        bladeSpawner.add(blade);
      }
    }