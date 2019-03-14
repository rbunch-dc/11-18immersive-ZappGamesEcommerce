import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import sendFiles from '../actions/sendFiles';

class LoginNavBar extends Component{
    constructor(){
        super();
    }

    formS = (e)=>{
        e.preventDefault();
        let x = document.getElementById('files').files;
        console.dir(x);
        this.props.sendFiles(x);
    }

    render(){
        return (
            <form onSubmit={this.formS}>
                <input type="file" id="files" multiple name="files" />
                <button type="submit" value="submit">Submit</button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatcher){
	return bindActionCreators({
		sendFiles: sendFiles
	}, dispatcher)
}


export default connect(null,mapDispatchToProps)(LoginNavBar);
