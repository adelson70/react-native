from database import conn as CONN

def getUsuario(nome):
    conn, cursor = CONN

    cursor.execute("""
                   SELECT COUNT(*)
                   FROM usuario
                   WHERE nome=?
                   """,(nome,))
    
    nomes = cursor.fetchone()[0]
    conn.close()
    
    return nomes
