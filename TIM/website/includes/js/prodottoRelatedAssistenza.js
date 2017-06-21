$(document).ready(evan);

function evan() {
    
	var idprodotti = 1;
    var myParam = location.search.split('idprodotti=')[1];
    
	$.ajax({
		method: "POST",
		crossDomain: true,
        
		url: "http://timfmlhypermedia.altervista.org/includes/php/getProdottoRelatedAssistance.php?id="+myParam,
        
		data: {prodotto: idprodotti},
		success: function (response) {
			var prodotti = JSON.parse(response);
			
            var counter = 0;
            var currrow = document.createElement("div");
            currrow.setAttribute("class","row");
            
            var container = document.getElementById("assistance-related");
            container.appendChild(currrow);

			for (i = 0; i < prodotti.length; i++) {
                
                    if(counter % 4 == 0){
                        currrow = document.createElement("div");
                        currrow.setAttribute("class","row");
                        container.appendChild(currrow);
                    }
                
				var urlDevice = "prodottoAssistenza.html?idclasse=3?idcategoria=" +prodotti[i].idcategoria + "?idprodotti=" + prodotti[i].idassistenza;
                
				var nomeTemp = document.createElement("a");
				nomeTemp.setAttribute("href", urlDevice);
				var nome = document.createTextNode(prodotti[i].nomeassistenza);
				nomeTemp.appendChild(nome);
					
				var prodotto = document.createElement("div");
                    prodotto.setAttribute("class", "col-sm-3 feature");

                var prodottoPanel = document.createElement("div");
                    prodottoPanel.setAttribute("class", "panel");
                    prodottoPanel.setAttribute("id", "panel-product");
                
                prodottoPanel.appendChild(nomeTemp);
                    
                prodotto.appendChild(prodottoPanel);
                
			
				currrow.appendChild(prodotto);

                counter++;
				
			}
		},
		error: function (request, error) {
			console.log("Error");
		}
	});
}