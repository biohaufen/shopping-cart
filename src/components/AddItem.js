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
            <form className="container" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        type="text"
                        className="form-control"
                        id="quantity"
                        value={this.state.currentSubmitQuantity}
                        onChange={this.handleQuantityChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="productSelect">Products</label>
                    <select
                        className="form-control"
                        id="productSelect"
                        defaultValue="Select an option..."
                        options={this.props.products}
                        onChange={this.handleSelectChange}
                    >
                        {this.props.products.map((item) => <option key={item.id}>{item.name}</option>)}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
}

export default AddItem;
