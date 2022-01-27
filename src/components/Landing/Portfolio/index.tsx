import React, { useState } from "react";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { H1 } from "../../common";
import {StyledButton} from '../../Webinar/ContactFormBtn';
import { Cover } from "../../Webinar";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const StyledPortfolioWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

const BgImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0.3;
  z-index: 50;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

const Description = styled.div`
  height: 100%;
  width:100%;
  z-index: 100;
  text-align: center;
`;

const DescriptionText = styled.div`
  width: 80%;
  margin-bottom: 10px;

  @media screen and (min-width: 950px) {
    flex-direction: row;
    width: 55%;
    min-width: 450px;
  }
`;

const DesctiprionTitle = styled.h1`
  font-size: 20px;
  font-family: Roboto-Regular, sans-serif;
  font-weight: normal;
  @media screen and (max-width: 500px) {
    font-size: 18px !important;
  }
`;

const DescriptionProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  transition: opacity .7s;
  overflow:hidden;

  @media screen and (min-width: 950px) {
    flex-direction: row;
  }
`;

const DescriptionImage = styled.img`
  width: 220px;
  height: ${(220 * 60) / 100}px;

  @media screen and (min-width: 500px) and (max-width: 799px) {
    width: 300px;
    height: ${(350 * 60) / 100}px;
  }

  @media screen and (min-width: 800px) {
    width: 400px;
    height: ${(400 * 60) / 100}px;
  }
`;

const DescriptionProjectWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ArrowBtn = styled.button`
  background: none;
  outiline: none;
  border: none;
  cursor: pointer;
`;

const portfolio: Array<{ id: number, title: string; src: string, url: string | null }> = [
  {
    id: 1,
    title: "Мобильное приложение для поиска авиабилетов и отелей",
    src: "/t7-travel.png",
    url: "https://exoriri.github.io/T7-contact/",
  },
  {
    id: 2,
    title: "Сайт для государственной поликлиники",
    src: "/ragc.png",
    url: "https://www.ragc.kz/",
  },
  {
    id: 3,
    title: "Сервис c регистрацией магазинов в ТЦ и панелью управления",
    src: "/prenato.png",
    url: 'https://www.prenotabergamo.it/'
  },
  {
    id: 4,
    title: "Интеграция платежной системы в мобильное приложение",
    src: "/perfectly-pressed.png",
    url: 'https://apps.apple.com/ru/app/perfectly-pressed/id1539134468'
  },
];

export const Portfolio = ({ scrollRef }) => {
  const [activeId, setActiveId] = useState(1);

  const onSwitchForward = () => {
    const nextId = activeId+1;
    setActiveId(() => nextId);
  };

  const onSwitchBack = () => {
    const prevId = activeId-1;
    setActiveId(() => prevId);
  };
  
  const isBackBtnDisabled = activeId === 1;
  const isForwardBtnDisabled = activeId === portfolio.length;
  const getVisiblityStyles = (projectId) => {
    const invisible = {
      visibility: 'hidden',
      height: 0,
      width: '0px',
      opacity: 0
    }

    if (projectId === activeId) {
      return {
        visibility: 'visible',
        height: '100%',
        width: '100%',
        opacity: 1
      }
    };
    return invisible;
  } 
  return (
    <div ref={scrollRef}>
    <Cover text="Мы используем" />
    <StyledPortfolioWrapper >
      <Main>
        <Description>
          <DescriptionProjectWrapper>
            <ArrowBtn disabled={isBackBtnDisabled} onClick={onSwitchBack} style={{ opacity: isBackBtnDisabled ? .3 : 1 }}>
              <Icon color={isBackBtnDisabled ? 'grey' : 'purple'} inverted size="big" name="chevron left" />
            </ArrowBtn>
            {portfolio.map(project => {
              return (
                <DescriptionProject style={getVisiblityStyles(project.id)} key={project.id}>
                <DescriptionText>
                  <DesctiprionTitle style={{ color: "#fff" }}>
                    {project.title}
                  </DesctiprionTitle>
                  <StyledButton onClick={() => {
                    window.open(project.url);
                  }}>
                    Посмотреть
                  </StyledButton>
                </DescriptionText>
                <DescriptionImage alt="application" src={project.src} />
              </DescriptionProject>
              )
            })}
            <ArrowBtn style={{ opacity: isForwardBtnDisabled ? .3 : 1 }} disabled={isForwardBtnDisabled} onClick={onSwitchForward}>
              <Icon color={isForwardBtnDisabled ? 'grey' : 'purple'} inverted size="big" name="chevron right" />
            </ArrowBtn>
          </DescriptionProjectWrapper>
        </Description>
      </Main>
      <BgImage>
        <Image
          alt="space"
          objectFit={"cover"}
          layout="fill"
          src="/cases-bg.webp"
        />
      </BgImage>
    </StyledPortfolioWrapper>
    </div>
  );
};
