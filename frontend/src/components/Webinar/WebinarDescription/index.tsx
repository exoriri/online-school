import React from 'react';
import styled from 'styled-components';

import { Box, H1, H2, Paragraph } from '../../../components/common';
import { List, Icon } from 'semantic-ui-react';

import { ContactBtn, Cover } from '../';

const Wrapper = styled(Box)`
    position: relative;
    object-fit: cover !important;
    padding: 20px 0 10px 0;
`;

const Description = styled(Box)`
    text-align: center;
    margin: 0 auto; 
    padding-bottom: 20px; 
    max-width: 650px;
    min-width: 340px;

    @media screen and (min-width: 1024px) {
        max-width: 650px;
    }
`;

const Title = styled(H1)`
    color: #fff;
    font-size: 36px;
    font-weight: bold !important;
    text-transform: uppercase;
    margin-bottom: 20px;
    font-family: LatoBold, sans-serif !important;

    @media screen and (min-width: 1024px) {
        font-size: 36px;
    }
`;

const Text = styled(H2)`
    font-size: 20px;
    color: #d6d6d6;
    letter-spacing: 3px;
    font-family: LatoRegular, sans-serif !important;

    @media screen and (min-width: 1024px) {
        font-size: 26px;
    }
`;

// TODO: make it just for ContactBtn
const ApplicBtn = styled(Box)`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const BgImage = styled(Box)`
    background: url(codescreen.png) center;
    background-size: cover;
    min-height: 400px;
    opacity: .3;
`;

const DescriptionContainer = styled(Box)`
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const FeaturesList = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 90%;
    margin: 20px auto 20px auto;
`;

const FeaturesListItem = styled.li`
    color: #fff;
    list-style-type: none;
    font-size: 20px;
    padding: 0 10px 20px 10px;

    &:last-child {
        padding: 0 10px 0 10px;
    }

    @media screen and (min-width:1024px) {
        font-size: 24px;
    }
`;

const СlarificationText = styled(Paragraph)`
    color: #d6d6d6;
    font-size: 18px;
    margin-top: 7px;
`;

const ListIcon = styled(Icon)`
    margin-right: .76   em !important;
    color: #2dbd54;
`;

const FreeText = styled.span`
    color: #e65010;
    text-transform: uppercase;
`;

export const WebinarDescription = () => (
    <Wrapper>
        <BgImage />
        <DescriptionContainer>
            <Description>
                <Title>Узнай все о web-разработке</Title>
                <Text>Уверен, ты удивишься, когда узнаешь, что можно делать крутые вещи не выходя из дома или из своего номера на острове</Text>
            </Description>
        </DescriptionContainer>
        <Cover id="webinar" text="Что ты узнаешь о вебинаре?" />
        <FeaturesList>
            <List>
                <FeaturesListItem><ListIcon name="check" /><span>Какой язык программирования стоит учить?</span></FeaturesListItem>
                <FeaturesListItem><ListIcon name="check" /><span>Что такое веб?</span></FeaturesListItem>
                <FeaturesListItem><ListIcon name="check" /><span>Фриланс vs Найм</span></FeaturesListItem>
                <FeaturesListItem><ListIcon name="check" /><span>Стоит ли тебе брать курс?</span></FeaturesListItem>
                <FeaturesListItem><ListIcon name="check" /><span>20% Скидка на курс</span></FeaturesListItem>
            </List>
            <СlarificationText>* Кстати, вебинар полностью <FreeText>Бесплатный</FreeText></СlarificationText>
            <ApplicBtn>
                <ContactBtn />
            </ApplicBtn>
        </FeaturesList>
    </Wrapper>
);