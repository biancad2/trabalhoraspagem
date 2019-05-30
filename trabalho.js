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
    documento.querySelectorAll("#banners-6e0fp").forEach(function(div){
        var as = div.children;
        Array.from(as).forEach(function(a){
            var noticia = a.children;
            Array.from(noticia).forEach(x => document.body.appendChild(x));
        })
    });
}

function montarPagina3(pagina3){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina3, "text/html");
    documento.querySelectorAll(".nav-menu").forEach(function(div){
        var as = div.children;
        Array.from(as).forEach(function(a){
            var noticia = a.children;
            Array.from(noticia).forEach(x => document.body.appendChild(x));
        })
    });
}
function montarPagina4(pagina4){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina4, "text/html");
    documento.querySelectorAll(".home-destaque").forEach(function(div){
        var as = div.children;
        Array.from(as).forEach(function(a){
            var noticia = a.children;
            Array.from(noticia).forEach(x => document.body.appendChild(x));
        })
    });
}
function montarPagina5(pagina5){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina5, "text/html");
    documento.querySelectorAll(".home-noticia").forEach(function(div){
        var as = div.children;
        Array.from(as).forEach(function(a){
            var noticia = a.children;
            Array.from(noticia).forEach(x => document.body.appendChild(x));
        })
    });
}
function montarPagina6(pagina6){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina6, "text/html");
    documento.querySelectorAll(".block-template-01").forEach(function(div){
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
        //olhar se esta funcionando
       montarPagina(this.responseText);
       montarPagina2(this.responseText);
        
        //alert("OI");
      }
    };
  xhttp.open("GET", "https://www.aiimoveis.com/", true);
  xhttp.send();
}
function sendReq2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        montarPagina3(this.responseText);
      montarPagina4(this.responseText);

      }
    };
 
  xhttp.open("GET", "https://www.znimovel.com.br/", true);
  xhttp.send();
}

function sendReq3() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

      montarPagina5(this.responseText);
       montarPagina6(this.responseText);
      }
    };
  xhttp.open("GET", "https://www.aiimoveis.com/", true);

  xhttp.send();
}

function teste(){
    sendReq();
    sendReq2();
    sendReq3();
}


function criarEvento(){
    document.querySelector("button").addEventListener("click",function(){
        teste();
    })
}

window.onload = criarEvento;
