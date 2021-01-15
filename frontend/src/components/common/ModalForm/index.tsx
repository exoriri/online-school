import React from 'react';
import styled from 'styled-components';
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

const StyledModal = styled(Modal)`
  @media screen and (min-width: 768px) {
    width: 66% !important;
  }

  @media screen and (min-width: 1024px) {
    width: 50% !important;
  }
`;

export const ModalForm = ({ open, setOpen, onClose }) => {
  return (
    <StyledModal
      closeIcon
      open={open}
      onClose={onClose}
    >
      <Header icon='envelope' content='Оставите свои контактные данные и мы с вами свяжемся &#x1f60a;' />
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Ваше полное имя (ФИО)</label>
            <input placeholder='ФИО' />
          </Form.Field>
          <Form.Field>
            <label>Ваш номер телефона или телеграмм аккаунт</label>
            <input placeholder='Номер телефона' />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button  onClick={() => setOpen(false)}>
          <Icon name='cancel' /> Отменить
          </Button>
        <Button primary onClick={() => setOpen(false)}>
           Отправить
        </Button>
      </Modal.Actions>
    </StyledModal>
  )
}