import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Container, Header, Content, Form, Item, Input, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */

    return (
    
      <Container>
        <Header />
<Content>
  <List>
    <ListItem thumbnail>
      <Left>
        <Thumbnail square source={{ uri: 'https://www.siggraph.org/sites/default/files/org.flat.logo.400_0.jpg' }} />
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


