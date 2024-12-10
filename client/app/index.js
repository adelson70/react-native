import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import { API_URL } from '../config/constants'
import api  from '../config/api'
import { Button } from '../src/components/Button'
import { useRouter } from 'expo-router'

export default function App() {
    const [message, setMessage] = useState('');
    const [postResponse, setPostResponse] = useState('');
    const [inputText, setInputText] = useState('');

    const BASE_URL = API_URL
    const router = useRouter()

    // Consumir a rota GET ao carregar o app
    useEffect(() => {
        api.get("/api/data")
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Enviar dados para a rota POST
    const sendData = () => {
        api.post("/api/post", { nome: inputText })
            .then(response => {
                let data = response.data
                let text

                if (data.msg == true){
                    router.push('/menu')

                }else{
                    text = 'Acesso Negado'
                }

                setPostResponse(text);

            })
            .catch(error => console.error('Error posting data:', error));
    };

    const getMsgColor = (msg) => {
        
        if (msg == 'Acesso Negado'){
            return 'red'
        }
        else if (msg == 'Acesso Permitido'){
            return 'green'
        }
    }

    return (
        <View style={styles.container}>
            <Text>Recebeu: {message}</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite Seu Nome"
                value={inputText}
                onChangeText={setInputText}
            />
            
            <Button title='Entrar' onPress={sendData} />

            {postResponse ? <Text style={ styles.msg }>{postResponse}</Text> : null}
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 8,
        textAlign: 'center'
    },

    msg: {
        textAlign: 'center',
        fontSize: 26,
        marginTop: 20,
        color: 'red',
        fontWeight: 'bold'
    }
});
