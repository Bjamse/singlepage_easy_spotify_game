let app_credentials = {
    access_token: {
        token: "",
        type: "Bearer",
        time_got: 0
    },
    app_default_client_id: "4d99e07c77374e0592e833c03bcceffb",
    app_client_secret_key: process.env.SECRET
}

function updateToken_if_old(next_function_if_ok, args){
    if(app_credentials.access_token.time_got + 3598<= Math.floor(Date.now()/1000)){
        fetch("https://accounts.spotify.com/api/token",
            {method:"POST",
                headers:{ 'Content-Type':'application/x-www-form-urlencoded'},
                body:"grant_type=client_credentials&client_id="+app_credentials.app_default_client_id+"&client_secret="+ app_credentials.app_client_secret_key
            }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("(token_fetcher) Something went wrong: " + response.statusText);
            }
        }).then(data => {
            app_credentials.access_token.time_got = Math.floor(Date.now() / 1000);
            app_credentials.access_token.token = data.access_token;
            app_credentials.access_token.type = data.token_type;
        }).then(()=> {next_function_if_ok(args)}
        ).catch(error => {
            alert(error.message);
        });
    }else{
        console.log("token is fresh")
        next_function_if_ok(args);
    }
}


//funker nok men må ha en bedre access token, generic funker ikke her
function add_new_song_to_that_one_playlist(args){
    console.log(app_credentials)
    console.log(app_credentials.access_token.type+" "+app_credentials.access_token.token)
    fetch("https://api.spotify.com/v1/playlists/5t0Vt9bDYyxJJfivVaOyB3/tracks", {
        method:"POST",
        headers:{ 'Authorization': app_credentials.access_token.type+" "+app_credentials.access_token.token,
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            "uris": ["spotify:track:"+args.uri],
        })}
    ).then(response => response.json()
    ).then((data) => { console.log(data) }
    ).catch(error => {console.log(error)}
    );
}
