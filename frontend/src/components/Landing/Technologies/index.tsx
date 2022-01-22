import React from "react";
import dynamic from "next/dynamic";
import { Cover } from "../../Webinar";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
//@ts-ignore
import styles from "./images.module.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true,
};

export const Technologies = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    variableWidth: true,
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Cover text="Мы используем" />
      <div style={{ backgroundColor: "#fff", padding: 10 }}>
        <OwlCarousel 
          responsive={{ '300': { items: 2 }, '350': { items: 3 }, '600': { items: 5 } }} 
          autoplayTimeout={3000}
          items={5} 
          autoplay 
          margin={30} 
          dots={false} 
          loop
        >
          <div
            style={{
              width: "120px",
              height: "110px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src="/slider-images/angular.png" />
          </div>
          <div
            style={{
              width: "120px",
              height: "110px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src="/slider-images/react.png" />
          </div>
          <div
            style={{
              width: "120px",
              height: "110px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src="/slider-images/Logo-Vuejs.png" />
          </div>
          <div
            style={{
              width: "100px",
              height: "90px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src="/slider-images/redux.png" />
          </div>
          <div
            style={{
              width: "120px",
              height: "110px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src="/slider-images/MongoDB-Logo.png" />
          </div>
          <div
            style={{
              width: "120px",
              height: "110px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src="/slider-images/postgress.png" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Technologies;
