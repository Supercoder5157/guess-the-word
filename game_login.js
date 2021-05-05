function adduser(){
    var player_1 = document.getElementById("user_name_1").value;
    var player_2 = document.getElementById("user_name_2").value;

    localStorage.setItem("Player1",player_1);
    localStorage.setItem("Player2",player_2);

    window.location = "game_page.html";
}