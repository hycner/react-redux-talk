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

export default class BasicFlow extends Component {
  render () {
    return (
      <div>
        <Heading size={1} caps>
          The Basic Flow
        </Heading>

        <Layout style={{marginTop: 40}}>
          <Fill>
            <List>
	            <ListItem textSize={listItemSize}>1. A store holding an application's immutable state.</ListItem>
              <ListItem textSize={listItemSize}>2. The state is rendered to components.</ListItem>
            </List>
            <CodePane
              lang="js"
              source={require("raw!../../assets/redux-basics-1.code")}
              margin="20px auto"
            />
            <List>
              <ListItem textSize={listItemSize}>3. Components can dispatch actions to the store.</ListItem>
              <ListItem textSize={listItemSize}>4. The state is changed using reducers which are simple pure functions.</ListItem>
            </List>
            <CodePane
              lang="js"
              source={require("raw!../../assets/redux-basics-2.code")}
              margin="20px auto"
            />
            <List>
              <ListItem textSize={listItemSize}>5. Back to step 1.</ListItem>
            </List>
          </Fill>
        </Layout>
      </div>
    );
  }
}
