import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Linking, TextInput, Keyboard } from "react-native";



export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    
  }

  

  
  // Render
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
        <Text></Text>
      </View>
    )
  }
}

// Styling 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    // alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: 20,
    marginTop: 40
},
})