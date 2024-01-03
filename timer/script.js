// let start = 10 ;                //à modifier en prompt ou input
let start = prompt("choisis le temps = ");
let time = start * 60;
let timer = document.getElementById('chrono');
let body = document.querySelector('body');


setInterval(updateTimer, 1000);

function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

timer.innerHTML = `${minutes} : ${seconds}`;
time--;


}

function lecture(){
     start = prompt("choisis le temps = ");
     time = start * 60;
}

function reset(){
    time = 0;
}

function pause(){
    
}