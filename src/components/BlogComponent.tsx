import React from 'react'

const BlogComponent:React.FC<{}> = () => {
  return (
  <>
   <section className="site-banner jarallax min-height300 padding-large" style={{
        backgroundImage: 'url(images/hero-image1.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top'
      }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title">Blog page</h1>
            <div className="breadcrumbs">
              <span className="item">
                <a href="index.html">Home /</a>
              </span>
              <span className="item">Blog</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="latest-blog" className="post-grid padding-large">
      <div className="container">
        <div className="row d-flex flex-wrap">
          <article className="col-md-4 post-item">
            <div className="image-holder zoom-effect">
              <a href="single-post.html">
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
                  <a href="single-post.html">top 10 casual look ideas to dress up your kids</a>
                </h3>
                <a href="blog.html" className="blog-categories">Fashion</a>
              </div>
            </div>
          </article>
          <article className="col-md-4 post-item">
            <div className="image-holder zoom-effect">
              <a href="single-post.html">
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
                  <a href="single-post.html">Latest trends of wearing street wears supremely</a>
                </h3>
                <a href="blog.html" className="blog-categories">Trending</a>
              </div>
            </div>
          </article>
          <article className="col-md-4 post-item">
            <div className="image-holder zoom-effect">
              <a href="single-post.html">
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
                  <a href="single-post.html">types of comfortable clothes ideas for women</a>
                </h3>
                <a href="blog.html" className="blog-categories">Inspiration</a>
              </div>
            </div>
          </article>
          <article className="col-md-4 post-item">
            <div className="image-holder zoom-effect">
              <a href="single-post.html">
                <img src="images/post-img2.jpg" alt="post" className="post-image" />
              </a>
            </div>
            <div className="post-content d-flex">
              <div className="meta-date">
                <div className="meta-day text-primary">28</div>
                <div className="meta-month">Aug-2021</div>
              </div>
              <div className="post-header">
                <h3 className="post-title">
                  <a href="single-post.html">types of comfortable clothes ideas for women</a>
                </h3>
                <a href="blog.html" className="blog-categories">Inspiration</a>
              </div>
            </div>
          </article>
          <article className="col-md-4 post-item">
            <div className="image-holder zoom-effect">
              <a href="single-post.html">
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
                  <a href="single-post.html">types of comfortable clothes ideas for women</a>
                </h3>
                <a href="blog.html" className="blog-categories">Inspiration</a>
              </div>
            </div>
          </article>
          <article className="col-md-4 post-item">
            <div className="image-holder zoom-effect">
              <a href="single-post.html">
                <img src="images/post-img1.jpg" alt="post" className="post-image" />
              </a>
            </div>
            <div className="post-content d-flex">
              <div className="meta-date">
                <div className="meta-day text-primary">28</div>
                <div className="meta-month">Aug-2021</div>
              </div>
              <div className="post-header">
                <h3 className="post-title">
                  <a href="single-post.html">types of comfortable clothes ideas for women</a>
                </h3>
                <a href="blog.html" className="blog-categories">Inspiration</a>
              </div>
            </div>
          </article>
          <article className="col-md-4 post-item">
            <div className="image-holder zoom-effect">
              <a href="single-post.html">
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
                  <a href="single-post.html">types of comfortable clothes ideas for women</a>
                </h3>
                <a href="blog.html" className="blog-categories">Inspiration</a>
              </div>
            </div>
          </article>
          <article className="col-md-4 post-item">
            <div className="image-holder zoom-effect">
              <a href="single-post.html">
                <img src="images/post-img1.jpg" alt="post" className="post-image" />
              </a>
            </div>
            <div className="post-content d-flex">
              <div className="meta-date">
                <div className="meta-day text-primary">28</div>
                <div className="meta-month">Aug-2021</div>
              </div>
              <div className="post-header">
                <h3 className="post-title">
                  <a href="single-post.html">types of comfortable clothes ideas for women</a>
                </h3>
                <a href="blog.html" className="blog-categories">Inspiration</a>
              </div>
            </div>
          </article>
          <article className="col-md-4 post-item">
            <div className="image-holder zoom-effect">
              <a href="single-post.html">
                <img src="images/post-img2.jpg" alt="post" className="post-image" />
              </a>
            </div>
            <div className="post-content d-flex">
              <div className="meta-date">
                <div className="meta-day text-primary">28</div>
                <div className="meta-month">Aug-2021</div>
              </div>
              <div className="post-header">
                <h3 className="post-title">
                  <a href="single-post.html">types of comfortable clothes ideas for women</a>
                </h3>
                <a href="blog.html" className="blog-categories">Inspiration</a>
              </div>
            </div>
          </article>
        </div>
        <nav className="navigation paging-navigation text-center padding-medium" role="navigation">
          <div className="pagination loop-pagination d-flex justify-content-center">
            <a href="#" className="pagination-arrow d-flex align-items-center">
              <i className="icon icon-arrow-left"></i>
            </a>
            <span aria-current="page" className="page-numbers current">1</span>
            <a className="page-numbers" href="#">2</a>
            <a className="page-numbers" href="#">3</a>
            <a href="#" className="pagination-arrow d-flex align-items-center">
              <i className="icon icon-arrow-right"></i>
            </a>
          </div>
        </nav>
      </div>
    </section>
  </>
  )
}

export default BlogComponent
