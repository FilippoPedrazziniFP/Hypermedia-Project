$(document).ready(ready);

function ready(){
    
    var idprodotti =1;
    var temp=[];
    
     $.ajax({
        method: "POST",
        crossDomain: true,
        
        url: "http://timfmlhypermedia.altervista.org/includes/php/getSottocategorieAssistenza.php",
        
        async: true,
        data: {prodotti:idprodotti},
        success: function(response) {
            var subcats=JSON.parse(response);
            
            var count=0;
            var i=0;

            
            for(i=0;i<subcats.length;i++) {

                temp[i] = subcats[i].nomesottocategoria;
              
            }
            console.log(temp);
            myfunction(temp);
             
        },
         
        error: function(request,error) 
        {
            console.log("Error");
        }
       
    });
     
}

function myfunction(params){

    var idprodotti=1;
    var myClass =  location.search.split('idclasse=')[1].charAt(0);
    var myParam = location.search.split('idcategoria=')[1];
    
    $.ajax({
        method: "POST",
        crossDomain: true,
        
        url: "http://timfmlhypermedia.altervista.org/includes/php/getAssistenzaCategoria.php?id="+myParam,
        
        async: true,
        data: {prodotti:idprodotti},
        success: function(response) {
            var prodotti=JSON.parse(response);
            var count=1;
            var i=0;

            
            var currSubcat = 0;
            var catcol = document.getElementById("prodotto");
            var container = document.getElementById("prodotto");
            var newrow = document.createElement("div");
            newrow.setAttribute("class","row");
            container.appendChild(newrow);
            
            for(i=0;i<prodotti.length;i++) {
                
                var subcat = prodotti[i].idsottocategoria;
                
                if(parseInt(subcat) != currSubcat){
                    currSubcat = parseInt(subcat);
                    catcol = document.createElement("div");
                    catcol.setAttribute("class","col-sm-4 feature");
                    var title = document.createElement("h2");
                    title.appendChild(document.createTextNode(params[currSubcat-1]));
                    catcol.appendChild(title);
                    newrow.appendChild(catcol);
                   
                    if(count % 3 == 0){
                        newrow = document.createElement("div");
                        newrow.setAttribute("class","row");
                        container.appendChild(newrow);
                    }
                    
                        
                    
                    count++;
                }

                var urlProdotto ="prodottoAssistenza.html?idclasse=" + myClass + "?idcategoria=" + prodotti[i].idcategoria + "?idprodotti=" + prodotti[i].idassistenza;

                   
                var nomeTemp = document.createElement("a");
                nomeTemp.setAttribute("href", urlProdotto);
                var nome = document.createTextNode(prodotti[i].nomeassistenza);
                nomeTemp.appendChild(nome);
                    
                var prodotto = document.createElement("div");
                    
                var prodottoPanel = document.createElement("div");
                prodottoPanel.setAttribute("class", "panel");
                prodottoPanel.setAttribute("id", "panel-product");
                    
                prodottoPanel.appendChild(nomeTemp);
                
                prodotto.appendChild(prodottoPanel);

                   
                catcol.appendChild(prodotto);
              
            }
             
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    

}

