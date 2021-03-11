const select = (el) => document.querySelector(el);
// valores de Inicio
let valor = select("#valor");
let prazoAoAno = select("#prazoAoAno");
let jurosAoAno = select("#jurosAoAno");
let button = select("button");

// Resultado
let prazoAoMes = select("#prazoAoMes");
let jurosAoMes = select("#jurosAoMes");
let jurosAcumulados = select("#jurosAcumulados");

button.addEventListener("click", () => {
    select(".tabela").style.display = 'block'
    prazoAoMes.value = prazoAoAno.value * 12;
    jurosAoMes.value = Math.pow(1 + Number(jurosAoAno.value), 1 / 12) - 1;
    let Amortizado = valor.value / prazoAoMes.value;
    let x = 0;
    let juros = [];
    let jurosAcumulado = 0;
    while (x < prazoAoMes.value) {
        juros.push(((valor.value - (x * Amortizado)) * jurosAoMes.value).toFixed(2));
        jurosAcumulado += (valor.value - (x * Amortizado)) * jurosAoMes.value;
        let cloneEstrutura = select("tbody tr").cloneNode(true);
        cloneEstrutura.style = "block"
        cloneEstrutura.querySelector('.index').innerHTML = x + 1
        cloneEstrutura.querySelector('.amortizado').innerHTML = Amortizado.toFixed(2)
        cloneEstrutura.querySelector('.juros').innerHTML = juros[x]
        cloneEstrutura.querySelector('.total').innerHTML = (Number(juros[x]) + Amortizado).toFixed(2)
        select("tbody").append(cloneEstrutura);
        x++;
    }
    jurosAcumulados.value = jurosAcumulado.toFixed(2);
});