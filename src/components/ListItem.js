import React, {Component} from 'react';
import {View,Text,TouchableWithoutFeedback} from 'react-native';
import {CardSection} from './common';
import {Actions} from 'react-native-router-flux';
import EmployeeUpdate from '../actions'

class ListItem extends Component{
    onRowPress(){
        Actions.employeeEdit({employee: this.props.employee});
    }

    render(){
        const {name} = this.props.employee;

        return (
        <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
            <View>
                <CardSection><Text style={styles.titleStyle}>{name}</Text></CardSection>
            </View>
        </TouchableWithoutFeedback>
        )
    }
}

styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;
