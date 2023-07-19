import React from 'react';
import './Card.scss';

const Card = (props) => {
    return (
        <div className="app__invoice-card">
            <p>Total:</p>
            <div className="app__card-details">
                <p className='card-price'>USD {props.sum} |</p>
                <p>{props.pieces} items</p>
            </div>
        </div>
    )
}

export default Card