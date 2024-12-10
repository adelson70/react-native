import React, { useEffect, useState } from 'react';
import { BackHandler, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router'
import { useUserContext } from '../contexts/UserContext';

export default function Menu() {

    const router = useRouter()
    const { name, estado } = useUserContext()    
    
    useEffect(() => {

        const backAction = () => {
            return true
        }
        
        BackHandler.addEventListener('hardwareBackPress', backAction)
        
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', backAction)
        }
    }, [router.query])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Seja Bem-vindo {name}!</Text>
            <Text style={styles.text}>{estado}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFF8DC'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#003366',
    },
});
