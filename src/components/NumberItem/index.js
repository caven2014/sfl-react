import React, {Component} from 'react';
require('./index.less');
class NumberItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {numData, show} = this.props;
    let airTmpW = '',
      bearingTmpW = '',
      rotationSpeedW = '',
      accumulatedRevolutionsW = '',
      accelerationW = '',
      velocityRMSvW = '';
    if (numData.airTmp.currentValue > numData.airTmp.yellowWarning && numData.airTmp.currentValue < numData.airTmp.redWarning) {
      airTmpW = 'number-warning';
    } else if (numData.airTmp.currentValue > numData.airTmp.redWarning) {
      airTmpW = 'number-error';
    }
    if (numData.bearingTmp.currentValue > numData.bearingTmp.yellowWarning && numData.bearingTmp.currentValue < numData.bearingTmp.redWarning) {
      bearingTmpW = 'number-warning';
    } else if (numData.bearingTmp.currentValue > numData.bearingTmp.redWarning) {
      bearingTmpW = 'number-error';
    }
    if (numData.rotationSpeed.currentValue > numData.rotationSpeed.yellowWarning && numData.rotationSpeed.currentValue < numData.rotationSpeed.redWarning) {
      rotationSpeedW = 'number-warning';
    } else if (numData.rotationSpeed.currentValue > numData.rotationSpeed.redWarning) {
      rotationSpeedW = 'number-error';
    }
    if (numData.accumulatedRevolutions.currentValue > numData.accumulatedRevolutions.yellowWarning && numData.accumulatedRevolutions.currentValue < numData.accumulatedRevolutions.redWarning) {
      accumulatedRevolutionsW = 'number-warning';
    } else if (numData.accumulatedRevolutions.currentValue > numData.accumulatedRevolutions.redWarning) {
      accumulatedRevolutionsW = 'number-error';
    }
    if (numData.acceleration.currentValue > numData.acceleration.yellowWarning && numData.acceleration.currentValue < numData.acceleration.redWarning) {
      accelerationW = 'number-warning';
    } else if (numData.acceleration.currentValue > numData.acceleration.redWarning) {
      accelerationW = 'number-error';
    }
    if (numData.velocityRMSv.currentValue > numData.velocityRMSv.yellowWarning && numData.velocityRMSv.currentValue < numData.velocityRMSv.redWarning) {
      velocityRMSvW = 'number-warning';
    } else if (numData.velocityRMSv.currentValue > numData.velocityRMSv.redWarning) {
      velocityRMSvW = 'number-error';
    }

    return (
      <div className={show? 'tab-content-inner active': 'tab-content-inner'}>
        <h3 className='tab-item-title'>
          Bearing {numData.name}
        </h3>
        <div className='sfl-numbers-item clearfix'>
          <div className={'sfl-number ' + airTmpW}>
            <span>Air Temp.</span>
            <div className='number-wrapper'>
              {numData.airTmp.currentValue}
              <i className='ico-right-top'>&#8451;</i>
            </div>
          </div>

          <div className={'sfl-number ' + bearingTmpW}>
            <span>Bearing Temp.</span>
            <div className='number-wrapper'>
              {numData.bearingTmp.currentValue}<i className='ico-right-top'>&#8451;</i>
            </div>
          </div>
          <div className={'sfl-number ' + rotationSpeedW}>
            <span>Rotation Speed</span>
            <div className='number-wrapper'>
              {numData.rotationSpeed.currentValue}<i className='ico-right-top'>rpm</i>
            </div>
          </div>
          <div className={'sfl-number ' + accumulatedRevolutionsW}>
            <span >Accumulated Revolutions</span>
            <div className='number-wrapper'>
              {numData.accumulatedRevolutions.currentValue}<i className='ico-right-top'>rev</i>
            </div>
          </div>

          <div className={'sfl-number ' + accelerationW}>
            <span>Acceleration</span>
            <div className='number-wrapper'>
              {numData.acceleration.currentValue}<i className='ico-right-top'>g</i>
            </div>
          </div>
          <div className={'sfl-number ' + velocityRMSvW}>
            <span>Velocity RMS.</span>
            <div className='number-wrapper'>
              {numData.velocityRMSv.currentValue}<i className='ico-right-top'>mm/s</i>
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default NumberItem;
