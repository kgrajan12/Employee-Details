import React from 'react';
import { FlatList, View, Image, Text, TextInput, TouchableNativeFeedback } from 'react-native';
import homeStyle from '../styles/Home';
import { getEmployeeDetails } from '../utilities/api';
import { SCREENS } from '../utilities/constants';
import { compareString } from '../utilities/helper';
import { getEmployeeData, setEmployeeData } from '../utilities/storage';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            searchText: ''
        }
    }
    componentDidMount() {
        getEmployeeData().then(employees => {
            if(employees) {
                this.setState({ employees });
            } else {
                getEmployeeDetails().then(employees => {
                    setEmployeeData(employees);
                    this.setState({ employees });
                });
            }
        });
    }
    getEmployee = () => {
        const { employees, searchText } = this.state;
        return searchText ? employees.filter(employee => compareString(employee.name, searchText) || compareString(employee.email, searchText) || compareString(employee.username, searchText)) : employees;
    }
    showDetailOf(employee) {
        this.state.searchText && setTimeout(() => this.setState({ searchText: '' }), 500);
        this.props.navigation.navigate(SCREENS.DETAILS, employee);
    }
    setSearchText = searchText => this.setState({ searchText })
    renderEmployee = ({ item }) => (
        <TouchableNativeFeedback onPress={() => this.showDetailOf(item)}>
            <View style={homeStyle.employee}>
                <Image style={homeStyle.profile} source={{ uri: item.profile_image }} />
                <View style={homeStyle.tile}>
                    <Text style={homeStyle.name}>{item.name}</Text>
                    <Text style={homeStyle.description}>{item.email}</Text>
                    <Text style={homeStyle.description}>{item.company?.name || 'Un Employed'}</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
    render() {
        const { searchText } = this.state;
        return (
            <View style={homeStyle.container}>
                <TextInput
                    style={homeStyle.search}
                    value={searchText}
                    onChangeText={this.setSearchText}
                    underlineColorAndroid
                    placeholder="Search Employee"
                />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.getEmployee()}
                    keyExtractor={employee => employee.id}
                    renderItem={this.renderEmployee}
                />
            </View>
        )
    }
}