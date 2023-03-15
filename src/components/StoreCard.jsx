import styles from './StoreCard.module.css';
import { useStore } from '@nanostores/preact';
import { addItem, cart } from '../stores/cartStore';

const StoreCard = (props) => {
  let $cart = useStore(cart);

  return (
    <div className={styles.container}>
      <h2>Cart: {props.itemName}</h2>
      <button onClick={() => addItem(props.itemName)}>Add Item</button>
    </div>
  );
};

export default StoreCard;
