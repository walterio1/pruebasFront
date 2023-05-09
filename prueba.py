from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/members": {"origins": "*"}}) 
app.config['CORS_HEADERS'] = 'Content-Type'
"""
@app.route("/members")   #  si no pones nada, es para un GET que hará el front

def members():
    return {"norte":["2/3","3/3","3/4"]}
"""


@app.route("/members", methods=["GET", "POST"])    # el post recoge lo que deja el front
@cross_origin() 

def nombre_irrelvante_es_lo_que_ejecuta():
    # inicio:
        # en inicio de bucle, meter ficha salida en el post en el portal 5000/members
        # y en inicio hacer que el contenido de front sea el inicial
    # resto del bucle:
        # buscar contenido que haya metido el front 
        # si es igual al anterior no hacer nada 
        # si es distinto del anterior entonces tiene que procesar y generar un nuevo post en el portal 5000/members
        # al final del bucle guardar el contenido que haya metio el front como anterior
    if request.method == "POST":
        entrada={"miFrontIn":request.json["frontIn"]}
        return(entrada)
    else:
        return({"norte":["2/3","3/3","3/4"], "sur":["2/2","2/0","2/4"]})
        # {"norte":["2/3","3/3","3/4"]} los corchetes definen un objeto de javascript.
        # este objeto no tiene nombre. Posee una propiedad llamada "norte" que es un array de strings

# como que el front nos ha dicho que norte ha tirado la ficha 2/3, ahora hay que enviarle
# de back a front lo mismo que antes pero sin el 2/3 en norte:

# con código que coja "frontIn": ["2/3", "norte", "izquierda"]
# tendría que alterar el return({"norte":["3/3","3/4"], "sur":["2/2","2/0","2/4"]})
# y devolverlo a front, que lo plasmaría en fila2


    
if __name__=="__main__":   
    app.run (debug=True)

# ojo que tengo que ir al port de back-end y que acabe en /members
# Running on http://127.0.0.1:5000   añadir /members

"""
entrada = "ok"
if entrada == "hola":
    print("saludos")
else:
    print("adios")

"""
