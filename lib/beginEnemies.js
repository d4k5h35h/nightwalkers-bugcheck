function beginEnemies(){
    //enemy spawner
    if(frameCount % 240 === 0) {
        var enemy = createSprite(width + 35, height - 150, 50, 40);
        enemy.setCollider("rectangle", 0, -10, 150, 180);
        enemy.addAnimation("gvampidle", gVampIdle);
        enemy.addAnimation("gvampkill", gVampKill);
        enemy.addAnimation("gvampdie", gVampDie);

        enemy.changeAnimation("gvampidle");
        enemy.velocity.x = ground.velocity.x;
        enemy.scale = 0.3;
        enemy.mirrorX(-1);

        if(enemy.position.x <= 0){
          enemy.life = 0;
        }
        else{
          enemy.life = -1;
        }
        
        //add each enemy to the group
        gVampSpawner.add(enemy);
      }
}