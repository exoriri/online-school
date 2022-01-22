import React from "react";
import Image from 'next/image';
import dynamic from "next/dynamic";
import { Cover } from "../../Webinar";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
          responsive={{ '300': { items: 2 }, '350': { items: 3 }, '600': { items: 4 }, '1100': { items: 5 } }} 
          autoplayTimeout={3000}
          autoplay 
          margin={10} 
          dots={false} 
        >
          <div
            style={{
              width: "120px",
              height: "110px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image width={180} height={100} alt="angular" src="/slider-images/angular.png" />
          </div>
          <div
            style={{
              width: "120px",
              height: "110px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image width={141} height={100} alt="react" src="/slider-images/react.png" />
          </div>
          <div
            style={{
              width: "120px",
              height: "110px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image width={167} height={100} alt="vue" src="/slider-images/Logo-Vuejs.webp" />
          </div>
          <div
            style={{
              width: "120px",
              height: "110px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image width={176} height={100} alt="fig" src="/slider-images/figma.png" />
          </div>
          <div
            style={{
              width: "130px",
              height: "100px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image width={111} height={100} alt="redux" src="/slider-images/redux.png" />
          </div>
          <div
            style={{
              width: "120px",
              height: "110px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image width={160} height={100} alt="mongo" src="/slider-images/MongoDB-Logo.png" />
          </div>
          <div
            style={{
              width: "120px",
              height: "110px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image width={117} height={100} alt="docker" src="/slider-images/docker.png" />
          </div>
          <div
            style={{
              width: "120px",
              height: "110px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image width={110} height={100} alt="postgress" src="/slider-images/postgress.webp" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Technologies;