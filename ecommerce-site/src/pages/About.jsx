import React from 'react'; 
import './About.css';

// Example images for awards, growth, final sections — replace with your actual URLs
const awardImage = '/All_loggo/about2.jpeg';
const growthImage = '/All_loggo/about1.webp';
const finalImage = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80';

const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section with background image */}
      <section className="hero-section">
        <h1 className="hero-title">OpenWisdom</h1>
      </section>

      {/* Mission & Vision in two columns */}
      <section className="section two-columns mission-vision">
        <div className="column left">
          <h2>Our Mission</h2>
          <p>Your trusted companion for digital leadership by empowering people to achieve more with less.</p>
        </div>
        <div className="column right">
          <h2>Our Vision</h2>
          <p>To be the fastest digital transformation and innovation partner by engaging global talents thus creating positive impact.</p>
        </div>
      </section>

      {/* Leadership Values full width */}
<section className="leadership-values-grid">
  <h2>🌟 Leadership Values</h2>
  <div className="grid">
    <div className="value-card ownership">
      <span className="icon">🧠</span>
      <h3>Ownership</h3>
      <p>Take responsibility and own the challenges.</p>
    </div>
    <div className="value-card agility">
      <span className="icon">⚡</span>
      <h3>Agility & Excellence</h3>
      <p>Deliver the best solutions, and stay agile beyond boundaries.</p>
    </div>
    <div className="value-card honesty">
      <span className="icon">🗣️</span>
      <h3>Honesty</h3>
      <p>Say what you think and do what you say.</p>
    </div>
    <div className="value-card passion">
      <span className="icon">🔥</span>
      <h3>Passion & Commitment</h3>
      <p>Be reliable, dedicated, and smart working.</p>
    </div>
  <div className="value-card growth">
  <span className="icon">🌱</span>
  <h3>Growth Mindset</h3>
  <p>Embrace learning, seek feedback, and continuously improve.</p>
</div>

    <div className="value-card team">
      <span className="icon">🤝</span>
      <h3>Team Spirit</h3>
      <p>Be humble and value relationships.</p>
    </div>
  </div>
</section>



      {/* Awards: left text, right images */}
     <section className="awards-section">
  <div className="container">
    <div className="awards-content">
      <h2 className="awards-title">Awards & Recognitions</h2>
      <p className="awards-description">
        BASIS Best Outsourcing Organization (2013, 2014, 2015, 2017, 2018, 2019, 2020, 2021). Every year Bangladesh Association of Software & Information Services (BASIS) awards IT companies that have brought in foreign revenue. With our years of experience working overseas, we have been winning the award for almost a decade.
      </p>
      <div className="awards-list">
        <p className="award-item"> The Daily Star ICT Award 2017</p>
        <p className="award-item">BASIS Award 2018 Winner (Fin-tech, Real-estate, Transport)</p>
        <p className="award-item">Code Warrior Challenge 2014</p>
        <p className="award-item">HSBC Exporter of the Year 2013</p>
        <p className="award-item">Kaggle - Bronze winner 2019</p>
      </div>
    </div>
    <figure className="awards-image-wrapper" aria-label="Awards gallery">
      
      <img src={awardImage} alt="Company Awards and Recognitions" className="awards-image" />
    </figure>
  </div>
</section>



      {/* Company Growth: left text, right image */}
      <section className="section two-columns growth-section">
        <div className="column left growth-text">
          <h2>Company Growth</h2>
          <p>
            From 2006 to 2021, the company has not only grown significantly but also evolved to become the leading Software Development & IT Service Provider company in Bangladesh. We have extended our global reach and earned a strong reputation.
          </p>
        </div>
        <div className="column right growth-image">
          <img src={growthImage} alt="Company Growth" className="responsive-img" />
        </div>
      </section>

      {/* Final Call to Action section: left text, right image */}
      <section className="section two-columns cta-section">
        <div className="column left cta-text">
          <h2>Let Us Help You Accelerate Your Digital Transformation</h2>
          <p>Contact us to partner in your journey towards innovation and growth.</p>
        </div>
        <div className="column right cta-image">
          <img src={finalImage} alt="Digital Transformation" className="responsive-img" />
        </div>
      </section>

    </div>
  );
};

export default About;
