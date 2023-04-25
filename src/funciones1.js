// primeras funciones de javascript

function colocaString(miFicha, fontRelativo, leftRelativo, topRelativo) {
    var alturaPantalla = window.innerHeight;
    var anchuraPantalla = window.innerWidth;
    area = alturaPantalla * anchuraPantalla;
    fontFicha = anchuraPantalla * fontRelativo;    //  Math.sqrt(area) * fontRelativo;
    // var span = document.getElementById("fila1");
    var span = document.createElement('span');
    // console.log(span);
    span.style.fontSize = fontFicha + "px";
    span.style.position = 'absolute';
    span.style.left = anchuraPantalla*leftRelativo + "px";
    span.style.top = alturaPantalla*topRelativo + "px";
    span.innerHTML = miFicha;  //Asignar valor
    document.body.insertBefore(span, document.body.firstChild);
}  // cierra la función colocaString

function hallaStringFicha(fichaTexto, posicion) {
    // el primer num es izquierda o arriba según sea "h" o "v" la posición
    numIzquierda = parseInt(fichaTexto.substr(0, 1));
    numDerecha = Number(fichaTexto.substr(2, 1));
    inicio = 127025;
    if (posicion === "v") inicio = 127075;
    return "&#" + (inicio + numIzquierda*7 + numDerecha);
}   // cierra la función hallaStringFicha

function creaStringFichas(listaFichas, orientacion) {
    // parte de una lista de fichas y crea su string orientado "v" vertical o "h" horizontal
    resultado = "";
    for (const laFicha of listaFichas) {
        resultado = resultado + hallaStringFicha(laFicha, orientacion);
    }  // cierra el for de laFicha
    return resultado;
}   // cierra la funcion creaStringFichas

function giraFicha(fichaTexto) {
    // cambia de lado la ficha (ej: el "2/3" pasa a ser "3/2")
    return "" + fichaTexto.substr(2, 1) + "/" + fichaTexto.substr(0, 1);
}   // cierra la función giraFicha

function pintaFichasDerecha(fichasSerpiente, posIndice, ubicacionX, fontRelativo) {
    // pintará las fichas a la derecha de la actual
    do {  // serán las fichas desde la salida hacia la derecha
        laFicha = fichasSerpiente[posIndice];
        if (laFicha[0] === laFicha[2]) {
            posicion = "v";
            ubicacionX -= .21*fontRelativo;
        }  // cierra el if de laFicha[0]
        else posicion = "h";
        fichaVisual = hallaStringFicha(fichasSerpiente[posIndice], posicion);
        colocaString(fichaVisual, fontRelativo, ubicacionX, ubicacionY);
        posIndice += 1;
        if (posicion === "h") ubicacionX += .9*fontRelativo;
        else ubicacionX += .7*fontRelativo;
    } while ((ubicacionX < 0.86) && (posIndice < fichasSerpiente.length));
    return [posIndice, ubicacionX];
}   // cierra la función pintaFichaDerecha
    