import React, {Component} from 'react';
require('./index.less');
import ReactEcharts from 'echarts-for-react';
import 'zepto';
class LineItem extends Component {
  constructor() {
    super();
  }
  render() {
    const {option, bearingName, show} = this.props;
    return(
      <div className={show? 'line-item active': 'line-item'}>
      <h3 className="tab-item-title">
        Bearing {bearingName}
      </h3>
        <ReactEcharts option={option} style={{
          height: '100%',
          width: '100%'
        }} className='react_for_echarts'/>

      </div>
    )
  }
}

export default LineItem;
