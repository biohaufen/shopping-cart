import React, { Component } from "react";
import CartItem from "./CartItem";

class CartItems extends Component {
  findQuantity = (curr) => {
    return this.props.items.find((item) => item.product_id === curr.id).quantity
  }

  calculateSum = () => {
    const validItems = this.props.productList.filter((product) => this.props.items.some((item) => item.product_id === product.id))
    return validItems.reduce((acc,curr) => acc + (curr.priceInCents * +this.findQuantity(curr)) ,0)
  }
 
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
              key={item.id}
              name={this.props.productList.find((product) => product.id === item.product_id).name}
              price={this.props.productList.find((product) => product.id === item.product_id).priceInCents / 100}
              quantity={item.quantity}
            />
          ))}{""}
        </div>
        <small>Total Price: <b>{`$${this.calculateSum()/100}`}</b></small>
      </div>
    );
  }
}

export default CartItems;
