import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { List, Button, Icon } from "semantic-ui-react";
import Image from "next/image";

import { Box } from "../../common";

import { ContactBtn } from "../../Webinar";

import { webinarLinks } from "./links";

//@TODO: Remake

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background: #000;
  z-index: 9999;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
`;

const Link = styled(List.Item)`
  color: #e1e2e6;
  cursor: pointer;
  font-size: 16px !important;

  &:hover {
    color: #3963e6 !important;
  }
`;

const HeaderLinks = styled(Box)`
  margin: 15px 0 0 auto;
  display: none;
  flex-direction: row;
  z-index: 9999;

  @media screen and (min-width: 1024px) {
    margin-left: auto !important;
    display: flex !important;
    align-items: center;
  }
`;

const HamburgerButton = styled(Button)`
  background: none !important;
  margin: 0px 0 0 auto !important;
  padding: 0 !important;
  z-index: 9999;

  @media screen and (min-width: 1024px) {
    display: none !important;
  }
`;

const HamburgerIcon = styled(Icon)`
  color: #fff;
  margin: 0 !important;
`;

const MobileMenu = styled(Box)`
  position: fixed;
  background: #01455c;
  width: 100%;
  z-index: 999;
  top: 0;
  transition: all 0.4s;
  height: ${(props) => (props.isMenuOpened ? "100vh" : "0vh")};
`;

const ContactBtnListItem = styled(ContactBtn)`
  display: none !important;
`;

const MobileLinks = styled.ul`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const ListItem = styled.li`
  margin-bottom: 30px;
  list-style-type: none;
  &:last-child {
    margin-bottom: 0;
  }

  ${Link} {
    font-size: 26px !important;
  }

  @media screen and (min-width: 1024px) {
    margin-right: 25px;

    ${Link} {
      font-size: 17px !important;
    }
    margin-bottom: 0px;
  }
`;

export const Links = ({ setIsMobileOpened, links }) => (
  <>
    {links.map((link) => (
      <ListItem key={link.id}>
        <Link
          as="a"
          onClick={(e) => {
            e.preventDefault();
            link.onClick();
            document.body.style.overflow = "auto";
            setIsMobileOpened(false);
          }}
          href={link.href}
        >
          {link.title}
        </Link>
      </ListItem>
    ))}
  </>
);

export const Header = ({
  isModalOpen,
  onRequestBtnClick,
  headerRef,
  links = [],
}) => {
  const [isMobileOpened, setIsMobileOpened] = useState(false);
  return (
    <>
      <StyledHeader ref={headerRef}>
        <a href="#">
          <Image width={150} height={60} src={"/logo.svg"} alt="logo" />
        </a>
        <HeaderLinks inverted link>
          <Links setIsMobileOpened={setIsMobileOpened} links={links} />
          <ContactBtnListItem onRequestBtnClick={onRequestBtnClick} />
        </HeaderLinks>
        {!isMobileOpened ? (
          <HamburgerButton
            aria-label="hambuger"
            onClick={() => {
                document.body.style.overflow = "hidden";
                setIsMobileOpened(!isMobileOpened);
            }}
          >
            <HamburgerIcon size="big" name="content" />
          </HamburgerButton>
        ) : (
          <HamburgerButton
            onClick={() => {
              document.body.style.overflow = "auto";
              setIsMobileOpened(!isMobileOpened);
            }}
          >
            <HamburgerIcon size="big" name="close" />
          </HamburgerButton>
        )}
      </StyledHeader>
      <MobileMenu isMenuOpened={isMobileOpened} />
      {isMobileOpened && (
        <MobileLinks>
          {!isModalOpen && (
            <>
              <Links setIsMobileOpened={setIsMobileOpened} links={links} />
              <ContactBtnListItem onRequestBtnClick={onRequestBtnClick} />
            </>
          )}
        </MobileLinks>
      )}
    </>
  );
};
