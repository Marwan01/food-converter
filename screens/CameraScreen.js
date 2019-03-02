import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Icon } from 'react-native-elements'


export default class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
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
          <Camera style={{ flex: 1 }} type={this.state.type}
          
          ref={ref => { this.camera = ref; }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              

                
            </View>
          </Camera>
          <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color='#f50'
                onPress={() => this.snap()}/>
        </View>
        
      );
    }
  }
  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      console.log(photo);
    }
  };
  takePicture() {
    const options = {}

    this.camera.capture({metadata: options}).then((data) => {
      console.log(data)
    }).catch((error) => {
      console.log(error)
    })
  }
}
