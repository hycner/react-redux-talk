import React, {Component} from 'react';
import {
  CodePane,
  Fill,
  Heading,
  List,
  ListItem,
  Layout
} from "spectacle";

export default class ReduxPromiseMiddleware extends Component {
  render () {
    return (
      <div>
        <Heading size={1} fit caps textColor="#0097cf">
          redux-promise-middleware
        </Heading>

        Allows you to pass a promise as a property.<br/>
        Dispatches pending/resolved/rejected actions based on the state of the call.<br/>

        <Layout style={{marginTop: 40}}>
          <Fill style={{paddingRight:5}}>
            Async action with redux-thunk:
            <CodePane
              lang="js"
              source={require("raw!../../assets/reduxPromiseMiddleware-thunk.code")}
              margin="20px auto"
            />
          </Fill>

          <Fill style={{paddingLeft:5}}>
            Async with redux-promise-middleware:
            <CodePane
              lang="js"
              source={require("raw!../../assets/reduxPromiseMiddleware-promise.code")}
              margin="20px auto"
            />
          </Fill>
        </Layout>
      </div>
    );
  }
}
