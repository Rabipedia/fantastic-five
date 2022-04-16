const addToDb = id =>{
    let playerCart = {};

    // get the player cart from local storage.
    const storedCart = localStorage.getItem('player-cart');
    if(storedCart){
        playerCart = JSON.parse(storedCart);
    }

    // add quantity.
    const quantity = playerCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        playerCart[id] = newQuantity;
    }
    else{
        playerCart[id] = 1;
    }
    localStorage.setItem('player-cart', JSON.stringify(playerCart));
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('player-cart');
    if(storedCart){
        const playerCart = JSON.parse(storedCart);
        if(id in playerCart){
            delete playerCart[id];
            localStorage.setItem('player-cart', JSON.stringify(playerCart));
        }
    }
}

const deletePlayerCart = () => {
    localStorage.removeItem('player-cart');
}


export {
    addToDb,
    removeFromDb,
    deletePlayerCart
}