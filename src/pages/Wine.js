import React,{Component} from 'react';
import './Wine.css';
import {withRouter} from 'react-router-dom';
import {getWinePosts} from '../components/DocsScraper';


class Wine extends Component
{
    constructor(props)
    {
        super(props);
        this.state={loading: true,postObjectList: []}
    }

    componentDidMount()
    {
        if(this.state.loading)
        {
            getWinePosts().then((data) => this.setState({loading: false,postObjectList: data}))
        }
    }

    render()
    {
        return (
            <div className="Page">
                <div className="Wine">
                    <h1>Wine</h1>
                    {
                        this.state.loading?
                            <p>Fetching...</p>:
                            this.state.postObjectList.map((obj,_) =>
                            {
                                return (
                                    <div id="postContainer">
                                        <h2>{obj.title}</h2>
                                        {
                                            obj.body.map((para,_) =>
                                            {
                                                return (
                                                    <p>{para}<br />
                                                    </p>
                                                )
                                            }
                                            )
                                        }
                                        <br />
                                    </div>
                                )
                            }
                            )
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(Wine);