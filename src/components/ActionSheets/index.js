require('./index.less');
import React, {Component} from 'react';
import {Link} from 'react-router';

class ActionSheets extends Component {
  constructor(props) {
    super(props);
    this.hideActionSheet = this.hideActionSheet.bind(this);
    this.handleClickHide = this.handleClickHide.bind(this);
  }
  componentDidMount() {}
  hideActionSheet(weuiActionsheet, mask) {
    weuiActionsheet.removeClass('weui_actionsheet_toggle');
    mask.removeClass('weui_fade_toggle');
    mask.on('transitionend', function() {
      mask.hide();
    }).on('webkitTransitionEnd', function() {
      mask.hide();
    })
  }
  handleClickHide() {
    const {actionSheet} = this.props;
    // dispatch(actionSheet.hideActionSheet);

    actionSheet.hideActionSheet()
  }
  render() {
    const {todos} = this.props;
    const mask = $('#mask');
    const weuiActionsheet = $('#weui_actionsheet');
    if (todos.isShow) {
      weuiActionsheet.addClass('weui_actionsheet_toggle');
      mask.show().focus().addClass('weui_fade_toggle'); //加focus是为了触发一次页面的重排(reflow or layout thrashing),使mask的transition动画得以正常触发
    } else {
      weuiActionsheet.removeClass('weui_actionsheet_toggle');
      mask.removeClass('weui_fade_toggle');
      mask.hide();
      //
      // mask.on('transitionend', function() {
      //   mask.hide();
      // }).on('webkitTransitionEnd', function() {
      //   mask.hide();
      // })
    }
    mask.unbind('transitionend').unbind('webkitTransitionEnd');
    return (
      <div id="actionSheet_wrap">
        <div className="weui_mask_transition" id="mask" onClick={this.handleClickHide}></div>
        <div className="weui_actionsheet" id="weui_actionsheet">
          <div className="weui_actionsheet_menu">
            <div className="weui_actionsheet_cell" data-url='introduction' onClick={this.handleClickHide}>
              <Link to="/introduction">RBCM System Introduction</Link>
            </div>
            <div className="weui_actionsheet_cell" data-url='advancedinfo' onClick={this.handleClickHide}>
              <Link to="/advancedinfo">Advanced Information</Link>
            </div>
          </div>
          <div className="weui_actionsheet_action">
            <div className="weui_actionsheet_cell" id="actionsheet_cancel" onClick={this.handleClickHide} style={{
              color: '#F1515F'
            }}>Cancel</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ActionSheets;
