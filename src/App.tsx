import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./App.css";

function App() {
  const [isPreloaderVisible, setPreloaderVisible] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [subsValue, setSubsValue] = useState('');
  const searchPopupRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleDropdown = (menu:any) => {
    debugger
    setActiveMenu(activeMenu === menu ? null : menu);
  };
  const togglePopup = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  const closePopup = () => {
    setIsVisible(false);
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSubsChange = (event: any) => {
    setSubsValue(event.target.value);
  };

  const handlePopupClick = (event: any) => {
    if (
      event.target === searchPopupRef.current ||
      event.target.classList.contains("search-popup-close") ||
      event.target.closest(".search-popup-close")
    ) {
      closePopup();
    }
  };

  useEffect(() => {
    // Initialize Swiper sliders
    new Swiper(".main-swiper", {
      speed: 500,
      loop: true,
      autoplay: {
        delay: 500,
      },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      pagination: {
        el: "#billboard .swiper-pagination",
        clickable: true,
      },
    });

    new Swiper(".two-column-swiper", {
      speed: 500,
      loop: true,
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    });

    new Swiper("#featured-products .product-swiper", {
      pagination: {
        el: "#featured-products .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 30 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        999: { slidesPerView: 3, spaceBetween: 30 },
        1299: { slidesPerView: 4, spaceBetween: 30 },
      },
    });

    new Swiper("#flash-sales .product-swiper", {
      pagination: {
        el: "#flash-sales .product-swiper .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 30 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        999: { slidesPerView: 3, spaceBetween: 30 },
        1299: { slidesPerView: 4, spaceBetween: 30 },
      },
    });

    const thumbSwiper = new Swiper(".thumb-swiper", {
      slidesPerView: 1,
    });

    setThumbsSwiper(thumbSwiper as any);

    new Swiper(".large-swiper", {
      spaceBetween: 10,
      effect: "fade",
      thumbs: { swiper: thumbsSwiper },
    });

    // Hide preloader
    setPreloaderVisible(false);

    // Event listener for closing the search popup on ESC key
    const handleEsc = (event: any) => {
      if (event.keyCode === 27) setIsVisible(false);
    };
    window.addEventListener("keyup", handleEsc);

    // Popup for search
    const handleKeyUp = (event: any) => {
      if (event.keyCode === 27) {
        // ESC key
        closePopup();
      }
    };

    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
        <div className="preloader-wrapper">
          <div className="preloader"></div>
        </div>
    
      {isVisible && (
        <div
          className="search-popup is-visible"
          ref={searchPopupRef}
          onClick={handlePopupClick}
        >
          <div className="search-popup-container">
            <form
              role="search"
              method="get"
              className="search-form"
              action=""
              onClick={handlePopupClick}
            >
              <input
                type="search"
                id="search-form"
                className="search-field"
                placeholder="Type and press enter"
                value={inputValue}
                onChange={handleChange}
                name="s"
              />
              <button type="submit" className="search-submit">
                <a href="#">
                  <i className="icon icon-search"></i>
                </a>
              </button>
            </form>

            <h5 className="cat-list-title">Browse Categories</h5>

            <ul className="cat-list">
              <li className="cat-list-item">
                <a href="shop.html" title="Men Jackets">
                  Men Jackets
                </a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Fashion">
                  Fashion
                </a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Casual Wears">
                  Casual Wears
                </a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Women">
                  Women
                </a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Trending">
                  Trending
                </a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Hoodie">
                  Hoodie
                </a>
              </li>
              <li className="cat-list-item">
                <a href="shop.html" title="Kids">
                  Kids
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <header id="header">
        <div id="header-wrap">
          <nav className="secondary-nav border-bottom">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-md-4 header-contact">
                  <p>
                    Let's talk! <strong>+57 444 11 00 35</strong>
                  </p>
                </div>
                <div className="col-md-4 shipping-purchase text-center">
                  <p>Free shipping on a purchase value of $200</p>
                </div>
                <div className="col-md-4 col-sm-12 user-items">
                  <ul className="d-flex justify-content-end list-unstyled">
                    <li>
                      <a href="login.html">
                        <i className="icon icon-user"></i>
                      </a>
                    </li>
                    <li>
                      <a href="cart.html">
                        <i className="icon icon-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="wishlist.html">
                        <i className="icon icon-heart"></i>
                      </a>
                    </li>
                    <li
                      className="user-items search-item pe-3"
                      onClick={togglePopup}
                    >
                      <a href="#" className="search-button">
                        <i className="icon icon-search"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <nav className="primary-nav padding-small">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-lg-2 col-md-2">
                  <div className="main-logo">
                    <a href="index.html">
                      <img src="images/main-logo.png" alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10">
                  <div className="navbar">
                    <div
                      id="main-nav"
                      className="stellarnav d-flex justify-content-end right"
                    >
                      <ul className="menu-list">
                      <li className={`menu-item has-sub ${activeMenu === 'home' ? 'active' : ''}`} onMouseOver={() => toggleDropdown('home')}>
                          <a
                            href="index.html"
                            className="item-anchor active d-flex align-item-center"
                            data-effect="Home"
                            onMouseEnter={() => toggleDropdown('home')}
                          >
                            Home<i className="icon icon-chevron-down"></i>
                          </a>
                          <ul className="submenu" style={{ display: activeMenu === 'home'? 'block': 'none' }}>
                            <li>
                              <a
                                href="index.html"
                                className="item-anchor active"
                              >
                                Home
                              </a>
                            </li>
                            <li>
                              <a href="home2.html" className="item-anchor">
                                Home v2
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className={`menu-item has-sub ${activeMenu === 'about' ? 'active' : ''}`}>
                          <a
                            href="about.html"
                            className="item-anchor"
                            data-effect="About"
                            onMouseOver={() => toggleDropdown('about')}
                          >
                            About
                          </a>
                        </li>

                        <li className={`menu-item has-sub ${activeMenu === 'shop' ? 'active' : ''}`}>
                          <a
                            href="shop.html"
                            className="item-anchor d-flex align-item-center"
                            data-effect="Shop"
                            onMouseOver={() => toggleDropdown('shop')}
                          >
                            Shop<i className="icon icon-chevron-down"></i>
                          </a>
                          <ul className="submenu" style={{ display: activeMenu === 'shop'? 'block': 'none' }}>
                            <li>
                              <a href="shop.html" className="item-anchor">
                                Shop
                              </a>
                            </li>
                            <li>
                              <a
                                href="shop-slider.html"
                                className="item-anchor"
                              >
                                Shop slider
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-grid.html" className="item-anchor">
                                Shop grid
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-list.html" className="item-anchor">
                                Shop list
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="single-product.html"
                                className="item-anchor"
                              >
                                Single product
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a href="cart.html" className="item-anchor">
                                Cart<span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a href="wishlist.html" className="item-anchor">
                                Wishlist
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a href="checkout.html" className="item-anchor">
                                Checkout
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className={`menu-item has-sub ${activeMenu === 'pages' ? 'active' : ''}`}>
                          <a
                            href="#"
                            className="item-anchor d-flex align-item-center"
                            data-effect="Pages"
                            onMouseOver={() => toggleDropdown('pages')}
                          >
                            Pages<i className="icon icon-chevron-down"></i>
                          </a>
                          <ul className="submenu" style={{ display: activeMenu === 'pages'? 'block': 'none' }}>
                            <li>
                              <a
                                href="coming-soon.html"
                                className="item-anchor"
                              >
                                Coming soon
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a href="login.html" className="item-anchor">
                                Login
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a href="faqs.html" className="item-anchor">
                                FAQs<span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a href="styles.html" className="item-anchor">
                                Styles
                              </a>
                            </li>
                            <li>
                              <a href="thank-you.html" className="item-anchor">
                                Thankyou
                              </a>
                            </li>
                            <li>
                              <a href="error.html" className="item-anchor">
                                Error page
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className={`menu-item has-sub ${activeMenu === 'blog' ? 'active' : ''}`}>
                          <a
                            href="blog.html"
                            className="item-anchor d-flex align-item-center"
                            data-effect="Blog"
                            onMouseOver={() => toggleDropdown('blog')}
                          >
                            Blog<i className="icon icon-chevron-down"></i>
                          </a>
                          <ul className="submenu" style={{ display: activeMenu === 'blog'? 'block': 'none' }}>
                            <li>
                              <a href="blog.html" className="item-anchor">
                                Blog
                              </a>
                            </li>
                            <li>
                              <a
                                href="blog-sidebar.html"
                                className="item-anchor"
                              >
                                Blog with sidebar
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="blog-masonry.html"
                                className="item-anchor"
                              >
                                Blog masonry
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="single-post.html"
                                className="item-anchor"
                              >
                                Single post
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className={`menu-item has-sub ${activeMenu === 'contact' ? 'active' : ''}`}>
                          <a
                            href="contact.html"
                            className="item-anchor"
                            data-effect="Contact"
                            onMouseOver={() => toggleDropdown('contact')}
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section id="billboard" className="overflow-hidden">
        <button className="button-prev">
          <i className="icon icon-chevron-left"></i>
        </button>
        <button className="button-next">
          <i className="icon icon-chevron-right"></i>
        </button>

        <div className="swiper main-swiper">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide"
              style={{
                backgroundImage: "url('images/banner1.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="banner-content">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="banner-title">Summer Collection</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed eu feugiat amet, libero ipsum enim pharetra hac.
                      </p>
                      <div className="btn-wrap">
                        <a
                          href="shop.html"
                          className="btn btn-light btn-medium d-flex align-items-center"
                        >
                          Shop it now <i className="icon icon-arrow-io"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide"
              style={{
                backgroundImage: "url('images/banner2.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {" "}
              <div className="banner-content">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="banner-title">Casual Collection</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed eu feugiat amet, libero ipsum enim pharetra hac.
                      </p>
                      <div className="btn-wrap">
                        <a
                          href="shop.html"
                          className="btn btn-light btn-light-arrow btn-medium d-flex align-items-center"
                          key="0"
                        >
                          Shop it now <i className="icon icon-arrow-io"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-products" className="product-store padding-large">
        <div className="container">
          <div className="section-header d-flex flex-wrap align-items-center justify-content-between">
            <h2 className="section-title">Featured Products</h2>
            <div className="btn-wrap">
              <a href="shop.html" className="d-flex align-items-center">
                View all products <i className="icon icon icon-arrow-io"></i>
              </a>
            </div>
          </div>
          <div className="swiper product-swiper overflow-hidden">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="product-item">
                  <div className="image-holder">
                    <img
                      src="images/product-item1.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Full sleeve cover shirt</a>
                    </h3>
                    <span className="item-price text-primary">$40.00</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item">
                  <div className="image-holder">
                    <img
                      src="images/product-item2.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Volunteer Half blue</a>
                    </h3>
                    <span className="item-price text-primary">$38.00</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item">
                  <div className="image-holder">
                    <img
                      src="images/product-item3.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Double yellow shirt</a>
                    </h3>
                    <span className="item-price text-primary">$44.00</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item">
                  <div className="image-holder">
                    <img
                      src="images/product-item4.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Long belly grey pant</a>
                    </h3>
                    <span className="item-price text-primary">$33.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>

      <section id="latest-collection">
        <div className="container">
          <div className="product-collection row">
            <div className="col-lg-7 col-md-12 left-content">
              <div className="collection-item">
                <div className="products-thumb">
                  <img
                    src="images/collection-item1.jpg"
                    alt="collection item"
                    className="large-image image-rounded"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 product-entry">
                  <div className="categories">casual collection</div>
                  <h3 className="item-title">street wear.</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dignissim massa diam elementum.
                  </p>
                  <div className="btn-wrap">
                    <a href="shop.html" className="d-flex align-items-center">
                      shop collection <i className="icon icon-arrow-io"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 right-content flex-wrap">
              <div className="collection-item top-item">
                <div className="products-thumb">
                  <img
                    src="images/collection-item2.jpg"
                    alt="collection item"
                    className="small-image image-rounded"
                  />
                </div>
                <div className="col-md-6 product-entry">
                  <div className="categories">Basic Collection</div>
                  <h3 className="item-title">Basic shoes.</h3>
                  <div className="btn-wrap">
                    <a href="shop.html" className="d-flex align-items-center">
                      shop collection <i className="icon icon-arrow-io"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="collection-item bottom-item">
                <div className="products-thumb">
                  <img
                    src="images/collection-item3.jpg"
                    alt="collection item"
                    className="small-image image-rounded"
                  />
                </div>
                <div className="col-md-6 product-entry">
                  <div className="categories">Best Selling Product</div>
                  <h3 className="item-title">woolen hat.</h3>
                  <div className="btn-wrap">
                    <a href="shop.html" className="d-flex align-items-center">
                      shop collection <i className="icon icon-arrow-io"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="subscribe" className="padding-large">
        <div className="container">
          <div className="row">
            <div className="block-text col-md-6">
              <div className="section-header">
                <h2 className="section-title">Get 25% off Discount Coupons</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dictumst amet, metus, sit massa posuere maecenas. At tellus ut
                nunc amet vel egestas.
              </p>
            </div>
            <div className="subscribe-content col-md-6">
              <form id="form" className="d-flex justify-content-between">
                <input
                  type="text"
                  name="email"
                  value={subsValue}
                  onChange={handleSubsChange} 
                  placeholder="Enter your email addresss here"
                />
                <button className="btn btn-dark">Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        id="selling-products"
        className="product-store bg-light-grey padding-large"
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Best selling products</h2>
          </div>
          <ul className="tabs list-unstyled">
            <li data-tab-target="#all" className="active tab">
              All
            </li>
            <li data-tab-target="#shoes" className="tab">
              Shoes
            </li>
            <li data-tab-target="#tshirts" className="tab">
              Tshirts
            </li>
            <li data-tab-target="#pants" className="tab">
              Pants
            </li>
            <li data-tab-target="#hoodie" className="tab">
              Hoodie
            </li>
            <li data-tab-target="#outer" className="tab">
              Outer
            </li>
            <li data-tab-target="#jackets" className="tab">
              Jackets
            </li>
            <li data-tab-target="#accessories" className="tab">
              Accessories
            </li>
          </ul>
          <div className="tab-content">
            <div id="all" data-tab-content className="active">
              <div className="row d-flex flex-wrap">
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products1.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Half sleeve T-shirt</a>
                    </h3>
                    <div className="item-price text-primary">$40.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products2.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Stylish Grey T-shirt</a>
                    </h3>
                    <div className="item-price text-primary">$35.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products3.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Silk White Shirt</a>
                    </h3>
                    <div className="item-price text-primary">$35.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products4.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Grunge Hoodie</a>
                    </h3>
                    <div className="item-price text-primary">$30.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products5.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Full sleeve Jeans jacket</a>
                    </h3>
                    <div className="item-price text-primary">$40.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products6.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Grey Check Coat</a>
                    </h3>
                    <div className="item-price text-primary">$30.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products7.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Long Sleeve T-shirt</a>
                    </h3>
                    <div className="item-price text-primary">$40.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products8.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Half Sleeve T-shirt</a>
                    </h3>
                    <div className="item-price text-primary">$35.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products13.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Orange white Nike</a>
                    </h3>
                    <div className="item-price text-primary">$55.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products14.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Running Shoe</a>
                    </h3>
                    <div className="item-price text-primary">$65.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products15.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Tennis Shoe</a>
                    </h3>
                    <div className="item-price text-primary">$80.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products16.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Nike Brand Shoe</a>
                    </h3>
                    <div className="item-price text-primary">$65.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="shoes" data-tab-content>
              <div className="row d-flex flex-wrap">
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products13.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Orange white Nike</a>
                    </h3>
                    <div className="item-price text-primary">$55.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products14.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Running Shoe</a>
                    </h3>
                    <div className="item-price text-primary">$65.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products15.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Tennis Shoe</a>
                    </h3>
                    <div className="item-price text-primary">$80.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products16.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Nike Brand Shoe</a>
                    </h3>
                    <div className="item-price text-primary">$65.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tshirts" data-tab-content>
              <div className="row d-flex flex-wrap">
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products3.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Silk White Shirt</a>
                    </h3>
                    <div className="item-price text-primary">$35.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products8.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">White Half T-shirt</a>
                    </h3>
                    <div className="item-price text-primary">$30.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products5.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Ghee Half T-shirt</a>
                    </h3>
                    <div className="item-price text-primary">$40.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products7.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Long Sleeve T-shirt</a>
                    </h3>
                    <div className="item-price text-primary">$40.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="pants" data-tab-content>
              <div className="row d-flex flex-wrap">
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products1.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Half sleeve T-shirt</a>
                    </h3>
                    <div className="item-price text-primary">$40.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products4.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Grunge Hoodie</a>
                    </h3>
                    <div className="item-price text-primary">$30.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products7.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Long Sleeve T-shirt</a>
                    </h3>
                    <div className="item-price text-primary">$40.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products2.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Stylish Grey Pant</a>
                    </h3>
                    <div className="item-price text-primary">$40.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="hoodie" data-tab-content>
              <div className="row d-flex flex-wrap">
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products17.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">White Hoodie</a>
                    </h3>
                    <div className="item-price text-primary">$40.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products4.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Navy Blue Hoodie</a>
                    </h3>
                    <div className="item-price text-primary">$45.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products18.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Dark Green Hoodie</a>
                    </h3>
                    <div className="item-price text-primary">$35.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="outer" data-tab-content>
              <div className="row d-flex flex-wrap">
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products3.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Silk White Shirt</a>
                    </h3>
                    <div className="item-price text-primary">$ 35.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products4.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Grunge Hoodie</a>
                    </h3>
                    <div className="item-price text-primary">$ 30.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products6.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Grey Check Coat</a>
                    </h3>
                    <div className="item-price text-primary">$ 30.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products7.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Long Sleeve T-shirt</a>
                    </h3>
                    <div className="item-price text-primary">$ 40.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="jackets" data-tab-content>
              <div className="row d-flex flex-wrap">
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products5.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Full Sleeve Jeans Jacket</a>
                    </h3>
                    <div className="item-price text-primary">$40.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products2.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Stylish Grey Coat</a>
                    </h3>
                    <div className="item-price text-primary">$35.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products6.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Grey Check Coat</a>
                    </h3>
                    <div className="item-price text-primary">$35.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="accessories" data-tab-content>
              <div className="row d-flex flex-wrap">
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products19.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Stylish Women Bag</a>
                    </h3>
                    <div className="item-price text-primary">$35.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products20.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Stylish Gadgets</a>
                    </h3>
                    <div className="item-price text-primary">$30.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="padding-large no-padding-bottom">
        <div className="container">
          <div className="reviews-content">
            <div className="row d-flex flex-wrap">
              <div className="col-md-2">
                <div className="review-icon">
                  <i className="icon icon-right-quote"></i>
                </div>
              </div>
              <div className="col-md-8">
                <div className="swiper testimonial-swiper overflow-hidden">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-detail">
                        <p>
                          “Dignissim massa diam elementum habitant fames. Id
                          nullam pellentesque nisi, eget cursus dictumst
                          pharetra, sit. Pulvinar laoreet id porttitor egestas
                          dui urna. Porttitor nibh magna dolor ultrices iaculis
                          sit iaculis.”
                        </p>
                        <div className="author-detail">
                          <div className="name">By Maggie Rio</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-detail">
                        <p>
                          “Dignissim massa diam elementum habitant fames. Id
                          nullam pellentesque nisi, eget cursus dictumst
                          pharetra, sit. Pulvinar laoreet id porttitor egestas
                          dui urna. Porttitor nibh magna dolor ultrices iaculis
                          sit iaculis.”
                        </p>
                        <div className="author-detail">
                          <div className="name">By John Smith</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-arrows">
                  <button className="prev-button">
                    <i className="icon icon-arrow-left"></i>
                  </button>
                  <button className="next-button">
                    <i className="icon icon-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="flash-sales" className="product-store padding-large">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Flash sales</h2>
          </div>
          <div className="swiper product-swiper flash-sales overflow-hidden">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="product-item">
                  <img
                    src="images/selling-products9.jpg"
                    alt="Books"
                    className="product-image"
                  />
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="discount">10% Off</div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Full sleeve cover shirt</a>
                    </h3>
                    <div className="item-price text-primary">
                      <del className="prev-price">$50.00</del>$40.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item">
                  <img
                    src="images/selling-products10.jpg"
                    alt="Books"
                    className="product-image"
                  />
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="discount">10% Off</div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Long Sleeve T-shirt</a>
                    </h3>
                    <div className="item-price text-primary">
                      <del className="prev-price">$50.00</del>$40.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item">
                  <img
                    src="images/selling-products11.jpg"
                    alt="Books"
                    className="product-image"
                  />
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="discount">10% Off</div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Grey Check Coat</a>
                    </h3>
                    <div className="item-price text-primary">
                      <del className="prev-price">$55.00</del>$45.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item">
                  <img
                    src="images/selling-products12.jpg"
                    alt="Books"
                    className="product-image"
                  />
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="discount">10% Off</div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Silk White Shirt</a>
                    </h3>
                    <div className="item-price text-primary">
                      <del className="prev-price">$45.00</del>$35.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item">
                  <img
                    src="images/selling-products8.jpg"
                    alt="Books"
                    className="product-image"
                  />
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="discount">10% Off</div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Blue Jeans pant</a>
                    </h3>
                    <div className="item-price text-primary">
                      <del className="prev-price">$45.00</del>$35.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      <section className="shoppify-section-banner">
        <div className="container">
          <div className="product-collection">
            <div className="left-content collection-item">
              <div className="products-thumb">
                <img
                  src="images/model.jpg"
                  alt="collection item"
                  className="large-image image-rounded"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 product-entry">
                <div className="categories">Denim collection</div>
                <h3 className="item-title">The casual selection.</h3>
                <p>
                  Vel non viverra ligula odio ornare turpis mauris. Odio
                  aliquam, tincidunt ut vitae elit risus. Tempor egestas
                  condimentum et ac rutrum dui, odio.
                </p>
                <div className="btn-wrap">
                  <a href="shop.html" className="d-flex align-items-center">
                    shop collection <i className="icon icon-arrow-io"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quotation" className="align-center padding-large">
        <div className="inner-content">
          <h2 className="section-title divider">Quote of the day</h2>
          <blockquote>
            <q>
              It's true, I don't like the whole cutoff-shorts-and-T-shirt look,
              but I think you can look fantastic in casual clothes.
            </q>
            <div className="author-name">- Dr. Seuss</div>
          </blockquote>
        </div>
      </section>

      <hr />
      <section id="latest-blog" className="padding-large">
        <div className="container">
          <div className="section-header d-flex flex-wrap align-items-center justify-content-between">
            <h2 className="section-title">our Journal</h2>
            <div className="btn-wrap align-right">
              <a href="blog.html" className="d-flex align-items-center">
                Read All Articles <i className="icon icon icon-arrow-io"></i>
              </a>
            </div>
          </div>
          <div className="row d-flex flex-wrap">
            <article className="col-md-4 post-item">
              <div className="image-holder zoom-effect">
                <a href="single-post.html">
                  <img
                    src="images/post-img1.jpg"
                    alt="post"
                    className="post-image"
                  />
                </a>
              </div>
              <div className="post-content d-flex">
                <div className="meta-date">
                  <div className="meta-day text-primary">22</div>
                  <div className="meta-month">Aug-2021</div>
                </div>
                <div className="post-header">
                  <h3 className="post-title">
                    <a href="single-post.html">
                      top 10 casual look ideas to dress up your kids
                    </a>
                  </h3>
                  <a href="blog.html" className="blog-categories">
                    Fashion
                  </a>
                </div>
              </div>
            </article>
            <article className="col-md-4 post-item">
              <div className="image-holder zoom-effect">
                <a href="single-post.html">
                  <img
                    src="images/post-img2.jpg"
                    alt="post"
                    className="post-image"
                  />
                </a>
              </div>
              <div className="post-content d-flex">
                <div className="meta-date">
                  <div className="meta-day text-primary">25</div>
                  <div className="meta-month">Aug-2021</div>
                </div>
                <div className="post-header">
                  <h3 className="post-title">
                    <a href="single-post.html">
                      Latest trends of wearing street wears supremely
                    </a>
                  </h3>
                  <a href="blog.html" className="blog-categories">
                    Trending
                  </a>
                </div>
              </div>
            </article>
            <article className="col-md-4 post-item">
              <div className="image-holder zoom-effect">
                <a href="single-post.html">
                  <img
                    src="images/post-img3.jpg"
                    alt="post"
                    className="post-image"
                  />
                </a>
              </div>
              <div className="post-content d-flex">
                <div className="meta-date">
                  <div className="meta-day text-primary">28</div>
                  <div className="meta-month">Aug-2021</div>
                </div>
                <div className="post-header">
                  <h3 className="post-title">
                    <a href="single-post.html">
                      types of comfortable clothes ideas for women
                    </a>
                  </h3>
                  <a href="blog.html" className="blog-categories">
                    Inspiration
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="brand-collection" className="padding-medium bg-light-grey">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between">
            <img src="images/brand1.png" alt="phone" className="brand-image" />
            <img src="images/brand2.png" alt="phone" className="brand-image" />
            <img src="images/brand3.png" alt="phone" className="brand-image" />
            <img src="images/brand4.png" alt="phone" className="brand-image" />
            <img src="images/brand5.png" alt="phone" className="brand-image" />
          </div>
        </div>
      </section>

      <section id="instagram" className="padding-large">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Follow our instagram</h2>
          </div>
          <p>
            Our official Instagram account <a href="#">@ultras</a> or{" "}
            <a href="#">#ultras_clothing</a>
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

      <section id="shipping-information">
        <hr />
        <div className="container">
          <div className="row d-flex flex-wrap align-items-center justify-content-between">
            <div className="col-md-3 col-sm-6">
              <div className="icon-box">
                <i className="icon icon-truck"></i>
                <h4 className="block-title">
                  <strong>Free shipping</strong> Over $200
                </h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="icon-box">
                <i className="icon icon-return"></i>
                <h4 className="block-title">
                  <strong>Money back</strong> Return within 7 days
                </h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="icon-box">
                <i className="icon icon-tags1"></i>
                <h4 className="block-title">
                  <strong>Buy 4 get 5th</strong> 50% off
                </h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="icon-box">
                <i className="icon icon-help_outline"></i>
                <h4 className="block-title">
                  <strong>Any questions?</strong> experts are ready
                </h4>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </section>

      <footer id="footer">
        <div className="container">
          <div className="footer-menu-list">
            <div className="row d-flex flex-wrap justify-content-between">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-menu">
                  <h5 className="widget-title">Ultras</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item">
                      <a href="about.html">About us</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Conditions </a>
                    </li>
                    <li className="menu-item">
                      <a href="blog.html">Our Journals</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Careers</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Affiliate Programme</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Ultras Press</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-menu">
                  <h5 className="widget-title">Customer Service</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item">
                      <a href="faqs.html">FAQ</a>
                    </li>
                    <li className="menu-item">
                      <a href="contact.html">Contact</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Returns & Refunds</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Cookie Guidelines</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Delivery Information</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-menu">
                  <h5 className="widget-title">Contact Us</h5>
                  <p>
                    Do you have any questions or suggestions?{" "}
                    <a href="#" className="email">
                      ourservices@ultras.com
                    </a>
                  </p>
                  <p>
                    Do you need assistance? Give us a call. <br />
                    <strong>+57 444 11 00 35</strong>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-menu">
                  <h5 className="widget-title">Forever 2018</h5>
                  <p>
                    Cras mattis sit ornare in metus eu amet adipiscing enim.
                    Ullamcorper in orci, ultrices integer eget arcu. Consectetur
                    leo dignissim lacus, lacus sagittis dictumst.
                  </p>
                  <div className="social-links">
                    <ul className="d-flex list-unstyled">
                      <li>
                        <a href="#">
                          <i className="icon icon-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon icon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon icon-youtube-play"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon icon-behance-square"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </footer>

      <div id="footer-bottom">
        <div className="container">
          <div className="d-flex align-items-center flex-wrap justify-content-between">
            <div className="copyright">
              <p>
                Freebies by{" "}
                <a href="https://templatesjungle.com/">Templates Jungle</a>{" "}
                Distributed by <a href="https://themewagon.com">ThemeWagon</a>
              </p>
            </div>
            <div className="payment-method">
              <p>Payment options :</p>
              <div className="card-wrap">
                <img src="images/visa-icon.jpg" alt="visa" />
                <img src="images/mastercard.png" alt="mastercard" />
                <img src="images/american-express.jpg" alt="american-express" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
