from flask import Flask, render_template
import os

# Flask will now look for templates/ and static/ by default
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key")

@app.route("/")
def home():
    # Make sure you have templates/index.html
    return render_template("index.html")

@app.route("/new")
def new_post():
    return render_template("index.html")

@app.route("/login")
def login():
    return render_template("index.html")

@app.route("/register")
def register():
    return render_template("index.html")

if __name__ == "__main__":
    # debug=True ensures auto reload on changes
    app.run(host="0.0.0.0", port=5000, debug=True)
