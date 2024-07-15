const express = require('express')
const path = require('path')
const { join } = require('node:path');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const app = express()
const port = process.env.PORT;
const server = createServer(app);
const io = new Server(server);


app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
})



app.use('/static', express.static(path.join(__dirname, 'static')))



io.on('connection', (socket) => {
    console.log('a user connected');
    console.log(socket.id);

    socket.on('submit_song', (uri)=>{
        console.log(uri);

    });

    socket.on('disconnect', () => {
        console.log('user'+socket.id+' disconnected');
    });
});

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

