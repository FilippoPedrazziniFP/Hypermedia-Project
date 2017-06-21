/*

My Custom JS
============


*/

$(document).bind("mobileinit", function () {
 $.support.cors = true;
 $.mobile.allowCrossDomainPages = true; });

function sendMail() {    
    var yourMessage = document.getElementById("inputMessage").value
    var subject = document.getElementById("inputObject").value
    var mail="mailto:filippo.pedrazzini@yahoo.it?subject="+subject+"&body="+yourMessage;
    window.location.href = mail;
}
