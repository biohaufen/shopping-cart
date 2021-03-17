import React, { Component } from "react";
import CartItem from "./CartItem";

class CartItems extends Component {
  calculateSum = () => this.props.productList.filter((product) => this.props.items.some((item) => item.product_id === product.id)).reduce((acc,curr) => acc + curr.priceInCents, 0);
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
              name={this.props.productList.find((product) => product.id === item.product_id).name}
              price={this.props.productList.find((product) => product.id === item.product_id).priceInCents / 100}
              quantity={item.quantity}
            />
          ))}{""}
        </div>
        Total Price: {`$${this.calculateSum()/100}`}
      </div>
    );
  }
}

export default CartItems;
