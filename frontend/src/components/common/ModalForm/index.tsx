import React from 'react';
import styled from 'styled-components';
import { Box } from '../';
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

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
  margin-left: 10px !important;
`;

export const ModalForm = ({ open, setOpen, onClose }) => {
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
            <input placeholder='ФИО' />
          </Form.Field>
          <Form.Field>
            <label>Ваш номер телефона или телеграм аккаунт</label>
            <input placeholder='Номер телефона' />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Actions>
        <Button onClick={() => setOpen(false)}>
          Отменить
          </Button>
        <RightButton primary onClick={() => setOpen(false)}>
           Отправить
        </RightButton>
      </Actions>
    </StyledModal>
  )
}