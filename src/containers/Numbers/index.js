import React, {Component} from 'react';
require('./index.less');
import {Link} from 'react-router';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TodoActions from '../../actions';

import NumberItem from '../../components/NumberItem';

class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numData: [
        {
          id: 1,
          name: 'A',
          airTmp: {
            currentValue: 0,
            redWarning: 0,
            yellowWarning: 0
          },
          bearingTmp: {
            currentValue: 0,
            redWarning: 0,
            yellowWarning: 0
          },
          rotationSpeed: {
            currentValue: 0,
            redWarning: 0,
            yellowWarning: 0
          },
          accumulatedRevolutions: {
            currentValue: 0,
            redWarning: 0,
            yellowWarning: 0
          },
          acceleration: {
            currentValue: 0,
            redWarning: 0,
            yellowWarning: 0
          },
          velocityRMSv: {
            currentValue: 0,
            redWarning: 0,
            yellowWarning: 0
          }
        }, {
          id: 1,
          name: 'A',
          airTmp: {
            currentValue: 0,
            redWarning: 0,
            yellowWarning: 0
          },
          bearingTmp: {
            currentValue: 0,
            redWarning: 0,
            yellowWarning: 0
          },
          rotationSpeed: {
            currentValue: 0,
            redWarning: 0,
            yellowWarning: 0
          },
          accumulatedRevolutions: {
            currentValue: 0,
            redWarning: 0,
            yellowWarning: 0
          },
          acceleration: {
            currentValue: 0,
            redWarning: 0,
            yellowWarning: 0
          },
          velocityRMSv: {
            currentValue: 0,
            redWarning: 0,
            yellowWarning: 0
          }
        }
      ]
    }
    this.strToJson = this.strToJson.bind(this)
    this.num2e = this.num2e.bind(this)
  }


  strToJson(str) {
    let json = (new Function('return ' + str))();
    return json;
  }

  num2e(num) {
    // console.log(num)
    let p = Math.floor(Math.log(num) / Math.LN10);
    let n = num * Math.pow(10, -p);
    return n.toFixed(1) + 'e' + p;
  }

  warningFn(showWarning) {
    if (showWarning) {
      return (
        <div className="sfl-warning-wrapper">
          <Link className="dashboard-title warning-entry flash animated infinite" to="/bearing">
            Bearing Failure
          </Link>
        </div>
      )
    }
  }
  componentDidMount() {
    $(".numbers-tabs").on('click', '.numbers-tab', function() {
      var $elm = $(this);
      $elm.addClass('active').siblings().removeClass('active');
      $('.tab-content-inner').removeClass('active').eq($elm.index()).addClass('active');
    })
  }

  render() {
    // let _self = this;
    // const {numData} = this.state;
    const {messages} = this.props;

    // this.strToJson(messages.conversation)
    let msgObj = messages.conversation;
    let jsonData = this.strToJson(msgObj);
    let showWarning = false;
    // console.log(jsonData)
    let numData1 = this.state.numData;
    if (jsonData) {
      let dashboardList = jsonData[2].data;
      let warningList = jsonData[3].data;
      if (warningList[0].roller === 1 || warningList[0].innerRing === 1 || warningList[0].outerRing === 1 || warningList[1].roller === 1 || warningList[1].innerRing === 1 || warningList[1].outerRing === 1) {
        showWarning = true
      }
      numData1 = []
      for (let i = 0; i < dashboardList.length; i++) {
        let item = dashboardList[i];

        let airTmp = parseFloat(item.amibent.currentValue).toFixed(1)
        let bearingTmp = parseFloat(item.bearingTemp.currentValue).toFixed(1)
        let rotationSpeed = parseFloat(item.rotationSpeed.currentValue).toFixed(1)
        let accumulatedRevolutions = parseFloat(item.acceleration.currentValue) > 1000
          ? this.num2e(parseFloat(item.acceleration.currentValue))
          : parseFloat(item.acceleration.currentValue).toFixed(1)
        let acceleration = parseFloat(item.accumulated.currentValue) > 1000
          ? this.num2e(parseFloat(item.accumulated.currentValue))
          : parseFloat(item.accumulated.currentValue).toFixed(1)
        let velocityRMSv = parseFloat(item.velocity.currentValue).toFixed(1)

        let dashItem = {
          name: item.name,
          airTmp: {
            currentValue: airTmp,
            redWarning: parseFloat(item.amibent.redWarning),
            yellowWarning: parseFloat(item.amibent.yellowWarning)
          },
          bearingTmp: {
            currentValue: bearingTmp,
            redWarning: parseFloat(item.bearingTemp.redWarning),
            yellowWarning: parseFloat(item.bearingTemp.yellowWarning)
          },
          rotationSpeed: {
            currentValue: rotationSpeed,
            redWarning: parseFloat(item.rotationSpeed.redWarning),
            yellowWarning: parseFloat(item.rotationSpeed.yellowWarning)
          },
          accumulatedRevolutions: {
            currentValue: accumulatedRevolutions,
            redWarning: parseFloat(item.acceleration.redWarning),
            yellowWarning: parseFloat(item.acceleration.yellowWarning)
          },
          acceleration: {
            currentValue: acceleration,
            redWarning: parseFloat(item.accumulated.redWarning),
            yellowWarning: parseFloat(item.accumulated.yellowWarning)
          },
          velocityRMSv: {
            currentValue: velocityRMSv,
            redWarning: parseFloat(item.velocity.redWarning),
            yellowWarning: parseFloat(item.velocity.yellowWarning)
          }
        }
        numData1.push(dashItem)
      }
    }
    return (
      <div className="sfl-numbers clear-fix">
        <div className="numbers-tabs">
          <a className="numbers-tab active" href="javascript:;">{numData1[0].name}</a>
          <a className="numbers-tab" href="javascript:;">{numData1[1].name}</a>
        </div>
        <div className="tab-content">
          {this.warningFn(showWarning)}
          <Link to="/lines">
            <NumberItem show={true} numData={numData1[0]}/>
          </Link>
          <Link to="/lines">
            <NumberItem show={false} numData={numData1[1]}/>
          </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Numbers);
