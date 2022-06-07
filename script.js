const email = document.querySelector("#inputEmail")
const senha = document.querySelector("#inputPassword")
const botao = document.querySelector("#buttonIN")
const cadastrar = document.querySelector("#cadastraIN")
const form = document.querySelector("#forms")
const emailcorreto = "joabe@andrade"
const senhacorreta = "igor"

form.addEventListener("submit", fazerLogin)

function fazerLogin(event){
    event.preventDefault()
    console.log("Email: " + email.value)
    console.log("Senha: " + senha.value)
    
    if(email.value == emailcorreto && senha.value == senhacorreta){
        alert("Email cadastrado!")
    }else{
        alert("Email não cadastrado!")
    }
}
