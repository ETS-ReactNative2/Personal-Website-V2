import React,{Component} from 'react';
import './Projectcard.css';

class Projectcard extends Component
{
    constructor(props) 
    {
        super(props);
    }


    goToLink(link)
    {
        window.open(link,"_blank");
    }

    render()
    {
        return (
            <div className="Projectcard" onClick={() => this.goToLink(this.props.link)}>
                <div className="projectContainer">
                    <h2>{this.props.title}</h2>
                    <p className="date">{this.props.date}</p>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default Projectcard;