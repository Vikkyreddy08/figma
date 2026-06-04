import './Features.css'

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        
        <div className="features-wrapper">
          
          {/* Two pink connecting curves between the two images, like Figma */}
          <div className="deco-s-curve">
            <svg width="100%" height="1100" viewBox="0 0 1000 1100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M380 200C520 260, 650 340, 700 450" stroke="rgba(255,145,170,0.75)" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <path d="M400 170C540 230, 670 310, 730 420" stroke="rgba(255,145,170,0.55)" strokeWidth="3" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          
          {/* Feature 1 */}
          <div className="feature-1">
            <div className="feature-1-text">
              <h2 className="feature-1-title">Tomorrow should<br/>be better than today</h2>
              <p className="feature-1-desc">
                We are a team of strategists, designers communicators, researchers.
                Together, we believe that progress only happens when you refuse
                to play things safe.
              </p>
              <a href="#" className="read-more-btn">
                Read more <span className="read-line"></span>
              </a>
            </div>
            <div className="feature-1-img">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" alt=""/>
              <div className="triangle-orange"></div>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-2">
            <div className="feature-2-img">
              <img src="https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=600&q=80" alt=""/>
              <div className="triangle-left"></div>
              <div className="triangle-right"></div>
            </div>
            <div className="feature-2-text">
              <h2 className="feature-2-title">
                <span className="highlight-green">See</span> how we can<br/>help you progress
              </h2>
              <p className="feature-2-desc">
                We add a layer of fearless insights and action that allows change
                makers to accelerate their progress in areas such as brand, design
                digital, comms and social research.
              </p>
              <a href="#" className="read-more-btn-2">
                Read more <span className="read-line"></span>
              </a>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  )
}

export default Features
