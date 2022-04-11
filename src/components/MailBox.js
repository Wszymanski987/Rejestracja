import react from "react";
import styled, {css} from "styled-components";

import IdBox from "./IdBox";

const flexStyles = css`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
`;

const S = {
    Wrapper: styled.div`
        ${flexStyles};
        flex-direction: column;    
        flex: 1;
        width: 445px;
        font-size: 20px;
        color: gray;
        font-family: system-ui;
    `,
    IdSection: styled.div`
        ${flexStyles};
        flex-direction: row;
        width: 100%;
        gap: 20px; 
    `
};

const MailBox = ({text}) => {
    return (
        <S.Wrapper>
            <S.IdSection>
                <IdBox text="First Name..." />
                <IdBox text="Last Name..." />               
            </S.IdSection>
                <IdBox text="Email adress..." />
                <IdBox text="Password..." />
        </S.Wrapper>
    );
};

export default MailBox;