import React from "react";

const Signup = () => {
  return (
    <>
      <section
        className="site-banner jarallax padding-large"
        style={{
          background: "url(images/hero-image.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title">Register with us</h1>
              <div className="breadcrumbs">
                <span className="item">
                  <a href="index.html">Home /</a>
                </span>
                <span className="item">signup</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-information padding-large">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="contact-information">
                <div className="section-header">
                  <h2 className="section-title">Profile Information</h2>
                </div>
                <form
                  name="contactform"
                  action="contact.php"
                  method="post"
                  className="contact-form"
                >
                  <div className="form-item">
                    <input
                      type="text"
                      minLength={2}
                      name="fname"
                      placeholder="First Name"
                      className="u-full-width bg-light"
                      required
                    />

                    <input
                      type="text"
                      minLength={2}
                      name="lname"
                      placeholder="Last Name"
                      className="u-full-width bg-light"
                      required
                    />
                    
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      className="u-full-width bg-light"
                      required
                    />
                     <input
                      type="number"
                      name="contact"
                      placeholder="Please Provide Working Contact Number"
                      className="u-full-width bg-light"
                      required
                    />                 
                  </div>
                  <label>
                    <input type="checkbox" required />
                    <span className="label-body">
                      I agree all the <a href="#">terms and conditions</a>
                    </span>
                  </label>
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-dark btn-full btn-medium"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
