import React, { useState } from 'react';
import styled from 'styled-components';
import { List, Button, Icon } from 'semantic-ui-react';

import { ModalForm } from '../../common';
import { postData } from '../../../client';

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

export const ContactBtn = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [formValue, setFormValue] = useState({
        name: '',
        number: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const onRequestBtnClick = () => {
        setModalOpen(!isModalOpen);
    };

    const onSend = async () => {
        const res = await postData('/api/mail', {
            name: formValue.name,
            number: formValue.number,
        });

        console.log('response', res);
    }

    return (
        <>
            <StyledButton primary onClick={onRequestBtnClick}>
                Оставить заявку
            </StyledButton>
            <ModalForm 
                handleChange={handleChange} 
                onSend={onSend} 
                onClose={() => setModalOpen(false)} 
                open={isModalOpen} 
                name={formValue.name}
                number={formValue.number}
                setOpen={setModalOpen} 
            />
        </>
    );
};