import React from 'react';
import { View, ScrollView, StyleSheet, Image, ListView } from 'react-native';

import {
  Text,
  Card,
  Tile,
  Icon,
  ListItem,
  Title,
  Avatar,
} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';

import colors from '../assets/colors';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
const axios = require("axios");
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
    let a = "";
    let cal = 0;
    if (first == true) {

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
        name: 'Push ups',
        subtitle: 'Number of Reps',
        linearGradientColors: ['#FF9800', '#F44336'],
        rightTitle: cal * 0.83,
        rightSubtitle:"reps"
      },
      {
        name: 'Swimming',
        subtitle: 'Time spent swimming at normal pace',
        linearGradientColors: ['#FF9800', '#F44336'],
        rightTitle: ((cal / 800 ) * 60 ),
        rightSubtitle:"Mins"
      },
      {
        name: 'Jogging',
        subtitle: 'Running at normal pace',
        linearGradientColors: ['#FF9800', '#F44336'],
        rightTitle: cal / 140,
        rightSubtitle:"in miles"
      },    
    ];
    return (
      <View style={{ flex: 1 }}
     >
      <Image
        style={{
          
          flex: 1,
          maxHeight:'60%',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom:'5%'
        }}
        source={{ uri:im }}
      />

      <Text
       style={{textAlignVertical: "center",textAlign: "center",fontSize:23,marginBottom:15}}>AI guy says: {a}</Text>
             <Text
       style={{textAlignVertical: "center",textAlign: "center",fontSize:16}}>You will need to burn {cal} Calories to make up for this {a}</Text>




        <View style={styles.list}>
          {list2.map((l, i) => (
            <ListItem
              key={i}


              leftIcon={{
                name: 'user-circle-o',
                type: 'font-awesome',
                color: 'blue',
              }}


              title={l.name}
              titleStyle={{ color: 'red' }}
              subtitle={l.subtitle}
              rightTitle={Math.round(l.rightTitle,2).toString()}
              rightTitleStyle={{ color: 'green' }}
              rightSubtitle={l.rightSubtitle}
              bottomDivider
            />
          ))}
        </View>

    </View>

    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: colors.greyOutline,
    backgroundColor: '#fff',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FD6B78',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
});
