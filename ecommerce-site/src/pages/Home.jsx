import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Link to the CSS file below

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/${searchTerm.trim().toLowerCase()}`);
      setSearchTerm("");
    }
  };

  return (
    <>
      {/* Section 1 */}
      <section className="sectionStyle1">
        <p className="firstLineStyle">Education Without Limits.</p>
        <p className="secondLineStyle">Learning Without Borders.</p>

        <form onSubmit={handleSubmit} className="searchForm">
          <input
            type="text"
            placeholder="Search your book"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="inputStyle"
          />
          <button type="submit" className="buttonStyle">
            Search
          </button>
        </form>

        <svg
          viewBox="0 0 1440 150"
          className="bottomWave"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#f9f9f9"
            d="M0,100 C 240,50 480,150 720,100 C 960,50 1200,150 1440,100 L1440,150 L0,150 Z"
          />
        </svg>
      </section>

    {/* Section 2 */}
<section className="sectionStyle2">
  <div className="containerStyle"> {/* removed flipped */}
    <div className="textBlockStyle">
      <h1 className="headingStyle">Fiction</h1>
      <p className="quoteStyle">
        Fiction is more than just stories — it's a gateway to other worlds.
        Each page pulls you deeper into imagination, adventure, and emotion.
        Open a book, and let the journey begin.
      </p>
    </div>
    <img
      src="/All_loggo/fiction1.jpg"
      alt="Fiction"
      className="hover-img imageStyle"
    />
  </div>
</section>
{/* Section 3 */}
<section className="sectionStyle2">
  <div className="containerStyle3"> {/* image left — correct */}
    <img
      src="/All_loggo/poetry2.jpeg"
      alt="Comedy"
      className="hover-img imageStyle"
    />
    <div className="textBlockStyle3">
      <h1 className="headingStyle3">Comedy</h1>
      <p className="quoteStyle3">
        Comedy invites you to laugh at the quirks of life and yourself — a
        joyful rebellion against despair. It’s where wit sparks hope and
        lightness melts away the heaviest burdens. Pick up a comedy and
        rediscover the power of joy in every page.
      </p>
    </div>
  </div>

</section>

{/* Section 4 */}
<section className="sectionStyle2">
  <div className="containerStyle flipped"> {/* add flipped */}
    <img
      src="/All_loggo/poetry2.jpeg"
      alt="Poetry"
      className="hover-img imageStyle"
    />
    <div className="textBlockStyle3">
      <h1 className="headingStyle3">Poetry</h1>
      <p className="quoteStyle3">
        In pages bound, the stars align, 
        Worlds are born between each line. 
        Read, and let your soul take flight
        Into the heart of endless night.
        Let words wrap around you like a warm embrace. Feel the rhythm, the beauty, the soul in every line.
      </p>
    </div>
  </div>


</section>




{/* Section 5 */}

<section className="sectionStyle2">
  <div className="containerStyle3"> {/* image left — correct */}
    <img
      src="/All_loggo/poetry2.jpeg"
      alt="Comics"
      className="hover-img imageStyle"
    />
    <div className="textBlockStyle3">
      <h1 className="headingStyle3">Drama</h1>
      <p className="quoteStyle3">
           Drama pulses with the raw emotions and conflicts that define us,
        turning ordinary moments into extraordinary revelations. It
        challenges us to understand others and ourselves in deeper,
        unexpected ways. Dive into drama and feel the heartbeat of human
        experience.
      </p>
    </div>
  </div>
</section>
{/* Section 6 */}
<section className="sectionStyle2">
  <div className="containerStyle"> {/* removed flipped */}
    <div className="textBlockStyle">
      <h1 className="headingStyle">Tragedy</h1>
      <p className="quoteStyle">
        Through tragedy, we explore the depths of sorrow and emerge
        stronger, learning the profound truths that only pain can reveal.
        These stories hold a mirror to our own struggles, reminding us
        that even in darkness, there is meaning. Dare to read tragedy, and
        find courage in the hardest moments of life.
      </p>
    </div>
    <img
      src="/All_loggo/fiction1.jpg"
      alt="Fiction"
      className="hover-img imageStyle"
    />
  </div>
</section>

{/* Section 7 */}
<section className="sectionStyle2">
  <div className="containerStyle3"> {/* image left — correct */}
    <img
      src="/All_loggo/poetry2.jpeg"
      alt="Comics"
      className="hover-img imageStyle"
    />
    <div className="textBlockStyle3">
      <h1 className="headingStyle3">Comics</h1>
      <p className="quoteStyle3">
        Comics bring stories to life with vivid colors, bold lines, and
        unforgettable characters — a playground where imagination runs
        wild. They mix laughter, action, and emotion in ways words alone
        cannot. Flip through a comic and watch the story jump off the
        page.
      </p>
    </div>
  </div>

  {/* Book Selling Section */}

<section className="SellingSection">
  <h2 className="SectionTitle">Best Selling Books</h2>

  <div className="SellWrapper">
    <div className="Sellingbook">
      {[
        { id: 11, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book1.jpg" },
        { id: 12, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book2.gif" },
        { id: 13, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book3.jpg" },
        { id: 14, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book4.jpg" },
        { id: 15, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book5.jpg" },
        { id: 16, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book6.gif" },
        { id: 17, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book7.png" },
        { id: 18, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book8.png" },
        { id: 19, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book9.jpg" },
        { id: 20, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book10.jpg" },
      ].map((book) => (
        <div key={book.id} className="bookCard">
          <img src={book.img} alt={book.name} className="bookImage" />
          <h3 className="bookName">{book.name}</h3>
          <p className="bookPrice">{book.price}</p>
          <p className="authorName">{book.author}</p>
          <p className="stock">{book.stock}</p>
          <button className="cartButton">Add to Cart</button>
        </div>
      ))}
    </div>
  </div>

  <button
        className="seeMoreButton"
        onClick={() => navigate("/products")}
      >
        See More Books
      </button>
</section>


{/* Best Selling Books Section */}

<section className="bestSellingSection">
  <h2 className="bookSectionTitle">Best Selling Books</h2>

  <div className="carouselWrapper">
    <div className="bestSellingCarousel">
      {[
        { id: 11, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book1.jpg" },
        { id: 12, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book2.gif" },
        { id: 13, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book3.jpg" },
        { id: 14, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book4.jpg" },
        { id: 15, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book5.jpg" },
        { id: 16, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book6.gif" },
        { id: 17, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book7.png" },
        { id: 18, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book8.png" },
        { id: 19, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book9.jpg" },
        { id: 20, name: "জোছনা ও জননীর গল্প", price: "৳510", author: "হুমায়ূন আহমেদ", stock: "Product In Stock", rating: 3.8, img: "/All_loggo/book10.jpg" },
        
      ].map((book) => (
        <div key={book.id} className="bookCard">
          <img src={book.img} alt={book.name} className="bookImage" />
          <h3 className="bookName">{book.name}</h3>
          <p className="bookPrice">{book.price}</p>
          <p className="authorName">{book.author}</p>
          <p className="stock">{book.stock}</p>
          <button className="cartButton">Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
</section>





{/* Review Section */}
<section className="reviewSection">
  <h2 className="reviewHeading">Review Our Service</h2>
  
  <div className="reviewCarousel">
    {[
      {
        id: 1,
       img : "/All_loggo/man1.jpg",
        name: "Robiul Hasan jisan",
        rating: 5,
        text: "Amazing service! Found exactly what I wanted with ease.",
      },
      {
        id: 2,
        img: "/All_loggo/man2.webp",
        name: "Jajid Hasan",
        rating: 4,
       text: `Great variety of books,
Great variety of books, fast delivery, very happyGreat variety of books, fast delivery, very happyGreat variety of books, fast delivery, very happyGreat variety of books, 
fast delivery, very happyGreat variety of books, fast delivery, very happy fast delivery, very happy`,

      },
      {
        id: 3,
        img: "/All_loggo/man3.jpg",
        name: "Mehadi Shohel",
        rating: 5,
        text: "Customer support was very helpful and polite.",
      },
      {
        id: 4,
        img: "/All_loggo/man5.webp",
        name: "Abrar hossain",
        rating: 4,
        text: "Easy to use site and quality books at good prices.",
      },
      {
        id: 5,
        img: "/All_loggo/man4.webp",
        name: "Inteser hossin",
        rating: 5,
        text: "Loved the recommendations, found my new favorite author!",
      },
      {
        id: 6,
        img: "/All_loggo/woman6.jpg",
        name: "Frank Arpi",
        rating: 3,
        text: "Good selection but delivery could be faster.",
      },
      {
        id: 7,
        img: "/All_loggo/woman7.jpg",
        name: "Grace Syeda",
        rating: 5,
        text: "A wonderful shopping experience from start to finish.",
      },
      {
        id: 8,
        img: "/All_loggo/woman8.webp",
        name: "Henry Sadiya",
        rating: 4,
        text: "The book quality exceeded my expectations.",
      },
      {
        id: 9,
        img: "/All_loggo/woman10.jpg",
        name: "Isla Rihaa",
        rating: 5,
        text: "User-friendly site and amazing book choices.",
      },
      {
        id: 10,
        img: "/All_loggo/woman11.webp",
        name: "Jack Eshita",
        rating: 5,
        text: "My go-to bookstore now, highly recommend it!",
      },
      {
        id: 11,
        img: "/All_loggo/woman12.webp",
        name: "Kara Sharmin",
        rating: 4,
        text: "Helpful staff and great offers on books.",
      },
      {
        id: 12,
        img: "/All_loggo/woman13.jpg",
        name: "Leo Rifah",
        rating: 3,
        text: "Good prices but some books were delayed.",
      },
      {
        id: 13,
        img: "/All_loggo/woman14.jpg",
        name: "Eva hasan",
        rating: 5,
        text: "Found rare books that I couldn't get anywhere else!",
      },
      {
        id: 14,
        img: "/All_loggo/woman15.",
        name: "Samiha Scott",
        rating: 4,
        text: "Easy checkout process and reliable delivery.",
      },
      {
        id: 15,
        img: "/All_loggo/woman9.webp",
        name: "Barsha Evans",
        rating: 5,
        text: "Fantastic variety and very user friendly!",
      },
    ].map((review, index) => (
      <div key={review.id} className="reviewCard" style={{ animationDelay: `${index * 1.5}s` }}>
        <img src={review.img} alt={review.name} className="reviewUserImg" />
        <div className="reviewContent">
          <h3 className="reviewUserName">{review.name}</h3>
          <div className="reviewStars">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < review.rating ? "star filled" : "star"}>
                &#9733;
              </span>
            ))}
          </div>
          <p className="reviewText">"{review.text}"</p>
        </div>
      </div>
    ))}
  </div>
</section>



<section className="partnerSection">
  <div className="partnerText">
    <h2>Want to Join Us as a Partner?</h2>
    <p>
      With the help of our partners, we can share our expertise and resources around the world. 
      And thus we are expanding as the home of top IT professionals. 
      So contact us to see how you can join our global family!
    </p>
  </div>
  <div className="partnerLogo">
   <img
      src="/All_loggo/partner.jpg"
      alt="Fiction"
      
    />
  </div>
</section>


</section>



    </>
  );
};

export default Home;
    
