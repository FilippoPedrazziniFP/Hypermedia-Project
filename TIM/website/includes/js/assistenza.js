$(document).ready(evan);

function evan() {
    
    var idprodotti = 1;
    var myParam = location.search.split('idprodotti=')[1];
    
    $.ajax({
        method: "POST",
        crossDomain: true,
        
        url: "http://timfmlhypermedia.altervista.org/includes/php/getAssistenza.php?id=" + myParam,
        async: true,
        
        data: {prodotto:idprodotti},
        success: function(response) {
            var myprodotto=JSON.parse(response);
            
            

            
            var nomeTemp = document.createElement("h2");
            var nome = document.createTextNode(myprodotto.nomeassistenza);
            nomeTemp.appendChild(nome);
           
            var containerTitle = document.getElementById("title"); containerTitle.appendChild(nomeTemp);
            
            /*descrizione + caratteristiche */
            
            var descrTemp = document.createElement("p");
            var descrizione = document.createTextNode(myprodotto.descrizioneassistenza);
            descrTemp.appendChild(descrizione);
            
            var containerDescr = document.getElementById("descrizione");
            containerDescr.appendChild(descrTemp);
            
            
            /*--FAQ--*/
            
            var qtemp = myprodotto.domandeassistenza;
            var atemp= myprodotto.risposteassistenza;
            
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
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}