import React from 'react';
import PropTypes from 'prop-types';
import '../ItemPage.css';
import Item from './Item.jsx';

function ItemPage({items, onAddToCart}) {
    return(
        <ul className='ItemPage-items'>
            {items.map(item => 
                <li key={item.id} className='ItemPage-item'>
                    <Item item={item}>
                        <button className="Item-addToCart" onClick={()=>onAddToCart(item)}>Add to cart</button>
                    </Item>
                </li>
            )}
        </ul>
    );
}

ItemPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
};

export default ItemPage;