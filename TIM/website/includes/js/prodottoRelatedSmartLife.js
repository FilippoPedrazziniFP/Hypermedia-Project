$(document).ready(evan);

function evan() {
    
	var idprodotti = 1;
    var myParam = location.search.split('idprodotti=')[1];
    
	$.ajax({
		method: "POST",
		crossDomain: true,
        
		url: "http://timfmlhypermedia.altervista.org/includes/php/getProdottoRelatedSmartLife.php?id="+myParam,
        
		data: {prodotto: idprodotti},
		success: function (response) {
			var prodotti = JSON.parse(response);
            
            var counter = 0;
            var currrow = document.createElement("div");
            currrow.setAttribute("class","row");
            
            var container = document.getElementById("prodotto-related");
            container.appendChild(currrow);

			for (i = 0; i < prodotti.length; i++) {
                
                    if(counter % 3 == 0){
                        currrow = document.createElement("div");
                        currrow.setAttribute("class","row");
                        container.appendChild(currrow);
                    }
                
                var imgTemp = document.createElement("img");
				var urlImmagine = "images/" + prodotti[i].fotosmartlife;
				imgTemp.setAttribute('src', urlImmagine);
				imgTemp.setAttribute("class", "img-responsive");
                
				var urlDevice = "prodottoSmartLife.html?idclasse=2?idcategoria=" +prodotti[i].idcategoria + "?idprodotti=" + prodotti[i].idsmartlife;
                
				var nomeTemp = document.createElement("a");
				nomeTemp.setAttribute("class", "btn btn-small btn-primary");
				nomeTemp.setAttribute("href", urlDevice);
				var nome = document.createTextNode(prodotti[i].nomesmartlife);
				nomeTemp.appendChild(nome);
					
				var smartlife = document.createElement("div");
				
				smartlife.setAttribute("class", "col-sm-4 feature");
                smartlife.appendChild(imgTemp);
				smartlife.appendChild(nomeTemp);
                
				currrow.appendChild(smartlife);

				counter++;
			}
		},
		error: function (request, error) {
			console.log("Error");
		}
	});
}