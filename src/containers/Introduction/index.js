import React, {Component} from 'react';
require('./index.less');
// import {Link} from 'react-router';
// import DashBoardItem from '../../components/DashBoardItem';

import intrPic from '../../images/intro_img.jpg';

class Introduction extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <div className="intr-item">
            <h3>Name</h3>
            <div className="intr-content">
                <p>
                    Railway Bearing Condition Monitoring System
                </p>
            </div>
        </div>

        <div className="intr-item">
            <h3>Functions introduction</h3>
            <div className="intr-content">
                <p>
                  <img src={intrPic} alt="" />
                  <i className="focus">Concept for the digitalized maintenance of wheelset bearings.</i>
                </p>
                <p>
                  Schaeffler has the know-how for the whole added value chain from sensors to the cloud and derived from thatoffers railway specific services:
                </p>
                <p>
                  <i className="fa fa-sanjiao" aria-hidden="true"></i>New, railway specific condition monitoring system for predictive maintenance
                </p>
                <p className="intr-content-indent">
                  <i className="fa fa-sanjiao-o" aria-hidden="true"></i>Operation based calculation of lubrication lifetime(“Grease-RUL”)
                </p>
                <p className="intr-content-indent">
                  <i className="fa fa-sanjiao-o" aria-hidden="true"></i>Automatic bearing diagnosis(calculation of remaining useful life-RUL)
                </p>
                <p className="intr-content-indent">
                  <i className="fa fa-sanjiao-o" aria-hidden="true"></i>Security standard SIL for temperature measuring
                </p>
                <p className="intr-content-indent">
                  <i className="fa fa-sanjiao-o" aria-hidden="true"></i>Railway certification
                </p>
                <p>
                  <i className="fa fa-sanjiao" aria-hidden="true"></i>Reconditioning
                </p>
                <p>
                  <i className="fa fa-sanjiao" aria-hidden="true"></i>Railway specific lubricants
                </p>
                <p>
                  <i className="fa fa-sanjiao" aria-hidden="true"></i>Opens the opportunity of new business models with operators
                </p>

            </div>
        </div>
      </div>
    )
  }
}
export default Introduction;
