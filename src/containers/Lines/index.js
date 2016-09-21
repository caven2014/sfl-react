import React, {Component} from 'react';
require('./index.less');
// import {Link} from 'react-router';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TodoActions from '../../actions';

import echarts from 'echarts';
// import ReactEcharts from 'echarts-for-react';
import 'zepto';
import LineItem from '../../components/LineItem';

// import _ from 'lodash';

// let timeTicket = null;

var data = [],
  dataTootle = [],
  random,
  maxNum = 300;
for (var j = 0; j < 4; j++) {
  //模拟数据
  data = [];
  for (var i = 0; i < maxNum; i++) {
    random = (Math.random() * 0).toFixed(0);
    data.push([i, random]);
  }
  dataTootle.push(data);
}

class Lines extends Component {
  constructor() {
    super();
    this.state = {
      option: this.getOption()
    }
    this.getOption = this.getOption.bind(this);
    this.strToJson = this.strToJson.bind(this);
  }

  getOption() {
    const markLineOpt = {
      animation: false,
      silent: true,
      data: [
        {
          name: '最大值',
          type: 'max'
        }
        // , {
        //   yAxis: 100
        // }, {
        //   yAxis: 300
        // }
      ]
    };
    const markPointOpt = {
      symbol: 'circle',
      symbolSize: 18,
      itemStyle: {
        normal: {
          color: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [
            {
              offset: 0,
              color: '#F1515F' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#553242' // 100% 处的颜色
            }
          ], false),
          opacity: .8

        }
      },
      label: {
        normal: {
          position: [
            0, '-80%'
          ],
          textStyle: {
            color: '#F1515F',
            fontSize: 14,
            opacity: 1
          }
        }
      },
      data: [
        {
          type: 'max',
          name: '最大值'
        }
      ],
      detail: [
        {
          formatter: '{value}%'
        }
      ]
    }
    const onLineGrid = [
      {
        x: '5%',
        y: '3%',
        width: '90%',
        height: '20%'
      }, {
        x2: '5%',
        y: '28%',
        width: '90%',
        height: '20%'
      }, {
        x: '5%',
        y2: '27%',
        width: '90%',
        height: '20%'
      }, {
        x2: '5%',
        y2: '2%',
        width: '90%',
        height: '20%'
      }
    ];
    const xAxisOpts = [
      {
        gridIndex: 0,
        data: dataTootle[0].map(function(item) {
          return item[0];
        }),
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        }
      }, {
        gridIndex: 1,
        data: dataTootle[1].map(function(item) {
          return item[0];
        }),
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        }
      }, {
        gridIndex: 2,
        data: dataTootle[2].map(function(item) {
          return item[0];
        }),
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        }
      }, {
        gridIndex: 3,
        data: dataTootle[3].map(function(item) {
          return item[0];
        }),
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        }
      }

    ];
    const yAxisOpts = [
      {

        name: 'Temperature（℃）',
        nameTextStyle: {
          color: '#fff'
        },
        nameGap: 15,
        gridIndex: 0,
        splitLine: {
          show: false
        },
        splitNumber: 2,
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        }
      }, {
        name: 'Rotation Speed（rpm）',
        nameTextStyle: {
          color: '#fff'
        },
        gridIndex: 1,
        splitLine: {
          show: false
        },
        splitNumber: 2,
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        }
      }, {
        name: 'Acceleration（g）',
        nameTextStyle: {
          color: '#fff'
        },
        gridIndex: 2,
        splitLine: {
          show: false
        },
        splitNumber: 2,
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        }
      }, {
        name: 'Velocity（mm/s RMS）',
        nameTextStyle: {
          color: '#fff'
        },
        gridIndex: 3,
        splitLine: {
          show: false
        },
        splitNumber: 2,
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        }
      }
    ];
    const seriesOpts = [
      {
        name: 'Temperature',
        type: 'line',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: dataTootle[0].map(function(item) {
          return item[1];
        }),
        markLine: markLineOpt,
        markPoint: markPointOpt
      }, {
        name: 'RotationSpeed',
        type: 'line',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: dataTootle[1].map(function(item) {
          return item[1];
        }),
        markLine: markLineOpt,
        markPoint: markPointOpt
      }, {
        name: 'Acceleration',
        type: 'line',
        xAxisIndex: 2,
        yAxisIndex: 2,
        data: dataTootle[2].map(function(item) {
          return item[1];
        }),
        markLine: markLineOpt,
        markPoint: markPointOpt
      }, {
        name: 'Velocity',
        type: 'line',
        xAxisIndex: 3,
        yAxisIndex: 3,
        data: dataTootle[3].map(function(item) {
          return item[1];
        }),
        markLine: markLineOpt,
        markPoint: markPointOpt
      }
    ];
    const mediaOpts = [
      {
        query: {
          minWidth: 768
        },
        option: {
          grid: [
            {
              x: '8%',
              y: '16%',
              width: '33%',
              height: '26%'
            }, {
              x2: '8%',
              y: '16%',
              width: '33%',
              height: '26%'
            }, {
              x: '8%',
              y2: '16%',
              width: '33%',
              height: '26%'
            }, {
              x2: '8%',
              y2: '16%',
              width: '33%',
              height: '26%'
            }
          ]
        }
      }, {
        query: {
          maxWidth: 700
        },
        option: {
          grid: [
            {
              x: '11%',
              y: '8%',
              width: '78%',
              height: '12%'
            }, {
              x2: '11%',
              y: '28%',
              width: '78%',
              height: '12%'
            }, {
              x: '11%',
              y2: '36%',
              width: '78%',
              height: '12%'
            }, {
              x2: '11%',
              y2: '11%',
              width: '78%',
              height: '12%'
            }
          ]
        }
      }
    ];

    const visualMapOpts = [
      {
        top: 10,
        right: 10,
        show: false,
        pieces: [
          {
            gt: 0,
            lte: 200,
            color: '#36D1AD'
          }, {
            gt: 100,
            lte: 300,
            color: '#FFD035'
          }, {
            gt: 300,
            color: '#F1515F'
          }
        ],
        outOfRange: {
          color: '#999'
        }
      }, {
        top: 10,
        right: 10,
        show: false,
        pieces: [
          {
            gt: 0,
            lte: 100,
            color: '#36D1AD'
          }, {
            gt: 150,
            lte: 300,
            color: '#FFD035'
          }, {
            gt: 300,
            color: '#F1515F'
          }
        ],
        outOfRange: {
          color: '#999'
        }
      }, {
        top: 10,
        right: 10,
        show: false,
        pieces: [
          {
            gt: 0,
            lte: 200,
            color: '#36D1AD'
          }, {
            gt: 100,
            lte: 300,
            color: '#FFD035'
          }, {
            gt: 300,
            color: '#F1515F'
          }
        ],
        outOfRange: {
          color: '#999'
        }
      }, {
        top: 10,
        right: 10,
        show: false,
        pieces: [
          {
            gt: 0,
            lte: 200,
            color: '#36D1AD'
          }, {
            gt: 100,
            lte: 300,
            color: '#FFD035'
          }, {
            gt: 300,
            color: '#F1515F'
          }
        ],
        outOfRange: {
          color: '#999'
        }
      }
    ]

    const option = {
      baseOption: {
        grid: onLineGrid,
        tooltip: {
          formatter: 'Group {a}: ({c})'
        },
        xAxis: xAxisOpts,
        yAxis: yAxisOpts,
        dataZoom: [
          {
            show: false,
            type: 'slider' //滚动条呈现方式
            // startValue: '1'
            // start: 82, //默认X轴从哪里开始
            // end: 90 //结束
          }
        ],
        visualMap: visualMapOpts,
        series: seriesOpts
      },
      media: mediaOpts
    }
    return option;
  }

  strToJson(str) {
    var json = (new Function('return ' + str))();
    return json;
  }
  componentDidMount() {
    $(".numbers-tabs").on('click', '.numbers-tab', function() {
      var $elm = $(this);
      $elm.addClass('active').siblings().removeClass('active');
      $('.line-item').removeClass('active').eq($elm.index()).addClass('active');
    })
  }
  render() {
    const {messages} = this.props;

    var msgObj = messages.conversation;
    var jsonData = this.strToJson(msgObj);
    // console.log(jsonData)
    // console.log(messages)
    let option1 = this.getOption();
    let option2 = this.getOption();
    let bearName1,
      bearName2;

    if (jsonData) {
      var dashboardList = jsonData[1].data;
      bearName1 = dashboardList[0].name
      bearName2 = dashboardList[1].name
      option1.baseOption.series[0].data = dashboardList[0].temp.map((item) => {
        return item.toFixed(1)
      })

      option1.baseOption.series[1].data = dashboardList[0].rotationSpeed.map((item) => {
        return item.toFixed(1)
      })
      option1.baseOption.series[2].data = dashboardList[0].acceleration.map((item) => {
        // return item<.1? .1: item.toFixed(1)
        return item
      })
      option1.baseOption.series[3].data = dashboardList[0].velocity.map((item) => {
        return item.toFixed(1)
      })

      /****/
      option1.baseOption.series[0]

      option2.baseOption.series[0].data = dashboardList[0].temp.map((item) => {
        return item.toFixed(1)
      })
      option2.baseOption.series[1].data = dashboardList[1].rotationSpeed.map((item) => {
        return item.toFixed(1)
      })
      option2.baseOption.series[2].data = dashboardList[1].acceleration.map((item) => {
        return item
      })
      option2.baseOption.series[3].data = dashboardList[1].velocity.map((item) => {
        return item.toFixed(1)
      })
    }

    return (
      <div className="sfl-line-wrapper">
        <div className="numbers-tabs">
          <a className="numbers-tab active" href="javascript:;">{bearName1}</a>
          <a className="numbers-tab" href="javascript:;">{bearName2}</a>
        </div>
        <div className="sfl-lines">
          <LineItem show={true} option={option1} bearingName={bearName1}/>
          <LineItem show={false} option={option2} bearingName={bearName2}/>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Lines);
