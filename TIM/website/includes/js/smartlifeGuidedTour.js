$(document).ready(evan);

function evan() {
    
	var idprodotti = 1;
    var myParam = location.search.split('idprodotti=')[1];
    
	$.ajax({
		method: "POST",
		crossDomain: true,
        
		url: "http://timfmlhypermedia.altervista.org/includes/php/getAllSmartLife.php",
        async: true,
        
		data: {prodotto: idprodotti},
		success: function (response) {
            
			var prodotti = JSON.parse(response);
			
            
            
            if(myParam == prodotti.length){
                var nextID=1;
            }
            else{
                var nextID=parseInt(myParam)+1;
            }
            
            
            if(myParam == 1){
                var prevID=prodotti.length;
            }
            else{
                var prevID=parseInt(myParam)-1;
            }
            
            var prevPager = document.getElementById("pre");
            var urlPrev = "prodottoSmartLife.html?idclasse=2?idcategoria=" + prodotti[prevID-1].idcategoria + "?idprodotti=" + prevID;
            prevPager.setAttribute("href",urlPrev);
            
            var nextPager = document.getElementById("next");
            var urlNext = "prodottoSmartLife.html?idclasse=2?idcategoria=" + prodotti[nextID-1].idcategoria + "?idprodotti=" + nextID;
            nextPager.setAttribute("href",urlNext);
				
			
		},
		error: function (request, error) {
			console.log("Error");
		}
	});
}