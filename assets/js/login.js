let body = document.getElementsByTagName("body")[0];

function login()  {
    let campoEmail = document.getElementById("campo-email");
    let campoSenha = document.getElementById("campo-senha");
    let email = campoEmail.value;
    let senha = campoSenha.value;

    if(email === "lipe@gmail.com" && senha === "lipe135") {
        logar();
    } else {
        alert("Email ou senha incorreto")
    }
}

function logar() {
    window.location.href = "paginas/produtos.html"; 
}