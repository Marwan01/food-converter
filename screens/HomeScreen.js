import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  View
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
const axios = require("axios");
const Clarifai = require('clarifai');
const clarifai = new Clarifai.App({
  apiKey: 'c15d3dba1f5645ff8e2a9e8eb19f8150',
});
process.nextTick = setImmediate;
export default class HomeScreen extends React.Component {
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
  componentDidMount() {
    this.predict(this.state.url)
  }
  calories = async => {
    // axios.post('https://trackapi.nutritionix.com/v2/natural/nutrients', { query: this.state.food }, {
    //   headers:
    //   {
    //     'Content-Type': 'application/json',
    //     'x-app-key': 'edb7aff4ca908ad45c331d17384bbe95',
    //     'x-app-id': '04f8cdf8'
    //   }
    // })
    //   .then(response => {
    //     // console.log(this.state.food)
    //     // console.log(response.data.foods[0].nf_calories)
    //     this.setState({ calories: response.data.foods[0].nf_calories })
    //   })
    //   .catch(error => {
    //     console.log("error")
    //     console.log(error)
    //   })
    this.setState({ calories: 100 })
  }
  predict = async image => {
    let predictions = await clarifai.models.predict(
      Clarifai.FOOD_MODEL,
      image
    );
    this.setState({ predictions: predictions.outputs[0].data.concepts });
    this.setState({ food: predictions.outputs[0].data.concepts[0].name });
    this.calories()
  };
  render() {
    const first = this.props.navigation.state.hasOwnProperty('params')
    let im;
    let a =  this.state.food
    if (first == true) {
      a= this.props.navigation.state.params.pred
      im = <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: this.props.navigation.state.params.uri }}
      />
    }
    else {
      im = <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: this.state.url }}
      />
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />

            {im}
            <Text>{a}</Text>
            <Text>{this.state.calories}</Text>
          </View>
        </ScrollView>
        {/* footer */}
        {/* <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>
          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View> */}
      </View>
    );

  }
  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );
      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }
  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };
  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});