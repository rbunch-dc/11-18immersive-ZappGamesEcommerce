import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function LogoSearchHeader(props){
    return(
        <div className="logo-search-header">
            <div className="left">
                <Link to="/"><img src="/images/logo.png" /></Link>
            </div>
            <div className="right">
                <input type="text" placeholder="Search" />
            </div>            
        </div>
    )
}
export default LogoSearchHeader;