//Import a library to help create a component
import React from 'react';
import { Text, View } from 'react-native';

//create a component - one component per file
const Header = ({headerText}) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    )
};

const styles = {
    viewStyle: {
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        backgroundColor: '#DDDDDD'
    },
};

//Make the component available to other parts of the app
export { Header };