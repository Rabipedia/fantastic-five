import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import PlayerCart from '../PlayerCart/PlayerCart';
import './Players.css'

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
     
    useEffect(() =>{
        fetch('./players.json')
          .then(res => res.json())
          .then(data => setPlayers(data));
    },[])
    

   const handleAddToCart = (player) => {
     // console.log(player);
      const newCart = [...cart, player];
      setCart(newCart);
    } 
  return (
        <div className='container'>
            <div className='player-container'>
             {
                players.map(player => <Player
                  key={player.name}
                  player={player}
                  handleAddToCart={handleAddToCart}
                ></Player>)
                
              }
            </div>
            <div className='cart-container'>
              <PlayerCart
                cart={cart}
                >
              </PlayerCart>
            </div>
        </div>
    );
};

export default Players;