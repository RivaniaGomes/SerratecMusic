let formulario = {
  email: document.querySelector("#email"),
  senha: document.querySelector("#senha"),
  btnentrar: document.querySelector("#btn-entrar"),
};

//Aqui estamos escutando o evento de click
formulario.btnentrar.addEventListener("click", () => {
  let usuario = new Usuario({
    email: formulario.email.value,
    senha: formulario.senha.value,
  });

  // validar se o usuario e senha podemn acessar o sistema.
  //window.open("/artistas.html", "_self");
  autenticar(usuario.email, usuario.senha);
});

function autenticar(email, senha) {
  fetch("${URL_BASE}/api/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ user: email, password: senha }),
  })
    .then((response) => {
      let token = response.headers.get("Authorization");
      salvarToken(token);
      direcionarTelaDeArtistas();
    })
    .catch((error) => {
      console.log(error);
      alert("Não foi possível se autenticar");
    });
}
