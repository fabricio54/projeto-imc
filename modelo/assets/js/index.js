/* Minha solução

function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    function recebeEventoForm (evento) {
        evento.preventDefault();
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        const imc = peso / (altura * altura);

        resultado.innerHTML = '';
        if(altura && peso){
            if(imc < 18.5){
                resultado.innerHTML = `IMC <strong>${imc.toFixed(2)}</strong> Abaixo do peso!`;
            }else if(imc < 25){
                resultado.innerHTML = `IMC <strong>${imc.toFixed(2)}</strong> Peso normal!`;
            }else if(imc < 30){
                resultado.innerHTML = `IMC <strong>${imc.toFixed(2)}</strong> Sobrepeso!`;
            }else if(imc < 35){
                resultado.innerHTML = `IMC <strong>${imc.toFixed(2)}</strong> Obesidade grau 1!`;
            }else if(imc < 40){
                resultado.innerHTML = `IMC <strong>${imc.toFixed(2)}</strong> Obesidade grau 2!`;
            }else{
                resultado.innerHTML = `IMC <strong>${imc.toFixed(2)}</strong> Obesidade grau 3!`;
            }
        }else {
            if(!peso && altura){
                resultado.innerHTML = `Não foi imformado o peso!`;
            }else if (!altura && peso){
                resultado.innerHTML = `Não foi informado a altura!`;
            }else{
                resultado.innerHTML = `Não foi informado altura e peso!`;
            }
        }
        console.log(imc);
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
*/

// solução Otávio Miranda

// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // pegando os valores dos inputs
    // podemos selecionar pelo document ou pelo próprio evento
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    // pegando o valor já convertido em number em uma variável
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso){
        setResultado('Peso inválido', false);
        return;
    }

    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    console.log(imc);

});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39,9) return nivel[5];
    
    if (imc >= 34.9) return nivel[4];

    if (imc >= 29.9) return nivel[3];
     
    if (imc >= 24.9) return nivel[2]
     
    if (imc >= 18.5) return nivel[1];
    
    if (imc < 18.5) return nivel[0];

}

// função para calcular imc
function getImc (peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// função que cria um parágrafo
function criaP () {
    // criando um elemento
    const p = document.querySelector('#resultado');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) { 
    p.classList.add('paragrafo-resultado');
    }else {
       p.classList.add('bad');
    }

    p.innerHTML = msg;
    // adiciona um elemento
    resultado.appendChild(p);
}

