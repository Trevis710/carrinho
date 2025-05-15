import React from 'react';
import PropTypes from 'prop-types';
import '../CartPage.css';
import Item from './Item.jsx';

function CartPage({ items, onRemoveFromCart }) {
    // Calcular total de itens e valor
    const total = items.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <div className="CartPage-summary">
                <span>Total de itens: {items.length}</span>
                <span>Valor total: R$ {total.toFixed(2)}</span>
            </div>
            <ul className='CartPage-items'>
                {items.map(item =>
                    <li key={item.id} className='CartPage-item'>
                        <Item item={item}>
                            <button
                                onClick={() => onRemoveFromCart(item.id)}
                                aria-label={`Remover ${item.name} do carrinho`}
                            >
                                Remover
                            </button>
                        </Item>
                    </li>
                )}
            </ul>
        </div>
    );
}

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onRemoveFromCart: PropTypes.func.isRequired
};

export default CartPage;