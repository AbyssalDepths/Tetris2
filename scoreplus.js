url = "wss://ucp-games-2021.azurewebsites.net/multiplayer";
  window.multiplayer = new WebSocket(url);
  window.playerID = localStorage.getItem('playerID'); 
   if (typeof window.playerID === 'undefined' || window.playerID == null) { 
     var playerIDValue = "player-"+ parseInt((Math.random() * (100000 - 1) + 1)); 
     localStorage.setItem('playerID', playerIDValue); 
     window.playerID = playerIDValue; 
   };
  window.multiplayer.onopen = function(event){
    console.log("conexion exitosa");
    console.log("jugador "  + window.playerID);
  };
  window.multiplayer.onmessage = function(event){ 
    var datos = JSON.parse(event.data); 
    console.log(datos.players); 
  };

function scoreplus(puntos){
  var datosprueba = {
    "game":"Tetris UCP",
	  "player": window.playerID,
	  "value": puntos
  };
   window.multiplayer.send(JSON.stringify(datosprueba));
}
  
