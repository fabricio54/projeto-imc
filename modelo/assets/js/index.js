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
                resultado.innerHTML = `<p>seu imc está  atualmente em <strong>${imc.toFixed(2)}</strong> Abaixo do peso!</p>`;
            }else if(imc < 25){
                resultado.innerHTML = `<p>seu imc está  atualmente em <strong>${imc.toFixed(2)}</strong> Peso normal!</p>`;
            }else if(imc < 30){
                resultado.innerHTML = `<p>seu imc está  atualmente em <strong>${imc.toFixed(2)}</strong> Sobrepeso!</p>`;
            }else if(imc < 35){
                resultado.innerHTML = `<p>seu imc está  atualmente em <strong>${imc.toFixed(2)}</strong> Obesidade grau 1!</p>`;
            }else if(imc < 40){
                resultado.innerHTML = `<p>seu imc está  atualmente em <strong>${imc.toFixed(2)}</strong> Obesidade grau 2!</p>`;
            }else{
                resultado.innerHTML = `<p>seu imc está  atualmente em <strong>${imc.toFixed(2)}</strong> Obesidade grau 3!</p>`;
            }
        }else {
            if(!peso && altura){
                resultado.innerHTML = `<p>Não foi imformado o peso!`;
            }else if (!altura && peso){
                resultado.innerHTML = `<p>Não foi informado a altura!`;
            }else{
                resultado.innerHTML = `<p>Não foi informado altura e peso!`;
            }
        }
        console.log(imc);
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();

