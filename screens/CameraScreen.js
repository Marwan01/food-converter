import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Icon } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
const axios = require("axios");
const Clarifai = require('clarifai');
const clarifai = new Clarifai.App({
  apiKey: 'c15d3dba1f5645ff8e2a9e8eb19f8150',
});
process.nextTick = setImmediate;


export default class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    spinner: false,
    calories:0

  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  calories = (q) => {
     axios.post('https://trackapi.nutritionix.com/v2/natural/nutrients', { query: q}, {
      headers:
      {
        'Content-Type': 'application/json',
        'x-app-key': '20063fe67146bc6e07993cfc79b04b66',
        'x-app-id': 'a04a439c'
      }
    })
      .then(response => {
        console.log(response.data.foods[0].nf_calories)
        this.setState({ calories: response.data.foods[0].nf_calories })
      })
      .catch(error => {
        console.log("error")
        console.log(error)
        return -1
      })
    // this.setState({ calories: 100 })
  }

  render() {
    
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        
        <View style={{ flex: 1 }}>
            <Spinner
              animation='slide'
              visible={this.state.spinner}
              textContent={'Sending Api Calls...'}
              textStyle={styles.spinnerTextStyle}
            />
          <Camera style={{ flex: 1 }} type={this.state.type}
          
          ref={ref => { this.camera = ref; }}>

          <View style={{
          
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }} >
          
              <Icon 
                raised
                name='camera'
                size = {35}
                type='font-awesome'
                color='black'
                onPress={() =>     setTimeout(() =>{
 
                  this.setState({
                    spinner: true
                  });
                  //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
                  this.snap()
                }, 1)
                
                }
              />
              </View>

                
          </Camera>
    
        </View>
        
      );
    }
  }
  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({base64:true});

      let predictions = await clarifai.models.predict(Clarifai.FOOD_MODEL, photo.base64);
      photo.pred = predictions.outputs[0].data.concepts[0].name
      let cals =  await axios.post('https://trackapi.nutritionix.com/v2/natural/nutrients', { query: photo.pred}, {
        headers:
        {
          'Content-Type': 'application/json',
          'x-app-key': '0f6b153bc9f5e5e0f8c3c5d65be6000d',
          'x-app-id': 'e0cf5cff'
        }
      });
      photo.cal= cals.data.foods[0].nf_calories
      this.props.navigation.navigate('Info', photo)
      this.camera.stopRecording();
      this.setState({
        spinner: false
      });

    }
    
  };
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});