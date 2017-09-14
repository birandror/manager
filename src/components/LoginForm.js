import React, {Component} from 'react';
import {} from 'react-native';
import {Card,CardSection,Input} from './common'
import { connect } from 'react-redux'
import {emailChange,passwordChanged, loginUser} from '../actions'
import {View,Text,Button,LoaderScreen,Colors} from 'react-native-ui-lib';


class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChange(text)
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const {email,password} = this.props;
        this.props.loginUser({email,password});
    }

    renderLoader() {
        if (this.props.loading){
            return <LoaderScreen color={Colors.blue60} message="Loading..." overlay/>
        }
    }

    render() {
        return (
            <View flex paddingH-25>
                {this.renderLoader()}
                <Card>
                    <CardSection>
                        <Input
                            label="Email"
                            placeHolder="email@gmail.com"
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            secureTextEntry
                            label="Password"
                            placeHolder="password"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                    </CardSection>
                </Card>
                <View center>
                    <Text text70 red20>{this.props.error}</Text>
                    <Button margin-20 enableShadow label="login" onPress={this.onButtonPress.bind(this)}/>
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({auth}) => {
    const {email,password,error,loading} = auth;

    return{
        email: email,
        password: password,
        error: error,
        loading: loading
    };
};

export default connect(mapStateToProps,{
    emailChange,passwordChanged,loginUser
})(LoginForm);
