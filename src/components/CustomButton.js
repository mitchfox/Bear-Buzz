import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default CustomButton = (props) => {
    const {
        title = 'Enter',
        style = {},
        textStyle = {},
        onPress
    } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#14a5ff',
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textTransform: 'capitalize'
    },
});