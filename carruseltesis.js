document.addEventListener('DOMContentLoaded', function() {

    let fondoCarrusel = document.getElementById('FondoCarrusel');
    let btnIzq = document.getElementById('BtnIzq');
    let btnDer = document.getElementById('BtnDer');
    let rover1 = document.getElementById('Rover1');
    let rover2 = document.getElementById('Rover2');
    let rover3 = document.getElementById('Rover3');
    let rover4 = document.getElementById('Rover4');
    let numero=1;
    console.log(`${numero}`);

    btnDer.addEventListener('click', function(){
        console.log(`Numero antes ${numero}`);
        numero = Number(numero)+1;
        console.log(`Numero despues ${numero}`);
        const urlimg = `assets/rover${numero}.jpg`;
        console.log(`La url de rover${numero} es: ${urlimg}`)
        fondoCarrusel.style.background=`url(${urlimg})`;
        condicionalNumero(numero);
    });

    btnIzq.addEventListener('click', function(){
        numero = numero-1;
        const urlimg = `assets/rover${numero}.jpg`;
        console.log(`La url de rover${numero} es: ${urlimg}`)
        fondoCarrusel.style.background=`url(${urlimg})`;
        condicionalNumero(numero);
    });

    function clickImgRover(elemento){
        const urlimg = elemento.src;
        const idimg = elemento.id;
        numero = idimg.match(/\d+/)[0];
        fondoCarrusel.style.background=`url(${urlimg})`;
        console.log(`La url de ${idimg} es: ${urlimg}, ahora el número es ${numero}`)
        condicionalNumero(numero);
    };

    rover1.addEventListener('click', function(){clickImgRover(rover1)});
    rover2.addEventListener('click', function(){clickImgRover(rover2)});
    rover3.addEventListener('click', function(){clickImgRover(rover3)});
    rover4.addEventListener('click', function(){clickImgRover(rover4)});


function condicionalNumero(){
    if(numero == 1 ){
        btnIzq.style.display="none";
        btnDer.style.display="flex";
        console.log("BOTON IZQ APAGADO");
    };

    if(numero > 1 ){
        console.log(`NUMERO ENTRE 1 Y 4 ${numero}`);
        btnIzq.style.display="flex";
        btnDer.style.display="flex";
        console.log("BOTON IZQ ENCENDIDO");       
    };

    if(numero == 4 ){
        btnDer.style.display="none";
    };
};

});
