import React, {Component} from 'react';
import 'zepto';
const FontAwesome = require('react-fontawesome');

import ActionSheets from '../../components/ActionSheets';
class Header extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      show: true
    }
  }
  handleClick() {

    const _show = this.state.show
    // ? false
    // : true;
    this.setState({'show': _show})
  }
  componentDidMount() {}
  componentWillMount() {}
  render() {
    const {actionTodo, todos} = this.props;
    return (
      <header>
        <a className="sfl-top-ico sfl-top-ico-l" href="javascript:history.go(-1);">
          <FontAwesome name='chevron-left' style={{
            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
          }}/>
        </a>
        <h3>SCHAEFFLER</h3>
        <a className="sfl-top-ico sfl-top-ico-r" onClick={actionTodo.showActionSheet} href="javascript:;">
          <FontAwesome name='bars' style={{
            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
          }}/>
        </a>
        <ActionSheets actionSheet={actionTodo} todos={todos}/>
      </header>
    )
  }
}

export default Header;
