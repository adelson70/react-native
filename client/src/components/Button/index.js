import {Text, TouchableOpacity } from 'react-native'

export const Button = (props) => {
    return (
        <TouchableOpacity style={{
            borderWidth: 1,
            borderColor: 'green',
            marginVertical: 8,
            padding: 6,
            paddingInline: 12,
            borderRadius: 4,
            width: 'auto'
        }} 

        onPress={props.onPress}
        activeOpacity={0.7}>
            
        <Text style={{
            color: 'green',
            fontWeight: 'normal',
            fontSize: 20,
            textAlign: 'center'
        }}>{props.title}</Text>
        
        </TouchableOpacity>
    )
}