function ready(){
    
    var idcategoria=1;
    
     var myParam = location.search.split('idclasse=')[1];
    console.log(myParam);
    switch(parseInt(myParam)){
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
   
    
    
    $.ajax({
        method: "POST",
        crossDomain: true, 
        url: phpurl,
        async: true,
        data: {categorieprodotti:idcategoria},
        success: function(response) {
            var categorieprodotti=JSON.parse(response);
            var temp=[];
            var count=0;
            var k=0;
            var i=0;
            
          var container = document.getElementById("categoria");
            
            var currrow = document.createElement("div");
            currrow.setAttribute("class","row");
            
            container.appendChild(currrow); 
            
            
            
          for(i=0;i<categorieprodotti.length;i++){
              
                    if(count % 3 == 0){
                        currrow = document.createElement("div");
                        currrow.setAttribute("class","row");
                        container.appendChild(currrow);
                    }
                
                var urlCategoria = urlCat + "?idcategoria=" +categorieprodotti[i].idcategoria;
                
                var imgTemp = document.createElement("img");
                
                var urlImmagine = "images/" + categorieprodotti[i].fotocategoria;
                imgTemp.setAttribute('src', urlImmagine);
                imgTemp.setAttribute("class", "img-responsive");

                
                var nomeTemp = document.createElement("a");
                nomeTemp.setAttribute('class', 'btn btn-primary btn-block');
                nomeTemp.setAttribute("href", urlCategoria);
                var nome = document.createTextNode(categorieprodotti[i].nomecategoria);
                nomeTemp.appendChild(nome);
                
                var descrTemp = document.createElement("p");
                var descr = document.createTextNode(categorieprodotti[i].descrizionecategoria);
                descrTemp.appendChild(descr);
                
                
                var categoria = document.createElement("div");
                categoria.setAttribute("class", "col-sm-4 feature");
              
                var categoriaPanel = document.createElement("div");
                categoriaPanel.setAttribute("class", "panel");
                categoriaPanel.setAttribute("id", "panel-category");
              
                categoriaPanel.appendChild(imgTemp);
                categoriaPanel.appendChild(descrTemp);
                categoriaPanel.appendChild(nomeTemp);
                categoria.appendChild(categoriaPanel);
              
                currrow.appendChild(categoria);
              
              count++;
              
               
        }
             
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

    
}

$(document).ready(ready);