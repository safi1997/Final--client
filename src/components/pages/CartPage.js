import React from "react";

class CartPage extends React.Component {
  state = {
    cartItems: [],
  };

  removeItemFromCart = (itemId) => {
    // Remove item from cart by item ID using ORM or any API of your choice
    // Update the state to reflect the changes
    const updatedCartItems = this.state.cartItems.filter(
      (item) => item.id !== itemId
    );
    this.setState({ cartItems: updatedCartItems });
  };

  calculateSubtotal = () => {
    // Calculate the subtotal of all items in the cart
    return this.state.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  calculateShipping = () => {
    // Calculate the shipping total based on the rules or logic you have
    // You can use the cart items or subtotal to determine the shipping cost
    // Return the calculated shipping cost
    // Example:
    const subtotal = this.calculateSubtotal();
    if (subtotal > 100) {
      return 0; // Free shipping for orders over $100
    } else {
      return 10; // $10 flat rate shipping for orders below $100
    }
  };

  render() {
    const { cartItems } = this.state;
    const subtotal = this.calculateSubtotal();
    const shipping = this.calculateShipping();
    const total = subtotal + shipping;

    return (
      <div col-sm-12 col-md-10 col-md-offset-1>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                  <td>
                    <button onClick={() => this.removeItemFromCart(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4">Cart Subtotal</td>
                <td>{subtotal}</td>
              </tr>
              <tr>
                <td colSpan="4">Shipping Total</td>
                <td>{shipping}</td>
              </tr>
              <tr>
                <td colSpan="4">Total</td>
                <td>{total}</td>
              </tr>
            </tbody>
          </table>
        )}
        <button>Proceed to Checkout</button>
      </div>
    );
  }
}

export default CartPage;
