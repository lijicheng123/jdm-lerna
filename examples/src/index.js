import React ,{Fragment} from 'react';
import { render} from 'react-dom';
import Copy from 'jdm-copy';
import Rule from 'jdm-rule'
import Input from 'jdm-input'
class MyComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showRulePop:false
        }       
    }
    render (){
        const {showRulePop} = this.state
        return (
            <Fragment>
                <button className="button" onClick={()=>{this.setState({showRulePop:true})}}>规则</button>
                <Rule showRulePop={showRulePop} onDelete={()=>{this.setState({showRulePop:false})}} ruleDetail="这些是HTML这些
                是HTML这些是HTML这些是HTML这些是HTML这些是HTML
                是HTML这些是HTML这些是HTML这些是HTML这些是HTML
                是HTML这些是HTML这些是HTML这些是HTML这些是HTML
                是HTML这些是HTML这些是HTML这些是HTML这些是HTML
                是HTML这些是HTML这些是HTML这些是HTML这些是HTML
                是HTML这些是HTML这些是HTML这些是HTML这些是HTML
                是HTML这些是HTML这些是HTML这些是HTML这些是HTML
                是HTML这些是HTML这些是HTML这些是HTML这些是HTML
                是HTML这些是HTML这些是HTML这些是HTML这些是HTML
                是HTML这些是HTML这些是HTML这些是HTML这些是HTML
                "></Rule>
                <Input onChange={onChangeForPhone} inputName="mobilePhone" helpText="规则为正常的手机号" label="手机号" placeholder="请输入您的手机号" />
                <Input required={false} inputName="email" helpText="规则为正常的常规邮箱" label="邮箱" placeholder="请输入您的邮箱" />
                <Input inputName="userName" helpText="规则为正常的中文姓名" label="姓名" placeholder="请输入您的姓名" />
                <Copy></Copy>
            </Fragment>
        )
    }
}
const App = () => (
    <Fragment>
        <MyComponent />
    </Fragment>
    
);
render(<App />, document.getElementById("root"));


const onChangeForPhone = (newValue,validateResult,reg) =>{
    console.log(newValue)
    if(!validateResult){
        console.log('正则匹配规则不匹配:',reg)
    }else{
        console.log('正则匹配成功:',reg)
    }
}