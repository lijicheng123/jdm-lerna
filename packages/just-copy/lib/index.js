'use strict';

module.exports = justCopy;

function justCopy(selector) {
    const range = document.createRange();
    range.selectNode(document.querySelector(selector));
    const selection = window.getSelection();
    if(selection.rangeCount > 0) selection.removeAllRanges();
    selection.addRange(range);
    let isSuccess = false
    try{
        isSuccess = document.execCommand('Copy');
    }catch(e){
        console.log('拷贝出错了',e)
        isSuccess = false
    }
    selection.removeAllRanges();
    return isSuccess
}
