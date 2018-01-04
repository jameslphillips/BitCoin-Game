document.addEventListener("DOMContentLoaded", function(){

var Furry = require("./furry.js");
var Coin = require("./coin.js");
var Game = require("./game.js");

var game = new Game;
game.showFurry();
game.showCoin();
game.startGame();


});
