const form = document.querySelector(".game-form");
const number = document.getElementById("number");
let show_guesses=document.querySelector(".all-guesses")
let result=document.querySelector(".result")
let start_game=document.querySelector(".start-game")
let your_guesses=document.querySelector(".your-guesses")



let all_guesses=[]

let game_number=Math.round(Math.random()*100)



function start_game_button(){
    start_game.disabled= false;
    start_game.style.cursor = "pointer";
    start_game.style.opacity = "1";
}

function restart_game(){
    game_number=Math.round(Math.random()*100)
    all_guesses=[];
    form.reset();
    your_guesses.style.display="none";
    result.textContent=" ";
    start_game.disabled= false;
    start_game.style.cursor= "not-allowed";
    start_game.style.opacity = "0.5";
    number.disabled =false;


}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    your_guesses.style.display="block";
    all_guesses.push(number.value);
    if(number.value>game_number){
        result.textContent="Too High";
    }
    else if(number.value<game_number){
        result.textContent="Too Low";
    }
    else{
        result.textContent="Congrats ! You guessed it right.";
        start_game_button();
        number.disabled = true;
    }
    form.reset()
    show_guesses.textContent=all_guesses.join()
});

start_game.addEventListener('click',restart_game);