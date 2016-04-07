import React, {Component} from 'react';
import {
  Heading,
  List,
  ListItem
} from "spectacle";

let listItemSize = "2rem";

export default class whyFlux extends Component {
  render () {
    return (
      <div>
        <Heading size={1} caps>
          Why Flux?
        </Heading>

        <List>
          <ListItem textSize={listItemSize}>To align with React's goal of having one channel for changes, data flow needs the same restriction</ListItem>
          <ListItem textSize={listItemSize}>Easy to debug data errors, as nothing can change the data in a store from the outside. Stores only change themselves in reaction to outside events</ListItem>
          <ListItem textSize={listItemSize}>As it is a pattern (such as MVC) rather than a library, it can be implemented for React, Angular2, etc</ListItem>
          <ListItem textSize={listItemSize}>Generally, implementations are very testable</ListItem>
          <ListItem textSize={listItemSize}>OTHER REASONS</ListItem>
        </List>
      </div>
    );
  }
}
