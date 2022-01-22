import React from "react";
import styled from 'styled-components';
import { TextArea, Form, Message } from "semantic-ui-react";
import { CoverTitle } from "../../Webinar/Cover";
import { StyledButton } from '../../Webinar/ContactFormBtn';

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled(Form)`
  width: 100%;

  @media screen and (min-width: 731px) {
    width: 50%;
  }
`;

const FormButton = styled(StyledButton)`
  margin-top: 10px !important;
`;

export const ContactForm = (
  {
    name,
    number,
    description,
    response,
    isSending,
    handleChange,
    onSend
  }
) => {
  console.log(response.success)
  return (
    <Wrapper>
      <CoverTitle>Свяжитесь с нами для бесплатной консультации</CoverTitle>
      <StyledForm inverted>
          <Form.Field>
            <Form.Input 
              name="name" 
              onChange={handleChange} 
              fluid 
              label="Ваше полное имя (ФИО)" 
              placeholder="ФИО" 
              value={name}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              fluid
              value={number}
              name="number"
              onChange={handleChange}
              label="Ваш номер телефона или телеграм аккаунт"
              placeholder="Номер или телеграм"
            />
          </Form.Field>
          <TextArea
            value={description}
            name="description"
            onChange={handleChange}
            placeholder="Что ваш инетересует? Например: мне нужно мобильное приложение для..."
          />
        {
          response.success === false && <Message
            visible
            error={true}
            header='Проверьте ваш ввод'
            content='Поля не должны быть пустые'
          />
        }
        <FormButton loading={isSending} disabled={isSending} onClick={onSend} size="big">
          Отправить
        </FormButton>
      </StyledForm>
    </Wrapper>
  );
};
