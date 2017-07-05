import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, ConfirmAlert } from './common';

class EmployeeEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            //take all key value pairs and pass them to employeeUpdate
            this.props.employeeUpdate({ prop, value });
        });
    }
    
    onSaveButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;
        Text(phone, `Your upcoming shift is on ${shift}`);
    }

    onFireButtonPress() {
       this.setState({ showModal: !this.state.showModal });
    }

    onAccept() {
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid });
    }

    onDecline() {
       this.setState({ showModal: false }); 
    }

    render() {
        return (
           <Card>
               <EmployeeForm />
               <CardSection>
                   <Button onPress={this.onSaveButtonPress.bind(this)}>
                       Save Changes
                   </Button>
               </CardSection>
               <CardSection>
                   <Button onPress={this.onTextPress.bind(this)}>
                       Text Schedule
                   </Button>
               </CardSection>
               <CardSection>
                   <Button onPress={this.onFireButtonPress.bind(this)}>
                       Fire Employee
                   </Button>
               </CardSection>
               {/*consider returning alert instead of using state showModal, is it possible*/}
               <ConfirmAlert
                visible={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
               >
                    Are you sure you want to delete?
               </ConfirmAlert>
           </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
