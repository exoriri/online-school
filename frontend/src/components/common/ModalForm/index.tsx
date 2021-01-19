import React, { useState } from 'react';
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
  const [formValue, setFormValue] = useState({
    name: '',
    number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  }

  console.log(formValue);

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
            <input value={formValue.name} onChange={handleChange} name="name" placeholder='ФИО' />
          </Form.Field>
          <Form.Field>
            <label>Ваш номер телефона или телеграм аккаунт</label>
            <input value={formValue.number} onChange={handleChange} name="number" placeholder='Номер телефона' />
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