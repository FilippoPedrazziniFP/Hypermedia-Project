$(document).ready(evan);

function evan() {

	var idprodotti = 1;
    var myParam = location.search.split('idprodotti=')[1];
    
	$.ajax({
		method: "POST",
		crossDomain: true,
        
		url: "http://timfmlhypermedia.altervista.org/includes/php/getSmartLifeRelatedDevice.php?id="+myParam,
        async: true,
        
		data: {prodotto: idprodotti},
		success: function (response) {
			var prodotti = JSON.parse(response);

			var counter = 0;
			for (i = 0; i < prodotti.length; i++) {
				var imgTemp = document.createElement("img");
				var urlImmagine = "images/" + prodotti[i].fotoprodotto;
				imgTemp.setAttribute('src', urlImmagine);
				imgTemp.setAttribute("class", "img-responsive");
				
                var urlDevice = "prodotto.html?idclasse=1?idcategoria=" + prodotti[i].idcategoria + "?idprodotti=" + prodotti[i].idprodotto;
                
				var nomeTemp = document.createElement("a");
				nomeTemp.setAttribute("class", "btn btn-small btn-primary");
				nomeTemp.setAttribute("href", urlDevice);
				var nome = document.createTextNode(prodotti[i].nomeprodotto);
				nomeTemp.appendChild(nome);
					
				var prodotto = document.createElement("div");
                prodotto.setAttribute("class", "col-sm-3");
                prodotto.setAttribute("id", "special-col");
				prodotto.appendChild(imgTemp);
				prodotto.appendChild(nomeTemp);

				var container = document.getElementById("prodotto-related");
				
                container.appendChild(prodotto);
                
			}
		},
		error: function (request, error) {
			console.log("Error");
		}
	});
}