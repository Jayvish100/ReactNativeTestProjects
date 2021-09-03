import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import _ from 'lodash';
import { navigate } from '../navigationRef'
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import { Card, CardSection } from '../components/common';

class EmployeeList extends Component {

    componentDidMount() {
        this.props.employeesFetch();
    };

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.employees}
                    keyExtractor={(emp) => emp.key}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigate('EmpEdit', { employee: item })}>
                                <Card>
                                    <CardSection>
                                        <Text style={styles.listTextStyle}>Employee Name: {item.name}</Text>
                                    </CardSection>
                                </Card>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        );
    };
};

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => ({ ...val, key: uid }));
    return { employees };
};

EmployeeList.navigationOptions = () => {
    return {
        title: 'Employee List',
        headerRight: () => (
            <TouchableOpacity onPress={() => navigate('EmpCreate')} >
                <Text style={styles.headerButtonTextStyle}>Add</Text>
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    headerButtonTextStyle: {
        backgroundColor: '#bbb',
        padding: 10,
        marginRight: 15
    },
    listTextStyle: {
        fontSize: 18
    }
})

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);