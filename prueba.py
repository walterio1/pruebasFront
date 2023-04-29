from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
"""
@app.route("/members")   #  si no pones nada, es para un GET que hará el front

def members():
    return {"norte":["2/3","3/3","3/4"]}
"""


@app.route("/members", methods=["POST"])    # el post recoge lo que deja el front
@cross_origin() 

def utiliza():
    if request.method == "POST":
        entrada={"miFrontIn":request.json["frontIn"]}
        print(entrada)
    else:
        return({"norte":["2/3","3/3","3/4"]})
    
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
