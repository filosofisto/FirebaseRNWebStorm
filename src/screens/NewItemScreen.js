import React from 'react';
import Header from "../components/Header";
import {StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';

export default class NewItemScreen extends React.Component {

    constructor(props) {
        super(props);

        this.handleChangeCliente = this.handleChangeCliente.bind(this);
        this.handleChangeTemperatura = this.handleChangeTemperatura.bind(this);
        this.handleChangeUmidade = this.handleChangeUmidade.bind(this);
        this.prepareNewRecord = this.prepareNewRecord.bind(this);

        this.state = { id: '', cliente: '', temperatura: 0, umidade: 0 };
    }

    prepareNewRecord() {
        this.setState({ id: '', cliente: '', temperatura: 0, umidade: 0 });
    }

    handleChangeCliente = text => {
        this.setState({
            cliente: text
        });
    };

    handleChangeTemperatura = text => {
        if (/^\d+$/.test(text)) {
            this.setState({
                temperatura: parseInt(text)
            });
        }
    };

    handleChangeUmidade = text => {
        if (/^\d+$/.test(text)) {
            this.setState({
                umidade: parseInt(text)
            });
        }
    };

    render() {
        const { params } = this.props.navigation.state;

        return (
            <View style={styles.main}>
                <Header/>
                <Text style={styles.title}>Novo Item</Text>
                <TextInput style={styles.itemInput}
                           onChangeText={this.handleChangeCliente}
                           value={this.state.cliente}/>
                <TextInput style={styles.itemInput}
                           onChangeText={this.handleChangeTemperatura}
                           value={this.state.temperatura.toString()}/>
                <TextInput style={styles.itemInput}
                           onChangeText={this.handleChangeUmidade}
                           keyboardType={'numeric'}
                           value={this.state.umidade.toString()}/>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={() => { params.handleAddItem(this.state); this.prepareNewRecord(); }}>
                    <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#6565fc'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
    },
    itemInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});

