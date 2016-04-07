import React, {Component} from 'react';
import {
  BlockQuote,
	Cite,
	Heading,
	Quote
} from "spectacle";

export default class Opposition extends Component {
  render () {
    return (
      <div>
				<Heading size={1} caps textColor="secondary" style={{marginBottom: 40}}>
					Opposition
				</Heading>

				<BlockQuote>
					<Quote textSize="3.8rem">React’s community claims that React uses functional techniques heavily, however that is not true in practice. OOP, classes, callbacks, and "this" are commonplace, as well as imperative method calls such as dispatch(), setState(), etc.</Quote>
					<Cite textColor="secondary">André Staltz</Cite>
				</BlockQuote>
      </div>
    );
  }
}
