import React, {Component} from 'react';
require('./index.less');
// import {Link} from 'react-router';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TodoActions from '../../actions';


import 'zepto';
import BearingItem from '../../components/BearingItem';

const bearingA = require('../../images/sfl_bearing_1.png');
const bearingB = require('../../images/sfl_bearing_2.png');
class Bearing extends Component {
  constructor() {
    super();
  }
  strToJson(str) {
    var json = (new Function('return ' + str))();
    return json;
  }
  render() {
    const {messages} = this.props;

    var msgObj = messages.conversation;
    var jsonData = this.strToJson(msgObj);
    let waringCode1 ={
      'roller': 0,
      'innerRing': 0,
      'outerRing': 0
    }, waringCode2 = {
      'roller': 0,
      'innerRing': 0,
      'outerRing': 0
    },
    bearingInfo1 = {
      Rollor: 'Rollor1',
      InnerRing: 'Inner Ring',
      OuterRing: 'Outer Ring',
      Cage: 'Cage'
    },
    bearingInfo2 = {
      Rollor: 'Rollor',
      InnerRing: 'Inner Ring',
      OuterRing: 'Outer Ring',
      Cage: 'Cage'
    }

    // console.log(msg.message)

    if(jsonData) {
      waringCode1 = jsonData[3].data[0];
      waringCode2 = jsonData[3].data[1];
    }

    return (
      <div className="sfl-bearing">
        <div className="numbers-tabs">
          <a className="numbers-tab active" href="javascript:;">{waringCode1.name || 'A'}</a>
          <a className="numbers-tab" href="javascript:;">{waringCode2.name || 'B'}</a>
        </div>
        <div className="tab-content">
          <BearingItem show={true} bearingPic={bearingA} bearId="bearA" bearingName={waringCode1.name} bearType="warning" bearingInfo={bearingInfo1} warningCode={waringCode1}/>
          <BearingItem show={false} bearingPic={bearingB} bearId="bearB" bearingName={waringCode2.name} bearType="warning" bearingInfo={bearingInfo2} warningCode={waringCode2}/>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {todos: state.todos, messages: state.messages, isConnected: state.messages.status}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bearing);
