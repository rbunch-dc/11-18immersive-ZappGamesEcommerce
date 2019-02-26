import React, { Component } from 'react';
import loginTab from '../../misc/openWindow';

class LoginNavBar extends Component{
    constructor(){
        super();
    }
    githubAuth = (event)=>{
		// The process:
		// 1. User clicks and opens the new window via loginTab
        loginTab('http://localhost:3000/auth/github')
    }
			// 2. New window is open to crossOrigin but is github.com
			// 3. Once user authenticates, github sends them to /auth/github/callback
			// 4. The callback URL either gets the uid or inserts them
			// 5. Callback then takes the uid and tokenizes it with JWT
			// 6. Token is sent back to the github window that loginTab opened and
				// window.opener.postMessage is in the script of that window which
				// sends the data back over to original page
			// 7. It's now available in this promise resolution
			// 8. Put it in localstorage so we can use it next time.    
    render(){
        return(
            <div className="login-nav-bar">
                <div className="left valign-wrapper">WELCOME TO ZAPP GAMES</div>
                <div className="right">
                    <button type="button" onClick={this.githubAuth} class="btn play-button btn-github">Login with github</button>
                    MY CART 0 ITEM - £0.00    
                </div>
            </div>
        )
    }
}
export default LoginNavBar;