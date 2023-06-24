import React from "react";

class ProductPage extends React.Component {
  state = {
    product: null,
  };

  componentDidMount() {
    // Fetch product data from the server using ORM or any API of your choice
    fetch("http://localhost:9000/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ product: data });
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }

  render() {
    const { product } = this.state;

    if (!product) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <div>
          <h3>Available Sizes:</h3>
          <ul>
            {product.sizes.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Available Colors:</h3>
          <ul>
            {product.colors.map((color, index) => (
              <li key={index}>{color}</li>
            ))}
          </ul>
        </div>
        <button>Add to Cart</button>
      </div>
    );
  }
}

export default ProductPage;
