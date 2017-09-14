import React, {Component} from 'react';
import {Card,CardSection,Input} from './common'
import {Button,View} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions'
import EmployeeForm from './EmployeeForm'


class EmployeeCreate extends Component{

    onButtonPress(){
        const {name,phone,shift} = this.props;
        this.props.employeeCreate({name,phone,shift: shift || 'Monday'});
    }

    render(){
        return (
            <View>
                <Card>
                    <EmployeeForm {...this.props}/>
                </Card>
                <View center>
                    <Button onPress={this.onButtonPress.bind(this)} style={{alignSelf: 'center'}} margin-120 enableShadow label="Create"/>
                </View>
            </View>
        )
    }
}



const mapStateToProps = (state) => {
    const {name,phone,shift} = state.employeeForm;
    return {name,phone,shift};
};

export default connect(mapStateToProps,{
    employeeUpdate,
    employeeCreate})
(EmployeeCreate);
