$(document).ready(function(){

    //aplica uma função no click dos botões comprar
    $(".card-buy").click(function(){
        alert("Ops, produto Indisponível, sorry :(");

        $(this).text("Indisponível");
    });

});



function exibeMenu() {
    //alterar o css da navbar
    let navbar = document.getElementById('menu');
    navbar.classList.toggle("showNavbar");
}