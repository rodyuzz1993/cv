document.addEventListener('DOMContentLoaded', function() {

    let btnHerramientas = document.getElementById('Herramientas');
    let btnExperiencia = document.getElementById('Experiencia');
    let btnLogros = document.getElementById('Logros');
    let btnEducacion = document.getElementById('Educacion');
    let txtHerramientas = document.querySelector('.Herramientas');
    let txtExperiencia = document.querySelector('.Experiencia');
    let txtLogros = document.querySelector('.Logros');
    let txtEducacion = document.querySelector('.Educacion');

    btnHerramientas.addEventListener('click', function(){mostrarElemento(txtHerramientas)});
    btnExperiencia.addEventListener('click', function(){mostrarElemento(txtExperiencia)});
    btnLogros.addEventListener('click', function(){mostrarElemento(txtLogros)});
    btnEducacion.addEventListener('click', function(){mostrarElemento(txtEducacion)});

    function ocultarTodos() {
        txtHerramientas.style.display = "none";
        txtExperiencia.style.display = "none";
        txtLogros.style.display = "none";
        txtEducacion.style.display = "none";
    }

    function mostrarElemento(elemento){
        ocultarTodos();
        elemento.style.display="block";
    }
});
