import React from "react";
import styled from "styled-components";
import Link from 'next/link';
import { Icon } from "semantic-ui-react";
import { Box, H1, Paragraph } from "../common";

const Wrapper = styled(Box)`
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

export const Contacts = () => {
  return (
    <Wrapper id="contacts">
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
          <Link href="https://wa.me/796435651492" passHref>
            <WhatsappBtn>
              <img src="/whatsapp.svg" />
              <span style={{ marginLeft: 10 }}>Whatsapp</span>
            </WhatsappBtn>
          </Link>
        </ListItem>
      </ListIcons>
    </Wrapper>
  );
};
