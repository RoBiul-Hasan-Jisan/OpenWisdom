import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

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
    summary:
     "নেহাত কথার প্রসঙ্গ ধরে ব্যক্তিগত আলাপের যে গল্প, সেই গল্পের হাত ধরেই একদিন শিহাব সিদ্ধান্ত নেয়, হাসানকে সে আত্মহত্যা করতে বলবে। তারপর দিনের পর দিন হাসানের সাথে এই নিয়ে আলাপ আলোচনা কম হয়নি। এমতাবস্থায় একদিন এক সমঝোতা হয় তাদের ভেতরে। হাসান সম্মতি জানিয়ে বলে, চলে যাবার আগে পৃথিবী বরাবর কিছু লিখে যেতে চায়। সেই চিঠি শেষ করে হাসান আত্মহত্যা করবার জন্য দড়ি কিনতে ঘর থেকে বের হয়। বেলা গড়িয়ে সন্ধ্যায় সে ফেরে একটা অ্যাকুরিয়াম নিয়ে। সে আত্মহত্যা করবে না। ",
    specification: "Paperback, 320 pages, English, ISBN: 978-1577314806",
    reviews: [
      {
        id: 1,
        name: "Md Tanvir Alam",
        date: "2025-05-17",
        verified: true,
        text: "সুন্দর🤎 আপনার জন্য শুভ কামনা রইল",
        helpfulYes: 3,
        helpfulNo: 0,
      },
      {
        id: 2,
        name: "Sarah Johnson",
        date: "2025-04-21",
        verified: false,
        text: "Inspiring read, highly recommend it to anyone seeking peace of mind.",
        helpfulYes: 5,
        helpfulNo: 1,
      },
    ],
    qna: [
      {
        question: "Is this book suitable for beginners in spirituality?",
        asker: "John Doe",
        date: "2025-05-01",
        answer: "Yes, it is very beginner-friendly and easy to understand.",
        answeredBy: "Eckhart Tolle Official",
        answerDate: "2025-05-02",
      },
    ],
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
    summary:
      "An insightful guide on how tiny changes can create remarkable results in habits and life.",
    specification: "Hardcover, 320 pages, English, ISBN: 978-0735211292",
    reviews: [
      {
        id: 1,
        name: "Emma Williams",
        date: "2025-03-15",
        verified: true,
        text: "A game-changer for personal development and habit formation!",
        helpfulYes: 7,
        helpfulNo: 0,
      },
    ],
    qna: [],
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
    summary:
      "A handbook of agile software craftsmanship teaching principles and best practices for writing clean code.",
    specification: "Paperback, 464 pages, English, ISBN: 978-0132350884",
    reviews: [
      {
        id: 1,
        name: "Michael Chen",
        date: "2024-12-10",
        verified: true,
        text: "Must-read for every software developer wanting to improve their coding skills.",
        helpfulYes: 12,
        helpfulNo: 1,
      },
    ],
    qna: [
      {
        question: "Does this book cover testing practices?",
        asker: "Alice Cooper",
        date: "2025-01-05",
        answer:
          "Yes, it includes chapters on unit testing and test-driven development.",
        answeredBy: "Robert C. Martin",
        answerDate: "2025-01-10",
      },
    ],
  },
];




export default function ProductDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("summary");

  const book = dummyBooks.find((b) => b.id === Number(id));

  if (!book) {
    return <div>Book not found!</div>;
  }

  const discountedPrice = book.price - (book.price * book.discount) / 100;

  return (
    <div className="product-page">
      <div className="top-section">
        <div className="image-container">
          <img src={book.image} alt={book.title} />
        </div>

        <div className="info-container">
          <h1>{book.title}</h1>
          <p className="author">by {book.author}</p>

          <div className="price-row">
            <span className="discounted-price">৳{discountedPrice.toFixed(2)}</span>
            {book.discount > 0 && (
              <>
                <span className="original-price">৳{book.price}</span>
                <span className="discount-tag">-{book.discount}%</span>
              </>
            )}
          </div>

          <div className="rating-stock-row">
            <div className="rating">⭐ {book.rating} / 5</div>
            <div className={`stock ${book.inStock ? "in" : "out"}`}>
              {book.inStock ? "In Stock ✅" : "Out of Stock ❌"}
            </div>
          </div>

          <p className="release-date">Release Date: {book.releaseDate}</p>

          <div className="actions">
            <button disabled={!book.inStock} className="btn add-cart-btn">
              🛒 Add to Cart
            </button>
            <Link to="/products" className="btn back-btn">
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>

      <div className="tabs">
        <div className="tab-buttons">
          <button
            className={activeTab === "summary" ? "active" : ""}
            onClick={() => setActiveTab("summary")}
          >
            Product Specification & Summary
          </button>
          <button
            className={activeTab === "reviews" ? "active" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews and Ratings
          </button>
          <button
            className={activeTab === "qna" ? "active" : ""}
            onClick={() => setActiveTab("qna")}
          >
            Product Q/A
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "summary" && (
            <>
              <h2>Summary</h2>
              <p>{book.summary}</p>

              <h2>Specification</h2>
              <p>{book.specification}</p>

              <h2>Author</h2>
              <p>{book.author}</p>
            </>
          )}

          {activeTab === "reviews" && (
            <>
              <h2>
                Reviews and Ratings
                <span className="rating-average">
                  {book.rating} / 5 ({book.reviews.length} Reviews)
                </span>
              </h2>

              <div className="reviews-list">
                {book.reviews.map((rev) => (
                  <div key={rev.id} className="review-item">
                    <div className="review-header">
                      <strong>{rev.name}</strong>{" "}
                      <span className="review-date">{rev.date}</span>{" "}
                      {rev.verified && <span className="verified">Verified Purchase</span>}
                    </div>
                    <p className="review-text">{rev.text}</p>
                    <div className="review-helpful">
                      Was this review helpful to you?{" "}
                      <button>Helpful ({rev.helpfulYes})</button>{" "}
                      <button>Not Helpful ({rev.helpfulNo})</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "qna" && (
            <>
              <h2>Product Q/A</h2>
              <div className="qna-list">
                {book.qna.map((qa, i) => (
                  <div key={i} className="qa-item">
                    <p>
                      <strong>Q:</strong> {qa.question} <em>By {qa.asker} on {qa.date}</em>
                    </p>
                    <p>
                      <strong>A:</strong> {qa.answer} <em>Answered by {qa.answeredBy} on {qa.answerDate}</em>
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
