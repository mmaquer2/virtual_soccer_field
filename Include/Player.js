module.exports = class Player {

    // Player class construction
    constructor(playerNumber, teamColor, position, vectorLocation) {

        //delcare class variables
        this.playerNumber = playerNumber;
        this.x = x;
        this.y = y;
        this.z = z;
        
        //validate player number
        if (playerNumber < 0 ) {
           // alert("invalid player number entered: cannot be less than zero");  
            throw new Error("Invalid player number entered: cannot be less than zero");
            
        }

        //valdiate Player team color
       if( teamColor != "red" && teamColor != "blue") {
          throw new Error("Invalid Team Color")
           
         }

        //validate Player field position
        if (position != "def" && position != "mid" && position != "for" ) {
            throw new Error("Invalid Field Position")
            
        }

        //set player location on the field
        //setLocation()

    
        return true;
    }

    //set the location of the athlete
    setLocation(x , y , z) {

        return true;
    }

    //change the location of the athlete-player object instance
    changeLocation(){


        return true;
    }

    getXCoord(){


    }

    //get the player number of the athlete-player object instance
    getPlayerNumber(){

        //console.log(this.playerNumber);

        return this.playerNumber;


    }
      //create players
      //var playerGeometery  = new THREE.BoxGeometry(PLAYER_WIDTH, PLAYER_HEIGHT),
      //playerMaterial = new THREE.MeshLambertMaterial({ color: 0xCCCCCC }),
      //player = new THREE.Mesh(playerGeometery, playerMaterial);
      
      //scene.add(player);



};
