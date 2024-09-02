document.addEventListener('DOMContentLoaded', function() {

    let btnContacto1 = document.getElementById('BtnContacto1');
    let btnContacto2 = document.getElementById('BtnContacto2');
    let TelEmail = document.getElementById('TelefonoEmail');
    let closeTelEmail = document.getElementById('CloseTelEmail');

    btnContacto1.addEventListener('click', function(){showContacto()});
    btnContacto2.addEventListener('click', function(){showContacto()});

    closeTelEmail.addEventListener('click', function(){notShowContacto()});

    function showContacto() {
        console.log(`SHOW CONTACTO STYLES`);
        closeTelEmail.style.display = "block";
        TelEmail.style.position = "fixed";
        TelEmail.style.right = "20%";
        TelEmail.style.left = "20%";
        TelEmail.style.width = "60%";
        TelEmail.style.justifyContent = "space-around";
        TelEmail.style.background = "white";
        TelEmail.style.top = "10em";
        TelEmail.style.fontSize = "1.5em";
        TelEmail.style.borderRadius = "12px";
        TelEmail.style.filter = "drop-shadow(0px 0px 12px var(--naranja))";
        TelEmail.style.border = "10px solid var(--naranja)";
    };
    function notShowContacto() {
        closeTelEmail.style.display = "none";
        console.log(`SHOW CONTACTO STYLES`);
        TelEmail.style.position = "relative";
        TelEmail.style.right = "unset";
        TelEmail.style.left = "unset";
        TelEmail.style.width = "unset";
        TelEmail.style.justifyContent = "unset";
        TelEmail.style.background = "unset";
        TelEmail.style.top = "unset";
        TelEmail.style.fontSize = "unset";
        TelEmail.style.borderRadius = "unset";
        TelEmail.style.filter = "unset";
        TelEmail.style.border = "unset";
    };

});
