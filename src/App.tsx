import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./App.css";
import LoaderComponent from "./components/LoaderComponent";
import HeaderComponent from "./components/HeaderComponent";
import HomeCopmponent from "./components/HomeComponent";
import FooterComponent from "./components/FooterComponent";
import ShoppifyBanner from "./components/partials/ShoppifyBanner";
import Quotation from "./components/partials/Quotation";
import LatestBlog from "./components/partials/LatestBlog";
import BrandCollection from "./components/partials/BrandCollection";
import ShippingInformation from "./components/partials/ShippingInformation";

function App() {
  const thumbSwiper = new Swiper(".thumb-swiper", {
    slidesPerView: 1,
  });
  const [isPreloaderVisible, setPreloaderVisible] = useState(true); 
  const [subsValue, setSubsValue] = useState('');
  const [thumbsSwiper, setThumbsSwiper] = useState(thumbSwiper);


  const handleSubsChange = (event: any) => {
    setSubsValue(event.target.value);
  };



  useEffect(() => {
    debugger
    console.log("App mounted");
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

    const thumbSwiperRender = new Swiper(".thumb-swiper", {
      slidesPerView: 1,
    });

    // setThumbsSwiper(thumbSwiperRender as any);

    new Swiper(".large-swiper", {
      spaceBetween: 10,
      effect: "fade",
      thumbs: { swiper: thumbSwiperRender },
    });

    // Hide preloader
    setPreloaderVisible(false);

    // // Event listener for closing the search popup on ESC key
    // const handleEsc = (event: any) => {
    //   if (event.keyCode === 27) setIsVisible(false);
    // };
    // window.addEventListener("keyup", handleEsc);
   
  }, [isPreloaderVisible]);

  return (
    <div className="App">
      {isPreloaderVisible && (
          <LoaderComponent />
        )}
   

      <HeaderComponent />

      <HomeCopmponent subsValue={subsValue} handleSubsChange={handleSubsChange} />

      <ShoppifyBanner />

      <Quotation />

      <hr />
      
      <LatestBlog />

      <BrandCollection />
  
      <ShippingInformation />

     <FooterComponent />
    </div>
  );
}

export default App;
