var game = {
    fps : 24,
    framerate : 1000
};

var roadFighter, puntaje;

addEventListener("keydown", function (event) {
    press(event);
}, false);

addEventListener("keyup", function (event) {
    release(event);
}, false);

function Game() {
    game.context = document.getElementById('gameBoard');
    game.ctx = game.context.getContext('2d');
    roadFighter = new RoadFighter(game.ctx, game.context.width, game.context.height, directions);
    setInterval("roadFighter.update()", game.framerate/game.fps);
}

function main(){
    game = new Game();
}

function restart(){
    game.context = document.getElementById('gameBoard');
    game.ctx = game.context.getContext('2d');
    roadFighter = new RoadFighter(game.ctx, game.context.width, game.context.height, directions);
    var button = document.getElementById('again');
    button.style.display = 'none';
    button.style.zIndex = -2;
}

function send(){
    
    var button = document.getElementById('btnScore');
    button.style.display = 'none';
    button.style.zIndex = -2;

    var button2 = document.getElementById('again');
    button2.style.display = 'none';
    button2.style.zIndex = -2;

    puntaje = document.getElementById('score').innerHTML;

    alert(puntaje);
    
}





