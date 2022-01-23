import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  Button, 
  Header, 
  Icon, 
  Modal, 
  Form, 
  Message,
  TextArea
} from 'semantic-ui-react';
import { Box } from '../../common';
import {reCaptchaOnFocus} from '../../../helpers';

const StyledModal = styled(Modal)`
  @media screen and (min-width: 768px) {
    width: 66% !important;
  }

  @media screen and (min-width: 1024px) {
    width: 50% !important;
  }
`;

const Actions = styled(Box)`
  text-align: center;
  padding-bottom: 1.25rem;
`;

const RightButton = styled(Button)`
  color: #fff !important;
  background: #1c439c !important;
  font-weight: 500 !important;

  &:hover {
      background: #3963e6 !important;
  }

  @media screen and (max-width: 600px) {
    margin-left: 10px;
  }
`;

export const ModalForm = ({
  open,
  setOpen,
  onClose,
  number,
  name,
  handleChange,
  description,
  onSend,
  isSending,
  response
}) => {
  return (
    <StyledModal
      closeIcon
      open={open}
      onClose={onClose}
    >
      <Header content='Оставьте свои контактные данные и мы с вами свяжемся &#x1f60a;' />
      <Modal.Content>
        <Form id="modalForm">
          <Form.Field>
            <label>Ваше полное имя (ФИО)</label>
            <input required value={name} onChange={handleChange} name="name" placeholder='ФИО' />
          </Form.Field>
          <Form.Field>
            <label>Ваш номер телефона или телеграм аккаунт</label>
            <input required value={number} onChange={handleChange} name="number" placeholder='Номер или телеграм' />
          </Form.Field>
          <TextArea
            name="description"
            value={description}
            onChange={handleChange}
            placeholder="Что ваш инетересует? Например: мне нужно мобильное приложение для..."
          />
        </Form>
        {
          response.success === false && <Message
            error
            header='Проверьте ваш ввод'
            content='Поля не должны быть пустые'
          />
        }
      </Modal.Content>
      <Actions>
        <Button onClick={() => setOpen(false)}>
          Отменить
          </Button>
        <RightButton loading={isSending} disabled={isSending} primary onClick={onSend}>
          Отправить
        </RightButton>
      </Actions>
    </StyledModal>
  )
}