// Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display="none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opcion
let links = document.querySelectorAll("nav a");
for(var x=0; x <links.length;x++){
    links[x].onclick =function(){
        menu.style.display = "none";
        menu_visible = false;

    }
}

//Creo las barras 

function crearBarra(id_barra){
    for(i=0; i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let php = document.getElementById("php");
crearBarra(php);
let ilustrator = document.getElementById("ilustrastor");
crearBarra(ilustrastor);


//Se guarda la cantidad de barras y se pinta

let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(wordpress, 11, 2, intervalWordpress);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 15, 3, intervalPhotoshop);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 16, 4, intervalPhp);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator, 11, 5, intervalIlustrator);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}
