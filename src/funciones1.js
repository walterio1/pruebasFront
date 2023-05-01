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

function pintaFichasDerecha(fichasSerpiente, posIndice, ubicacionX, ubicacionY, fontRelativo, giro) {
    // pintará las fichas a la derecha de la actual
    do {  // serán las fichas desde la salida hacia la derecha
        laFicha = fichasSerpiente[posIndice];
        if (giro) laFicha = giraFicha(laFicha);
        if (laFicha[0] === laFicha[2]) {
            posicion = "v";
            ubicacionX -= .21*fontRelativo;
        }  // cierra el if de laFicha[0]
        else posicion = "h";
        fichaVisual = hallaStringFicha(laFicha, posicion);
        colocaString(fichaVisual, fontRelativo, ubicacionX, ubicacionY);
        posIndice += 1;
        if (posicion === "h") ubicacionX += .9*fontRelativo;
        else ubicacionX += .7*fontRelativo;
        if (giro) console.log(laFicha);

    } while ((ubicacionX < 0.82) && (posIndice < fichasSerpiente.length));
    return [posIndice, ubicacionX];
}   // cierra la función pintaFichaDerecha

function pintaFichasIzquierda(fichasSerpiente, posIndice, ubicacionX, ubicacionY, fontRelativo, giro) {
    // pintará las fichas a la izquerda de la actual
    do {   // serán las fichas desde el extremo derecho hacia la izquierda
        laFicha = fichasSerpiente[posIndice];
        if (giro) laFicha = giraFicha(laFicha);
        if (laFicha[0] === laFicha[2]) {
            posicion = "v";
            ubicacionX -= 1.59*fontRelativo;
            fichaVisual = hallaStringFicha(laFicha, posicion);
            colocaString(fichaVisual, fontRelativo, ubicacionX, ubicacionY);
            ubicacionX += .42*fontRelativo;
        }  // cierra el if de laFicha[0]
        else {
            posicion = "h";
            ubicacionX -= 1.8*fontRelativo;
            fichaVisual = hallaStringFicha(laFicha, posicion);
            colocaString(fichaVisual, fontRelativo, ubicacionX, ubicacionY);
        }   // cierra el else
        posIndice += 1;
        if (posicion === "h") ubicacionX += .03*30*fontRelativo;
        else ubicacionX += .69*fontRelativo;
    } while ((ubicacionX > 0.27) && (posIndice < fichasSerpiente.length));
    return [posIndice, ubicacionX];
}   // cierra la función pintaFichasIzquierda

function pintaFichaSubeBaja(posIndice, fichasSerpiente, ubicacionX, ubicacionY, fontRelativo, ratio,
    para1, para2, para3, para4, para5, para6, para7) {

if (posIndice < fichasSerpiente.length) {  //  aún queda una o más fichas 
    laFicha = giraFicha(fichasSerpiente[posIndice]);
    if (laFicha[0] === laFicha[2]) {   // es un doble
        ubicacionX += para1*fontRelativo;
        ubicacionY += para2*fontRelativo/ratio;
        fichaVisual = hallaStringFicha(laFicha, "h");
        colocaString(fichaVisual, fontRelativo, ubicacionX, ubicacionY);
        ubicacionY += para3*fontRelativo/ratio;
    }  // cierra el if de laFicha[0]
    else {   // es una mixta
        posicion = "v"; 
        ubicacionY += para4*fontRelativo/ratio;
        ubicacionX += para5*fontRelativo;
        fichaVisual = hallaStringFicha(laFicha, "v");
        colocaString(fichaVisual, fontRelativo, ubicacionX, ubicacionY);
        ubicacionY += para6*fontRelativo/ratio;
    }   // cierra el else
    ubicacionX += para7*fontRelativo;
    posIndice += 1;
}   // cierre del if posIndice de 1ª ficha que sube a la derecha
return [posIndice, ubicacionX, ubicacionY];
}   // cierre de la función pintaFichaSubeBaja


    
    