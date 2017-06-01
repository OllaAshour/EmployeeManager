import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(password) {
        console.log('onPassword change', password);
        this.props.passwordChanged(password);
    }

    onButtonPress() {
        const { email, password } = this.props;
        console.log('onButtonPress', password);
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}> Login </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                
                <CardSection>
                    <Input 
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        paddingTop: 5,
        paddingBottom: 5
    }
};

/*const mapToStateProps = state => {
    console.log('mapToStateProps', state.auth.password);
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error
    };
}; */

const mapToStateProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapToStateProps, { 
    emailChanged, 
    passwordChanged, 
    loginUser 
})(LoginForm);
