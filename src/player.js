class Player {
    constructor (socket) {
        this.id = socket.id;
        this.name = socket.id;
        this.socket = socket;
        this.color = "red";
        this.current_room = "";
    }
    update_client () {
        this.socket.emit("update_client_profile",
            {   name: this.name
            });
    }

    //probably going to neeed this at some point to do seme more stuff
    disconnect(){
        console.log("Disconnected "+ this.id);
    }
}

module.exports = Player;