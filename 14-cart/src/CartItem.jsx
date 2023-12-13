import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const CartItem = ({ item }) => {
  const { id, title, img, price, amount } = item;
  const { removeItem, increase, decrease } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => increase(id)}>
          <FaChevronUp className="amount-icon" />
        </button>
        <span className="amount">{amount}</span>
        <button className="amount-btn" onClick={() => decrease(id)}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
