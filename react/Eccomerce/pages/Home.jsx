import React from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

import electronics from "../assets/electronics.jpg";
import fashion from "../assets/fashion.jpg";
import beauty from "../assets/beauty.jpg";
import books from "../assets/books.jpg";

import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Banner Section */}
      <div className="banner-section">
        <img src={banner1} alt="Banner" />
        <img src={banner2} alt="Banner" />
        <img src={banner3} alt="Banner" />
      </div>

      {/* Category Cards */}
      <h2 className="section-title">Shop by Category</h2>

      <div className="category-grid">
        <div className="category-card">
          <img src={electronics} alt="Electronics" />
          <h4>Electronics</h4>
        </div>

        <div className="category-card">
          <img src={fashion} alt="Fashion" />
          <h4>Fashion</h4>
        </div>

        <div className="category-card">
          <img src={beauty} alt="Beauty" />
          <h4>Beauty</h4>
        </div>

        <div className="category-card">
          <img src={books} alt="Books" />
          <h4>Books</h4>
        </div>
      </div>

    </div>
  );
}

export default Home;
