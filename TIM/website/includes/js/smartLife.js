$(document).ready(evan);

function evan(){
    
    var idprodotti=1;
    var myParam = location.search.split('idprodotti=')[1];
    
    $.ajax({
        method: "POST",       
        crossDomain: true,
        
        url: "http://timfmlhypermedia.altervista.org/includes/php/getSmartLife.php?id="+myParam,
        async: true,
        
        data: {prodotto:idprodotti},       
        success: function(response) {
            var myprodotto=JSON.parse(response);
         
            var bigImgTemp = document.createElement("img");
            var urlBigImg = "images/big-" + myprodotto.fotosmartlife;
            bigImgTemp.setAttribute('src', urlBigImg);
            bigImgTemp.setAttribute("class", "img-responsive");
            var bigImgName = document.createTextNode("ciao");
            bigImgTemp.appendChild(bigImgName);
            document.getElementById("big-img").appendChild(bigImgTemp);
            
            /* titolo */
            var nomeTemp = document.createElement("h2");
            var nome = document.createTextNode(myprodotto.nomesmartlife);
            nomeTemp.appendChild(nome);
            document.getElementById("titolo").appendChild(nomeTemp);
            
                        
            /*descrizione*/
            
            var descrTemp = document.createElement("p");
            var descrizione = document.createTextNode(myprodotto.descrizionelongsmartlife);
            descrTemp.appendChild(descrizione);
            document.getElementById("descrizione").appendChild(descrTemp);
                   
            
            
            /*nome + foto + prezzo*/
            var imgTemp = document.createElement("img");
            var urlImg = "images/" + myprodotto.fotosmartlife;
            imgTemp.setAttribute('src', urlImg);
            imgTemp.setAttribute("class", "img-responsive");
            
            var rulesTemp = document.createElement("p");
            var rules = document.createTextNode(myprodotto.regoleattivazionesmartlife);
            rulesTemp.appendChild(rules);
            document.getElementById("regoleattivazione").appendChild(rulesTemp);
   
            var containerProdottoImg = document.getElementById("single-product-img");
            containerProdottoImg.appendChild(imgTemp);

            
             /*--FAQ--*/
            
            var qtemp = myprodotto.domandesmartlife;
            var atemp= myprodotto.rispostesmartlife;
            
            var count = (qtemp.match(/Q:/g) || []).length;

            var FAQ = document.createElement("h2");
            FAQ.appendChild(document.createTextNode("FAQ"));
            document.getElementById("FAQ").appendChild(FAQ);

    for(i=0;i<count;i++){
        
            var startQ=qtemp.search("Q:");
            var endQ=qtemp.search(":Q");
            var startA=atemp.search("A:");
            var endA=atemp.search(":A");
           
            var containerPanel = document.createElement("div");
            containerPanel.setAttribute("class","panel panel-default");
            containerPanel.setAttribute("id","FAQpanel");
        
            var headerPanel = document.createElement("div");
            headerPanel.setAttribute("class","panel-heading");
        
            var faqTitle = document.createElement("h4");
            faqTitle.setAttribute("class","panel-title");
            var faqScroll = document.createElement("a");
        
            faqScroll.setAttribute("data-toggle","collapse");
            faqScroll.setAttribute("data-parent","#accordion");
            faqScroll.setAttribute("href","#collapse"+i); 
            
            var domande = document.createTextNode(qtemp.substring(startQ,endQ));
        
            faqScroll.appendChild(domande);
            faqTitle.appendChild(faqScroll);
            headerPanel.appendChild(faqScroll);
            containerPanel.appendChild(headerPanel);
        
            var qtemp=qtemp.substring(endQ+3);
        
        
            var collapsePanel = document.createElement("div");
            collapsePanel.setAttribute("class","panel-collapse collapse");
            collapsePanel.setAttribute("id","collapse"+i);
        
            var bodyPanel = document.createElement("div");
            bodyPanel.setAttribute("class","panel-body");
            bodyPanel.setAttribute("id","FAQbody");
        
            var risposte = document.createTextNode(atemp.substring(startA,endA));
            
            bodyPanel.appendChild(risposte);
            collapsePanel.appendChild(bodyPanel);
            containerPanel.appendChild(collapsePanel);
  
            var atemp=atemp.substring(endA+3);
        
            
            var containerFAQ = document.getElementById("accordion");
            containerFAQ.appendChild(containerPanel);
        }
            
        document.getElementById("buy").setAttribute("href","buy.html?idclasse=2&idcategoria=" + myprodotto.idcategoria +"&idprodotti=" + myprodotto.idsmartlife);

        },
    error: function(request,error) 
        {
            console.log("Error");
        }
    });

}