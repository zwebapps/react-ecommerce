import React from "react";
const BrandCollection: React.FC<{}> = () => {
  return (
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
  );
};


export default BrandCollection;