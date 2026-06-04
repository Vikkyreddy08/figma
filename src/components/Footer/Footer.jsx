import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        
        {/* Newsletter Section */}
        <div className="newsletter">
          
          {/* Two Pink Wavy Lines at Top of Newsletter */}
          <div className="newsletter-deco-curves">
            <svg width="200" height="90" viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 80C60 40, 100 60, 130 30" stroke="rgba(255,145,170,0.7)" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <path d="M50 85C80 50, 120 70, 150 40" stroke="rgba(255,145,170,0.5)" strokeWidth="3" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          
          <h2 className="newsletter-title">Subscribe to<br/>our newsletter</h2>
          <p className="newsletter-text">To make your stay special and even more memorable</p>
          <button className="newsletter-btn">Subscribe Now</button>
          
          {/* Purple Quarter-Circle */}
          <div className="newsletter-deco-circle"></div>
        </div>
        
        {/* Footer Bottom Columns */}
        <div className="footer-bottom">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Studio</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Terms & Policies</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Youtube</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Terms & Policies</h4>
            <ul>
              <li><a href="#">1498W Fulton st, STE</a></li>
              <li><a href="#">20 Chicago, IL 60607</a></li>
              <li><a href="#">(123)45678900</a></li>
              <li><a href="#">info@elementum.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>©2024 Elementum. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
