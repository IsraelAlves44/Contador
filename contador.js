function pegarDados() {
  let inicio = document.getElementById("inicio");
  let fim = document.getElementById("fim");
  let passo = document.getElementById("passo");
  let resp = document.getElementById("resposta");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert("Digite todos os valores corretamente");
  } else {
    resp.innerHTML = "Calculando:";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    for (let c = i; c <= f; c += p) {
      resp.innerHTML += `"👉 " ${c} `;
    }
  }

  console.log(inicio.value, fim.value, passo.value);
}
