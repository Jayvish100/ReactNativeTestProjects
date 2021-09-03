import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from '../components/common';
import { employeeUpdate, employeeCreate } from '../actions/EmployeeActions';
import EmployeeForm from '../components/EmployeeForm';



class EmployeeCreate extends Component {

    onButtonPress(){
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift });
    };

    render(){
        return (
            <Card>

                <EmployeeForm {...this.props} />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} >
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    };
};


const mapStateToProps = (state) => {

    const { name, phone, shift } = state.empForm;

    return { name, phone, shift };
}


EmployeeCreate.navigationOptions = () => {
    return {
        title: 'Create Employee'
    };
};


export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);