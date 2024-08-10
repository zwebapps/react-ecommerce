import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    let { id } = useParams<"id">();
  return (
    <>
    <section className="site-banner padding-small bg-light-grey">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="breadcrumbs">
              <span className="item">
                <a href="index.html">Home /</a>
              </span>
              <span className="item">
                <a href="blog.html">Blog /</a>
              </span> <span className="item">Single post {id}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="main-content d-flex flex-wrap padding-large">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="post-meta">
              <span className="post-date">Feb 22, 2023</span> / <a href="blog.html" className="blog-categories">Fashion</a>
            </div>
            <h1 className="page-title">Top 10 Casual Look Ideas To Dress Up Your Kids</h1>
            <div className="feature-image">
              <img src="images/single-image2.jpg" alt="post image" className="jarallax-img" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="post-content">
              <p><strong>There are shortcuts to happiness, and dressing is one of them.</strong></p>
              <p>Fashion is like dreaming with your feet! Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eisusmod tempor incidunt ut elit et.</p>
              <blockquote>Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur non aliquet orci urna volutpat. Id aliquam neque, ut vivamus sit imperdiet enim, lacus, vel.</blockquote>
              <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, <a href="single-product.html">Casual Product</a> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>
                <strong>Are you amazed ?</strong>
              </p>
              <ul style={{listStyleType: 'disc'}} className="inner-list">
                <li>Blandit mauris libero condimentum commodo sociis convallis sit.</li>
                <li>Magna diam amet justo sed vel dolor et volutpat integer.</li>
                <li>Laculis sit sapien hac odio elementum egestas neque.</li>
              </ul>
              <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,<span className="highlight">quis nostrud exercitation</span> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <div className="post-tags">
                <div className="block-tag">
                  <ul className="list-unstyled d-flex">
                    <li>
                      <a href="#" className="btn btn-dark btn-small btn-rounded">Fashion</a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-dark btn-small btn-rounded">Hoodie</a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-dark btn-small btn-rounded">Casual</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="social-links d-flex margin-small">
                <div className="element-title">Share:</div>
                <ul className="d-flex list-unstyled">
                  <li>
                    <a href="#"><i className="icon icon-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="icon icon-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="icon icon-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="icon icon-youtube-play"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="single-post-navigation">
              <hr />
              <div className="row post-navigation d-flex flex-wrap align-items-center justify-content-between">
                <a itemProp={'url'} className="col-md-6 post-prev d-flex" href="#" title="Previous Post">
                  <span>Previous</span>
                  <h3 className="page-nav-title">Latest trends of wearing street wears supremely</h3>
                </a>
                <a itemProp={'url'} className="col-md-6 post-next d-flex" href="#" title="Next Post">
                  <span>Next</span>
                  <h3 className="page-nav-title">Types of comfortable clothes ideas for women</h3>
                </a>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="post-comment padding-large bg-light-grey">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="comments-wrap">
              <h3>Comments</h3>
              <div className="comment-list">
                <article className="d-flex">
                  <img src="images/review-image1.jpg" alt="default" className="commentor-image" />
                  <div className="author-post">
                    <div className="comment-meta">
                      <h4 className="meta-name">Rachel Ross</h4>
                      <span className="meta-date">Aug 20,2022</span>
                      <small className="comments-reply">
                        <a href="#">
                          <i className="icon icon-reply"></i>Reply </a>
                      </small>
                    </div>
                    <p>Tristique tempis condimentum diam done ullancomroer sit element henddg sit he consequert.Tristique tempis condimentum diam done ullancomroer sit element henddg sit he consequert.</p>
                  </div>
                </article>
                <div className="child-comments">
                  <article className="d-flex">
                    <img src="images/review-image2.jpg" alt="sara" className="commentor-image" />
                    <div className="author-post">
                      <div className="comment-meta">
                        <h4 className="meta-name">Jane Park</h4>
                        <span className="meta-date">Sep 3,2022</span>
                        <small className="comments-reply">
                          <a href="#">
                            <i className="icon icon-reply"></i>Reply </a>
                        </small>
                      </div>
                      <p>Lorem diam done ullancomroer sit element henddg sit he consequert.Tristique tempis condimentum diam done ullancomroer sit element henddg sit he consequert.</p>
                    </div>
                  </article>
                </div>
                <article className="d-flex">
                  <img src="images/review-image1.jpg" alt="default" className="commentor-image" />
                  <div className="author-post">
                    <div className="comment-meta">
                      <h4 className="meta-name">Rachel Ross</h4>
                      <span className="meta-date">Aug 20,2022</span>
                      <small className="comments-reply">
                        <a href="#">
                          <i className="icon icon-reply"></i>Reply </a>
                      </small>
                    </div>
                    <p>Tristique tempis condimentum diam done ullancomroer sit element henddg sit he consequert.Tristique tempis condimentum diam done ullancomroer sit element henddg sit he consequert.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="comment-respond">
              <h3>Leave a Comment</h3>
              <form method="post" className="form-group">
                <input className="form-control u-full-width" type="text" name="author" id="author" placeholder="Your full name" />
                <input className="u-full-width form-control" type="email" name="email" id="email"  placeholder="E-mail Address" />
                <textarea className="form-control u-full-width" id="comment" name="comment" placeholder="Write your comment here" rows={20}></textarea>
                <label className="example-send-yourself-copy">
                  <input type="checkbox" />
                  <span className="label-body">Save my name, email, and website in this browser for the next time I comment.</span>
                </label>
                <button type="submit" name="submit" className="btn btn-dark btn-medium">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="latest-blog" className="padding-large">
      <div className="container">
        <div className="section-header d-flex flex-wrap align-items-center justify-content-between">
          <h2 className="section-title">Related Posts</h2>
          <div className="btn-wrap align-right">
            <a href="#" className="d-flex align-items-center">Read All Articles <i className="icon icon icon-arrow-io"></i>
            </a>
          </div>
        </div>
        <div className="row d-flex flex-wrap">
          <article className="col-md-4 post-item">
            <div className="image-holder zoom-effect">
              <a href="#">
                <img src="images/post-img1.jpg" alt="post" className="post-image" />
              </a>
            </div>
            <div className="post-content d-flex">
              <div className="meta-date">
                <div className="meta-day text-primary">22</div>
                <div className="meta-month">Aug-2021</div>
              </div>
              <div className="post-header">
                <h3 className="post-title">
                  <a href="#">top 10 casual look ideas to dress up your kids</a>
                </h3>
                <a href="blog.html" className="blog-categories">Fashion</a>
              </div>
            </div>
          </article>
          <article className="col-md-4 post-item">
            <div className="image-holder zoom-effect">
              <a href="#">
                <img src="images/post-img2.jpg" alt="post" className="post-image" />
              </a>
            </div>
            <div className="post-content d-flex">
              <div className="meta-date">
                <div className="meta-day text-primary">25</div>
                <div className="meta-month">Aug-2021</div>
              </div>
              <div className="post-header">
                <h3 className="post-title">
                  <a href="#">Latest trends of wearing street wears supremely</a>
                </h3>
                <a href="blog.html" className="blog-categories">Trending</a>
              </div>
            </div>
          </article>
          <article className="col-md-4 post-item">
            <div className="image-holder zoom-effect">
              <a href="#">
                <img src="images/post-img3.jpg" alt="post" className="post-image" />
              </a>
            </div>
            <div className="post-content d-flex">
              <div className="meta-date">
                <div className="meta-day text-primary">28</div>
                <div className="meta-month">Aug-2021</div>
              </div>
              <div className="post-header">
                <h3 className="post-title">
                  <a href="#">types of comfortable clothes ideas for women</a>
                </h3>
                <a href="blog.html" className="blog-categories">Inspiration</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    </>
  )
}

export default ProductDetails
