import React, {Component} from 'react';
import {
  CodePane,
  Fill,
  Heading,
  Link,
  List,
  ListItem,
  Layout,
  Text
} from "spectacle";

export default class RealWorldReducers extends Component {
  render () {
    return (
      <div>
	<Layout>
	  <Fill>
	  auth.js
	    <CodePane
	      lang="js"
	      source={require("raw!../../assets/realworld-reducers-1.code")}
	    />
	    org.js
	    <CodePane
	      lang="js"
	      source={require("raw!../../assets/realworld-reducers-2.code")}
	    />
	  </Fill>
	</Layout>
      </div>
    );
  }
}
