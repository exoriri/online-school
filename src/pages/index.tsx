import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Script from 'next/script';
import styled from "styled-components";

import { Header, Box } from "../components/common";
import { Technologies, ContactForm, Portfolio } from "../components/Landing";
import {
  WebinarDescription,
  Contacts,
  ModalFormSuccess,
  ModalForm,
} from "../components/Webinar";
import { postData } from "../client";

import { reCaptchaOnFocus } from "../helpers";

const Wrapper = styled(Box)`
  background-color: #000;
  background-image: linear-gradient(147deg, #000 0%, #2c3e50 100%);
`;

const INITIAL_RESPONSE = {
  success: undefined,
  message: "",
};

const HomePage = () => {
  const servicesRef = useRef(null);
  const technologiesRef = useRef(null);
  const contactsRef = useRef(null);
  const headerRef = useRef(null);
  const portfolioRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSending, setIsSendng] = useState(false);
  const [response, setResponse] = useState(INITIAL_RESPONSE);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    number: "",
    description: "",
  });
  const [links, setLinks] = useState([]);

  const onLinkClick = (el) => () => {
    if (typeof window !== "undefined") {
      const headerHeight = headerRef.current?.offsetHeight;
      window.scrollBy({
        top: el.getBoundingClientRect().y - headerHeight,
        behavior: 'smooth'
      });
    };
  };



  const handleSuccessModalClose = () => {
    setIsSuccessModal(false);
    setResponse(INITIAL_RESPONSE);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onSend = async () => {
    setIsSendng(true);
    setResponse(() => INITIAL_RESPONSE);

    //@ts-ignore
    grecaptcha.ready(function () {
      //@ts-ignore
      grecaptcha
        .execute("6LczXzgeAAAAANJ-LyxE2pZb-73d-OY2XSMNtYfc", {
          action: "submit",
        })
        .then(async function (token) {
          const res = await postData("/api/mail", {
            name: formValue.name,
            number: formValue.number,
            description: formValue.description,
            c_token: token,
          });

          setIsSendng(false);

          if (res.success) {
            setModalOpen(false);
            setIsSuccessModal(true);
            setFormValue({
              name: "",
              number: "",
              description: "",
            });
          } else {
            setResponse(() => res);
          }
        });
    });
  };

  const onRequestBtnClick = () => {
    setModalOpen(true);
    setResponse(INITIAL_RESPONSE);
  };

  useEffect(() => {
    document
      .getElementById("contactForm")
      .addEventListener("click", reCaptchaOnFocus);
    Array.from(document.getElementsByClassName("contactBtn")).forEach((btn) => {
      btn.addEventListener("click", reCaptchaOnFocus);
    });
    setLinks([
      {
        id: 1,
        title: "Услуги",
        href: "#services",
        onClick: onLinkClick(servicesRef.current)
      },
      {
        id: 2,
        title: "Портфолио",
        href: '#portfolio',
        onClick: onLinkClick(portfolioRef.current)
      },
      {
        id: 3,
        title: "Технологии",
        href: "#technologies",
        onClick: onLinkClick(technologiesRef.current)
      },
      {
        id: 4,
        title: "Контакты",
        href: "#contacts",
        onClick: onLinkClick(contactsRef.current)
      }
    ]);
    //@ts-ignore
    window.dataLayer = window.dataLayer || [];
      //@ts-ignore
    function gtag(){dataLayer.push(arguments);}    
    //@ts-ignore
    gtag('js', new Date());
    //@ts-ignore
    gtag('config', 'UA-218433606-1');
  }, []);

  return (
    <>
      <Head>
        <title>
          Приложения, сайты, дизайн, маркетинг и лучшие IT решения для бизнеса
        </title>
        <meta
          name="description"
          content="Разрабатываем мобильные приложения, веб-приложения, интернет магазины, лэндинги и автоматизацию для вашего бизнеса. Переносим идеи из головы в виртуальное пространство"
        />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta name="robots" content="all" />
        <link rel="preload" href={"/main.webp"} as="image" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Wrapper>
        <Header
          links={links}
          headerRef={headerRef}
          isModalOpen={isModalOpen}
          onRequestBtnClick={onRequestBtnClick}
        />
        <WebinarDescription 
          scrollRef={servicesRef}
          onRequestBtnClick={onRequestBtnClick} 
        />
        <Portfolio scrollRef={portfolioRef} />
        <Technologies 
          scrollRef={technologiesRef}
        />
        <ContactForm
          name={formValue.name}
          number={formValue.number}
          description={formValue.description}
          isSending={isSending}
          response={response}
          handleChange={handleChange}
          onSend={onSend}
        />
        <Contacts 
          scrollRef={contactsRef}
        />
        <ModalFormSuccess
          handleClose={handleSuccessModalClose}
          open={isSuccessModal}
        />
        <ModalForm
          handleChange={handleChange}
          onSend={onSend}
          onClose={() => setModalOpen(false)}
          open={isModalOpen}
          name={formValue.name}
          number={formValue.number}
          description={formValue.description}
          setOpen={setModalOpen}
          isSending={isSending}
          response={response}
        />
      </Wrapper>
      <Script defer src="https://www.googletagmanager.com/gtag/js?id=UA-218433606-1" />
    </>
  );
};

export default HomePage;
