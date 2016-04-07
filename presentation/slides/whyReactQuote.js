import React, {Component} from 'react';
import {
  BlockQuote,
	Cite,
	Quote
} from "spectacle";

export default class WhyReactQuote extends Component {
  render () {
    return (
      <div>
				<BlockQuote style={{marginBottom: 50}}>
					<Quote textSize="3.8rem" textColor="secondary">It's a misconception that React needs the virtual DOM for performance. It's foremost an immutable shim over an inherently mutable DOM API.</Quote>
					<Cite textColor="tertiary">Sebastian Markbåge</Cite>
				</BlockQuote>

				React is a functional and reactive user interface API that was made to wrap a mutable stateful user interface API.<br/>
				<br/>
				The Virtual DOM's API wraps the DOM’s API.
      </div>
    );
  }
}
