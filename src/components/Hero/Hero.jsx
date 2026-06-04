import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        
        {/* Left Decorative Wavy Squiggly Lines */}
        <div className="deco-left">
          <svg width="120" height="220" viewBox="0 0 120 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 30C60 60, 30 90, 60 120C90 150, 60 180, 90 210" stroke="#222" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            <path d="M15 20C55 60, 15 100, 55 140C95 180, 55 200, 95 220" stroke="rgba(255,145,170,0.7)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
        
        {/* Right Decorative Purple Quarter-Circle */}
        <div className="deco-right">
          <div className="deco-quarter-circle"></div>
        </div>
        
        {/* Hero Main Content */}
        <div className="hero-main">
          <h1 className="hero-title">
            The <span className="highlight-yellow">thinkers</span> and<br/>
            doers were <span className="highlight-pink">changing</span><br/>
            the <span className="highlight-green">status Quo</span> with
          </h1>
          <p className="hero-text">
            We are a team of strategists, designers communicators, researchers. Togeather,
            we belive that progress only hghappens when you refuse to play things safe.
          </p>
          
          {/* Team Avatars */}
          <div className="team-avatars">
            <div className="avatar avatar1"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" alt="Team member"/></div>
            <div className="avatar avatar2"><img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=200&q=80" alt="Team member"/></div>
            <div className="avatar avatar3"><img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=200&q=80" alt="Team member"/></div>
            <div className="avatar avatar4"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" alt="Team member"/></div>
            <div className="avatar avatar5"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80" alt="Team member"/></div>
            <div className="avatar avatar6"><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" alt="Team member"/></div>
            <div className="avatar avatar7"><img src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=200&q=80" alt="Team member"/></div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero
