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

export default class RealWorldComplexReducer extends Component {
  render () {
    return (
      <div>
	<Layout>
	  <Fill>
	  entities.js
	    <CodePane
	      lang="js"
	      source={require("raw!../../assets/realworld-reducers-complex.code")}
	    />
	  </Fill>
	</Layout>
      </div>
    );
  }
}
