// an action is a JS function that retuns:
// an OBJECT!!!
// that object MUST have at least a property of type

export default (formData)=>{
    console.log("Auth action is running!");
    console.log(formData);
    return{
        type:  "AUTH_ACTION"
    }
}