import './Features.css'

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        
        <div className="features-wrapper">
          
          {/* Pink connecting curves exactly like Figma - connects 2nd img to 1st img and goes down */}
          <div className="deco-s-curve">
            <svg width="100%" height="1200" viewBox="0 0 1000 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Single pink line from 2nd image up to 1st image and then down to Services */}
              <path d="M300 540C460 540, 620 440, 660 240C700 140, 740 180, 720 340C700 500, 620 580, 540 740" stroke="rgba(255,145,170,0.75)" strokeWidth="3" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          
          {/* Feature 1 */}
          <div className="feature-1">
            <div className="feature-1-text">
              <h2 className="feature-1-title">Tomorrow should<br/>be better than today</h2>
              <p className="feature-1-desc">
                We are a team of strategists, designers communicators, researchers.
                Togeather, we belive that progress only happens when you refuse
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
