import React, { FC, useRef, useState } from "react";
const HeaderComponent: FC<{}> = () => {
  const searchPopupRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState(""); 

  const toggleDropdown = (menu: any) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const togglePopup = () => {
    debugger;
    setIsVisible(!isVisible);
  };

  const closePopup = () => {
    setIsVisible(false);
  };

   const handleChange = (event: any) => {
      setInputValue(event.target.value);
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



  return (
    <>
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
                      <a href="/" className="search-button">
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
                        <li
                          className={`menu-item has-sub ${
                            activeMenu === "home" ? "active" : ""
                          }`}
                          onMouseOver={() => toggleDropdown("home")}
                        >
                          <a
                            href="index.html"
                            className="item-anchor active d-flex align-item-center"
                            data-effect="Home"
                            onMouseEnter={() => toggleDropdown("home")}
                          >
                            Home<i className="icon icon-chevron-down"></i>
                          </a>
                          <ul
                            className="submenu"
                            style={{
                              display: activeMenu === "home" ? "block" : "none",
                            }}
                          >
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

                        <li
                          className={`menu-item has-sub ${
                            activeMenu === "about" ? "active" : ""
                          }`}
                        >
                          <a
                            href="about.html"
                            className="item-anchor"
                            data-effect="About"
                            onMouseOver={() => toggleDropdown("about")}
                          >
                            About
                          </a>
                        </li>

                        <li
                          className={`menu-item has-sub ${
                            activeMenu === "shop" ? "active" : ""
                          }`}
                        >
                          <a
                            href="shop.html"
                            className="item-anchor d-flex align-item-center"
                            data-effect="Shop"
                            onMouseOver={() => toggleDropdown("shop")}
                          >
                            Shop<i className="icon icon-chevron-down"></i>
                          </a>
                          <ul
                            className="submenu"
                            style={{
                              display: activeMenu === "shop" ? "block" : "none",
                            }}
                          >
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

                        <li
                          className={`menu-item has-sub ${
                            activeMenu === "pages" ? "active" : ""
                          }`}
                        >
                          <a
                            href="/"
                            className="item-anchor d-flex align-item-center"
                            data-effect="Pages"
                            onMouseOver={() => toggleDropdown("pages")}
                          >
                            Pages<i className="icon icon-chevron-down"></i>
                          </a>
                          <ul
                            className="submenu"
                            style={{
                              display:
                                activeMenu === "pages" ? "block" : "none",
                            }}
                          >
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

                        <li
                          className={`menu-item has-sub ${
                            activeMenu === "blog" ? "active" : ""
                          }`}
                        >
                          <a
                            href="blog.html"
                            className="item-anchor d-flex align-item-center"
                            data-effect="Blog"
                            onMouseOver={() => toggleDropdown("blog")}
                          >
                            Blog<i className="icon icon-chevron-down"></i>
                          </a>
                          <ul
                            className="submenu"
                            style={{
                              display: activeMenu === "blog" ? "block" : "none",
                            }}
                          >
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

                        <li
                          className={`menu-item has-sub ${
                            activeMenu === "contact" ? "active" : ""
                          }`}
                        >
                          <a
                            href="contact.html"
                            className="item-anchor"
                            data-effect="Contact"
                            onMouseOver={() => toggleDropdown("contact")}
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
              <a href="/">
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
    </>
  );
};

export default HeaderComponent;
