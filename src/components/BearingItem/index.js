require('./index.less');
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TodoActions from '../../actions';

import BearingInfo from '../BearingInfo';
import BearingAdvanced from '../BearingAdvanced';

class BearingItem extends Component {
  constructor(props) {
    super(props);
    this.renderBearInfo = this.renderBearInfo.bind(this)
  }
  componentDidMount() {
    const {bearingPic, warningCode, bearId} = this.props;
    var $imgWrapper = $('.img-wrapper');
    var drawBearing = {
      bearColor: '#36D1AD', //F1515F
      warningColor: '#F1515F',
      $numberTab: $('.numbers-tabs'),
      screenW: $imgWrapper.width(),
      cheight: $imgWrapper.height(),
      cwidth: $imgWrapper.height() / 11.1415 * 10.329,
      opts: {
        'roller': 1,
        'innerRing': 0,
        'outerRing': 0,
        'cage': 0
      },
      init: function() {
        this.opts = warningCode
        this.createBearing(bearId, bearingPic);
        this.$numberTab.on('click', '.numbers-tab', function() {
          var $elm = $(this);
          $elm.addClass('active').siblings().removeClass('active');
          $('.tab-item').removeClass('active').eq($elm.index()).addClass('active');
        })
      },
      // setWaringCode: function(opts) {
      //   //0 正常 1异常
      //   this._drawLines(opts);
      //
      // },
      createBearing: function(id, pic) {
        var cId = document.getElementById(id);
        this.ctx = cId.getContext('2d');
        // console.log(this.screenW, this.cheight, this.cwidth)
        this._refreshPanle(this.screenW, this.cheight, id);

        this._drawShadow(this.screenW / 2, this.cheight - this.cwidth / 4, this.cwidth / 2, this.cwidth / 5);
        //bg img
        this._drawBgImg(pic, .9);
      },
      _drawBgImg: function(src, v) {
        var _self = this;
        _self.cwidth = _self.cwidth * v;
        _self.cheight = _self.cheight * v;
        var bearingImg = new Image();
        bearingImg.src = src;
        if (bearingImg.complete) {
          _self.ctx.drawImage(bearingImg, _self.screenW / 2 - _self.cwidth / 2, 0, _self.cwidth, _self.cheight);
          _self._drawLines(_self.opts);
        } else {
          bearingImg.onload = function() {
            _self.ctx.drawImage(bearingImg, _self.screenW / 2 - _self.cwidth / 2, 0, _self.cwidth, _self.cheight);
            _self._drawLines(_self.opts);
          }
          bearingImg.onerror = function() {
            console.error('图片加载失败！');
          }
        }
      },
      _drawLines: function(opts) {
        // console.log(opts)

        var innerRingColor = false,
          outerRingColor = false,
          rollorColor = false,
          cageColor = false;

        if(opts) {
          if(opts.roller == 1) {
            rollorColor = true
          }
          if(opts.innerRing == 1) {
            innerRingColor = true
          }
          if(opts.outerRing == 1) {
            outerRingColor = true
          }
          if(opts.cage == 1) {
            cageColor = true
          }
        }

        this._line('Inner Ring', 42, 200, .3, 'l', innerRingColor);
        this._line('Outer Ring', 42, 330, .3, 'l', outerRingColor);
        this._line('Rollor', 130, 292, .9, 'r', rollorColor);
        this._line('Cage', 180, 345, .7, 'r', cageColor);
      },
      _refreshPanle: function(w, h, id) {
        $('#' + id).attr('width', w);
        $('#' + id).attr('height', h);
        this.ctx.rect(0, 0, w, h);
      },
      _line: function(txt, x, y, v, dir, isWrong) {
        var color = '';
        if (!isWrong) {
          color = this.bearColor;
        } else {
          color = this.warningColor;
        }
        // var sw = $imgWrapper.width();
        var x1 = this.cwidth * x / 413 + this.screenW / 2 - this.cwidth / 2,
          y1 = this.cheight * y / 446,
          x2 = dir === 'l'
            ? x1 - this.cwidth * v
            : x1 + this.cwidth * v,
          y2 = y1 - this.cheight * v / 6;
        this._drawLine(x1, y1, x2, y2, color);
        this._drawSymbol(x1, y1, color);
        this._drawSymbol(x2, y2, color);
        this._drawFont(txt, x2, y2, color);
      },
      _drawSymbol: function(x, y, color) {
        var r = 5;
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx.fill();
      },
      _drawFont: function(font, l, r, color) {
        this.ctx.font = '16px consolas';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        // this.ctx.strokeText('Hello', 100, 100);
        this.ctx.fillStyle = color; //this.bearColor
        this.ctx.fillText(font, l, r + 10);
      },
      _drawLine: function(x1, y1, x2, y2, color) {
        var xl = .4;
        this.ctx.strokeStyle = color;
        // this.ctx.lineWidth=2;
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.bezierCurveTo(x1, y1 - y1 * xl, x2, y2 - y2 * xl, x2, y2);
        this.ctx.stroke();
      },
      _drawShadow: function(x, y, a, b) {
        this.ctx.fillStyle = '#031324';
        this.ctx.save();
        var r = (a > b)
          ? a
          : b;
        var ratioX = a / r;
        var ratioY = b / r;
        this.ctx.scale(ratioX, ratioY);
        this.ctx.beginPath();
        this.ctx.arc(x / ratioX, y / ratioY, r, 0, 2 * Math.PI, false);
        this.ctx.closePath();
        this.ctx.restore();
        this.ctx.fill();
      }
    }

    drawBearing.init();
  }

  renderBearInfo() {
    const {bearType, warningCode, bearingInfo} = this.props;
    if(bearType == 'warning') {
      return (
        <BearingInfo bearingInfo={bearingInfo} warningCode={warningCode}/>
      )
    }
    if(bearType == 'advanced') {
      return (
        <BearingAdvanced bearingInfo={bearingInfo} warningCode={warningCode}/>
      )
    }

  }

  render() {
    const {bearingName, bearId, show} = this.props;

    return (
      <div className={show ? 'tab-item active': 'tab-item'}>
        <h3 className="tab-item-title">{bearingName}</h3>
        <div className="bearing-map">
          <div className="img-wrapper">
            <canvas className="can-bearing" id={bearId}></canvas>
          </div>
        </div>
        {this.renderBearInfo()}
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

export default connect(mapStateToProps, mapDispatchToProps)(BearingItem);
