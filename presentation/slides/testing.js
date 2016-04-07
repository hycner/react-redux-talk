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

export default class Testing extends Component {
  render () {
    return (
      <div>
				<Heading size={1} caps>
					Testing Reducers
				</Heading>

				<CodePane
					lang="js"
					source={require("raw!../../assets/testing.code")}
					margin="20px auto"
				/>
      </div>
    );
  }
}
