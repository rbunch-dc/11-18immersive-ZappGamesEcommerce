import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Login extends Component{
    render(){
        return(
        <main>
            <center>

            <div className="container">
                <div className="z-depth-1 grey lighten-4 row login">

                <form className="col s12" method="post">
                    <div className='row'>
                    <div className='col s12'>
                    </div>
                    </div>

                    <div className='row'>
                    <div className='input-field col s12'>
                        <input className='validate' type='email' name='email' id='email' />
                        <label htmlFor='email'>Enter your email</label>
                    </div>
                    </div>

                    <div className='row'>
                    <div className='input-field col s12'>
                        <input className='validate' type='password' name='password' id='password' />
                        <label htmlFor='password'>Enter your password</label>
                    </div>
                    <label>
                                        <a className='pink-text' href='#!'><b>Forgot Password?</b></a>
                                    </label>
                    </div>

                    <br />
                    <center>
                    <div className='row'>
                        <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Login</button>
                    </div>
                    
                    </center>
                </form>
                </div>
            </div>
            <Link to="/register">Create account</Link>
            </center>

            <div className="section"></div>
            <div className="section"></div> 
        </main>
        )
    }
}

export default Login;