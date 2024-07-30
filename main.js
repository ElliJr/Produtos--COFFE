// menu
function toggleMenu(){
    var menu = document.getElementById("menu");
    if (menu.style.width === "250px"){
        menu.style.width = "0";
    } else {
     menu.style.width = "250px";
    }
}
// codigo para tamanho da senha colocada
function validarCampo() {
    const campo = document.getElementById("meuCampo");
    const valor = campo.value;
    if (valor.length < 8){
        alert("Digite pelo menos 8 caracteres!");
    }
}