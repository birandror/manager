import React, {Component} from 'react';
import {Text} from 'react-native';
import _ from 'lodash';
import {Button,View} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';

import {Card,CardSection,Input,Confirm} from './common'
import EmployeeForm from './EmployeeForm'
import {employeeUpdate,employeeSave,employeeDelete} from '../actions'


class EmployeeEdit extends Component{

    state = {showModal: false};

    componentWillMount(){
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop,value});
        })
    }

    onButtonPress(){
        const {name,phone,shift} = this.props;
        this.props.employeeSave({name,phone,shift,uid: this.props.employee.uid})
    }

    onTextPress(){
        const {phone,shift} = this.props;
        Communications.text(phone,`Your upcoming shift is on ${shift}`)
    }

    toggleModalVisibility(){
        this.setState({showModal: !this.state.showModal});
    }

    onAccept(){
        this.props.employeeDelete({uid: this.props.employee.uid})
    }


    render(){
        return (
            <View>
                <Card>
                    <EmployeeForm {...this.props}/>
                </Card>
                <View center>
                    <Button onPress={this.onButtonPress.bind(this)} style={{alignSelf: 'center'}} margin-20 enableShadow label="Save"/>
                </View>
                <View center>
                    <Button onPress={this.onTextPress.bind(this)} style={{alignSelf: 'center'}} margin-20 enableShadow label="Text"/>
                </View>
                <Button onPress={this.toggleModalVisibility.bind(this)} fullWidth bg-red70 dark10 label="Fire" marginB-10/>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.toggleModalVisibility.bind(this)}>
                    Are you sure you want to fire him?
                </Confirm>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const {name,phone,shift} = state.employeeForm;
    return {name,phone,shift};
};

export default connect(mapStateToProps,
    {employeeUpdate,employeeSave,employeeDelete})
(EmployeeEdit);
