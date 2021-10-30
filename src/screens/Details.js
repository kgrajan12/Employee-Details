import React from 'react';
import { Image, Linking, Text, View } from 'react-native';
import detailsStyle from '../styles/Details';

const Detail = ({ field, value, link=false }) => value ? (
    <View style={detailsStyle.detail}>
        <Text style={detailsStyle.field}>{field}</Text>
        <Text>: </Text>
        <Text onPress={() => link && Linking.canOpenURL(value).then(supported => {
            supported && Linking.openURL(value);
        })} style={link ? detailsStyle.link : detailsStyle.value}>{value}</Text>
    </View>
) : null;

export default class Details extends React.Component {
    componentDidMount() {
        const { navigation, route } = this.props;
        const { name } = route.params;
        navigation.setOptions({ title: name });
    }
    render() {
        const { route } = this.props;
        const { name, username, email, profile_image, address, phone, website, company } = route.params;
        return (
            <View style={detailsStyle.container}>
                <Image source={{ uri: profile_image }} style={detailsStyle.profile} />
                <Detail field='Name' value={name} />
                <Detail field='Username' value={username} />
                <Detail field='Email' value={email} />
                <Detail field='Address' value={`${address.suite}, ${address.street},\n${address.city},\n${address.zipcode}`} />
                <Detail field='Phone' value={phone} />
                <Detail field='Website' value={website} link />
                <Detail field='Company' value={company && `${company.name},\n${company.catchPhrase},\n${company.bs}`} />
            </View>
        )
    }
}