import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label,placeHolder,value,onChangeText,secureTextEntry}) => {
    const {containerStyle,inputStyle,labelStyle} = styles;

    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeHolder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
};

const styles = {
    containerStyle:{
        height: 40,
        flex:1,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputStyle:{
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 24,
        flex: 2
    },
    labelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
};

export {Input};