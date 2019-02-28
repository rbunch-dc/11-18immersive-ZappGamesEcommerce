import React, { Component } from 'react';

function LogoSearchHeader(props){
    return(
        <div className="logo-search-header">
            <div className="left">
                <img src="/images/logo.png" />
            </div>
            <div className="right">
                <input type="text" placeholder="Search" />
            </div>            
        </div>
    )
}
export default LogoSearchHeader;