function ready(){
    
    var idcategoria=1;
    var myClass =  location.search.split('idclasse=')[1].charAt(0);
     var myParam = location.search.split('idcategoria=')[1].charAt(0);
     var myDevice = location.search.split('idprodotti=')[1];

    switch(parseInt(myClass)){
        case 1:
            var phpurl="http://timfmlhypermedia.altervista.org/includes/php/getCategorieProdotti.php";
            var urlCat="prodottiPerCategoria.html?idclasse=1";
            break;
        case 2:
            var phpurl="http://timfmlhypermedia.altervista.org/includes/php/getCategorieSmartLife.php";
            var urlCat="smartLifePerCategoria.html?idclasse=2";
            break;
        case 3:
            var phpurl="http://timfmlhypermedia.altervista.org/includes/php/getCategorieAssistenza.php";
            var urlCat="assistenzaPerCategoria.html?idclasse=3";
            break;
        default:
            break;
    }
    console.log(myDevice);

    if(myDevice == undefined){var urlBack="categorieProdotti.html?idclasse="+myClass;}
    
    
    $.ajax({
        method: "POST",
        crossDomain: true,
        async: true,
        
        url:phpurl,
        
        data: {categorieprodotti:idcategoria},
        success: function(response) {
            var categorieprodotti=JSON.parse(response);
            var temp=[];
            var count=0;
            var k=0;
            var i=0;
            		
            
            var navbar = document.createElement("nav");
            navbar.setAttribute("class", "navbar navbar-fixed-top");
            navbar.setAttribute("id", "productBar");
            
            var navhead = document.createElement("div");
            navhead.setAttribute("class", "navbar-cont");
            
            var gotocont = document.createElement("a");
            gotocont.setAttribute("class", "navbar-goto");
            gotocont.setAttribute("id", "goto");
            
            var goto = document.createElement("span");
            goto.setAttribute("class", "glyphicon glyphicon-chevron-left");
            goto.setAttribute("aria-hidden", "true");
            
            var navcollapse = document.createElement("nav");
            navcollapse.setAttribute("class", "nav-collapse collapse");
            navcollapse.setAttribute("id", "barcat");
            
            gotocont.appendChild(goto);
            navhead.appendChild(gotocont);
            navbar.appendChild(navhead);
            navbar.appendChild(navcollapse);
            
            var categoria = document.createElement("ul");
            categoria.setAttribute("class", "nav navbar-nav pull-right");  
            
            for(i=0;i<categorieprodotti.length;i++){
              
                var urlCategoria = urlCat + "?idcategoria=" +categorieprodotti[i].idcategoria;
                
                
                var nomeTemp = document.createElement("a");
                nomeTemp.setAttribute("href", urlCategoria);

                var nome = document.createTextNode(categorieprodotti[i].nomecategoria);
                nomeTemp.appendChild(nome);                      
              
                var categoriaPanel = document.createElement("li");
              
                if(myParam == categorieprodotti[i].idcategoria){
                    var urlBack = urlCategoria;
                    if(myDevice == undefined){var urlBack="categorieProdotti.html?idclasse="+myClass;}
                    categoriaPanel.setAttribute("class", "active");
                    gotocont.setAttribute("href",urlBack);
                    gotocont.appendChild(document.createTextNode(categorieprodotti[i].nomecategoria));
                    
              }
              
                categoriaPanel.appendChild(nomeTemp);
                categoria.appendChild(categoriaPanel);
              
                
               
        }
            
            navcollapse.appendChild(categoria);
            document.getElementById("productBar").appendChild(navbar);
             
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}

$(document).ready(ready);