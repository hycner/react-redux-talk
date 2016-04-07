import React, {Component} from 'react';
import {
  Heading
} from "spectacle";

export default class Title extends Component {
  render () {
    return (
      <div>
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          React & Redux
        </Heading>
        <Heading size={1} fit caps>
          The present of rendering & data flow
        </Heading>
      </div>
    );
  }
}
