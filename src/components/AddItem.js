import React, { Component } from "react";

class AddItem extends Component {
    state = { currentSubmitQuantity: "", selectedProduct: null };
    handleSubmit = (e) => {
        const selectedProduct = this.props.products.find(item => item.name === this.state.selectedProduct);
        const itemToAdd = {
            product: {
                id: selectedProduct.id,
                name: this.state.selectedProduct,
                priceInCents: selectedProduct.priceInCents
            },
            quantity: this.state.currentSubmitQuantity
        }
        this.props.addToCart(itemToAdd);
        e.preventDefault();
    };

    handleQuantityChange = (e) => {
        this.setState({ currentSubmitQuantity: e.target.value });
    };
    handleSelectChange = (e) => {
        this.setState({ selectedProduct: e.target.value });
    };

    render() {
        return (
            <form class="container" onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for="quantity">Quantity</label>
                    <input
                        type="text"
                        class="form-control"
                        id="quantity"
                        value={this.state.currentSubmitQuantity}
                        onChange={this.handleQuantityChange} />
                </div>
                <div class="form-group">
                    <label for="productSelect">Products</label>
                    <select
                        class="form-control"
                        id="productSelect"
                        defaultValue="Select an option..."
                        options={this.props.products}
                        value={this.state.selectedProduct}
                        onChange={this.handleSelectChange}
                    >
                        {this.props.products.map((item) => <option>{item.name}</option>)}
                    </select>
                </div>
                <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
}

export default AddItem;
