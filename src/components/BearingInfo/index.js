import React, {Component} from 'react';
require('./index.less');
// import {Link} from 'react-router';
// import _ from 'lodash';

class BearingInfo extends Component {
  constructor() {
    super();
  }
  render() {
    const {warningCode, bearingInfo} = this.props;
    console.info(warningCode)
    let isRoller = '',
        isOuterRing = '',
        isInnerRing = '',
        isCage = '';
    if(warningCode.innerRing === 1) {
      isInnerRing = 'status-warning'
    }
    if(warningCode.outerRing === 1) {
      isOuterRing = 'status-warning'
    }
    if(warningCode.roller === 1) {
      isRoller = 'status-warning'
    }
    return(
      <div className='bearing-status'>
          <ul className='status-header clearfix'>
              <li>Status</li>
              <li>Position</li>
          </ul>
          <ul className='status-info'>
              <li className={'clearfix '+isRoller}>
                  <div>
                      <span className='status-circle'></span>
                  </div>
                  <div className='status-txt'>
                      {bearingInfo.Rollor}
                  </div>
              </li>
              <li className={'clearfix '+isInnerRing}>
                  <div>
                      <span className='status-circle'></span>
                  </div>
                  <div className='status-txt'>
                      {bearingInfo.InnerRing}
                  </div>
              </li>
              <li className={'clearfix '+isOuterRing}>
                  <div>
                      <span className='status-circle'></span>
                  </div>
                  <div className='status-txt'>
                      {bearingInfo.OuterRing}
                  </div>
              </li>
              <li className={'clearfix '+isCage}>
                  <div>
                      <span className='status-circle'></span>
                  </div>
                  <div className='status-txt'>
                      {bearingInfo.Cage}
                  </div>
              </li>
          </ul>
      </div>

    )
  }
}

export default BearingInfo;
