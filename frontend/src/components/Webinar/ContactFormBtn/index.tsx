import React, { useState } from 'react';
import styled from 'styled-components';
import { List, Button, Icon, Message } from 'semantic-ui-react';

import { Box } from '../../common';
import { postData } from '../../../client';
import { ModalForm } from './ModalForm';
import { ModalFormSuccess } from './ModalFormSuccess';


const StyledButton = styled(Button)`
    margin: 0 !important;
    color: #fff !important;
    background: #1c439c !important;
    font-size: 16px !important;
    font-weight: 500 !important;

    &:hover {
        background: #3963e6 !important;
    }
`;

const INITIAL_RESPONSE = {
    success: undefined,
    message: ''
};

export const ContactBtn = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [formValue, setFormValue] = useState({
        name: '',
        number: ''
    });
    const [isSending, setIsSendng] = useState(false);
    const [response, setResponse] = useState(INITIAL_RESPONSE);
    const [isSuccessModal, setIsSuccessModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const onRequestBtnClick = () => {
        setModalOpen(!isModalOpen);
    };

    const onSend = async () => {
        setIsSendng(true);

        const res = await postData('/api/mail', {
            name: formValue.name,
            number: formValue.number,
        });

        setIsSendng(false);

        if (res.success) {
            setModalOpen(false);
            setIsSuccessModal(true);
        } else {
            setResponse(res);
        }
    };

    const handleSuccessModalClose = () => {
        setIsSuccessModal(false);
        setResponse(INITIAL_RESPONSE);
    };

    return (
        <>
            <StyledButton primary onClick={onRequestBtnClick}>
                Оставить заявку
            </StyledButton>
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
                setOpen={setModalOpen}
                isSending={isSending}
                response={response}
            />
        </>
    );
};