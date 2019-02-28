import axios from 'axios';

export default function(token){
	var thePromise = axios({
		method: "POST",
		url: `${window.apiHost}/getCart`,
		data: {
			token
		}
	});

	return{
		type: "GET_CART",
		payload: thePromise
	}

}