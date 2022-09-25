let formulario = {
  email: document.querySelector("#email"),
  senha: document.querySelector("#senha"),
  btnentrar: document.querySelector("#btn-entrar"),
};

//Aqui estamos escutando o evento de click
formulario.btnentrar.addEventListener('click', () => {
    alert("Olá!!!")

    let usuario = new Usuario({
        email: formulario.email.value,
        senha: formulario.senha.value 
    });

    window.open('/artistas.html', '_self');
});