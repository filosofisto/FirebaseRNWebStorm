import React from 'react';
import {ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import FirebaseService from "../services/FirebaseService";
import Item from '../components/Item';
import Header from "../components/Header";

export default class ListItemsScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = { items: [] }
    }

    componentDidMount() {
        FirebaseService.getItems(dataIn => this.setState({items: dataIn}));
    }

    render() {
        const { items } = this.state;
        const { navigate } = this.props.navigation;

        return (
            <ScrollView style={styles.margin10}>
                <Header/>
                <Button
                    onPress={() => navigate('NewItemScreen')}
                    title="New"
                    color="#841584"
                    accessibilityLabel="New item"
                />
                <View style={styles.fullWidth}>
                    {
                        items && items.map(
                            (item, index) => {
                                return <Item item={item} index={index} key={index}/>
                            }
                        )
                    }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    margin10: {
        margin: 10
    },
    fullWidth: {
        flex: 1
    },
    header: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: 80,
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        fontSize: 40
    },
    textHeader: {
        fontSize: 32
    },
    listItemText: {
        fontSize: 20,
        color: '#000000',
        marginBottom: 10
    },
    listItemHeader: {
        fontSize: 10,
        color: '#000000'
    },
    item: {
        backgroundColor: '#c7c7c7',
        borderRadius: 20
    }
});
