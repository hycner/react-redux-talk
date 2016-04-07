import React, {Component} from 'react';
import {
  CodePane,
  Fill,
  Heading,
  List,
  ListItem,
  Layout
} from "spectacle";

export default class ReduxThunk extends Component {
  render () {
    return (
      <div>
        <Heading size={1} fit caps textColor="#0097cf">
          redux-thunk
        </Heading>

        Allows you to write action creators that return a function instead of an object.<br/>
        The inner function receives the store methods <strong>dispatch()</strong> and <strong>getState()</strong> as arguments.

        <Layout style={{marginTop: 40}}>
          <Fill style={{paddingRight:5}}>
            A synchronous action:
            <CodePane
              lang="js"
              source={require("raw!../../assets/reduxThunk-base.code")}
              margin="20px auto"
            />
          </Fill>

          <Fill style={{paddingLeft:5}}>
            An async action with redux-thunk:
            <CodePane
              lang="js"
              source={require("raw!../../assets/reduxThunk-async.code")}
              margin="20px auto"
            />
          </Fill>
        </Layout>
      </div>
    );
  }
}
