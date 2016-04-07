import React, {Component} from 'react';
import {
  CodePane,
  Fill,
  Heading,
  List,
  ListItem,
  Layout
} from "spectacle";

export default class ReactReduxConnect extends Component {
  render () {
    return (
      <div>
        <Layout style={{marginTop: 40}}>
          <Fill style={{paddingRight:5}}>
            <CodePane
      	      lang="js"
      	      source={require("raw!../../assets/redux-connect.code")}
      	    />
          </Fill>
        </Layout>
      </div>
    );
  }
}
