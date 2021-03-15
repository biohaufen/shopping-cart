import React, { Component } from "react";
import CartItem from "./CartItem";

class CartItems extends Component {
  calculateSum = () => this.props.items.reduce((acc,curr) => acc + curr.product.priceInCents, 0);
  render() {
    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          {this.props.items.map((item) => (
            <CartItem
              name={item.product.name}
              price={item.product.priceInCents / 100}
              quantity={item.quantity}
            />
          ))}{" "}
        </div>
        Total Price: {`$${this.calculateSum()/100}`}
      </div>
    );
  }
}

export default CartItems;
