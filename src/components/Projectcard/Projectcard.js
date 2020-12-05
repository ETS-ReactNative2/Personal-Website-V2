import React, { Component } from 'react';
import './Projectcard.css';

class Projectcard extends Component {
    constructor(props) {
        super(props);
    }

    goToLink(link) {
        window.open(link, "_blank");
    }

    render() {
        return (
            <div className="Projectcard" onClick={() => this.goToLink(this.props.link)}>
                <div className="projectContainer">
                    <h3>{this.props.title}</h3>
                    <p className="keywords">{this.props.keywords}</p>
                    <p className='description'>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default Projectcard;