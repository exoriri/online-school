import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

export const ModalFormSuccess = ({ open, handleClose }) => {
    return (
        <Modal
            centered
            open={open}
            onClose={handleClose}
        >
            <Modal.Header>Спасибо!</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    Вы отправили вашу заявку, скоро с вами должны связаться
          </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={handleClose}>Закрыть</Button>
            </Modal.Actions>
        </Modal>
    )
}