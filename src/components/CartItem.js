const CartItem = ({name, price, quantity}) => (
  <div class="list-group-item">
    <div class="row">
      <div class="col-md-8">{name}</div>
      <div class="col-md-2">{price}</div>
      <div class="col-md-2">{quantity}</div>
    </div>
  </div>
);
export default CartItem;
