import { useContext } from 'react';

import { CartContext } from '../store/shopping-cart-context.jsx';

export default function Cart() {
  const { items, updateItemQuantity } = useContext(CartContext);

  // 아이템의 가격과 숫자를 곱해서 더하는 로직 (카트에 아이템 개수만큼 금액 증가)
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id='cart'>
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id='cart-items'>
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className='cart-item-actions'>
                  <button onClick={() => updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id='cart-total-price'>
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
