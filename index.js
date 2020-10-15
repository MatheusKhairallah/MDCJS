const clicouEmCalcular = (evento) => {
    evento.preventDefault();

    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;

    let dividendo;
    let divisor;
    let resto;
    
    let mensagem;

    if(numero1 == 0 || numero2 ==0) {
    mensagem= 'Não pode haver valores 0';
    } else {
        if (numero1>numero2)
        {
          dividendo = numero1;
          divisor = numero2;  
        }

        else
        {
           dividendo = numero2;
           divisor = numero1;  
        }
        while (dividendo % divisor != 0)
        {
            resto = dividendo % divisor;
            dividendo = divisor;
            divisor = resto;
        }
        mensagem= `MDC(a, b)= ${divisor}`;
    }

    const campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = mensagem;
};

const iniciar = () => {
    document.getElementById('calcular').addEventListener('click', clicouEmCalcular);
};

document.addEventListener('DOMContentLoaded', iniciar);