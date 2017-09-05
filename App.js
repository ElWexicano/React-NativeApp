import React, {Component} from 'react';
import {AppRegistry, Text, Image, View} from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{marginTop: 20}}>
        <Text style={{margin: 20}}>Hello World</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
    </View>
    );
  }
}
