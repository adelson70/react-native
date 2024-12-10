import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import api  from '../config/api'
import { Button } from '../src/components/Button'
import { useRouter } from 'expo-router'
import { useUserContext } from '../contexts/UserContext'


export default function IndexPage() {

    const [message, setMessage] = useState('');
    const [postResponse, setPostResponse] = useState('');
    
    const [inputNome, setInputNome] = useState('');
    const [inputSenha, setInputSenha] = useState('');

    const { setName, setEstado } = useUserContext()

    const router = useRouter()

    // Consumir a rota GET ao carregar o app
    // useEffect(() => {
    //     api.get("/api/data")
    //         .then(response => {
    //             setMessage(response.data.message);
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

    // Enviar dados para a rota POST
    const sendData = () => {
        api.post("/api/post", { 
            nome: inputNome,
            senha: inputSenha
         })
            .then(response => {
                let data = response.data
                let text

                if (data.msg == true){

                    setEstado('da hora')
                    setName(inputNome)

                    router.push('/menu')

                }else{
                    Alert.alert('Erro','Credenciais Invalidas')
                }

                setPostResponse(text);

            })
            .catch(error => console.error('Error posting data:', error));
    };

    return (
            <View style={styles.container}>
                <Text style={styles.label}> Nome </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite Seu Nome"
                    value={inputNome}
                    onChangeText={setInputNome}
                />

                <View style={styles.inputContainer}>
                    <Text style={styles.label}> Senha </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite Sua Senha"
                        value={inputSenha}
                        onChangeText={setInputSenha}
                        secureTextEntry={true}
                    />
                </View>

                <Button title='Entrar' onPress={sendData} />
                
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
        height: 50,
        borderColor: '#003366',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
        textAlign: 'center',
        width: '70%',
        color: '#003366',
        marginBottom: 20,
        borderRadius: 6
    },

    msg: {
        textAlign: 'center',
        fontSize: 26,
        marginTop: 20,
        color: 'red',
        fontWeight: 'bold'
    },

    label:{
        paddingVertical: 0,
        color: '#003366'
    },

    inputContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    }
    
});
