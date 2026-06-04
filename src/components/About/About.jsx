import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-left">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80"
                alt="Team collaboration"
                className="about-main-image"
              />
              <div className="about-decorative triangle"></div>
              <div className="about-decorative curve"></div>
            </div>
          </div>
          <div className="about-right">
            <h2 className="about-title">See how we can help you progress</h2>
            <p className="about-description">
              We add a layer of fearless insights and action that allows change-makers
              to accelerate their progress in areas such as brand, design digital,
              comms and social research.
            </p>
            <a href="#" className="read-more-link">
              Read more <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
