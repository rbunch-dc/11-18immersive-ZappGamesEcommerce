import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './game.css';

class Game extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="game-container">
                <div className="row">
                    <div className="col s12 m4">
                        <img src="http://via.placeholder.com/250" alt="" className="game-pic" />
                    </div>
                    <div className="col s12 m8">
                        <div className="row">
                            <h3 className="game-title">GAME TITLE</h3>
                            <div className="game-desc">
                                <p>Quisque tellus ante, ornare eget neque eget, pulvinar congue eros. Quisque id mollis libero. Aliquam luctus id justo in rhoncus. Suspendisse pharetra, leo vel porta ultrices, tortor elit molestie ex, ut convallis nibh elit ut elit. Praesent egestas elit vitae placerat faucibus. Mauris feugiat</p>
                                <p>Maecenas tristique metus nec viverra sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam libero lacus, venenatis nec urna eget, viverra sollicitudin sem. Vestibulum eu enim vitae erat finibus ultrices vitae ac purus</p>
                                <p>Duis hendrerit semper nulla ac ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae sagittis mi, non mattis eros. Praesent bibendum feugiat erat, nec iaculis dolor pharetra at. Phasellus leo ligula, venenatis ac massa nec, tempor scelerisque mauris</p>
                                <p>Fusce mauris mi, placerat in elit id, imperdiet consequat erat. Sed vitae turpis id tellus eleifend laoreet id eu tellus. Quisque volutpat molestie orci id mattis. Maecenas ut tempus quam. Nulla facilisi. Aliquam erat volutpat. Donec faucibus dolor dui, a placerat velit convallis ac. Donec luctus ex mi, sed rhoncus orci cursus ultricies. Ut ut lacinia libero. Maecenas pulvinar enim nec lectus tempor venenatis. Phasellus at enim felis.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s1">
                                <span>Qty:</span>
                            </div>
                            <div className="col s8">
                                <input type="text" name="quantity"/>
                            </div>
                            <div className="col s2">
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;