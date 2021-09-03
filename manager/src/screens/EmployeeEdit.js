import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card, CardSection, Button, Confirm } from '../components/common';
import EmployeeForm from '../components/EmployeeForm';
import { employeeUpdate, employeeSave, goBack, employeeDelete } from '../actions';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {

    state = { showModal: false };

    componentDidMount(){
        _.each(this.props.navigation.getParam('employee'), (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    };

    componentWillUnmount(){
        const { name, phone, shift } = this.props;

        this.props.goBack({ name, phone, shift });
    }

    onButtonPress(){
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.navigation.getParam('employee').key });
    };

    onTextPress(){
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    };

    onAccept(){
        const { key } = this.props

        this.props.employeeDelete({ uid: this.props.navigation.getParam('employee').key })
    };

    onDecline(){
        this.setState({ showModal: false });
    };

    render(){
        // console.log(this.props.navigation.getParam('employee'));   <=                this one is better to use
        // console.log(this.props.navigation.state.params.employee);  <= both are SAME

        return (
            <Card>
                
                <EmployeeForm {...this.props} />
                
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this) }>
                        Save
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this) }>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })} >
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm 
                visible={this.state.showModal}
                text={'Are you sure you want to delete this ?'}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
                />
            </Card>
        );
    };
};


const mapStateToProps = (state) => {
    const { name, phone, shift } = state.empForm;

    return { name, phone, shift };
}


EmployeeEdit.navigationOptions = () => {
    return {
        title: 'Edit Employee'
    };
};



export default connect(mapStateToProps, { employeeUpdate, employeeSave, goBack, employeeDelete })(EmployeeEdit);