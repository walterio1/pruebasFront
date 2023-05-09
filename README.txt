Funcionamiento del intercambio de datos entre back y front:

EL FRONT:
- al poner en marcha, el front entra en un bucle infinito que se parará al final del juego
- en dicho bucle el  front va (con un timer) consultando el portal 5000/members
- si el contenido es igual al último el front no hace nada
- si es distinto, el front actualiza alturaPantalla
- asimismo, el front reaccionará a un click event de ficha (el jugador la pone)
- cuando hay un event de este tipo, el front postea en el portal 5000/members la jugada
(por ejemplo ["2/3", "norte", "izquierda"])

EL BACK:
- al ponerse en marcha, mete en el portal 5000/members la ficha de salida
- entra en un bucle infinito con timer que se para al final del juego
- va buscando los POST del front. 
- si el post del front es igual al anterior no hace nada
- si es distinto, procesa y el resultado lo pone en el portal 5000/members