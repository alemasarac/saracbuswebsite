from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def pocetna():
    return render_template("index.html")

@app.route("/vozni-park")
def vozni_park():
    return render_template("vozni_park.html")

@app.route("/kontakt")
def kontakt():
    return render_template("kontakt.html")

@app.route("/o-nama")
def o_nama():
    return render_template("o_nama.html")

@app.route("/usluge")
def usluge():
    return render_template("usluge.html")


if __name__ == "__main__":
     app.run(host="0.0.0.0", port=5000, debug=True)