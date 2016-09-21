import React, {Component} from 'react';
require('./index.less');
// import {Link} from 'react-router';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TodoActions from '../../actions';


import BearingItem from '../../components/BearingItem';

const bearingA = require('../../images/sfl_bearing_1.png');
const bearingB = require('../../images/sfl_bearing_2.png');
class AdvancedInfo extends Component {
  constructor() {
    super();
    this.strToJson = this.strToJson.bind(this);
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
      Rollor: 123,
      InnerRing: 321,
      OuterRing: 4123,
      Cage: 1321
    },
    bearingInfo2 = {
      Rollor: 312,
      InnerRing: 123,
      OuterRing: 1232,
      Cage: 343
    }

    if(jsonData) {
      waringCode1 = jsonData[3].data[0];
      waringCode2 = jsonData[3].data[1];

    }
    return (
      <div className="sfl-bearing">
        <div className="numbers-tabs">
          <a className="numbers-tab active" href="javascript:;">A</a>
          <a className="numbers-tab" href="javascript:;">B</a>
        </div>
        <div className="tab-content">
          <BearingItem show={true} bearingPic={bearingA} bearId="bearA" bearingName={waringCode1.name} bearingInfo={bearingInfo1} bearType="advanced" warningCode={waringCode1}/>
          <BearingItem show={false} bearingPic={bearingB} bearId="bearB" bearingName={waringCode2.name} bearingInfo={bearingInfo2} bearType="advanced" warningCode={waringCode2}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedInfo);
