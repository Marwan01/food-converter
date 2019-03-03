import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  ListItem,
  Text,
  FlatList,
  View,
  ImageBackground,
  Dimensions
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';
import colors from '../assets/colors';
import TouchableScale from 'react-native-touchable-scale';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
const axios = require("axios");
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Clarifai = require('clarifai');
const clarifai = new Clarifai.App({
  apiKey: 'c15d3dba1f5645ff8e2a9e8eb19f8150',
});
process.nextTick = setImmediate;
export default class InfoScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    hasCameraPermission: null,
    food: 'bagel',
    calories: [],
    url: 'https://www.titosvodka.com/uploads/recipes/_auto1000/ingredient-mango.jpg',
    count:0
  };
  render() {
    const first = this.props.navigation.state.hasOwnProperty('params')
    let im="";
    let a = ""
    let cal = 0;
    if (first == true) {

        console.log(this.props.navigation.state.params.pred)
        a=this.props.navigation.state.params.pred
        cal = this.props.navigation.state.params.cal
      im = this.props.navigation.state.params.uri 
    }
    else {
      a = "default"
      im = ""
    }
    const list2 = [
      {
        workout: 'Push ups',
        value: cal * 0.97,
        linearGradientColors: ['#FF9800', '#F44336'],
      },
      {
        workout: 'Miles of Jogging',
        value: cal/ 140,
        linearGradientColors: ['#FF9800', '#F44336'],
      }
    
    ]
    return (
      <View>
      <View
      style={[
        { backgroundColor: '#FF9800', marginTop: 20 },
      ]}
    >
      <Icon color="white" name="magic" size={62} type="font-awesome" />
    </View>
    <View style={{ backgroundColor: '#ECEFF1', paddingVertical: 8 }}>
      <ListItem
      title = {a}>{a}
        
      </ListItem>
    </View>
    </View>
    );
  }
 
}
