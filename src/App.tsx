import React, { useEffect } from "react";
import "swiper/swiper-bundle.css";
import "./App.css";
import HomeCopmponent from "./components/HomeComponent";
import { Route, Routes } from 'react-router-dom';
import AboutUsComponent from "./components/AboutUsComponent";
import Layout from "./Layout";
import ContactUs from "./components/ContactUs";
import BlogComponent from "./components/BlogComponent";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";

const App: React.FC<{}> = () => {
  return (
      <Layout>
        <Routes>
          <Route path="/" Component={HomeCopmponent} />
          <Route path="/about" Component={AboutUsComponent} />
          <Route path="/contactus" Component={ContactUs} />
          <Route path="/blog" Component={BlogComponent} />
          <Route path="/products" Component={Products} />          
          <Route path="/products/:id" Component={ProductDetails} />
          <Route path="/signup" Component={Signup} />
          <Route path="/login" Component={Login} />
          <Route path="*" Component={ErrorPage} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    );
}

export default App;
