import React, { useEffect } from 'react';
import { BackHandler, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router'

export default function Menu() {

    const router = useRouter()

    const goToMenu = () => {
        router.replace('/menu')
    }

    useEffect(() => {
        const backAction = () => {
            return true
        }

        BackHandler.addEventListener('hardwareBackPress', backAction)

        return () => {
            BackHandler.removeEventListener('hardwareBackPress', backAction)
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Seja Bem-vindo!</Text>
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
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
    },
});
