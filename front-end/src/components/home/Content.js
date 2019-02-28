import React, { Component } from 'react';
import GameCard from '../utility/GameCard';
import axios from 'axios';

class Content extends Component{

    componentDidMount(){
        const gamesPromise = axios.get(`${window.apiHost}/games/getHome`); 

    }

    render(){
        return(
            <div className="row">
                <div className="col s12">
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                </div>
            </div>
        )
    }
}
export default Content;