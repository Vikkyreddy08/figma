import './Progress.css'

const Progress = () => {
  return (
    <section className="progress-section">
      <div className="container">
        <div className="progress-content">
          <div className="progress-left">
            <h2 className="progress-title">Tomorrow should be better than today</h2>
            <p className="progress-description">
              We are a team of strategists, designers, communicators, researchers. Together,
              we believe that progress only happens when you refuse to play things safe.
            </p>
            <button className="btn btn-primary">
              Read More
            </button>
          </div>
          
          <div className="progress-right">
            <div className="progress-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80"
                alt="Team working"
                className="progress-image"
              />
              <div className="progress-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progress
