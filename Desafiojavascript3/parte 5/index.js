 const llave = document.getElementById("key")
 llave.style.width = '200px';
 llave.style.height = '200px';
 llave.style.border = 'solid black';
 
 var segundodiv = document.createElement("div");

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
     llave.style.backgroundColor = 'pink' ;
    } else if (event.key === 's') {
     llave.style.backgroundColor = 'orange' ;
    }
    else if (event.key === 'd')
    llave.style.backgroundColor = 'skyblue' ;
    else if (event.key === 'q'){

    document.body.insertBefore(segundodiv, llave);
    segundodiv.style.width = '200px';
    segundodiv.style.height = '200px';
    segundodiv.style.border = 'solid black';
    segundodiv.style.backgroundColor = 'purple' ;
}
    else if (event.key === 'w'){
    document.body.insertBefore(segundodiv, llave);
    segundodiv.style.width = '200px';
    segundodiv.style.height = '200px';
    segundodiv.style.border = 'solid black';
    segundodiv.style.backgroundColor = 'gray' ;
}
    else if (event.key === 'e'){
     document.body.insertBefore(segundodiv, llave);
    segundodiv.style.width = '200px';
    segundodiv.style.height = '200px';
    segundodiv.style.border = 'solid black';
    segundodiv.style.backgroundColor = 'brown' ;
}
})