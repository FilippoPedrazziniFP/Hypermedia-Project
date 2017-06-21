$(document).ready(evan);

function evan(){
    
    var idprodotti=1;  
    var myParam = location.search.split('idprodotti=')[1];
    
    $.ajax({
        method: "POST",          
        crossDomain: true, 
        
        url: "http://timfmlhypermedia.altervista.org/includes/php/getProdotto.php?id="+myParam,
        async: true,

        data: {prodotto:idprodotti},        
        success: function(response) {
            var myprodotto=JSON.parse(response);
            
            /*nome + foto + prezzo*/
            var imgTemp = document.createElement("img");
            var urlImg = "images/" + myprodotto.fotoprodotto;
            imgTemp.setAttribute('src', urlImg);
            imgTemp.setAttribute("class", "img-responsive");
            
            
            var nomeTemp = document.createElement("h2");
            var nome = document.createTextNode(myprodotto.nomeprodotto);
            nomeTemp.appendChild(nome);
            
            var priceTemp = document.createElement("p");
            var price = document.createTextNode("$"+myprodotto.prezzoprodotto);
            priceTemp.appendChild(price);
            
            var containerProdottoImg = document.getElementById("single-product-img");
            containerProdottoImg.appendChild(imgTemp);
           
            var containerProdottoNomePrice = document.getElementById("single-product-name-price"); containerProdottoNomePrice.appendChild(nomeTemp);
            containerProdottoNomePrice.appendChild(priceTemp);
            
            /*descrizione + caratteristiche */
            
            var descrTemp = document.createElement("p");
            var descrizione = document.createTextNode(myprodotto.descrizioneprodotto);
            descrTemp.appendChild(descrizione);
            
            var containerDescr = document.getElementById("descrizione");
            containerDescr.appendChild(descrTemp);
            
            document.getElementById("buy").setAttribute("href","buy.html?idclasse=1&idcategoria=" + myprodotto.idcategoria +"&idprodotti=" + myprodotto.idprodotto);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
    
    //Tabella caratteristiche tecniche
     $.ajax({
        method: "POST",          
        crossDomain: true, 
        
        url: "http://timfmlhypermedia.altervista.org/includes/php/getSpecificheTecniche.php?id="+myParam,
        async: true,

        data: {prodotto:idprodotti},        
        success: function(response) {
            var myprodotto=JSON.parse(response);            
            
            //caratteristiche tecniche
            var tab = document.createElement("table");
            tab.setAttribute("class", "table table-bordered");
            var tabBody = document.createElement("tbody");
            tab.appendChild(tabBody);
 
            for(Object in myprodotto){
                if(myprodotto[Object] != ""){
                    var tr = document.createElement("tr");          
                    var title = document.createElement("td");
                    var titleTemp = document.createTextNode(Object.charAt(0).toUpperCase() + Object.substring(1));
                    title.appendChild(titleTemp);
                    var body = document.createElement("td");
                    var bodyTemp = document.createTextNode(myprodotto[Object]);
                    body.appendChild(bodyTemp);
                    tr.appendChild(title);
                    tr.appendChild(body);
                    tabBody.appendChild(tr);}
            }
  
            var containerFeatures = document.getElementById("specifiche");
           
            containerFeatures.appendChild(tab);

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });


}