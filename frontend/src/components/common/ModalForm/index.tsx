import React, { useState } from 'react';
import styled from 'styled-components';
import { Box } from '../';
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

const StyledModal = styled(Modal)`
  z-index: 9999 !important;
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
`;

export const ModalForm = ({ open, setOpen, onClose, number, name, handleChange, onSend }) => {
  return (
    <StyledModal
      closeIcon
      open={open}
      onClose={onClose}
    >
      <Header content='Оставите свои контактные данные и мы с вами свяжемся &#x1f60a;' />
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Ваше полное имя (ФИО)</label>
            <input required value={name} onChange={handleChange} name="name" placeholder='ФИО' />
          </Form.Field>
          <Form.Field>
            <label>Ваш номер телефона или телеграм аккаунт</label>
            <input required value={number} onChange={handleChange} name="number" placeholder='Номер или телеграм' />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Actions>
        <Button onClick={() => setOpen(false)}>
          Отменить
          </Button>
        <RightButton primary onClick={onSend}>
           Отправить
        </RightButton>
      </Actions>
    </StyledModal>
  )
}