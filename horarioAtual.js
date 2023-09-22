var horarioAtualBtn = document.getElementById("horarioAtualBtn");
var horaAtual = document.getElementById("horaAtual");
var cronometro = document.getElementById("cronometro");
var pomodoro = document.getElementById("pomodoro");

horarioAtualBtn.addEventListener('click', function(){
    horaAtual.style.cssText = (
        "transtion: 0.2s;" +
        "display: block;"
    )
    cronometro.style.cssText = (
        "transtion: 0.2s;" +
        "display: none;"
    )
    pomodoro.style.cssText = (
        "transtion: 0.2s;" +
        "display: none;"
    )
})


var periodo = document.getElementById("periodo");

function inciarC(){
    const intervaloSegundos = setInterval(function() {
        var date = new Date();

        var horas = date.getHours();
        var minutos = date.getMinutes();
        var segundos = date.getSeconds();

        if(horas < 10){
            horas = 0
            horas = "0" + date.getHours();
        }
        if(minutos < 10){
            minutos = 0
            minutos = "0" + date.getMinutes();
        }
        if(segundos < 10){
            segundos = 0
            segundos = "0" + date.getSeconds();
        }

        hora.innerText = `${horas}:${minutos}:${segundos}`; 
        
        if(horas < 12){
            periodo.innerText = "AM";
        }
        else{
            periodo.innerText = "PM";
        }
        
    }, 1000);
}

inciarC();