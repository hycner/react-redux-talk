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

export default class ImmutableJs extends Component {
  render () {
    return (
      <div>
				<Heading size={1} caps>
					Immutable.js
				</Heading>

				Library that adds immutable data structures to Javascript.<br/>
				Allows memory conservation via structural sharing.

				<Layout style={{marginTop: 40}}>
					<Fill style={{paddingRight:5}}>
						Use in a reducer:
						<CodePane
								lang="js"
								source={require("raw!../../assets/immutableJs-reducer.code")}
								margin="20px auto"
						/>
					</Fill>

					<Fill style={{paddingRight:5}}>
						Preventing unnecessary re-rendering:
						<CodePane
								lang="js"
								source={require("raw!../../assets/immutableJs-update.code")}
								margin="20px auto"
						/>
					</Fill>
				</Layout>
      </div>
    );
  }
}
