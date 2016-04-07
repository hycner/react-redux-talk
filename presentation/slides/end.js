import React, {Component} from 'react';
import {
  Heading,
  Link
} from "spectacle";

export default class End extends Component {
  render () {
    return (
      <div>
        <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
          By <Link href="https://github.com/shantp">Shant</Link> & <Link href="https://hycner.com">James</Link>
        </Heading>
      </div>
    );
  }
}
