$(document).ready(ready);

function ready(){

    console.log("I'm ready!");
    var idprodotti=1;
    
    $.ajax({
        
        
        method: "POST",
        crossDomain: true,
        url: "http://timfmlhypermedia.altervista.org/includes/php/getRelevantProducts.php",
        async: true,
        data: {prodotti:idprodotti},
        success: function(response) {
            var prodotti=JSON.parse(response);
            var temp=[];
            var count=0;
            var i=0;
      
            var j=0;
            
            for(i=0;i<3;i++) {
                    
                       
                    var urlProdotto = "prodotto.html?idclasse=1&idcategoria=" + prodotti[i].idcategoria + "&idprodotti=" +prodotti[i].idprodotto;
                    
                    var imgTemp = document.createElement("img");  
                    
                    var urlImmagine = "images/" + prodotti[i].fotoprodotto;
                    imgTemp.setAttribute('src', urlImmagine);
                    imgTemp.setAttribute("class", "img-responsive");
                   
                
                    var titleTemp = document.createElement("div");
                    titleTemp.setAttribute("class", "panel-heading");
                
                    var titleBig = document.createElement("h3");
                    titleBig.setAttribute("class", "panel-title");
                    var title = document.createTextNode(prodotti[i].nomeprodotto);
                    titleBig.appendChild(title);
                    titleTemp.appendChild(titleBig);
                    
                    var nomeTemp = document.createElement("a");
                    nomeTemp.setAttribute('class', 'btn btn-danger btn-block');
                    nomeTemp.setAttribute("href", urlProdotto);
                    var nome = document.createTextNode("$" + prodotti[i].prezzoprodotto);
                    nomeTemp.appendChild(nome);
                    
                    var prodotto = document.createElement("div");
                    prodotto.setAttribute("class", "col-sm-4 feature");
                    
                    var prodottoPanel = document.createElement("div");
                    prodottoPanel.setAttribute("class", "panel");
                    prodottoPanel.setAttribute("id", "panel-product");
                    
                    
                    prodottoPanel.appendChild(titleTemp);
                    prodottoPanel.appendChild(imgTemp);
                    prodottoPanel.appendChild(nomeTemp);
                    
                    prodotto.appendChild(prodottoPanel);

                    var container = document.getElementById("prodottoEvidenza");
                    container.appendChild(prodotto);
              
            }
             
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    
    
    

}
