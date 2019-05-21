//AI IMOVEIS
function montarPagina(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    documento.querySelectorAll(".search-default").forEach(function(div){
        var as = div.children;
        Array.from(as).forEach(function(a){
            var noticia = a.children;
            Array.from(noticia).forEach(x => document.body.appendChild(x));
        })
    });
}
function montarPagina2(pagina2){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina2, "text/html");
    documento.querySelectorAll(".carousel-item").forEach(function(div){
        var as = div.children;
        Array.from(as).forEach(function(a){
            var noticia = a.children;
            Array.from(noticia).forEach(x => document.body.appendChild(x));
        })
    });
 
}


function sendReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        montarPagina(this.responseText);
        montarPagina2(this.responseText);
        //alert("OI");
      }
    };
  xhttp.open("GET", "https://www.aiimoveis.com/", true);
  xhttp.send();
}

function teste(){
    sendReq();
}


function criarEvento(){
    document.querySelector("button").addEventListener("click",function(){
        teste();
    })
}

window.onload = criarEvento;
