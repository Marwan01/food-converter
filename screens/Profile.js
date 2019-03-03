import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Input, SearchBar, Icon, Button } from 'react-native-elements';
import { Font } from 'expo';
import { TextInput } from 'react-native-paper';


import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';



const SCREEN_WIDTH = Dimensions.get('window').width;

const IMAGE_SIZE = SCREEN_WIDTH - 80;


class CustomButton extends Component {
  constructor() {
    super();

    this.state = {
      selected: false,
      text: ' ', 
      text1: ' ',
      text2: ' ',
      text3: ' ',
    };
  }

  componentDidMount() {
    const { selected } = this.props;

    this.setState({
      selected,
    });
  }

  updateText = () => {
    this.setState({
      textValue: 'Saving...'
    })
  }


  render() {
    const { title } = this.props;
    const { selected } = this.state;

    return (
      <Button
        title={title}
        titleStyle={{ fontSize: 15, color: 'grey', fontFamily: 'regular' }}
        buttonStyle={
          selected
            ? {
                backgroundColor: 'rgba(249, 143, 5, 0.63)',
                borderRadius: 100,
                width: 127,
              }
            : {
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 30,
                width: 127,
                backgroundColor: 'transparent',
              }
        }
        containerStyle={{ marginRight: 10 }}
        onPress={() => this.setState({ selected: !selected })}
      />
    );
  }
}

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      georgia: require('../assets/fonts/Georgia.ttf'),
      regular: require('../assets/fonts/Montserrat-Regular.ttf'),
      light: require('../assets/fonts/Montserrat-Light.ttf'),
      bold: require('../assets/fonts/Montserrat-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        {this.state.fontLoaded ? (
          <View style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.67)' }}>
            <View style={styles.statusBar} />
            <View style={styles.navBar}>
              <Text style={styles.nameHeader}>Micheal Scott, 40</Text>
            </View>
            <ScrollView style={{ flex: 1 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  source={{
                    uri:
                      'https://www.bluleadz.com/hs-fs/hubfs/Blog_pics/PrisonMike.jpeg?width=1196&name=PrisonMike.jpeg',
                  }}
                  style={{
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE,
                    borderRadius: 10,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginTop: 20,
                  marginHorizontal: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    fontSize: 26,
                    color: 'grey',
                    fontFamily: 'bold',
                  }}
                >
                  Mike
                </Text>

                <Text
                  style={{
                    flex: 1,
                    fontSize: 19,
                    color: 'grey',
                    fontFamily: 'bold',
                    textAlign: 'right',
                  }}
                >
                  Scranton
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  marginTop: 20,
                  width: SCREEN_WIDTH - 80,
                  marginLeft: 40,
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    fontSize: 15,
                    color: 'grey',
                    fontFamily: 'regular',
                  }}
                >
                "I need a username, and I have a great one. "Little Kid Lover". That way people will know exactly where my priorities are at"
                </Text>
              </View>
              <View style={{ flex: 1, marginTop: 30 }}>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 15,
                    color: 'rgba(216, 121, 112, 1)',
                    fontFamily: 'regular',
                    marginLeft: 40,
                  }}
                >
                  INTERESTS
                </Text>
                <View style={{ flex: 1, width: SCREEN_WIDTH, marginTop: 20 }}>
                  <ScrollView
                    style={{ flex: 1 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'column',
                        height: 170,
                        marginLeft: 40,
                        marginRight: 10,
                      }}
                    >
                     <View style={{ flex: 1, flexDirection: 'row' }}>
                        <CustomButton title="Jumping Jacks" selected={true} />
                        <CustomButton title="Burpees" selected={true} />
                      </View>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <CustomButton title="Pull-ups" selected={true} />
                        <CustomButton title="Sit-ups" selected={true} />
                      </View>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                      <CustomButton title="Squats" selected={true} />
                        <CustomButton title="Push-ups" selected={true} />
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View>
              <View style={{ flex: 1, marginTop: 30 }}>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 15,
                    color: 'rgba(216, 121, 112, 1)',
                    fontFamily: 'regular',
                    marginLeft: 40,
                  }}
                >
                  INFO
                </Text>


<View
            style={{
              backgroundColor: 'White',
              width: SCREEN_WIDTH,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: 'grey',
                fontSize: 30,
                marginVertical: 10,
                fontWeight: '300',
              }}
            >
              
            </Text>
            <Input
              inputContainerStyle={{
                borderRadius: 40,
                borderWidth: 1,
                borderColor: 'rgba(249, 143, 5, 0.63)',
                height: 50,
                width: SCREEN_WIDTH - 50,
                marginVertical: 10,
              }}
              onChangeText={(text) => this.setState({text})}
              placeholder= {this.state.text}
              iconContainerStyle={{ marginLeft: 20 }}
              label='Age'
              placeholder="years" 
              placeholderTextColor="rgba(249, 143, 5, 0.63)"
              inputStyle={{ marginLeft: 10, color: 'gray' }}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="light"
              keyboardType="numeric"
              returnKeyType="next"
              ref={input => (this.usernameInput = input)}
              onSubmitEditing={() => {
                this.email2Input.focus();
              }}
              blurOnSubmit={false}
            />
            <Input
              inputContainerStyle={{
                borderRadius: 40,
                borderWidth: 1,
                borderColor: 'rgba(249, 143, 5, 0.63)',
                height: 50,
                width: SCREEN_WIDTH - 50,
                marginVertical: 10,
              }}
              onChangeText={(text1) => this.setState({text1})}
              placeholder= {this.state.text1}
              iconContainerStyle={{ marginLeft: 20 }}
              label='Weight'
              placeholder="lbs"
              placeholderTextColor="rgba(249, 143, 5, 0.63)"
              inputStyle={{ marginLeft: 10, color: 'gray' }}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="light"
              keyboardType="numeric"
              returnKeyType="next"
              ref={input => (this.email2Input = input)}
              onSubmitEditing={() => {
                this.password2Input.focus();
              }}
              blurOnSubmit={false}
            />
            <Input
              inputContainerStyle={{
                borderRadius: 40,
                borderWidth: 1,
                borderColor: 'rgba(249, 143, 5, 0.63)',
                height: 50,
                width: SCREEN_WIDTH - 50,
                marginVertical: 10,
              }}
              onChangeText={(text2) => this.setState({text2})}
              placeholder= {this.state.text2}
              iconContainerStyle={{ marginLeft: 20 }}
              label='Height'
              placeholder="ft"
              placeholderTextColor="rgba(249, 143, 5, 0.63)"
              inputStyle={{ marginLeft: 10, color: 'gray' }}
              autoCapitalize="none"
              keyboardAppearance="light"
              autoCorrect={false}
              keyboardType="numeric"
              returnKeyType="next"
              ref={input => (this.password2Input = input)}
              onSubmitEditing={() => {
                this.confirmPassword2Input.focus();
              }}
              blurOnSubmit={false}
            />
            
            </View>
                
              </View>
             
              
              <Button 
                containerStyle={{ marginVertical: 20 }}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                buttonStyle={{
                  height: 55,
                  width: SCREEN_WIDTH - 40,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                linearGradientProps={{
                  colors: ['rgba(214,116,112,1)', 'rgba(233,174,87,1)'],
                  start: [1, 0],
                  end: [0.2, 0],
                }}
                title="Save" 
                titleStyle={{
                  fontFamily: 'regular',
                  fontSize: 20,
                  color: 'grey',
                  textAlign: 'center'
                }}
                onPress={() => console.log(' Submit')}
                
                 onChangeText={(text3) => this.setState({textValue})}
                 placeholder={this.state.textValue}
                activeOpacity={0.5}
              />
            </ScrollView>
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: 10,
  },
  navBar: {
    height: 60,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignContent: 'center',
  },
  nameHeader: {
    color: 'grey',
    fontSize: 22,
    textAlign: 'center',
  },
  infoTypeLabel: {
    fontSize: 15,
    textAlign: 'right',
    color: 'rgba(126,123,138,1)',
    fontFamily: 'regular',
    paddingBottom: 10,
  },
  infoAnswerLabel: {
    fontSize: 15,
    color: 'grey',
    fontFamily: 'regular',
    paddingBottom: 10,
  },
});