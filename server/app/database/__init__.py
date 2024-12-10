import sqlite3 as sql

def conn():
    try:
        conn = sql.connect('data.db')

        cursor = conn.cursor()

        cursor.execute("""
                       CREATE TABLE IF NOT EXISTS usuario(
                       id INTEGER PRIMARY KEY,
                       nome TEXT(20)
                       )
                       """)
        
        conn.commit()

        return conn, cursor

    except Exception as e:
        print(f'databse diz: {e}')