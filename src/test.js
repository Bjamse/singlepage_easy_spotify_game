const Player = require("./player.js");
module.exports = function (socket, players) {
    socket.on('test', function (message) {
        if (players[socket.id] === undefined || players[socket.id] === null ) {
            players[socket.id] = new Player(socket);
            socket.emit('debug', {msg:"added myself as a player to the players thingy again"});
        }else{
            socket.emit('debug', {msg: "i think this socket has already been added as a player"});
        }
    });

    socket.on('test2', function (message) {
       socket.emit('debug', {msg: "number of players in the list, look in console", players: players});
    });
}