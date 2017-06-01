import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(password) {
        this.props.passwordChanged(password);
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

                <CardSection>
                    <Button> Login </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapToStateProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(mapToStateProps, { emailChanged, passwordChanged })(LoginForm);
