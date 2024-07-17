const express = require('express')
const path = require('path')
const { join } = require('node:path');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const app = express()
const port = process.env.PORT;
const server = createServer(app);
const io = new Server(server,{  connectionStateRecovery: {}});

const Player = require('./src/Player.js');


let players = {};

io.on('connection', (socket) => {
    socket.broadcast.emit('debug', {msg: socket.id+"user has joined"});
    console.log('a user connected '+socket.id);

    players[socket.id] = new Player(socket);

    socket.on('submit_song', (uri)=>{
        console.log(uri);
        updateToken_if_old(add_new_song_to_that_one_playlist,{uri:uri});
    });
    require('./src/test')(socket, players);


    socket.on('disconnect', () => {
        io.emit('debug', {msg: "disconnected" + socket.id});
        console.log('user '+socket.id+' disconnected');
        players[socket.id].disconnect();

    });
});

app.get('/', (req, res) => {res.sendFile(join(__dirname, 'index_new.html'));})
app.use('/static', express.static(path.join(__dirname, 'static')))
server.listen(port, () => {console.log(`Example app listening on port ${port}`)})

