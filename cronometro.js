var cronometroBtn = document.getElementById("cronometroBtn");
var horaAtual = document.getElementById("horaAtual");
var cronometro = document.getElementById("cronometro");
var pomodoro = document.getElementById("pomodoro");

cronometroBtn.addEventListener('click', function(){
    horaAtual.style.cssText = (
        "transtion: 0.2s;" +
        "display: none;"
    )
    cronometro.style.cssText = (
        "transtion: 0.2s;" +
        "display: block;"
    )
    pomodoro.style.cssText = (
        "transtion: 0.2s;" +
        "display: none;"
    )
})


var btnIniciarCronometro = document.getElementById("btnIniciarCronometro");
var horacronometro = document.getElementById("horacronometro");
var functionSegundos;
var StopOrStart = 0;

btnIniciarCronometro.addEventListener('click', function(){

    if(StopOrStart == 0){

        var horas = 0;
        var minutos = 0;
        var segundos = 0;

        var horasRef = 0;
        var minutosRef = 0;
        var segundosRef = 0;

        functionSegundos = setInterval(() => {

            if(horas == 23 && minutos == 59 && segundos == 59){
                horasRef = 0
                horas = "0" + horasRef;

                minutosRef = 0
                minutos = "0" + minutosRef;

                segundosRef = 0
                segundos = "0" + segundosRef;
            }
            if(minutos == 59 && segundos == 59){
                minutosRef = 0
                minutos = "0" + minutosRef;

                segundosRef = 0
                segundos = "0" + segundosRef;

                horasRef = horasRef + 1;
            }
            if(segundos == 59){
                segundosRef = 0
                segundos = "0" + segundosRef;

                minutosRef = minutosRef + 1;
            }

            //Se horas for menor que 9, vamos acrescentar um "0";
            if(horas < 10){
                horas = 0
                horas = "0" + horasRef;
            }
            else{
                horas = horasRef;
            }

            //Se minutos for menor que 9, vamos acrescentar um "0";
            if(minutos < 9){
                minutos = 0
                minutos = "0" + minutosRef;
            }
            else{
                minutos = minutosRef;
            }

            //Se segundos for menor que 9, vamos acrescentar um "0";
            if(segundos < 9){
                segundos = 0
                segundos = "0" + segundosRef;
            }
            else{
                segundos = segundosRef;
            }

            horacronometro.innerText = `${horas}:${minutos}:${segundos}`;
            segundosRef = segundosRef + 1

        }, 1000)

        btnIniciarCronometro.innerText = "Zerar";
        StopOrStart = 1;
    }
    else if(StopOrStart == 1){
        clearInterval(functionSegundos);

        horacronometro.innerText = `00:00:00`;
        btnIniciarCronometro.innerText = "Iniciar";
        StopOrStart = 0;
    }
})