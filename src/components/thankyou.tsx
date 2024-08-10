import React from 'react'

const thankyou = () => {
  return (
    <section id="thank-you" className="padding-large bg-light-grey">
    <div className="container">
      <div className="row">
        <div className="page-header col-md-6">
          <div className="section-header">
            <h1 className="page-title">Thank You!</h1>
            <p>We will get back to you as soon as possible.</p>
          </div>
        </div>
        <div className="contact-information">
          <div className="col-md-6">
            <div className="section-header">
              <h2 className="section-title">Get in touch</h2>
            </div>
            <div className="row">
              <div className="d-flex flex-wrap bg-light">
                <div className="col-md-6 border-right border-bottom">
                  <div className="detail">
                    <h3>Phones</h3>
                    <ul className="list-unstyled">
                      <li>
                        <i className="icon icon-phone"></i>+1650-243-00023
                      </li>
                      <li>
                        <i className="icon icon-phone"></i>+1650-243-00021
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 border-bottom">
                  <div className="detail">
                    <h3>Emails</h3>
                    <ul className="list-unstyled">
                      <li>
                        <i className="icon icon-envelope"></i>
                        <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
                      </li>
                      <li>
                        <i className="icon icon-envelope"></i>
                        <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 border-right">
                  <div className="address detail">
                    <h3>Address</h3>
                    <ul className="list-unstyled">
                      <li>
                        <i className="icon icon-location"></i>
                        <span>North Melbourne VIC 3051, Australia</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="detail">
                    <h3>Social Links</h3>
                    <ul className="social-links list-unstyled d-flex">
                      <li><a href="#" className="icon icon-facebook"></a></li>
                      <li><a href="#" className="icon icon-twitter"></a></li>
                      <li><a href="#" className="icon icon-youtube-play"></a></li>
                      <li><a href="#" className="icon icon-behance-square"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default thankyou
