import React from "react";
import ClipboardJS from 'clipboard';
import {Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import "./copy.less";
let clipboard;
let defaultCopySuccess = '<p>“京东好借”<br />复制成功<br />快去粘贴搜索吧！</p>';
;
let defaultCopyFailure = '复制失败，请前往微信搜索“京东好借”！';
const defaultCopyValue = "京东好借"
const defaultButtonText = '一键复制“京东好借”'
/**
 * 
 * @param { string copySuccess 成功提示}
 * @param { string copyFailure 失败提示}
 * @param { string copyValue 复制内容}
 * @param { string buttonText 按钮显示}
 * @param { object textareaStyle 复制内容都放在textarea里，如果隐藏不好，需要自己修改样式}
 * @param { object buttonStyle 复制按钮样式}
 */

const Copy = ({
    copySuccess = defaultCopySuccess,
    copyFailure = defaultCopyFailure,
    copyValue = defaultCopyValue,
    buttonText = defaultButtonText,
    textareaStyle,
    buttonStyle,
    style

}) => {
    clipboard = new ClipboardJS('.clipboard');
    clipboard.on('success', function (e) {
        Toast.info(copySuccess);
        e.clearSelection();
    });
    clipboard.on('error', function (e) {
        Toast.info(copyFailure);
    });
    return (
        <div className="jdm-copy-wrap">
            <textarea className="jdm-copy-area" id="gongzhonghao" defaultValue={copyValue} style={textareaStyle}></textarea>
            <button className="clipboard jdm-copy-button" data-clipboard-target="#gongzhonghao" style={buttonStyle || style}>{buttonText}</button>
        </div>
        
    )
}

export default Copy;