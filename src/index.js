import 'core-js/fn/object/assign';
import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';

import WSInstance from './utils/ChatWebsocket.js';
import * as ChatActions from './actions';
import * as ActionTypes from './constants/ActionTypes';

import config from './config';

import App from './containers/App';
import Numbers from './containers/Numbers';
import DashBoard from './containers/DashBoard';
import Lines from './containers/Lines';
import Bearing from './containers/Bearing';
import AdvancedInfo from './containers/AdvancedInfo';
import Introduction from './containers/Introduction';

const store = configureStore();
// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={DashBoard}/>
      <Route path="numbers" component={Numbers}/>
      <Route path="lines" component={Lines}/>
      <Route path="bearing" component={Bearing}/>
      <Route path="advancedinfo" component={AdvancedInfo}/>
      <Route path="introduction" component={Introduction}/>

    </Route>
  </Router>
</Provider>, document.getElementById('app'));

const URL = config.socketUrl;

const sock = {
  ws: null,
  URL: URL,
  wsDipatcher: (msg) => {
    return store.dispatch(ChatActions.receiveMessage(msg));
  },
  wsListener: () => {
    const {lastAction} = store.getState();

    switch (lastAction.type) {
      case ActionTypes.POST_MESSAGE:
        return sock.ws.postMessage(lastAction.text);

      case ActionTypes.CONNECT:
        return sock.startWS();

      case ActionTypes.DISCONNECT:
        return sock.stopWS();

      default:
        return;
    }
  },
  stopWS: () => {
    sock.ws.close();
    sock.ws = null
  },
  startWS: () => {
    if (!!sock.ws)
      sock.ws.close();
    sock.ws = new WSInstance(sock.URL, sock.wsDipatcher)
  }
};

store.subscribe(() => sock.wsListener());
