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

let listItemSize = "1.7rem";

export default class BasicReducers extends Component {
  render () {
    return (
      <div>
	<Heading size={1} caps>
	Reducers
	</Heading>

	<Layout style={{marginTop: 40}}>
	  <Fill>
	  Reducers specify how the application’s state changes in response to an action.
	    <CodePane
	      lang="js"
	      source={require("raw!../../assets/redux-basics-reducers.code")}
	      margin="20px auto"
	      />
	    Reducers must be pure. Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations.
	  </Fill>
	</Layout>
      </div>
    );
  }
}
