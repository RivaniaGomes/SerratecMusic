let artistas = [];
let tabelaArtistas = document.querySelector("#tabela-artistas tbody");

function obterArtistasAPI() {
  fetch(`${URL_BASE}/api/artista`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: obterToken(),
    },
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      artistas = response.map((a) => new artistas(a));
      preencherTabela(artistas);
    })
    .catch((error) => {
      console.log(error);
    });
}

function preencherTabela(artistas) {
  tabelaArtistas.textContent = "";
  artistas.map((artista) => {
    let tr = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdNome = document.createElement("td");
    let tdTipo = document.createElement("td");
    let tdAcoes = document.createElement("td");

    tdId.textContent = artista.id;
    tdNome.textContent = artista.nome;

    tdTipo.innerHTML = `<span> ${artista.tipo}`;//VERIFICAR ESTÁ IMCOMPLETO
  });
}

obterArtistasAPI();
