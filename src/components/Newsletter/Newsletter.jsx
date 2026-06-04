import './Newsletter.css'

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-decoration"></div>
          
          <h2 className="newsletter-title">Subscribe to our newsletter</h2>
          <p className="newsletter-description">
            To make your stay special and even more memorable
          </p>
          
          <button className="newsletter-btn">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
