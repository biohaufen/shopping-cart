import React, { Component } from "react";

class CartFooter extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand">
          &copy; {this.props.copyright}
        </div>
      </nav>
    );
  }
}
export default CartFooter;
