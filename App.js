import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ListItemsScreen from './src/screens/ListItemsScreen';
import NewItemScreen from "./src/screens/NewItemScreen";

const MainNavigator = createStackNavigator({
  ListItemsScreen: {screen: ListItemsScreen},
  NewItemScreen: {screen: NewItemScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

/*export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <ListItemsScreen/>
    );
  }
}*/


