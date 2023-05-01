// funciones de javascript que pintan la pantalla

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

