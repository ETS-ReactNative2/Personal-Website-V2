import React, { Component } from 'react';
import './Projectcard.css';

class Projectcard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Projectcard">
                <h3>{this.props.title}</h3>
                <div className="projectContainer">
                    <div className="projectDescription"><i>{this.props.authors}</i>, {this.props.conference}, <b> {this.props.year}</b>. [<a href={this.props.link} target="blank">Link</a>]</div>
                </div>
            </div>
        );
    }
}

export default Projectcard;