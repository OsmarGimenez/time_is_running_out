let seconds = document.querySelector("#seconds");
let minutes = document.querySelector("#minutes");
let hour = document.querySelector("#hour");

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}

setInterval(function () {
    var time = getSecondsSinceStartOfDay();
    //console.log(time);

    document.querySelector("#h").innerText = Math.trunc((time / 60)/60);
    document.querySelector("#m").innerText = Math.trunc(time / 60) % 60;
    document.querySelector("#s").innerText = time % 60;

    
    secondsRotation(time);
    minutesRotation(time);
    hourRotation(time);

}, 1000);

function secondsRotation(time) {
    //Calcular segundos
    time %= 60;

    //1 segundo = 6 grados
    //Porque 360grados / 60 segundos = 6 grados
    let grados = getGrades(time,6);

    seconds.style.transform = "rotate(" + grados + "deg)";
}

function minutesRotation(time) {

    time = Math.trunc(time / 60) % 60;

    //1 minuto = 6 grados
    //Porque 360grados / 60 minutos = 6 grados
    let grados = getGrades(time, 6);

    minutes.style.transform = "rotate(" + grados + "deg)";
}

function hourRotation(time) {

    time = Math.trunc((time / 60) / 60) -12;

    //1 segundo = 15 grados
    //Porque 360grados / 12 horas segundos = 30 grados
    let grados = getGrades(time, 30);
    console.log(time);

    hour.style.transform = "rotate(" + grados + "deg)";
}

function getGrades(grados, time) {
    return (grados * time) + 180;
}
