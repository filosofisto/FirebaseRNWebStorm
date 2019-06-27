import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Item extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { item, index } = this.props;

        return (
            <View style={[styles.margin10, styles.item]} key={index}>
                <View style={{padding: 10}}>
                    <Text style={styles.listItemHeader}> Temperatura </Text>
                    <Text style={styles.listItemText}> {item.temperatura} </Text>

                    <Text style={styles.listItemHeader}> Umidade </Text>
                    <Text style={styles.listItemText}> {item.umidade} </Text>

                    <Text style={styles.listItemHeader}> Cliente </Text>
                    <Text style={styles.listItemText}> {item.cliente} </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    margin10: {
        margin: 10
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
