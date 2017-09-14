import React, {Component} from 'react';
import {View,Text,Modal} from 'react-native';
import {CardSection} from './CardSection'
import {Button} from './Button'


const Confirm = ({onAccept,onDecline,children,visible}) =>{
    const {card,text,containerStyle} = styles;

    return (
            <Modal
            animationType="fade"
            onRequestClose={()=>{}}
            transparent
            visible={visible}
            >
                <View style={containerStyle}>
                    <CardSection card={card}>
                        <Text style={text}>{children}</Text>
                    </CardSection>
                    <CardSection>
                        <Button onPress={onAccept}>Yes</Button>
                        <Button onPress={onDecline}>No</Button>
                    </CardSection>
                </View>
            </Modal>
        )
};

const styles = {
    card: {
        justifyContent: 'center'
    },
    text:{
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
    }
};

export {Confirm};