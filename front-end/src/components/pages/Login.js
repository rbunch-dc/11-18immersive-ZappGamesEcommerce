import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loginAction from '../../actions/loginAction';

class Login extends Component{

    componentWillReceiveProps(newProps){
        console.log(newProps);
    }

    handleLogin = (event)=>{
        event.preventDefault()
        const username = event.target[0].value
        const password = event.target[1].value
        this.props.loginAction({
            username,
            password
        })
    }

    render(){
        return(
        <main>
            <center>
            <div className="container">
                <div className="z-depth-1 grey lighten-4 row login">

                <form className="col s12" onSubmit={this.handleLogin}>
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

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        loginAction: loginAction
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
// export default Login;