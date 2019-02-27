// an action is a JS function that retuns:
// an OBJECT!!!
// that object MUST have at least a property of type

import axios from 'axios'

export default (formData)=>{
    console.log("Login action is running!");
    console.log(formData);
    console.log(window.apiHost)
    const axiosPromise = axios({
        url: `${window.apiHost}/login`,
        method: 'POST',
        data: formData
    }) 
    return{
        type:  "LOGIN_ACTION",
        payload: axiosPromise
    }
}