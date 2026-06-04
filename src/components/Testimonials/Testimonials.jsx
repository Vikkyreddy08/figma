import './Testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="testimonials-title">What our customer <span className="testimonial-highlight">says</span> About Us</h2>
        
        <div className="testimonial-wrap">
          {/* Floating Avatars Left */}
          <div className="float-avatar f1">
            <img src="https://images.unsplash.com/photo-1500648767791-0a1dd7228f2d?auto=format&fit=crop&w=100&crop=faces" alt="" />
          </div>
          <div className="float-avatar f2">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&crop=faces" alt="" />
          </div>
          <div className="float-avatar f3">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&crop=faces" alt="" />
          </div>
          
          {/* Floating Avatars Right */}
          <div className="float-avatar f4">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&crop=faces" alt="" />
          </div>
          <div className="float-avatar f5">
            <img src="https://images.unsplash.com/photo-1488426862026-ee9961c247e0?auto=format&fit=crop&w=100&crop=faces" alt="" />
          </div>
          
          {/* Testimonial Card */}
          <div className="testimonial-card">
            <div className="quote-left">“</div>
            <p className="testimonial-text">
              Elementum delivered the site with inthe timeline as they requested.
              Inthe end, the client found a 50% increase in traffic with in days since its launch.
              They also had an impressive ability to use technologies that the company hasn`t used,
              which have also proved to be easy to use and reliable.
            </p>
            <div className="quote-right">”</div>
          </div>
          
          {/* Author */}
          <div className="testimonial-author">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&crop=faces" alt="" />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Testimonials
