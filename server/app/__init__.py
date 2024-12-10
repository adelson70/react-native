from flask import Flask
from flask_cors import CORS

def createApp():
    app = Flask(__name__)
    CORS(app)

    with app.app_context():
        from app.routes import main

        main.registerMain(app)

    return app