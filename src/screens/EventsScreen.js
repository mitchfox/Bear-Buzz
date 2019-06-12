import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Linking, TextInput, Keyboard } from "react-native";
import CustomButton from "../components/CustomButton";
import Loader from "../components/Loader";
import { ScrollView } from "react-native-gesture-handler";


export default class EventsScreen extends React.Component {

    static navigationOptions = {
        title: "Events Search",
    }

    constructor(props) {
        super(props);
        this.state = {
            // Eventbrite API Data
            dataSource: [],
            pageStats: [],
            eventCount: '',
            // Default Search Result Set to Brissy 
            location: 'London',
            // API Token
            token: 'VBUSKKCQ2VTXKPOP34PX',
            loading: true,
        };
    }

    // Update Location Search
    updateSearch = location => {
        this.setState({ location });
    };

    // Reset Event Data
    updateData = dataSource => {
        dataSource = [];
        this.setState({ dataSource });
    };

    // Update Date with New Location
    loadData = dataSource => {
        this.updateData();
        this.setState({
            loading: true
        })
        const url = "https://www.eventbriteapi.com/v3/events/search/?location.address=" + this.state.location + "&token=" + this.state.token;
        fetch(url).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.events,
                    loading: false
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    fetchEventStats = eventCount => {
        this.updateData();
        this.setState({
            loading: true
        })
        const url = "https://www.eventbriteapi.com/v3/events/search/?location.address=" + this.state.location + "&token=" + this.state.token;
        fetch(url).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    eventCount: responseJson.pagination.object_count,
                    loading: false
                });
                console.log(eventCount);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // Rendering Event Cards
    renderCard = ({ item }) => {
        return (
            <View style={styles.container}>
                <View style={styles.card}>

                    {/* Card Image */}
                    <View style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5, overflow: 'hidden' }}>
                        <Image
                            style={styles.cardImage}
                            source={{ uri: item.logo.url }}
                        /></View>
                    {/* Card Title */}
                    <Text style={styles.cardTitle}>{item.name.text}</Text>
                    {/* Time Zone - Start Date - Description */}
                    <Text style={styles.cardText}>{item.start.timezone}</Text>
                    <Text style={styles.cardText}>Start Date & Time | {item.start.local}</Text>
                    <Text numberOfLines={3} style={styles.cardDesc}>{item.description.text}</Text>
                    <CustomButton
                        title="View Event Website"
                        // -> Event Website Data
                        onPress={() => {
                            Linking.openURL(item.url)
                        }}
                        style={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}
                    />
                </View>
            </View>
        )
    }

    // Fetch Initial Data on Start
    componentDidMount() {
        this.loadData();
        this.fetchEventStats();
    }

    // Render
    render() {
        const { location } = this.state;

        return (

            <View>
                <Text style={styles.title}>Events Search</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.input}
                        value={location}
                        clearButtonMode="while-editing"
                        placeholderTextColor="#2B2B52"
                        placeholder={"Enter New Events Location..."}
                        onChangeText={this.updateSearch}
                    />
                    <CustomButton
                        title="Search"
                        onPress={() => {
                            // Update Data with New Location Events
                            this.loadData();
                            this.fetchEventStats();
                            // Dismiss Keyboard
                            Keyboard.dismiss();
                        }}
                        style={{
                            borderRadius: 5, marginTop: 10, marginRight: 20, display: 'flex', flex: 2, height: 40, paddingHorizontal: 10,
                        }}
                    />
                </View>

                <Loader
                    loading={this.state.loading} />
                {/* Events List */}
                <ScrollView style={{ marginTop: 60 }}>
                    <Text style={styles.resultText}>{this.state.eventCount} Results for Events in {this.state.location}</Text>
                    <FlatList
                        
                        data={this.state.dataSource}
                        renderItem={this.renderCard}
                        keyExtractor={(item, index) => index.toString()}
                    />

                </ScrollView>

            </View>
        )
    }
}

// Styling 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginLeft: 20,
        marginTop: 40
    },
    card: {
        marginBottom: 40,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#e5f6fc",
        borderRadius: 5,
    },
    cardImage: {
        display: 'flex',
        width: 340,
        height: 200,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        overflow: 'hidden',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingHorizontal: 15,
        paddingVertical: 10,

    },
    cardText: {
        fontSize: 16,
        paddingHorizontal: 15,
        paddingVertical: 2,
        marginBottom: 5,

    },
    cardDesc: {
        fontSize: 16,
        paddingHorizontal: 15,
        paddingVertical: 2,
        marginBottom: 10,

    },
    input: {
        height: 40,
        display: 'flex',
        flex: 6,
        marginTop: 10,
        marginRight: 10,
        fontSize: 16,
        borderWidth: 1,
        marginLeft: 20,
        borderColor: "#d6d6d6",
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    resultText: {
        flex: 1,
        textAlign: 'center',        
        fontSize: 14,
        color: '#a8a8a8',  
        fontWeight: 'bold',
        paddingBottom: 10

    }
})