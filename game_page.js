var player_1_name = localStorage.getItem("Player1");
var player_2_name = localStorage.getItem("Player2");

var player_1_score = 0;
var player_2_score = 0;

document.getElementById("player1name").innerHTML = player_1_name + " : ";
document.getElementById("player1score").innerHTML = player_1_score;

document.getElementById("player2name").innerHTML = player_2_name + " : ";
document.getElementById("player2score").innerHTML = player_2_score;

document.getElementById("playerquestion").innerHTML = "question turn - " + player_1_name;
document.getElementById("playeranswer").innerHTML = "answer turn - " + player_2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();

    charAt_1 = word.charAt(1);
    middle = Math.floor(word.length/2);
    charAt_2 = word.charAt(middle);
    last = word.length - 1;
    charAt_3 = word.charAt(last);

    remove_1 = word.replace(charAt_1,"_");
    remove_2 = remove_1.replace(charAt_2,"_");
    remove_3 = remove_2.replace(charAt_3,"_");

    question_word = "<h4 id = 'word-display'> Q. " + remove_3 + "</h4>";
    input_box = "<br> answer : <input type = 'text' id = 'input_box'>";
    button = "<br> <br> <button class = 'btn btn-info' onclick = 'check()'>check</button>";
    row = question_word + input_box + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_box").value;
    answer = get_answer.toLowerCase();
    

    if (answer == word){
        if (answer_turn == "player1"){
            player_1_score = player_1_score + 1;
            document.getElementById("player1score").innerHTML = player_1_score;
        }
        else {
            player_2_score = player_2_score + 1;
            document.getElementById("player2score").innerHTML = player_2_score;
        }
    }
    else{
        if (answer_turn == "player1"){
            player_1_score = player_1_score - 1;
            document.getElementById("player1score").innerHTML = player_1_score;
        }
        else {
            player_2_score = player_2_score - 1;
            document.getElementById("player2score").innerHTML = player_2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("playerquestion").innerHTML = "question turn = " + player_2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("playerquestion").innerHTML = "question turn = " + player_1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("playeranswer").innerHTML = "answer turn = " + player_2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("playeranswer").innerHTML = "answer turn = " + player_1_name;
    }

    document.getElementById("output").innerHTML = "";    
        
}