player1n=localStorage.getItem("Player1");
player2n=localStorage.getItem("Player2");

player1s=0;
player2s=0;

document.getElementById("name1").innerHTML=player1n+" : ";
document.getElementById("name2").innerHTML=player2n+" : ";

document.getElementById("score1").innerHTML=player1s;
document.getElementById("score2").innerHTML=player2s;

document.getElementById("Question").innerHTML="Question Turn - "+player1n;
document.getElementById("Answer").innerHTML="Answer Turn - "+player2n;