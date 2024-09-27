const inputFardo = document.getElementById("fardo");
const inputDividir = document.getElementById("dividir");
const inputPercentual = document.getElementById("percentual");
const btnCalcular = document.getElementById("btn");

btnCalcular.addEventListener('click', () => {
    let fardo = parseFloat(inputFardo.value);
    let dividir = parseFloat(inputDividir.value);
    let percentual = parseFloat(inputPercentual.value);

    let precoCusto = fardo / dividir;

    percentual = percentual / 100;

    let calculoPercentual = precoCusto * percentual;
    percentual = percentual * 100;
    let precoFinal = precoCusto + calculoPercentual;

    if (Number.isNaN(fardo) || Number.isNaN(dividir) || Number.isNaN(percentual)) {
        alert("Preencha todos os campos!");
    } else {
        document.getElementById("trocarTexto").innerHTML = (`O Preço de Custo é de: ${precoCusto.toFixed(2)}. 
        O Preço de Venda é de: R$: ${precoFinal.toFixed(2)}. O Percentual é de: ${percentual}%`);
    }
});

const inputCusto = document.getElementById("custo");
const inputPercentualCusto = document.getElementById("percentual-custo");
const btnCalcularCusto = document.getElementById("btn-custo");

btnCalcularCusto.addEventListener('click', () => {
    let custo = parseFloat(inputCusto.value);
    let percentualCusto = parseFloat(inputPercentualCusto.value);

    percentualCusto = percentualCusto / 100;

    let calculoCustoPercentual = custo * percentualCusto;
    percentualCusto = percentualCusto * 100;
    let precoCustoFinal = custo + calculoCustoPercentual;

    if (Number.isNaN(custo) || Number.isNaN(percentualCusto)) {
        alert("Preencha todos os campos!");
    } else {
        document.getElementById("trocarTextoCusto").innerHTML = (`O Preço de Venda é de: R$: ${precoCustoFinal.toFixed(2)}. 
        O Percentual é de: ${percentualCusto}%`);
    }
});