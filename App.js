import React from 'react';
import ListItemsScreen from './src/screens/ListItemsScreen';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <ListItemsScreen/>
    );
  }
}
