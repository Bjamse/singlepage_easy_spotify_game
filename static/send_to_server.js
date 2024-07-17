function set_username(name){
    socket.emit("username", { username: name });
}