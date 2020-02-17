export const inputType = (type) => {
    switch (type) {
        case 'mobilePhone':
            return 'tel'
        case 'name':
            return 'text'
        case 'email':
            return 'email'
        default:
            return 'text'
    }
}
export const inputConfig = (type) => {
    let returnData = {}
    console.log(type)
    switch (type) {
        case 'mobilePhone':
            returnData = {
                type: 'tel',
                maxLength: 11,
                reg: /^1[3-9]\d{9}$/,
                placeholder: '请输入手机号码',
                trim: true,
            }
            break
        case 'userName':
            returnData = {
                type: 'text',
                maxLength: 30,
                reg: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
                placeholder: '请输入姓名', 
                trim: false,
            }
            break
        case 'email':
            returnData = {
                type: 'text',
                maxLength: 30,
                reg: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                placeholder: '请输入邮箱',
            }
            break
        default:
            return returnData
    }
    return returnData
}