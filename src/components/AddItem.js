import React, { Component } from "react";

class AddItem extends Component {
    state = { currentSubmitQuantity: "", selectedProductId: 1 };
    handleSubmit = (e) => {
        e.preventDefault();
            // eslint-disable-next-line eqeqeq
            const selectedProduct = this.props.products.find(item => item.id == this.state.selectedProductId);
            const itemToAdd = 
                {
                    product_id: selectedProduct.id,
                    quantity: +this.state.currentSubmitQuantity,
                }
            this.props.addItemToCart(itemToAdd)
    };

    handleQuantityChange = (e) => {
        this.setState({ currentSubmitQuantity: e.target.value });
    };
    handleSelectChange = (e) => {
        this.setState({ selectedProductId: e.target.value });
    };

    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        min="1"
                        step="1"
                        pattern="\d+"
                        value={this.state.currentSubmitQuantity}
                        onChange={this.handleQuantityChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="productSelect">Products</label>
                    <select
                        className="form-control"
                        id="productSelect"
                        defaultValue="Select an option..."
                        onChange={this.handleSelectChange}
                    >
                        {this.props.products.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
}

export default AddItem;
