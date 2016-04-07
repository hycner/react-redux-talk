import React, {Component} from 'react';
import {
  CodePane
} from "spectacle";

export default class RealWorldThunk extends Component {
  render () {
    return (
      <div>
        <CodePane
          lang="js"
          source={require("raw!../../assets/realworld-thunk.code")}
        />
      </div>
    );
  }
}
