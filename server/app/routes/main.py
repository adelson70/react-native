from app.routes import *
from app.services.main import *

def registerMain(app):

    @app.route('/api/data', methods=['GET'])
    def get_data():
        return jsonify({"message": "Flask, legal!"})
    

    @app.route('/api/post', methods=['POST'])
    def post_data():
        data = request.json  # Recebe os dados enviados do React Native
        nome = data['nome']
        senha = data['senha']

        print(nome,senha)
        
        respo = verificarNome(nome)

        return jsonify({"msg": respo}), 201