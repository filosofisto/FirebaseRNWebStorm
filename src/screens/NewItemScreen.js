import React from 'react';
import Header from "../components/Header";
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    TextInput,
    Alert
} from 'react-native';
import FirebaseService from "../services/FirebaseService";

export default class NewItemScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = { cliente: '', temperatura: 0, umidade: 0 };
    }

    addItem = () => {
        FirebaseService.addItem(this.state, this.addSuccess, this.addError);
    };

    addSuccess = item => {
        Alert.alert('Sucesso', 'Registro incluído com sucesso');
    };

    addError = () => {
        Alert.alert('Erro', 'Erro ao incluir item');
    };

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

    handleSubmit = () => {
        this.addItem();
        Alert.alert('Item saved successfully');
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.main}>
                <Header/>
                <Text style={styles.title}>Add Item</Text>
                <TextInput style={styles.itemInput}
                           onChangeText={this.handleChangeCliente}
                           value={this.state.cliente}/>
                <TextInput style={styles.itemInput}
                           onChangeText={this.handleChangeTemperatura}
                           value={this.state.temperatura}/>
                <TextInput style={styles.itemInput}
                           onChangeText={this.handleChangeUmidade}
                           keyboardType={'numeric'}
                           value={this.state.umidade}/>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={this.handleSubmit}
                >
                    <Text style={styles.buttonText}>Add</Text>
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

