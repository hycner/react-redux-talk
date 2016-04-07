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

export default class BasicActionCreators extends Component {
  render () {
    return (
      <div>
				<Heading size={1} caps textColor="#0097cf">
					Action Creators
				</Heading>

				<Layout style={{marginTop: 40}}>
					<Fill>
						Action creators are functions that create actions.<br /> In Redux, action creators simply return an action.
						<CodePane
							lang="js"
							source={require("raw!../../assets/redux-basics-actioncreator.code")}
							margin="20px auto"
						/>
						Action creators are passed to <strong>dispatch()</strong> to initiate the action.
					</Fill>
				</Layout>
      </div>
    );
  }
}
