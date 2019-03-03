import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Icon } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';




export default class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    spinner: false

  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
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
      this.props.navigation.navigate('Home', photo)
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