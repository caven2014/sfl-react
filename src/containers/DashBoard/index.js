require('./index.less');
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as TodoActions from '../../actions';

import DashBoardItem from '../../components/DashBoardItem';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: this.getOption()
    }
    this.getOption = this.getOption.bind(this);
    this.strToJson = this.strToJson.bind(this)
    this.num2e = this.num2e.bind(this)
  }

  getOption() {
    const option = {
      baseOption: {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        grid: {
          bottom: 0,
          top: 0
        },
        series: [
          {
            name: '速度',
            type: 'gauge',
            center: [
              '25%', '25%'
            ],

            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '50%',
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                width: 4,
                color: [
                  [
                    0.7, '#0EF1B6'
                  ],
                  [
                    0.9, '#FFD035'
                  ],
                  [1, '#F1515F']
                ]
              }
            },
            itemStyle: {
              normal: {}
            },
            axisTick: { // 坐标轴小标记
              length: 6, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            splitLine: { // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            title: {
              show: true,
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 16,
                color: '#ccc'
                // fontStyle: 'italic'
              },
              offsetCenter: ['0%', '110%']
            },
            pointer: { //指针
              width: 3,
              length: '60%'
            },
            detail: {
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 30,
                color: '#fff'

              },
              formatter: '{value}%',
              offsetCenter: ['0%', '160%']
            },
            data: [
              {
                value: 0,
                name: 'Rest Life(rev)'
              }
            ]
          }, {
            name: '速度',
            type: 'gauge',
            center: [
              '75%', '25%'
            ],

            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '50%',
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                width: 4,
                color: [
                  [
                    0.7, '#0EF1B6'
                  ],
                  [
                    0.9, '#FFD035'
                  ],
                  [1, '#F1515F']
                ]
              }
            },
            itemStyle: {
              normal: {}
            },
            axisTick: { // 坐标轴小标记
              length: 6, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            splitLine: { // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            title: {
              show: true,
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 16,
                color: '#ccc'
                // fontStyle: 'italic'
              },
              offsetCenter: ['0%', '110%']

            },
            pointer: { //指针
              width: 3,
              length: '60%'
            },
            detail: {
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 30,
                color: '#fff'

              },
              formatter: '{value}km',
              offsetCenter: ['0%', '160%']
            },
            data: [
              {
                value: 0,
                name: 'Rest Life(km)'
              }
            ]
          }
        ],
        media: [
          {
            query: {
              minAspectRatio: 1
            },
            option: {
              grid: {
                // height: '100%'
              }
            }
          }, {
            option: {
              legend: {
                right: 'center',
                bottom: 0,
                orient: 'horizontal'
              },
              series: [
                {
                  radius: [
                    20, '50%'
                  ],
                  center: ['25%', '50%']
                }, {
                  radius: [
                    30, '50%'
                  ],
                  center: ['75%', '50%']
                }
              ]
            }
          }
        ]
      }
    }
    return option;
  }

  strToJson(str) {
    var json = (new Function('return ' + str))();
    return json;
  }
  num2e(num){
    // console.log(num)
    var p = Math.floor(Math.log(num)/Math.LN10);
    var n = num * Math.pow(10, -p);
    return n.toFixed(1) + 'e' + p;
  }

  render() {
    // let _self = this;
    const {messages} = this.props;
    // this.strToJson(messages.conversation)
    var msgObj = messages.conversation;
    var jsonData = this.strToJson(msgObj);
    // console.log(jsonData)
    // console.log(JSON.parse(msgObj));

    // let  messages.conversation
    let option1 = this.getOption();
    let option2 = this.getOption();
    let bearName1,
      bearName2;


    if (jsonData) {
      // console.info(jsonData[0].data[0].rlKm.redWarning / jsonData[0].data[0].rlKm.totalKm)
      bearName1 = jsonData[0].data[0].name
      bearName2 = jsonData[0].data[1].name

      option1.baseOption.series[0].data[0].value = 100;
      option1.baseOption.series[1].data[0].value = jsonData[0].data[0].rlKm.remainValue;
      option2.baseOption.series[0].data[0].value = 100;
      option2.baseOption.series[1].data[0].value = jsonData[0].data[1].rlKm.remainValue;

      //设置临界值
      option1.baseOption.series[0].axisLine.lineStyle.color = [
        [
          jsonData[0].data[0].rl.yellowWarning / 100,
          '#0EF1B6'
        ],
        [
          jsonData[0].data[0].rl.redWarning / 100,
          '#FFD035'
        ],
        [1, '#F1515F']
      ]
      option1.baseOption.series[1].max = this.num2e(jsonData[0].data[0].rlKm.totalKm)
      option1.baseOption.series[1].axisLine.lineStyle.color = [
        [
          jsonData[0].data[0].rlKm.yellowWarning / jsonData[0].data[0].rlKm.totalKm,
          '#0EF1B6'
        ],
        [
          jsonData[0].data[0].rlKm.redWarning / jsonData[0].data[0].rlKm.totalKm,
          '#FFD035'
        ],
        [1, '#F1515F']
      ]

      option2.baseOption.series[0].axisLine.lineStyle.color = [
        [
          jsonData[0].data[1].rl.yellowWarning / 100,
          '#0EF1B6'
        ],
        [
          jsonData[0].data[1].rl.redWarning / 100,
          '#FFD035'
        ],
        [1, '#F1515F']
      ]
      option2.baseOption.series[1].max = this.num2e(jsonData[0].data[1].rlKm.totalKm)
      option2.baseOption.series[1].axisLine.lineStyle.color = [
        [
          jsonData[0].data[1].rlKm.yellowWarning / jsonData[0].data[1].rlKm.totalKm,
          '#0EF1B6'
        ],
        [
          jsonData[0].data[1].rlKm.redWarning / jsonData[0].data[1].rlKm.totalKm,
          '#FFD035'
        ],
        [1, '#F1515F']
      ]

    }

    return (
      <div className="sfl-dashboard">
        <Link to="/numbers" className="dashboard-link">
          <DashBoardItem option={option1} name={bearName1 || 'A'}/>
        </Link>
        <Link to="/numbers" className="dashboard-link">
          <DashBoardItem option={option2} name={bearName2 || 'B'}/>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {messages: state.messages, isConnected: state.messages.status}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
