const grid = document.getElementById("grid");
const vazio = document.getElementById("vazio");
const campoBusca = document.getElementById("busca");

function formatarData(data) {
  const partes = data.split("-");
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}

function renderizar(lista) {
  grid.innerHTML = "";

  lista.forEach(function (ator) {
    grid.innerHTML += `
      <div class="card">
        <img src="${ator.foto}" alt="Foto de ${ator.nome}">
        <h2>${ator.nome}</h2>
        <p>País: ${ator.pais}</p>
        <p>Nascimento: ${formatarData(ator.nascimento)}</p>
      </div>
    `;
  });

  vazio.hidden = lista.length > 0;
}

function filtrar() {
  const termo = campoBusca.value.toLowerCase();

  const filtrados = atores.filter(function (ator) {
    return ator.nome.toLowerCase().includes(termo);
  });

  renderizar(filtrados);
}

renderizar(atores);
