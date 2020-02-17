import React, { Component } from "react";
import { ActivityIndicator, Modal, Toast } from 'antd-mobile';

import "./index.less";
import PropTypes from "prop-types";


class Rule extends Component {
  constructor(props){
    super(props)
    this.state = {
      showRulePop:false
    }
  }

  _close = () => {
    const { onDelete } = this.props
    onDelete && onDelete()
  }
  render() {
    const {ruleDetail,showRulePop} = this.props
      return(
        <div className="rule-wrap">
          <Modal // 规则弹框
          className="ruleModal"
          visible={showRulePop}
          transparent
          maskClosable={false}
        >
          <div className="rule-container">
              <img className="btn-close" src={"https://static-ftcms.jd.com/p/files/partcash_delete.png"} alt=""  onClick={this._close}/>        
              <div className="ruleContent">
              <div className="title">
                  <div className="activity-title">
                      <span className="mark">
                        <span className="mark-line"></span>
                      </span>
                      活动规则
                      <span className="mark">
                        <span className="mark-line"></span>
                      </span>
                  </div>
              </div>
              <div className="info" dangerouslySetInnerHTML={{__html: ruleDetail}} ></div>
              </div>
          </div>
          </Modal>
        </div>
        
      );
  }
}

Rule.propTypes = {
  onDelete: PropTypes.func.isRequired,
  ruleDetail: PropTypes.string
}

export default Rule
