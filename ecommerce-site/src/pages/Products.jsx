import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./Products.css";
const dummyBooks = [
  {
    id: 1,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: 350,
    discount: 15,
    rating: 4.5,
    releaseDate: "2024-04-12",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/8168691-L.jpg",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 550,
    discount: 10,
    rating: 4.8,
    releaseDate: "2023-12-05",
    inStock: false,
    image: "https://covers.openlibrary.org/b/id/11153268-L.jpg",
  },
  {
    id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 890,
    discount: 20,
    rating: 4.9,
    releaseDate: "2021-09-15",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/9647740-L.jpg",
  },
  {
    id: 4,
    title: "Deep Work",
    author: "Cal Newport",
    price: 470,
    discount: 25,
    rating: 4.4,
    releaseDate: "2022-02-20",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/8155425-L.jpg",
  },
  {
    id: 5,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 620,
    discount: 12,
    rating: 4.3,
    releaseDate: "2020-07-18",
    inStock: false,
    image: "https://covers.openlibrary.org/b/id/7864881-L.jpg",
  },
  {
    id: 6,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    price: 530,
    discount: 18,
    rating: 4.6,
    releaseDate: "2022-01-25",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/8271826-L.jpg",
  },
  {
    id: 7,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    price: 450,
    discount: 10,
    rating: 4.5,
    releaseDate: "2021-04-05",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/11150674-L.jpg",
  },
  {
    id: 8,
    title: "Zero to One",
    author: "Peter Thiel",
    price: 610,
    discount: 30,
    rating: 4.2,
    releaseDate: "2020-10-10",
    inStock: false,
    image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
  },
  {
    id: 9,
    title: "The Lean Startup",
    author: "Eric Ries",
    price: 670,
    discount: 22,
    rating: 4.4,
    releaseDate: "2023-06-30",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/8298782-L.jpg",
  },
  {
    id: 10,
    title: "Start With Why",
    author: "Simon Sinek",
    price: 490,
    discount: 15,
    rating: 4.1,
    releaseDate: "2019-12-12",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/8753533-L.jpg",
  },
  {
    id: 11,
    title: "Atomic Habits",
    author: "James Clear",
    price: 520,
    discount: 10,
    rating: 4.8,
    releaseDate: "2018-10-16",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/9251043-L.jpg"
  },
  
  {
    id: 12,
    title: "Deep Work",
    author: "Cal Newport",
    price: 460,
    discount: 5,
    rating: 4.5,
    releaseDate: "2016-01-05",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/8128694-L.jpg"
  },
  {
    id: 13,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 399,
    discount: 20,
    rating: 4.2,
    releaseDate: "2016-09-13",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/8379276-L.jpg"
  },
  {
    id: 14,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 590,
    discount: 15,
    rating: 4.3,
    releaseDate: "2011-10-25",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/8225269-L.jpg"
  },
  {
    id: 15,
    title: "Grit",
    author: "Angela Duckworth",
    price: 450,
    discount: 12,
    rating: 4.1,
    releaseDate: "2016-05-03",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/8219255-L.jpg"
  },
  {
    id: 16,
    title: "Can't Hurt Me",
    author: "David Goggins",
    price: 670,
    discount: 5,
    rating: 4.9,
    releaseDate: "2018-12-04",
    inStock: false,
    image: "https://covers.openlibrary.org/b/id/9251045-L.jpg"
  },
  {
    id: 17,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    price: 510,
    discount: 10,
    rating: 4.6,
    releaseDate: "2012-02-28",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/7871302-L.jpg"
  },
  {
    id: 18,
    title: "12 Rules for Life",
    author: "Jordan B. Peterson",
    price: 550,
    discount: 8,
    rating: 4.4,
    releaseDate: "2018-01-16",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/8756402-L.jpg"
  },
  {
    id: 19,
    title: "Ego Is the Enemy",
    author: "Ryan Holiday",
    price: 430,
    discount: 7,
    rating: 4.2,
    releaseDate: "2016-06-14",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/8235824-L.jpg"
  },
  {
    id: 20,
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    price: 699,
    discount: 12,
    rating: 4.7,
    releaseDate: "2000-09-01",
    inStock: false,
    image: "https://covers.openlibrary.org/b/id/8798234-L.jpg"
  },
  {
    id: 21,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    price: 350,
    discount: 20,
    rating: 4.5,
    releaseDate: "1997-04-01",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/11221727-L.jpg"
  },
  {
    id: 22,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 680,
    discount: 18,
    rating: 4.7,
    releaseDate: "2011-01-01",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/8128692-L.jpg"
  },
  {
    id: 23,
    title: "Ikigai",
    author: "Héctor García",
    price: 340,
    discount: 10,
    rating: 4.3,
    releaseDate: "2016-11-01",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/8377894-L.jpg"
  },
  {
    id: 24,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 420,
    discount: 5,
    rating: 4.0,
    releaseDate: "1988-05-01",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/9234896-L.jpg"
  },
  {
    id: 25,
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    price: 399,
    discount: 15,
    rating: 4.6,
    releaseDate: "1946-01-01",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/9107535-L.jpg"
  },
  {
    id: 26,
    title: "Meditations",
    author: "Marcus Aurelius",
    price: 360,
    discount: 12,
    rating: 4.4,
    releaseDate: "0180-01-01", // ISO 8601 compliance for BCE dates would require extra formatting.
    inStock: false,
    image: "https://covers.openlibrary.org/b/id/8275401-L.jpg"
  },
  {
    id: 27,
    title: "The Lean Startup",
    author: "Eric Ries",
    price: 580,
    discount: 10,
    rating: 4.2,
    releaseDate: "2011-09-13",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/7855462-L.jpg"
  },
  {
    id: 28,
    title: "Zero to One",
    author: "Peter Thiel",
    price: 490,
    discount: 8,
    rating: 4.1,
    releaseDate: "2014-09-16",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/8275403-L.jpg"
  },
  {
    id: 29,
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    price: 310,
    discount: 6,
    rating: 4.5,
    releaseDate: "1997-11-07",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/8617971-L.jpg"
  },
  {
    id: 30,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 499,
    discount: 14,
    rating: 4.8,
    releaseDate: "2020-09-08",
    inStock: true,
    image: "https://covers.openlibrary.org/b/id/10559122-L.jpg"
  }
];




function Products() {
 const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [price, setPrice] = useState(10000);

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleSortChange = (e) => setSortOption(e.target.value);
  const handlePriceChange = (e) => setPrice(Number(e.target.value));

   const addToCart = (bookId) => {
    // Replace this with your actual cart logic
    console.log(`Add book with id ${bookId} to cart`);
  };
  const filteredBooks = dummyBooks
  // filter by search term in title (case insensitive)
  .filter(book =>
    book.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  )
  // filter by price less than or equal to selected max price
  .filter(book => book.price <= price)
  // sort according to selected option
  .sort((a, b) => {
    switch (sortOption) {
      case "lowPrice":
        return a.price - b.price;
      case "highPrice":
        return b.price - a.price;
      case "highDiscount":
        return b.discount - a.discount;
      case "lowDiscount":
        return a.discount - b.discount;
      case "best":
        return b.rating - a.rating;
      case "new":
        return new Date(b.releaseDate) - new Date(a.releaseDate);
      default:
        return 0;
    }
  });


 return (
    <main className="products-page">
      <aside className="sidebar">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />

        <select onChange={handleSortChange} className="sort-select" value={sortOption}>
          <option value="">Sort by</option>
          <option value="best">Best Seller</option>
          <option value="new">New Released</option>
          <option value="lowPrice">Price - Low to High</option>
          <option value="highPrice">Price - High to Low</option>
          <option value="highDiscount">Discount - High to Low</option>
          <option value="lowDiscount">Discount - Low to High</option>
        </select>

        <label>
          Max Price: ৳{price}
          <input
            type="range"
            min="0"
            max="10000"
            value={price}
            onChange={handlePriceChange}
          />
        </label>
      </aside>

     <section className="book-grid">
  {filteredBooks.length === 0 ? (
    <p>No books found.</p>
  ) : (
    filteredBooks.map((book) => (
      <div key={book.id} className="book-card">
        <img src={book.image} alt={book.title} className="book-image" />
        
        <h4>
  <Link to={`/products/${book.id}`} className="book-title-link">
    {book.title}
  </Link>
</h4>


        <p className="author">{book.author}</p>
        <p className="price">৳{book.price}</p>
        <p className="discount">Discount: {book.discount}%</p>
        <p className={book.inStock ? "in-stock" : "out-stock"}>
          {book.inStock ? "✅ In Stock" : "❌ Out of Stock"}
        </p>

        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(book.id)}
        >
          Add to Cart
        </button>
      </div>
    ))
  )}
</section>

    </main>
  );
}

export default Products;