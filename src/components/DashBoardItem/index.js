import React, {Component} from 'react';
require('./index.less');
import ReactEcharts from 'echarts-for-react';

class DashBoardItem extends Component {
  constructor() {
    super();
  }

  render() {
    const {option, name} = this.props;
    return (
      <div className="sfl-dashboard-item">
        <span className="dashboard-title">
            {name}
        </span>
        <h3 className="tab-item-title">{name}</h3>
        <div className="dashboard-item-inner">
          <ReactEcharts option={option} style={{
            height: '100%',
            width: '100%'
          }} className='react_for_echarts'/>
        </div>
      </div>
    )
  }
}

export default DashBoardItem;
