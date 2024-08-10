import React from 'react'

const ContactUs:React.FC<{}> = () => {
  return (
   <>
 <section 
      className="site-banner jarallax padding-large" 
      style={{
        backgroundImage: 'url(images/hero-image.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top'
      }}>
    <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title">Contact us</h1>
            <div className="breadcrumbs">
              <span className="item">
                <a href="index.html">Home /</a>
              </span>
              <span className="item">Contact us</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="contact-information padding-large">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-header">
              <h2 className="section-title">Get in touch</h2>
            </div>
            <div className="contact-detail">
              <div className="detail-list">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <ul className="list-unstyled list-icon">
                  <li>
                    <a href="#"><i className="icon icon-phone"></i>+1650-243-0000</a>
                  </li>
                  <li>
                    <a href="mailto:info@yourcompany.com"><i className="icon icon-mail"></i>info@yourcompany.com</a>
                  </li>
                  <li>
                    <a href="#"><i className="icon icon-map-pin"></i>North Melbourne VIC 3051, Australia</a>
                  </li>
                </ul>
              </div>
              <div className="social-links">
                <h3>Social Links</h3>
                <ul className="d-flex list-unstyled">
                  <li><a href="#" className="icon icon-facebook"></a></li>
                  <li><a href="#" className="icon icon-twitter"></a></li>
                  <li><a href="#" className="icon icon-instagram"></a></li>
                  <li><a href="#" className="icon icon-youtube-play"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-information">
              <div className="section-header">
                <h2 className="section-title">Send us a message</h2>
              </div>
              <form name="contactform" action="contact.php" method="post" className="contact-form">
                <div className="form-item">
                  <input type="text" minLength={2} name="name" placeholder="Name" className="u-full-width bg-light" required />
                  <input type="email" name="email" placeholder="E-mail" className="u-full-width bg-light" required />
                  <textarea className="u-full-width bg-light" name="message" placeholder="Message" style={{height: "180px"}} required></textarea>
                </div>
                <label>
                  <input type="checkbox" required />
                  <span className="label-body">I agree all the <a href="#">terms and conditions</a>
                  </span>
                </label>
                <button type="submit" name="submit" className="btn btn-dark btn-full btn-medium">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="google-map">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe width={'100%'} height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling={'no'} marginHeight={0} marginWidth={0}></iframe>
          <a href="https://getasearch.com/fmovies"></a>
          <br />         
          <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
        </div>
      </div>
    </section>
   </>
  )
}

export default ContactUs
