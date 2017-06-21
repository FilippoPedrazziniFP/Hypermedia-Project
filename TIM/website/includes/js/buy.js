$(document).ready(evan);

function evan(){
    
    var idprodotti=1;  
    
    var myParam = location.search.split('idprodotti=')[1];
    
    var myClass = location.search.split('idclasse=')[1].charAt(0);
    
    switch(parseInt(myClass)){
        case 1:
            var phpurl="http://timfmlhypermedia.altervista.org/includes/php/getProdotto.php?id=" + myParam;
            break;
        case 2:
            var phpurl="http://timfmlhypermedia.altervista.org/includes/php/getSmartLife.php?id=" + myParam;
            break;
        default:
            break;
    }

            
    $.ajax({
        method: "POST",          
        crossDomain: true, 
        
        url: phpurl,
        async: true,

        data: {prodotto:idprodotti},        
        success: function(response) {
            var myprodotto=JSON.parse(response);
            buy(myprodotto,myClass);
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}


function buy(myprodotto,myClass){   
    
        switch(parseInt(myClass)){
        case 1:
            var urlImmagine="images/" + myprodotto.fotoprodotto;
            var text = "$ " + myprodotto.prezzoprodotto;
            var idTemp = document.createElement("h2");
            var name = myprodotto.nomeprodotto;
            document.getElementById("close").setAttribute("href","prodotto.html?idclasse=1&idcategoria=" + myprodotto.idcategoria +"&idprodotti=" + myprodotto.idprodotto);
            break;
        case 2:
            var urlImmagine="images/" + myprodotto.fotosmartlife;
            var text = myprodotto.descrizionesmartlife;
            var idTemp = document.createElement("p");
            var name = myprodotto.nomesmartlife;
            document.getElementById("close").setAttribute("href","prodottoSmartLife.html?idclasse=2&idcategoria=" + myprodotto.idcategoria +"&idprodotti=" + myprodotto.idsmartlife);
            break;
        default:
            break;
    }
            
            /*nome + foto + prezzo*/
            var imgTemp = document.createElement("img");
            var urlImg = urlImmagine;
            imgTemp.setAttribute('src', urlImg);
            imgTemp.setAttribute("class", "img-responsive");
            
            var idprice = document.createTextNode(text);
            idTemp.appendChild(idprice);
    
            var nome = document.createTextNode(name);
            nomeTemp = document.createElement("h2");
            nomeTemp.appendChild(nome);
            
            var containerProdotto = document.getElementById("single-product-img");
            containerProdotto.appendChild(imgTemp);
            containerProdotto.appendChild(nomeTemp);
            containerProdotto.appendChild(idTemp);
    

    

}