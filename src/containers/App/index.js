require('normalize.css/normalize.css');
require('../../styles/App.less');
require('../../../bower_components/font-awesome/css/font-awesome.min.css');

import React, {Component, PropTypes} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {Link} from 'react-router';
import Header from '../../components/Header';

// import Main from '../Main';

import * as TodoActions from '../../actions';

// let yeomanImage = require('../../images/yeoman.png');

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.strToJson = this.strToJson.bind(this)
  }
  componentDidMount() {
    // actions.doFetch();
    // actions.postMessage('start');
    const {actions} = this.props;
    // actions.connect();
    //
    setTimeout(function() {
      actions.connect();
    }, 500)
    setTimeout(function() {
      actions.postMessage('start!');
    }, 2000)

  }
  strToJson(str) {
    var json = (new Function('return ' + str))();
    return json;
  }
  render() {
    const {todos, actions, messages} = this.props;
    console.log(this.strToJson(messages.conversation))
    return (
      <div className="view">
        <Header actionTodo={actions} todos={todos}/> {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {todos: state.todos, messages: state.messages, isConnected: state.messages.status}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
