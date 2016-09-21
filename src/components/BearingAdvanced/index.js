import React, {Component} from 'react';
require('./index.less');

class BearingAdvanced extends Component {
  constructor() {
    super();
  }
  render() {
    const {warningCode, bearingInfo} = this.props;
    // console.info(warningCode)
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
            <li>Position</li>
            <li>Frequency</li>
          </ul>
          <ul className='status-info'>
              <li className={'clearfix '+isRoller}>
                  <div className='status-txt'>
                      Rollor
                  </div>
                  <div className='status-txt'>
                      {bearingInfo.Rollor}Hz
                  </div>
              </li>
              <li className={'clearfix '+isCage}>
                <div className='status-txt'>
                    Cage
                </div>
                <div className='status-txt'>
                    {bearingInfo.Cage}Hz
                </div>
              </li>
              <li className={'clearfix '+isInnerRing}>
                <div className='status-txt'>
                    Inner Ring
                </div>
                <div className='status-txt'>
                    {bearingInfo.InnerRing}Hz
                </div>
              </li>
              <li className={'clearfix '+isOuterRing}>
                <div className='status-txt'>
                    Outer Ring
                </div>
                <div className='status-txt'>
                    {bearingInfo.OuterRing}Hz
                </div>
              </li>
          </ul>
      </div>

    )
  }
}

export default BearingAdvanced;
