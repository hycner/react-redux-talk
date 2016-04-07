import React, {Component} from 'react';
import {
  CodePane,
  Fill,
  Heading,
  List,
  ListItem,
  Layout
} from "spectacle";

let listItemSize = "1.7rem";

export default class FluxStandardAction extends Component {
  render () {
    return (
      <div>
        <Heading size={1} fit caps textColor="#0097cf">
          Flux Standard Action
        </Heading>

        <Layout>
          <Fill style={{paddingRight:5}}>
            A basic Flux Standard Action:
            <CodePane
              lang="js"
              source={require("raw!../../assets/fluxStandardAction-standard.code")}
              margin="20px auto"
            />
          </Fill>

          <Fill style={{paddingLeft:5}}>
            An FSA that represents an error:
            <CodePane
              lang="js"
              source={require("raw!../../assets/fluxStandardAction-error.code")}
              margin="20px auto"
            />
          </Fill>
        </Layout>

        <Layout>
          <Fill>
            An action MUST
            <List>
              <ListItem textSize={listItemSize}>be a plain JavaScript object.</ListItem>
              <ListItem textSize={listItemSize}>have a <strong>type</strong> property.</ListItem>
            </List>
          </Fill>

          <Fill>
            An action MAY
            <List>
              <ListItem textSize={listItemSize}>have a <strong>error</strong> property.</ListItem>
              <ListItem textSize={listItemSize}>have a <strong>payload</strong> property.</ListItem>
              <ListItem textSize={listItemSize}>have a <strong>meta</strong> property.</ListItem>
            </List>
          </Fill>
        </Layout>

        An action MUST NOT include properties other than <strong>type</strong>, <strong>payload</strong>, <strong>error</strong>, and <strong>meta</strong>.
      </div>
    );
  }
}
