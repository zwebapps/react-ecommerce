import React from "react";

const Login = () => {
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
              <h1 className="page-title">Login</h1>
              <div className="breadcrumbs">
                <span className="item">
                  <a href="index.html">Home /</a>
                </span>
                <span className="item">login</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-information padding-large">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="contact-information">
                <div className="section-header">
                  <h2 className="section-title">Login Information</h2>
                </div>
                <form
                  name="contactform"
                  action="contact.php"
                  method="post"
                  className="contact-form"
                >
                  <div className="form-item">
                  
                    
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      className="u-full-width bg-light"
                      required
                    />
                     <input
                      type="password"
                      name="password"
                      placeholder="Please provide your password"
                      className="u-full-width bg-light"
                      required
                    />                 
                  </div>                
                  <button
                    type="submit"
                    name="login"
                    className="btn btn-dark btn-full btn-medium"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
