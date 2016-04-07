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

export default class RealWorldCombineReducers extends Component {
  render () {
    return (
      <div>
      <Heading size={1} fit caps>
	Combine Reducers
      </Heading>
	<Layout>
	  <Fill>
	    index.js
	    <CodePane
	      lang="js"
	      source={require("raw!../../assets/combine-reducers.code")}
	    />
	  </Fill>
	</Layout>
      </div>
    );
  }
}
