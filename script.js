document.querySelector("button").addEventListener("click", play)


function play() {
let randomNumberOne = Math.trunc(Math.random()*6) + 1;

let randomNumberTwo = Math.trunc(Math.random()*6) + 1;

let img1 = "images/dice-"+ randomNumberOne+".png";
let img2 = "images/dice-"+ randomNumberTwo+".png";


document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);



if (randomNumberOne > randomNumberTwo) {
    document.querySelector("h1").textContent="Player 1 Wins" ;
}else if(randomNumberOne < randomNumberTwo){
    document.querySelector("h1").textContent="Player 2 Wins"
}else{
    document.querySelector("h1").textContent = "Draw"
}
}