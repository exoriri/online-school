import React, { useState } from "react";
import Script from "next/script";
import styled from "styled-components";

import { Header, Box } from "../components/common";
import { Technologies, ContactForm } from "../components/Landing";
import {
  WebinarDescription,
  Contacts,
  ModalFormSuccess,
  ModalForm
} from "../components/Webinar";
import { postData } from "../client";

const Wrapper = styled(Box)`
  height: 100vh;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 100%);
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const INITIAL_RESPONSE = {
  success: undefined,
  message: "",
};

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSending, setIsSendng] = useState(false);
  const [response, setResponse] = useState(INITIAL_RESPONSE);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    number: "",
    description: "",
  });

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
    grecaptcha.ready(function() {
      //@ts-ignore
      grecaptcha.execute('6Ldp-yseAAAAALozzoVycH0j07AwW2b61MdN9n1E', {action: 'submit'}).then(async function(token) {
        const res = await postData("/api/mail", {
          name: formValue.name,
          number: formValue.number,
          description: formValue.description,
          c_token: token
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

  return (
    <div>
      <Wrapper>
        <Header 
           onRequestBtnClick={onRequestBtnClick}
        />
        <WebinarDescription 
          onRequestBtnClick={onRequestBtnClick}
        />
        <Technologies />
        <ContactForm
          name={formValue.name}
          number={formValue.number}
          description={formValue.description}
          isSending={isSending}
          response={response}
          handleChange={handleChange}
          onSend={onSend}
        />
        <Contacts />
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
      <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
      <Script src="https://www.google.com/recaptcha/api.js?render=6Ldp-yseAAAAALozzoVycH0j07AwW2b61MdN9n1E" />
    </div>
  );
};

export default HomePage;
