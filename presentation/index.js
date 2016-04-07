import React, {Component} from "react";

import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#0097cf",
  gray: "#bebdbf",
  apple: "#1aaf5d"
});

import BasicFlow from './slides/basicFlow';
import BasicActions from './slides/basicActions';
import BasicActionCreators from './slides/basicActionCreators';
import BasicReducers from './slides/basicReducers';
import End from './slides/end';
import FluxStandardAction from './slides/fluxStandardAction';
import ImmutableJs from './slides/immutableJs';
import Links from './slides/links';
import Opposition from './slides/opposition';
import ReactRedux from './slides/reactRedux.js';
import ReactReduxConnect from './slides/reactReduxConnect.js';
import RealWorldCombineReducers from './slides/realWorldCombineReducers';
import RealWorldComplexReducer from './slides/realWorldComplexReducer';
import RealWorldPromise from './slides/realWorldPromise';
import RealWorldThunk from './slides/realWorldThunk';
import RealWorldReducers from './slides/realWorldReducers';
import ReduxPromiseMiddleware from './slides/reduxPromiseMiddleware';
import ReduxSaga from './slides/reduxSaga';
import ReduxThunk from './slides/reduxThunk';
import StructureFlux from './slides/structureFlux';
import StructureRedux from './slides/structureRedux';
import Testing from './slides/testing';
import Title from './slides/title';
import WhyFlux from './slides/whyFlux';
import WhyReact from './slides/whyReact';
import WhyReactQuote from './slides/whyReactQuote';

let notes = {
  opposition: (
    <ul>
      <li>Some people prefer a more pure functional style via Cycle.js or Elm</li>
      <li>Redux is critiqued for requiring a lot of glue code, and punting on a lot of answers (async actions)</li>
    </ul>
  ),
  structureFlux: (
    <ul>
      <li><strong>Multiple Stores:</strong> manages state</li>
      <li><strong>View:</strong> a hierarchical composition of React components</li>
      <li><strong>Actions:</strong> events created from user events that triggered in the View</li>
      <li><strong>Dispatcher:</strong> an event bus for all actions</li>
    </ul>
  ),
  structureRedux: (
    <ul>
      <li><strong>Singleton Store:</strong> manages state and has a dispatch(action) function</li>
      <li><strong>View Provider:</strong> a subscriber to the Store which interfaces with some "View" framework like React or Angular</li>
      <li><strong>Actions:</strong> SAME AS BEFORE - events created from user events that are triggered in the View Provider</li>
      <li><strong>Middleware:</strong> mechanisms of overriding the dispatch() function of a store with additional chained functionality</li>
      <li><strong>Reducers:</strong> pure functions that create new state from the previous state and an action</li>
    </ul>
  )
};

export default class Presentation extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Title /> {/* Title slide for talk */}
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <WhyReact /> {/* Describe why React is good */}
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <WhyReactQuote /> {/* Describe why React is good */}
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <WhyFlux /> {/* Describe why Flux is good */}
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes={notes.structureFlux}>
            <StructureFlux /> {/* Overview of the structure of Flux */}
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes={notes.structureRedux}>
            <StructureRedux /> {/* Overview of the structure of Redux */}
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <BasicFlow /> {/* Basic flow of Redux */}
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <BasicActions /> {/* What actions are */}
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary" notes="FSA is a way of styling your actions to try and gain simplicity and consistency.">
            <FluxStandardAction /> {/* Using FSA for action data structure consistency */}
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <BasicActionCreators /> {/* What action creators are */}
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <ReduxThunk /> {/* Using redux-thunk to handle async actions */}
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <RealWorldThunk /> {/* Use of redux-thunk */}
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <ReduxPromiseMiddleware /> {/* Using redux-promise-middleware to handle async actions */}
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <RealWorldPromise /> {/* Use of promise middleware */}
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <ReduxSaga /> {/* Using redux-saga to handle async actions */}
          </Slide>

          <Slide transition={["slide"]} bgColor="apple">
            <BasicReducers /> {/* What reducers are */}
          </Slide>

          <Slide transition={["slide"]} bgColor="apple">
            <RealWorldReducers /> {/* Example of a reducer */}
          </Slide>

          <Slide transition={["slide"]} bgColor="apple">
            <RealWorldComplexReducer /> {/* description */}
          </Slide>

          <Slide transition={["slide"]} bgColor="apple">
            <ImmutableJs /> {/* Example reducer using Immutable.js for its store */}
          </Slide>

          <Slide transition={["slide"]} bgColor="apple">
            <RealWorldCombineReducers /> {/* Example of combining reducers */}
          </Slide>

          <Slide transition={["slide"]} bgColor="gray">
            <ReactRedux /> {/* Show how Redux connects to React */}
          </Slide>

          <Slide transition={["slide"]} bgColor="gray">
      	    <ReactReduxConnect /> {/* Example of Connect */}
      	  </Slide>

          <Slide transition={["slide"]} bgColor="gray">
            <Testing /> {/* Demo showing how to test a reducer */}
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary" notes={notes.opposition}>
            <Opposition /> {/* Go over opposition to React/Redux */}
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <Links /> {/* Links to all of the tools */}
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <End /> {/* Final slide with our names */}
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
