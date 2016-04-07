import React, {Component} from 'react';
import {
  Heading,
  List,
  ListItem
} from "spectacle";

let listItemSize = "2rem";

export default class whyReact extends Component {
  render () {
    return (
      <div>
        <Heading size={1} caps>
          Why React?
        </Heading>

        <List>
          <ListItem textSize={listItemSize}>Get away from multiple channels of interacting with the DOM (a la jQuery)</ListItem>
          <ListItem textSize={listItemSize}>Component model drives composition and re-use as core development pattern</ListItem>
          <ListItem textSize={listItemSize}>Encourages functional programming styles, and immutable data handling</ListItem>
          <ListItem textSize={listItemSize}>Instead of pairing closer with the DOM (a la angular.js), React moves a step away. This allows other render targets, such as SVG, webGL, iOS, Android, terminal, etc</ListItem>
          <ListItem textSize={listItemSize}>OTHER REASONS</ListItem>
        </List>
      </div>
    );
  }
}
