import "./App.css";
import CartHeader from "./components/CartHeader";
import CartFooter from "./components/CartFooter";
import CartItems from "./components/CartItems";
import AddItem from "./components/AddItem";

import React, { Component } from "react";

class App extends Component {

  state = { products: [], cartItemsList: [] };

  async componentDidMount () {
    const responseProducts = await fetch('http://localhost:8082/api/products')
    const responseCartItems = await fetch('http://localhost:8082/api/items')

    const jsonProducts = await responseProducts.json()
    const jsonCartItems = await responseCartItems.json()

    this.setState({ products:jsonProducts, cartItemsList:jsonCartItems })
  }

  addToCart = (itemToAdd) => {
    if (this.state.cartItemsList.some(item => (item.id === itemToAdd.id && item.name === itemToAdd.name))) {
      const indexOfItem = this.state.cartItemsList.findIndex(item => item.id === itemToAdd.id), newList = [...this.state.cartItemsList];
      newList[indexOfItem].quantity = +newList[indexOfItem].quantity + +itemToAdd.quantity;
      this.setState({ cartItemsList: newList });
    } else {
      const newList = [
        ...this.state.cartItemsList,
        itemToAdd
      ]
      this.setState({ cartItemsList: newList });
    }
  }

  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems items={this.state.cartItemsList} productList={this.state.products} />
        <AddItem products={this.state.products} addToCart={this.addToCart} />
        <CartFooter copyright={new Date().getFullYear} />
      </div>
    );
  }
}



export default App;
