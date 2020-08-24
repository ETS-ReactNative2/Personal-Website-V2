/* eslint-disable */
import React,{Component} from 'react';
import './Winecard.css';

class Winecard extends Component
{
    constructor(props) 
    {
        super(props);
    }

    render ()
    {
        return (
            <div className="Winecard">
                <div className="wineCardContainer">
                    <div className='winePhotoContainer'>
                        <img src={this.props.image} className='winePhoto' />
                    </div>
                    <div className='wineDescriptionContainer'>
                        <h3>{this.props.title}</h3>
                        <p className='region'>{this.props.region}</p>
                        <p className=''>{this.props.description}</p>
                    </div>
                </div>
            </div>
    );
}
}

export default Winecard;