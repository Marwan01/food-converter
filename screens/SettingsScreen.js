import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Container, Header, Content, Form, Item, Input } from 'native-base';

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