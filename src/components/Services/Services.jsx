import './Services.css'

const Services = () => {
  const servicesData = [
    {
      id: 1,
      number: '01',
      smallText: 'Office of multiple interest content',
      title: 'Colaborative & partnership'
    },
    {
      id: 2,
      number: '02',
      smallText: 'The hanger US Air force digital experimental',
      title: 'We talk about our weight'
    },
    {
      id: 3,
      number: '03',
      smallText: 'Delta faucet content, social, digital',
      title: 'Piloting digital confidence'
    }
  ]

  return (
    <section className="services">
      <div className="container">
        <div className="services-wrapper">
          
          <h2 className="services-title">
            What we <span className="highlight-green">can</span> <span className="highlight-underline">offer you</span>!
          </h2>
          
          <div className="services-list">
            {servicesData.map(service => (
              <div key={service.id} className="service-item">
                <div className="service-left">
                  <span className="service-number">{service.number}</span>
                  <p className="service-small-text">{service.smallText}</p>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <span className="service-arrow">
                    <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 4L23 11L13 18" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Services
