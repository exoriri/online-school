import React, { useState } from 'react';
import styled from 'styled-components';
import { List, Button, Icon } from 'semantic-ui-react';

import { ModalForm } from '../../common';


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

    const onRequestBtnClick = () => {
        setModalOpen(!isModalOpen);
    };
    
    return (
        <>
            <StyledButton primary onClick={onRequestBtnClick}>
                Оставить заявку
            </StyledButton>
            <ModalForm onClose={() => setModalOpen(false)} open={isModalOpen} setOpen={setModalOpen} />
        </>
    );
};