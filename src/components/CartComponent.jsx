import React from 'react';
import { useStore } from '@nanostores/preact';
import { cart, getItems } from '../stores/cartStore';
// import AbcIcon from '@mui/icons-material/Abc';

const CartComponent = () => {
  let items = getItems();

  return (
    <div>
      {/* <AbcIcon client:load /> */}
      {items.map((item) => (
        <p>- {item}</p>
      ))}
    </div>
  );
};

export default CartComponent;
