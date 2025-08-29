from flask import Flask, render_template

# Flask will now look for templates/ and static/ by default
app = Flask(__name__)

@app.route("/")
def home():
    # Make sure you have templates/index.html
    return render_template("index.html")

if __name__ == "__main__":
    # debug=True ensures auto reload on changes
    app.run(debug=True)
