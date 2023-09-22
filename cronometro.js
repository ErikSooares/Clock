var cronometroBtn = document.getElementById("cronometroBtn");
var horaAtual = document.getElementById("horaAtual");
var cronometro = document.getElementById("cronometro");

cronometroBtn.addEventListener('click', function(){
    horaAtual.style.cssText = (
        "transition: 0.2s;" +
        "display: none;"
    )
    cronometro.style.cssText = (
        "transition: 0.2s;" +
        "display: block;"
    )
})

// Seleção de elementos do DOM
var btnIniciarCronometro = document.getElementById("btnIniciarCronometro");
var horacronometro = document.getElementById("horacronometro");

// Variáveis do cronômetro
var functionSegundos;
var StopOrStart = 0;
var horasRef = 0;
var minutosRef = 0;
var segundosRef = 0;

// Adicionar evento de clique ao botão "btnIniciarCronometro"
btnIniciarCronometro.addEventListener('click', function(){
    if (StopOrStart == 0) {
        functionSegundos = setInterval(() => {
            segundosRef++;

            if (segundosRef == 60) {
                segundosRef = 0;
                minutosRef++;

                if (minutosRef == 60) {
                    minutosRef = 0;
                    horasRef = (horasRef + 1) % 24;
                }
            }

            const horas = formatTime(horasRef);
            const minutos = formatTime(minutosRef);
            const segundos = formatTime(segundosRef);

            horacronometro.innerText = `${horas}:${minutos}:${segundos}`;
        }, 1000);

        btnIniciarCronometro.innerText = "Zerar";
        StopOrStart = 1;
    } else if (StopOrStart == 1) {
        clearInterval(functionSegundos);

        horasRef = 0;
        minutosRef = 0;
        segundosRef = 0;

        horacronometro.innerText = `00:00:00`;
        btnIniciarCronometro.innerText = "Iniciar";
        StopOrStart = 0;
    }
});

// Função para formatar valores com dois dígitos
function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}