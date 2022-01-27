import React from "react";
import Image from "next/image";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

import { Box, H1, H2 } from "../../../components/common";

import { ContactBtn, Cover } from "../";

const Wrapper = styled(Box)`
  position: relative;
  object-fit: cover !important;
  padding: 0px 0 10px 0;
`;

const Description = styled(Box)`
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Service = styled(Box)`
  padding: 20px;
  border: 1px solid #777777;
  flex-direction: column;
  width: 100%;
  flex: 1;
  height: 100%;
  text-align: center;

  &:first-child {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
    display: table-cell;

    &:first-child {
      margin-bottom: 0;
    }
  }
`;

const ServiceTitle = styled(H1)`
  font-size: 25px;
  text-transform: uppercase;
  color: #ff995f;
`;

const Title = styled(H1)`
  color: #ff995f;
  font-size: 30px !important;
  font-weight: bold !important;
  text-transform: uppercase;
  margin-bottom: 30px;
  font-family: LatoBold, sans-serif !important;

  @media screen and (min-width: 1024px) {
    font-size: 36px;
    margin-bottom: 50px;
  }
`;

const Text = styled(H2)`
  font-size: 20px;
  color: #fff;
  letter-spacing: 1px;
  font-family: LatoRegular, sans-serif !important;

  @media screen and (min-width: 1024px) {
    font-size: 26px;
  }
`;

// TODO: make it just for ContactBtn
const ApplicBtn = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;

  @media screen and (min-width: 500px) {
    width: 66%;
  }

  @media screen and (min-width: 1024px) {
    width: 30%;
  }
`;

const BgImage = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  left: 0;
  top: 0;
  opacity: 0.3;
  z-index: 50;

  @media screen and (min-width: 1024px) {
    height: 300px;
  }
`;

const FeaturesList = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 20px auto 20px auto;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin: 0px auto 0px auto;
  }
`;

const ServiceWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    display: table;
    border-spacing: 20px;
  }
`;

const Main = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    height: 300px;
  }
`;

const DescriptionText = styled(Text)`
  margin-top: 10px;
`;

const DescriptionAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1024px) {
    margin-right: 50px;
    margin-bottom: 0px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const CenterAligned = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const WebinarDescription = ({ onRequestBtnClick, scrollRef }) => (
  <Wrapper>
    <Main id="services">
      <Description>
        <Title>IT Решения для вашего Бизнеса</Title>
        <CenterAligned>
          <DescriptionAction>
            <Icon color={'blue'} inverted size="huge" name="comments" />
            <DescriptionText>Обсуждаем проект</DescriptionText>
          </DescriptionAction>
          <DescriptionAction>
            <Icon color="violet" inverted size="huge" name="pencil alternate" />
            <DescriptionText>Делаем дизайн</DescriptionText>
          </DescriptionAction>
          <DescriptionAction>
            <Icon color="olive" inverted size="huge" name="cogs" />
            <DescriptionText>Разрабатываем</DescriptionText>
          </DescriptionAction>
          <DescriptionAction>
            <Icon color="red" inverted size="huge" name="rocket" />
            <DescriptionText>Запускаем</DescriptionText>
          </DescriptionAction>
        </CenterAligned>
      </Description>
      <BgImage>
        <Image alt="space" objectFit={"cover"} layout="fill" src="/main.webp" />
      </BgImage>
    </Main>

    <div ref={scrollRef}>
      <Cover text="Мы делаем" />
    </div>
    <FeaturesList>
      <ServiceWrapper>
        <Service>
          <ServiceTitle>Мобильные приложения</ServiceTitle>
          <Image
            alt="smartphone"
            width={64}
            height={64}
            src="/services-images/development.png"
          />
          <Text>
            Cоздаем приложения для всех платформ: Android, iOS, AppGallery​
          </Text>
        </Service>
        <Service>
          <ServiceTitle>Интернет Магазины</ServiceTitle>
          <Image
            alt="store"
            width={64}
            height={64}
            src="/services-images/store.png"
          />
          <Text>
            Создаем фирменный дизайн, интегрируем платежные системы и отправляем
            сайт в production 🚀​
          </Text>
        </Service>
      </ServiceWrapper>
    </FeaturesList>
    <FeaturesList>
      <ServiceWrapper>
        <Service>
          <ServiceTitle>WEB - ПРИЛОЖЕНИЯ​</ServiceTitle>
          <Image
            alt="web"
            width={64}
            height={64}
            src="/services-images/web.png"
          />
          <Text>
            Делаем административные панели, интегрируем сторонние сервисы.​​
          </Text>
        </Service>
        <Service>
          <ServiceTitle>LANDING-PAGES​</ServiceTitle>
          <Image
            alt="landing"
            width={64}
            height={64}
            src="/services-images/landing.png"
          />
          <Text>
            Сайты, которые привлекают: клиентов, сотрудников, любовников.​​​
          </Text>
        </Service>
      </ServiceWrapper>
    </FeaturesList>
    <ApplicBtn>
      <ContactBtn onRequestBtnClick={onRequestBtnClick} size={"huge"} />
      <div style={{ visibility: "hidden" }} id="technologies">
        asdf
      </div>
    </ApplicBtn>
  </Wrapper>
);
