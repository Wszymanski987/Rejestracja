import react from "react";
import styled from "styled-components";
import Button from './Button';
import LogIn from "./LogIn";
import MailBox from "./MailBox";
import SocialBox from "./SocialBox";
import TermsConditions from "./TermsConditions";
import LineWithText from "./LineWithText";

const S = {
    Wrapper: styled.div`
    height: 800px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 30px;
    `
};

const LeftBox = () => {
    return (
        <S.Wrapper>
            <h2>Zarejestruj się jako trener</h2>
            <SocialBox />
            <LineWithText />
            <MailBox />
            <TermsConditions />
            <Button />
            <LogIn />
        </S.Wrapper>
    );
};

export default LeftBox;