socket.on("connect", (data) =>{
    document.getElementById("title_name").innerText = socket.id;
});

socket.on("disconnect", (data) =>{console.log("i disconnected")});

socket.on("update_player_profile", (data) =>{
    document.getElementById("title_name").innerText = data.name;
});

