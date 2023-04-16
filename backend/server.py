from flask import Flask

app = Flask(__name__)


@app.route("/members")
def members():
    return {"service": "service_fm7wldr",
            "template": "template_yanufdu",
            "public_key": "XZ0u7dWe_15rwED6D"}

if __name__ == "__main__":
    app.run(port=80)