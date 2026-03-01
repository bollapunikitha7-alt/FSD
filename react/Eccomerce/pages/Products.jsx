import { useState } from "react";
import productsData from "../Data/ProductsData"; 
import "./Products.css";

function Products() {
  const [category, setCategory] = useState("All");

  
  const filteredProducts =
    category === "All"
      ? productsData
      : productsData.filter((p) => p.category === category);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="products-page">
      {/* Category Navbar */}
      <div className="products-navbar">
        <h2>Product Categories</h2>
        <div className="category-list">
          {[
            "All","Mobiles","Electronics","Fashion","beauty","Sports","Books","Toys","Kitchen", "Today's Deal", "Gift Cards"
          ].map((cat) => (
            <button key={cat} onClick={() => setCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
