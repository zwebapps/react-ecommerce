import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { redirect } from 'react-router-dom'
import { fetchProducts, Product } from '../store/reducers/productReducer';
import { RootState } from '../store/store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

const Products: React.FC<{}> = () => {
  const { products } = useSelector((state: any) => state.products);

  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();


  const status = useSelector((state: RootState) => state.products.status);
  
    const ProductDetails: any = (id:number) => {
        redirect(`/products/${id}`)
    }


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
   <>
   <section className="site-banner jarallax min-height300 padding-large" style={{ 
    background: 'url(images/hero-image.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top' 
    }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title">Shop page</h1>
            <div className="breadcrumbs">
              <span className="item">
                <a href="index.html">Home /</a>
              </span>
              <span className="item">Shop</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="shopify-grid padding-large">
      <div className="container">
        <div className="row">

          <section id="selling-products" className="col-md-9 product-store">
            <div className="container">
              <ul className="tabs list-unstyled">
                <li data-tab-target="#all" className="active tab">All</li>
                <li data-tab-target="#shoes" className="tab">Shoes</li>
                <li data-tab-target="#tshirts" className="tab">Tshirts</li>
                <li data-tab-target="#pants" className="tab">Pants</li>
                <li data-tab-target="#hoodie" className="tab">Hoodie</li>
                <li data-tab-target="#outer" className="tab">Outer</li>
                <li data-tab-target="#jackets" className="tab">Jackets</li>
                <li data-tab-target="#accessories" className="tab">Accessories</li>
              </ul>
              <div className="tab-content">
                <div id="all" data-tab-content className="active">
                  <div className="row d-flex flex-wrap">
                    {
                    products && products.length > 0 && products.map((product: Product) => (
                    <div className="product-item col-lg-4 col-md-6 col-sm-6" key={product.product_id}>
                      <div className="image-holder">
                        <img src="https://picsum.photos/id/21/200/300" alt={product.title} className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip d-flex" onClick={() => ProductDetails(product.product_id)}>
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
                          <a href="single-product.html">{product.title}</a>
                        </h3>
                        <div className="item-price text-primary">${product.price}</div>
                      </div>
                    </div>
                    ))}
  
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products2.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip d-flex" onClick={() => ProductDetails(2)}>
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products3.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip d-flex" onClick={() => ProductDetails(3)}>
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products4.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products5.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products6.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products7.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products8.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products13.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products14.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products15.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products16.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products13.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products14.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products15.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products16.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products3.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products8.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products5.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products7.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products1.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products4.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products7.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products2.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products17.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products4.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products18.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products3.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products4.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products6.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products7.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products5.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products2.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products6.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products19.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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
                    <div className="product-item col-lg-4 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img src="images/selling-products20.jpg" alt="Books" className="product-image" />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button type="button" className="view-btn tooltip
                              d-flex">
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

          <aside className="col-md-3">
            <div className="sidebar">
              <div className="widgets widget-menu">
                <div className="widget-search-bar">
                  <form role="search" method="get" className="d-flex">
                    <input className="search-field" placeholder="Search" type="text" />
                    <button className="btn btn-dark"><i className="icon icon-search"></i></button>
                  </form>
                </div> 
              </div>
              <div className="widgets widget-product-tags">
                <h5 className="widget-title">Tags</h5>
                <ul className="product-tags sidebar-list list-unstyled">
                  <li className="tags-item">
                    <a href="">White</a>
                  </li>
                  <li className="tags-item">
                    <a href="">Cheap</a>
                  </li>
                  <li className="tags-item">
                    <a href="">Branded</a>
                  </li>
                  <li className="tags-item">
                    <a href="">Modern</a>
                  </li>
                  <li className="tags-item">
                    <a href="">Simple</a>
                  </li>
                </ul>
              </div>
              <div className="widgets widget-product-brands">
                <h5 className="widget-title">Brands</h5>
                <ul className="product-tags sidebar-list list-unstyled">
                  <li className="tags-item">
                    <a href="">Nike</a>
                  </li>
                  <li className="tags-item">
                    <a href="">Adidas</a>
                  </li>
                  <li className="tags-item">
                    <a href="">Puma</a>
                  </li>
                  <li className="tags-item">
                    <a href="">Spike</a>
                  </li>
                </ul>
              </div>
              <div className="widgets widget-price-filter">
                <h5 className="widget-title">Filter By Price</h5>
                <ul className="product-tags sidebar-list list-unstyled">
                  <li className="tags-item">
                    <a href="">Less than $10</a>
                  </li>
                  <li className="tags-item">
                    <a href="">$10- $20</a>
                  </li>
                  <li className="tags-item">
                    <a href="">$20- $30</a>
                  </li>
                  <li className="tags-item">
                    <a href="">$30- $40</a>
                  </li>
                  <li className="tags-item">
                    <a href="">$40- $50</a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          
        </div>        
      </div>      
    </div>

    <hr />
    <section id="latest-blog" className="padding-large">
      <div className="container">
        <div className="section-header d-flex flex-wrap align-items-center justify-content-between">
          <h2 className="section-title">our Journal</h2>
          <div className="btn-wrap align-right">
            <a href="blog.html" className="d-flex align-items-center">Read All Articles <i className="icon icon icon-arrow-io"></i>
            </a>
          </div>
        </div>
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
        </div>
      </div>
    </section>
   </>
  )
}

export default Products;
