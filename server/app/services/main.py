NOMES = ['adelson','helen','joão','tiago','mateus']

def verificarNome(nome):
    global NOMES

    nome = nome.lower()

    if nome in NOMES:
        return True
    
    else:
        return False