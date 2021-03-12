import React, { Component } from "react";

class CartHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Shopping Cart
        </a>
      </nav>
    );
  }
}
export default CartHeader;