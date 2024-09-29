const inputFardo = document.getElementById("fardo");
const inputDividir = document.getElementById("dividir");
const inputPercentual = document.getElementById("percentual");
const btnCalcular = document.getElementById("btn");
const btnClose = document.getElementById('btn-close');
const divModal = document.getElementById('modal');

function openModal() {
    divModal.style.display = 'flex';
}

function closeModal() {
    divModal.style.display = 'none';
}

btnCalcular.addEventListener('click', () => {
    openModal();
    let fardo = parseFloat(inputFardo.value.replace(',', '.'));
    let dividir = parseFloat(inputDividir.value);
    let percentual = parseFloat(inputPercentual.value);

    let precoCusto = fardo / dividir;

    percentual = percentual / 100;

    let calculoPercentual = precoCusto * percentual;
    percentual = percentual * 100;
    let precoFinal = precoCusto + calculoPercentual;

    if (Number.isNaN(fardo) || Number.isNaN(dividir) || Number.isNaN(percentual)) {
        alert("Preencha todos os campos!");
        closeModal();
    } else {
        document.getElementById("trocarTextoFardo").innerHTML = (`${fardo.toFixed(2)}`);
        document.getElementById("trocarTextoCusto").innerHTML = (`${precoCusto.toFixed(2)}`);
        document.getElementById("trocarTextoVenda").innerHTML = (`${precoFinal.toFixed(2)}`);
        document.getElementById("trocarTextoPercentual").innerHTML = (`${percentual}%`);
    }
});

const inputCusto = document.getElementById("custo");
const inputPercentualCusto = document.getElementById("percentual-custo");
const btnCalcularCusto = document.getElementById("btn-custo");

btnCalcularCusto.addEventListener('click', () => {
    openModal();
    let custo = parseFloat(inputCusto.value.replace(',', '.'));
    let percentualCusto = parseFloat(inputPercentualCusto.value);

    percentualCusto = percentualCusto / 100;

    let calculoCustoPercentual = custo * percentualCusto;
    percentualCusto = percentualCusto * 100;
    let precoCustoFinal = custo + calculoCustoPercentual;

    if (Number.isNaN(custo) || Number.isNaN(percentualCusto)) {
        alert("Preencha todos os campos!");
        closeModal();
    } else {
        document.getElementById("trocarTextoCusto").innerHTML = (`${custo.toFixed(2)}`);
        document.getElementById("trocarTextoVenda").innerHTML = (`${precoCustoFinal.toFixed(2)}`);
        document.getElementById("trocarTextoPercentual").innerHTML = (`${percentualCusto}%`);
    }
});

btnClose.addEventListener('click', () => {
    closeModal();
});
