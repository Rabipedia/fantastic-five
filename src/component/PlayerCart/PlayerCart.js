import React from 'react';
import './PlayerCart.css'

const PlayerCart = (props) => {
   const {cart} = props;
   let img;
   let name;
   let position;
   let buyingPrice;
   let totalCost = 0;
   for(const player of cart){
      img = player.img;
      name = player.name;
      position = player.position;
      buyingPrice = player.buyingPrice;
      totalCost = totalCost + buyingPrice;
   }
  
  // console.log(buyingPrice);
    return (
        <div className='player-cart'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='player-details'>
                <h4>Name: {name} </h4>
                <h6>Position: {position} </h6>
                <p><small>Buying Price: {buyingPrice} </small></p>
                <h5>Total Cost: {totalCost}</h5>
            </div>
        </div>
    );
};

export default PlayerCart;