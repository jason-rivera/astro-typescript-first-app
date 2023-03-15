import { atom } from 'nanostores';

export const cart = atom([]);

export const getItems = () => {
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
};

export const addItem = (item) => {
  cart.set([...getItems(), item]);
  localStorage.setItem('cart', JSON.stringify(cart.get()));
};
