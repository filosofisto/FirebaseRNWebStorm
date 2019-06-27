import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const Header = () => {
    return (<View style={styles.header}><Text style={styles.textHeader}>React-Native Firebase</Text></View>);
};

const styles = StyleSheet.create({
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
    }
});

export default Header;
