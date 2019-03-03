import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Container, Header, Content, Form, Item, Input, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { TextInput } from 'react-native-paper';
import { Avatar } from 'react-native-elements';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };
  state = {
    text: ''
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */

    return (

    
      <Container>
        <TextInput
        Type='outlined'
        label='Email'
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
      />
        <Header />
<Content>
  <List>
    <ListItem thumbnail>
      <Left>
      <Avatar
  source={{
    uri:
      'https://miro.medium.com/fit/c/240/240/0*Ey_MQF88P6p8MaFi.jpg',
  }}
  showEditButton
/>
        {/* <Thumbnail square source={{ uri: 'https://miro.medium.com/fit/c/240/240/0*Ey_MQF88P6p8MaFi.jpg' }} /> */}
      </Left>
      <Body>
        <Text>Tudor</Text>
        <Text note numberOfLines={1}>My Profile</Text>
      </Body>
      <Right>
        <Button transparent>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  </List>
        <Form>
          <Item>
            <Input placeholder="Weight" />
          </Item>
          <Item last>
            <Input placeholder="Height" />
          </Item>
        </Form>
        </Content>
    </Container>
    // <ExpoConfigView />
    );

  }
}


