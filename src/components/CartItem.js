const CartItem = ({name, price, quantity}) => (
  <div className="list-group-item">
    <div className="row">
      <div className="col-md-8">{name}</div>
      <div className="col-md-2">{price}</div>
      <div className="col-md-2">{quantity}</div>
    </div>
  </div>
);
export default CartItem;
