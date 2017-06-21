$(document).ready(ready);


function ready(){
    
    $( "#prodotto" ).empty();

    var idprodotti=1;
    var myClass =  location.search.split('idclasse=')[1].charAt(0);
    var myParam = location.search.split('idcategoria=')[1];
    
    $.ajax({
        method: "POST",
        crossDomain: true,
        
        url: "http://timfmlhypermedia.altervista.org/includes/php/getSmartLifeCategoria.php?id="+myParam,
        async: true,
        
        data: {prodotti:idprodotti},
        success: function(response) {
            var prodotti=JSON.parse(response);
            var temp=[];
            var count=0;
            var i=0;

            var container = document.getElementById("prodotto");
            
            var currrow = document.createElement("div");
            currrow.setAttribute("class","row");
            
            container.appendChild(currrow);
            
            for(i=0;i<prodotti.length;i++) {
                
                    if(count % 3 == 0){
                        currrow = document.createElement("div");
                        currrow.setAttribute("class","row");
                        container.appendChild(currrow);
                    }

                    var urlProdotto ="prodottoSmartLife.html?idclasse=" + myClass + "?idcategoria=" + prodotti[i].idcategoria + "?idprodotti=" + prodotti[i].idsmartlife;
                    
                    var imgTemp = document.createElement("img");  
                    
                    var urlImmagine = "images/" + prodotti[i].fotosmartlife;
                    imgTemp.setAttribute('src', urlImmagine);
                    imgTemp.setAttribute("class", "img-responsive");
                   
                    var nomeTemp = document.createElement("a");
                    nomeTemp.setAttribute('class', 'btn btn-primary btn-block');
                    nomeTemp.setAttribute("href", urlProdotto);
                    var nome = document.createTextNode(prodotti[i].nomesmartlife);
                    nomeTemp.appendChild(nome);
                    
                    var descrTemp = document.createElement("p");
                    var descr = document.createTextNode(prodotti[i].descrizionesmartlife);
                    descrTemp.appendChild(descr);
                    
                    var prodotto = document.createElement("div");
                    prodotto.setAttribute("class", "col-sm-4 feature");
                    
                    var prodottoPanel = document.createElement("div");
                    prodottoPanel.setAttribute("class", "panel");
                    prodottoPanel.setAttribute("id", "panel-product");
                    
                    
                    prodottoPanel.appendChild(imgTemp);
                    prodottoPanel.appendChild(descrTemp);
                    prodottoPanel.appendChild(nomeTemp);
                    
                    prodotto.appendChild(prodottoPanel);

                    

                    currrow.appendChild(prodotto);
                
                count++;
              
            }
             
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}


