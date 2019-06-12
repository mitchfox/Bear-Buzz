import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomButton from '../components/CustomButton';
import { Divider } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../images/logo.png')}
                    style={styles.logo} />
                <Image
                    source={require('../images/travel-image.png')}
                    style={styles.landingImage}
                />
                <Text style={styles.welcomeText}>Search the Latest Events, Globally!</Text>
                <Text style={styles.descriptionText}>Sign up to Save Events, Share with Friends & Get Exclusive Deals to the Events of the Year!</Text>
                <CustomButton
                    title="Register"
                    onPress={() => {
                        this.props.navigation.navigate("Signup");
                    }}
                    style={styles.button}
                />
                <CustomButton
                    title="Sign In"
                    onPress={() => {
                        this.props.navigation.navigate("Signup");
                    }}
                    style={styles.button}
                />
                <Divider style={styles.divider} />

                <CustomButton
                    title="Events Search"
                    onPress={() => {
                        this.props.navigation.navigate("Events");
                    }}
                    style={styles.buttonEvents}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    button: {
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#14a5ff',
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
    },
    logo: {
        width: 40,
        height: 40,
        marginTop: 20,
        resizeMode: 'contain',
        alignItems: 'center',
        display: 'flex',
    },
    buttonEvents: {
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#14a5ff',
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#222222',
        marginLeft: 20,
        marginBottom: 10,
    },
    descriptionText: {
        fontSize: 14,
        color: '#a8a8a8',
        marginLeft: 20,
        marginBottom: 20,
        width: 330,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textTransform: 'capitalize'
    },
    landingImage: {
        width: 340,
        height: 200,
        resizeMode: 'contain',
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        marginRight: 20,
        alignItems: 'center',
    },
    textEvents: {
        color: '#a8a8a8',
        fontSize: 12,
        alignItems: 'center',
    },
    divider: {
        backgroundColor: '#ddf0ff',
        height: 3,
        marginLeft: 120,
        marginRight: 120,
        marginBottom: 20,
        marginTop: 10,
    }
});