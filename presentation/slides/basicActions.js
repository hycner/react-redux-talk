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

export default class BasicActions extends Component {
  render () {
    return (
      <div>
				<Heading size={1} caps textColor="#0097cf">
					Actions
				</Heading>

				<Layout style={{marginTop: 40}}>
					<Fill>
						Actions are payloads of information that send data from your application to your store.<br />
						Actions are plain JavaScript objects.
						<CodePane
							lang="js"
							source={require("raw!../../assets/redux-basics-actions.code")}
							margin="20px auto"
						/>
					</Fill>
				</Layout>
      </div>
    );
  }
}
