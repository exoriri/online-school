import React from 'react';
import styled from 'styled-components';

import { Box, H1, H2 } from '../../../components/common';
import { List, Icon } from 'semantic-ui-react';

import { ContactBtn } from '../';

const Wrapper = styled(Box)`
    position: relative;
    object-fit: cover !important;
    padding: 20px 0;
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

    @media screen and (min-width: 1024px) {
        font-size: 36px;
    }
`;

const Text = styled(H2)`
    font-size: 20px;
    color: #d6d6d6;
    letter-spacing: 3px;

    @media screen and (min-width: 1024px) {
        font-size: 26px;
    }
`;

const Cover = styled(Box)`
    background: #3e2b94;
    font-weight: bold;
    padding: 15px 0;
`;

const CoverTitle = styled(H1)`
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-size: 24px;

    @media screen and (min-width: 1024px) {
        font-size: 30px;
    }
`;

// TODO: make it just for ContactBtn
const ApplicBtn = styled(Box)`
    display: flex;
    justify-content: center;
    margin-top: 10px;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

const BgImage = styled(Box)`
    background: url(codescreen.png) center;
    background-size: cover;
    min-height: 400px;
    opacity: .3;
`;

const DescriptionContainer = styled(Box)`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const FeaturesList = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const FeaturesListItem = styled.li`
    color: #fff;
    list-style-type: none;
    font-size: 20px;
    padding: 0 10px 20px 10px;

    &:last-child: {
        margin-bottom: 0;
    }

    @media screen and (min-width:1024px) {
        font-size: 24px;
    }
`;

const ListIcon = styled(Icon)`
    margin-right: .76   em !important;
    color: #2dbd54;
`;

export const WebinarDescription = () => (
    <Wrapper>
        <BgImage />
        <DescriptionContainer id="webinar">
            <Description>
                <Title>Узнай все о web-разработке</Title>
                <Text>Уверен, ты удивишься, когда узнаешь, что можно делать крутые вещи не выходя из дома или из своего номера на острове</Text>
            </Description>
        </DescriptionContainer>
        <Cover>
            <CoverTitle>Что ты узнаешь на вебинаре?</CoverTitle>
        </Cover>
        <FeaturesList>
            <List>
                <FeaturesListItem icon='check' content='Semantic UI' />
                <FeaturesListItem><ListIcon name="check" /><span>Какой язык программирования стоит учить?</span></FeaturesListItem>
                <FeaturesListItem><ListIcon name="check" /><span>Что такое веб?</span></FeaturesListItem>
                <FeaturesListItem><ListIcon name="check" /><span>Фриланс vs Найм</span></FeaturesListItem>
                <FeaturesListItem><ListIcon name="check" /><span>Стоит ли вам брать курс?</span></FeaturesListItem>
                <FeaturesListItem><ListIcon name="check" /><span>20% Скидки на первый курс | ступень новобранца</span></FeaturesListItem>
            </List>
        </FeaturesList>
        <ApplicBtn>
            <ContactBtn />
        </ApplicBtn>
    </Wrapper>
);