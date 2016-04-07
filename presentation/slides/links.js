import React, {Component} from 'react';
import {
  Fill,
  Heading,
  Layout,
  Link,
  Text
} from "spectacle";

export default class Links extends Component {
  render () {
    return (
      <div>
        <Heading size={1} caps textColor="secondary">
          Links
        </Heading>

        <Layout>
          <Fill>
            <Text bold textColor="primary" style={{marginTop: 20}}>Action Structure</Text>
            <Link href="https://github.com/acdlite/flux-standard-action">Flux Standard Action</Link><br />

            <Text bold textColor="primary" style={{marginTop: 20}}>Async Action Middleware</Text>
            <Link href="https://github.com/gaearon/redux-thunk">Redux Thunk</Link><br />
            <Link href="https://github.com/pburtchaell/redux-promise-middleware">Redux Promise Middleware</Link><br />
            <Link href="https://github.com/yelouafi/redux-saga">Redux Saga</Link><br />
            <Link href="https://github.com/fcomb/redux-logger">Redux Logger</Link><br />
          </Fill>

          <Fill>
            <Text bold textColor="primary" style={{marginTop: 20}}>Routing</Text>
            <Link href="https://github.com/acdlite/redux-router">Redux Router</Link><br />
            <Link href="https://github.com/rackt/redux-simple-router">Redux Simple Router</Link><br />

            <Text bold textColor="primary" style={{marginTop: 20}}>Optimizing</Text>
            <Link href="https://github.com/facebook/immutable-js">Immutable.js</Link><br />
            <Link href="https://github.com/rackt/reselect">Reselect</Link><br />

            <Text bold textColor="primary" style={{marginTop: 20}}>Dev Tools</Text>
            <Link href="https://github.com/gaearon/redux-devtools">Redux Devtools</Link><br />
          </Fill>
        </Layout>
      </div>
    );
  }
}
