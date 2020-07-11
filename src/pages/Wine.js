import React,{Component} from 'react';
import './Wine.css';
import {withRouter} from 'react-router-dom';

class Wine extends Component
{
    render()
    {
        return (
            <div className="Page">
                <div className="Wine">
                    <h1>Wine </h1>
                    <div id="postContainer">
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Wine);