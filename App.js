import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

class BlinkyBlink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.name : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View>
        <BlinkyBlink name='Rexxar' />
        <BlinkyBlink name='Jaina' />
        <BlinkyBlink name='Valeera' />
      </View>
    );
  }
}
