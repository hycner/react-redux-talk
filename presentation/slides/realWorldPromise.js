import React, {Component} from 'react';
import {
  CodePane
} from "spectacle";

export default class RealWorldPromise extends Component {
  render () {
    return (
      <div>
        <CodePane
          lang="js"
          source={require("raw!../../assets/realworld-promise.code")}
        />
      </div>
    );
  }
}
