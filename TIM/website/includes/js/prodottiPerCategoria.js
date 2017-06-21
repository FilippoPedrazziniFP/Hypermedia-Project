$(document).ready(setFilter);


function setFilter(){

    ready();
    
    $('#filtro0-150').click(function() {
        if($(this).is(':checked')) {
            costosi(0,150);
        }
        else {
            costosi(0,10000);
        }
                
    });
    
    $('#filtro150-300').click(function() {
        if($(this).is(':checked')) {
            costosi(150,300);
        }
        else {
            costosi(0,10000);
        }
    });
    
    $('#filtro300-500').click(function() {
        if($(this).is(':checked')) {
            costosi(300,500);
        }
        else {
            costosi(0,10000);
        }
    });
    
    $('#filtro500').click(function() {
        if($(this).is(':checked')) {
            costosi(500,100000);
        }
        else {
            costosi(0,10000);
        }
    });
    
    $('#filtrocrescente').click(function() {
        if($(this).is(':checked')) {
            personal(1);
        }
        else {
            costosi(0,10000);
        }
    });
    
    $('#filtrodecrescente').click(function() {
        if($(this).is(':checked')) {
            personal(2);
        }
        else {
            costosi(0,10000);
        }
    });
    
    $('#filtropopolarita').click(function() {
        if($(this).is(':checked')) {
            personal(3);
        }
        else {
            costosi(0,10000);
        }
    });
    
    $('#filtrovoto').click(function() {
        if($(this).is(':checked')) {
            personal(4);
        }
        else {
            costosi(0,10000);
        }
    });
    
    $('#filtroApple').click(function() {
        if($(this).is(':checked')) {
            personal(5);
        }
        else {
            costosi(0,10000);
        }
    });
    
    $('#filtroSamsung').click(function() {
        if($(this).is(':checked')) {
            personal(6);
        }
        else {
            costosi(0,10000);
        }
    });
    
    $('#filtroAlcatel').click(function() {
        if($(this).is(':checked')) {
            personal(7);
        }
        else {
            costosi(0,10000);
        }
    });
    
    $('#filtroAsus').click(function() {
        if($(this).is(':checked')) {
            personal(8);
        }
        else {
            costosi(0,10000);
        }
    });
    
    

}




function ready(){
    
    $( "#prodotto" ).empty();
    
    var idprodotti=1;
    var myClass =  location.search.split('idclasse=')[1].charAt(0);
    var myParam = location.search.split('idcategoria=')[1];
    
    $.ajax({
        method: "POST",
        crossDomain: true,
        
        url: "http://timfmlhypermedia.altervista.org/includes/php/getProdottiCategoria.php?id="+myParam,
        async: true,
        
        data: {prodotti:idprodotti},
        success: function(response) {
            var prodotti=JSON.parse(response);

            var count=0;
            var i=0;
      
            
            for(i=0;i<prodotti.length;i++) {
                
                var urlProdotto = "prodotto.html?idclasse=" + myClass + "?idcategoria=" + prodotti[i].idcategoria + "?idprodotti=" + prodotti[i].idprodotto;
                    
                var imgTemp = document.createElement("img");  
                    
                var urlImmagine = "images/" + prodotti[i].fotoprodotto;
                imgTemp.setAttribute('src', urlImmagine);
                imgTemp.setAttribute("class", "img-responsive");
                   
                var nomeTemp = document.createElement("a");
                nomeTemp.setAttribute('class', 'btn btn-primary btn-block');
                nomeTemp.setAttribute("href", urlProdotto);
                var nome = document.createTextNode(prodotti[i].nomeprodotto);
                nomeTemp.appendChild(nome);
                    
                var descrTemp = document.createElement("p");
                var descr = document.createTextNode("$"+prodotti[i].prezzoprodotto);
                descrTemp.appendChild(descr);
                    
                var prodotto = document.createElement("div");
                prodotto.setAttribute("class", "col-sm-3 feature");
                    
                var prodottoPanel = document.createElement("div");
                prodottoPanel.setAttribute("class", "panel");
                prodottoPanel.setAttribute("id", "panel-product");
                    
                    
                prodottoPanel.appendChild(imgTemp);
                prodottoPanel.appendChild(descrTemp);
                prodottoPanel.appendChild(nomeTemp);
                    
                prodotto.appendChild(prodottoPanel);

                var container = document.getElementById("prodotto");
              
                    
                    container.appendChild(prodotto);
                    
                    
                    
                
              
            }
             
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}


function costosi(){
    
    var myClass =  location.search.split('idclasse=')[1].charAt(0);
    var myParam = location.search.split('idcategoria=')[1];
    
    var min= arguments[0];
    var max= arguments[1];
    
    $( "#prodotto" ).empty();
    var idprodotti=1;
    
    $.ajax({
        method: "POST",

        crossDomain: true,
        url: "http://timfmlhypermedia.altervista.org/includes/php/getProdottiCategoriaCostosi.php?id=" + myParam + "&min=" + min + "&max=" + max,
        async: true,
         data: {prodotti:idprodotti},
        success: function(response) {
            try{
            var prodotti=JSON.parse(response);

            console.log(prodotti);
            console.log("ciao");
            var count=0;
            var i=0;

            
            for(i=0;i<prodotti.length;i++) {
                
                var urlProdotto = "prodotto.html?idclasse=" + myClass + "?idcategoria=" + prodotti[i].idcategoria + "?idprodotti=" + prodotti[i].idprodotto;
                    
                var imgTemp = document.createElement("img");  
                    
                var urlImmagine = "images/" + prodotti[i].fotoprodotto;
                imgTemp.setAttribute('src', urlImmagine);
                imgTemp.setAttribute("class", "img-responsive");
                   
                var nomeTemp = document.createElement("a");
                nomeTemp.setAttribute('class', 'btn btn-primary btn-block');
                nomeTemp.setAttribute("href", urlProdotto);
                var nome = document.createTextNode(prodotti[i].nomeprodotto);
                nomeTemp.appendChild(nome);
                    
                var descrTemp = document.createElement("p");
                var descr = document.createTextNode("$"+prodotti[i].prezzoprodotto);
                descrTemp.appendChild(descr);
                    
                var prodotto = document.createElement("div");
                prodotto.setAttribute("class", "col-sm-3 feature");
                    
                var prodottoPanel = document.createElement("div");
                prodottoPanel.setAttribute("class", "panel");
                prodottoPanel.setAttribute("id", "panel-product");
                    
                    
                prodottoPanel.appendChild(imgTemp);
                prodottoPanel.appendChild(descrTemp);
                prodottoPanel.appendChild(nomeTemp);
                    
                prodotto.appendChild(prodottoPanel);

                var container = document.getElementById("prodotto");
                    
               
                    container.appendChild(prodotto);
                    
                    
                    
            }
              
            }
            catch(e){
                var container = document.getElementById("prodotto");
                var text = document.createTextNode("No such element found in this cathegory");   
                var h = document.createElement("h2");
                h.appendChild(text);
                    container.appendChild(h);


                var docHeight = $(window).height();
                var footerHeight = $('#footer').height();
                var footerTop = $('#footer').position().top + footerHeight;

                if (footerTop < docHeight) {
                $('#footer').css('margin-top', 100+ (docHeight - footerTop) + 'px');
                }

                
            }
             
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}


function personal(){
    
    var myClass =  location.search.split('idclasse=')[1].charAt(0);
    var myParam = location.search.split('idcategoria=')[1];
    
    var pers= arguments[0];
    
    $( "#prodotto" ).empty();
    var idprodotti=1;
    
    $.ajax({
        method: "POST",

        crossDomain: true,
        url: "http://timfmlhypermedia.altervista.org/includes/php/getProdottiCategoriaPersonal.php?id=" + myParam + "&pers=" + pers,
        async: true,
         data: {prodotti:idprodotti},
        success: function(response) {
            try{
            var prodotti=JSON.parse(response);

            var count=0;
            var i=0;

            
            for(i=0;i<prodotti.length;i++) {
                
                var urlProdotto = "prodotto.html?idclasse=" + myClass + "?idcategoria=" + prodotti[i].idcategoria + "?idprodotti=" + prodotti[i].idprodotto;
                    
                var imgTemp = document.createElement("img");  
                    
                var urlImmagine = "images/" + prodotti[i].fotoprodotto;
                imgTemp.setAttribute('src', urlImmagine);
                imgTemp.setAttribute("class", "img-responsive");
                   
                var nomeTemp = document.createElement("a");
                nomeTemp.setAttribute('class', 'btn btn-primary btn-block');
                nomeTemp.setAttribute("href", urlProdotto);
                var nome = document.createTextNode(prodotti[i].nomeprodotto);
                nomeTemp.appendChild(nome);
                    
                var descrTemp = document.createElement("p");
                var descr = document.createTextNode("$"+prodotti[i].prezzoprodotto);
                descrTemp.appendChild(descr);
                    
                var prodotto = document.createElement("div");
                prodotto.setAttribute("class", "col-sm-3 feature");
                    
                var prodottoPanel = document.createElement("div");
                prodottoPanel.setAttribute("class", "panel");
                prodottoPanel.setAttribute("id", "panel-product");
                    
                    
                prodottoPanel.appendChild(imgTemp);
                prodottoPanel.appendChild(descrTemp);
                prodottoPanel.appendChild(nomeTemp);
                    
                prodotto.appendChild(prodottoPanel);

                var container = document.getElementById("prodotto");
                    
                
                container.appendChild(prodotto);
      
            }
                        }
            catch(e){
                var container = document.getElementById("prodotto");
                var text = document.createTextNode("No such element found in this cathegory");   
                var h = document.createElement("h2");
                h.appendChild(text);
                    container.appendChild(h);


                var docHeight = $(window).height();
                var footerHeight = $('#footer').height();
                var footerTop = $('#footer').position().top + footerHeight;

                if (footerTop < docHeight) {
                $('#footer').css('margin-top', 100+ (docHeight - footerTop) + 'px');
                }

                
            }
             
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}


