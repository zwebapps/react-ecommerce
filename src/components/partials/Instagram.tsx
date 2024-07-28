import React from "react";
const Instagram:  React.FC<{}> = () => {
    return (
        <section id="instagram" className="padding-large">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Follow our instagram</h2>
          </div>
          <p>
            Our official Instagram account <a href="/">@ultras</a> or{" "}
            <a href="/">#ultras_clothing</a>
          </p>
          <div className="row d-flex flex-wrap justify-content-between">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <figure className="zoom-effect">
                <img
                  src="images/insta-image1.jpg"
                  alt="instagram"
                  className="insta-image"
                />
                <i className="icon icon-instagram"></i>
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <figure className="zoom-effect">
                <img
                  src="images/insta-image2.jpg"
                  alt="instagram"
                  className="insta-image"
                />
                <i className="icon icon-instagram"></i>
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <figure className="zoom-effect">
                <img
                  src="images/insta-image3.jpg"
                  alt="instagram"
                  className="insta-image"
                />
                <i className="icon icon-instagram"></i>
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <figure className="zoom-effect">
                <img
                  src="images/insta-image4.jpg"
                  alt="instagram"
                  className="insta-image"
                />
                <i className="icon icon-instagram"></i>
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <figure className="zoom-effect">
                <img
                  src="images/insta-image5.jpg"
                  alt="instagram"
                  className="insta-image"
                />
                <i className="icon icon-instagram"></i>
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <figure className="zoom-effect">
                <img
                  src="images/insta-image6.jpg"
                  alt="instagram"
                  className="insta-image"
                />
                <i className="icon icon-instagram"></i>
              </figure>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Instagram;