import React from "react";
import Image from 'next/image';
import styled from "styled-components";
import Link from 'next/link';
import { Icon } from "semantic-ui-react";
import { Box, H1 } from "../common";

const Wrapper = styled.div`
  padding: 20px;
  background: #062433;
  color: #fff;
`;

const Title = styled(H1)`
  font-size: 26px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const ListIcons = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const WhatsappBtn = styled.a`
  background: #000;
  border: none;
  padding: 10px 25px;
  color: #fff;
  font-size: 18px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  transition: all 0.5s;

  &:hover {
    color: #fff;
    background: #333;
  }
`;

export const Contacts = ({ scrollRef }) => {
  return (
    <Wrapper id="contacts" ref={scrollRef}>
      <div data-aos="zoom-in-right" data-duration="800">
      <Title>Контакты</Title>
      <ListIcons>
        <ListItem>
          <Icon name="envelope" size="big" />
          <a
            style={{ fontSize: 17, marginLeft: 5, color: "#fff" }}
            href="mailto:lavrikrom2@gmail.com"
          >
            essentialskills2@gmail.com
          </a>
        </ListItem>
        <ListItem passHref>
          <Link href="https://wa.me/79643651492" passHref>
            <WhatsappBtn>
              <Image width={25} height={25} alt="whatsapp" src="/whatsapp.svg" />
              <span style={{ marginLeft: 10 }}>Whatsapp</span>
            </WhatsappBtn>
          </Link>
        </ListItem>
      </ListIcons>
      </div>

    </Wrapper>
  );
};
