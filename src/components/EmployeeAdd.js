import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeAdd extends Component {
    
    onButtonPress() {
        const { name, phone, shift } = this.props;
        //picker should always have a default value
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }
    
    render() {
        return (
           <Card>
               {/*forward all props in EmployeeAdd to EmployeeForm*/}
               <EmployeeForm {...this.props} /> 
               <CardSection>
                   <Button onPress={this.onButtonPress.bind(this)}>
                       Create
                   </Button>
               </CardSection>
           </Card>
        );
    }
}

const mapStateToProps = (state) => {
    //employeeForm is from the combinedReducers key 
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { 
    employeeUpdate, employeeCreate
 })(EmployeeAdd);
