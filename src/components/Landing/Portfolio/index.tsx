import React from "react";
import styled from "styled-components";
import Image from "next/image";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const StyledPortfolioWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`;

export const Portfolio = ({ scrollRef }) => {
  return (
      <StyledPortfolioWrapper ref={scrollRef}>
        <div style={{ display: 'flex', color: "#fff", zIndex: 100000000 }}>
          <p>asdfsfsfasdfasdfasdfsddfsfs</p>
        </div>
        <div
          style={{ position: "absolute", width: '100%', height: '100%', opacity: .4, zIndex: 1, left: 0, top: 0 }}
        >
          <Image
            objectFit="cover"
            layout="fill"
            src="/cases-bg.webp"
            alt="spaced-star-background"
          />
        </div>
      </StyledPortfolioWrapper>
  );
};
