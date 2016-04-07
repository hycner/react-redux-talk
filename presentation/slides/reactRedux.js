import React, {Component} from 'react';
import {
  CodePane,
  Fill,
  Heading,
  List,
  ListItem,
  Layout
} from "spectacle";

export default class ReactRedux extends Component {
  render () {
    return (
      <div>
        <Heading size={1} fit caps>
          react-redux
        </Heading>

        React bindings for Redux embrace the idea of dividing container and presentational components.<br/>

        <Layout style={{marginTop: 40}}>
          <Fill style={{paddingRight:5}}>
          <strong>Containers (Smart)</strong>
            <List>
              <ListItem>Top level, route handlers</ListItem>
              <ListItem>Aware of Redux</ListItem>
              <ListItem>Subscribes to Redux state</ListItem>
              <ListItem>Dispatches Redux actions</ListItem>
            </List>
          </Fill>

          <Fill style={{paddingLeft:5}}>
          <strong>Presentational (Dumb)</strong>
            <List>
              <ListItem>Middle and leaf components</ListItem>
              <ListItem>Not aware of Redux</ListItem>
              <ListItem>Reads data from props</ListItem>
              <ListItem>Invoke callbacks from props</ListItem>
            </List>
          </Fill>
        </Layout>
      </div>
    );
  }
}
