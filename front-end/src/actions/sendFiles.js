import axios from 'axios'

export default (dataToPost)=>{
    let formData = new FormData();
    for (const file of dataToPost) {
        formData.append('file', file)
    }

    console.log(formData)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    const axiosPromise = axios.post(`${window.apiHost}/filesUp`,formData,config)
    return{
        type:  "AUTH_ACTION",
        payload: axiosPromise
    }
}