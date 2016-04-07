import React, {Component} from 'react';
import {
  CodePane,
  Fill,
  Heading,
  List,
  ListItem,
  Layout
} from "spectacle";

export default class ReduxSaga extends Component {
  render () {
    return (
      <div>
        <Heading size={1} fit caps textColor="#0097cf">
          redux-saga
        </Heading>

        Turns Action Creators into generators that dispatch actions over time.<br/>
        Daemon-like tasks that run in the background.<br/>
        Choose their own logic of progression.

        <Layout style={{marginTop: 40}}>
          <Fill style={{paddingRight:5}}>
            An async action with redux-thunk:
            <CodePane
              lang="js"
              source={require("raw!../../assets/reduxSaga-thunk.code")}
              margin="20px auto"
            />
          </Fill>

          <Fill style={{paddingLeft:5}}>
            An async action with redux-saga:
            <CodePane
              lang="js"
              source={require("raw!../../assets/reduxSaga-saga.code")}
              margin="20px auto"
            />
          </Fill>
        </Layout>
      </div>
    );
  }
}
