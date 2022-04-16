import React from 'react';
import './Player.css'

const Player = (props) => {
   // console.log(props.player)
    const {name, position, img, country, buyingPrice} = props.player
    return (
        <div className='player'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='player-details'>
                <h3 className='player-name'>Name: {name}</h3>
                <h6>Position: {position}</h6>
                <p><small>Country: {country}</small></p>
                <p>Buying Price: {buyingPrice}</p>
                <button 
                    className='btn-regular'
                    onClick={() => props.handleAddToCart(props.player)}
                    >Add Player</button>
            </div>
        </div>
    );
};

export default Player;