import "./App.css";
import CartHeader from "./components/CartHeader";
import CartFooter from "./components/CartFooter";
import CartItems from "./components/CartItems";
import AddItem from "./components/AddItem";

import React, { Component } from "react";

class App extends Component {

  state = { products: [], cartItemsList: [] };

  async componentDidMount () {
   await this.fetchItemsFromApi()
  }

  fetchItemsFromApi = async () => {
    const responseProducts = await fetch('http://localhost:8082/api/products')
    const responseCartItems = await fetch('http://localhost:8082/api/items')

    const jsonProducts = await responseProducts.json()
    const jsonCartItems = await responseCartItems.json()

    this.setState({ products:jsonProducts, cartItemsList:jsonCartItems })
  }

  postRequestAddItemToCart = async (itemToAdd) => {
    const itemToPotentiallyAdd = this.state.cartItemsList.find(item => (item.product_id === itemToAdd.product_id))
    if (typeof itemToPotentiallyAdd !== undefined) {
      /*
      const indexOfItem = this.state.cartItemsList.findIndex(item => item.id === itemToAdd.id), newList = [...this.state.cartItemsList];
      newList[indexOfItem].quantity = +newList[indexOfItem].quantity + +itemToAdd.quantity;
      this.setState({ cartItemsList: newList });
      */
      itemToPotentiallyAdd.quantity += +itemToAdd.quantity
      await this.deleteItemFromCart(itemToPotentiallyAdd)
    }
    await fetch('http://localhost:8082/api/items', {
        method: 'POST',
        body: JSON.stringify(itemToPotentiallyAdd),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
    })
    this.fetchItemsFromApi()
  }

    deleteItemFromCart = async(itemToDelete) => {
      return fetch(`http://localhost:8082/api/products/${itemToDelete.id}/items/${itemToDelete.id}`, {
        method: 'DELETE',
        body: JSON.stringify(itemToDelete),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
    }

  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems items={this.state.cartItemsList} productList={this.state.products} />
        <AddItem products={this.state.products} postRequestAddItemToCart={this.postRequestAddItemToCart} />
        <CartFooter copyright={new Date().getFullYear()} />
      </div>
    );
  }
}



export default App;
