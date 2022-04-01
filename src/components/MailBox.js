import react from "react";
import styled, {css} from "styled-components";

const flexStyles = css`
display: flex;
justify-content: space-between;
`;

const emailStyles = css`

`;

const idStyles = css`
display: flex;
align-items: center;
justify-items: space-between;
flex: 1;
padding: 5px 10px;
border: 1px solid lightgrey;
border-radius: 10px;
width: 50%;
height: 100%
`

const S = {
    Wrapper: styled.div`
    ${flexStyles};
    flex-direction: column;    
    align-items: flex-start;
    width: 420px;
    font-size: 20px;
    color: gray;
    font-family: system-ui;
    margin-left: 20px;
    `,
    IdSection: styled.div`
    ${flexStyles};
    flex-direction: row;
    align-items: center;
    width: 445px;
    margin-bottom: 30px;
    padding-right: 5px;
    `,
    FirstNameBox: styled.div`
    ${idStyles};
    margin-right: 20px;
    `,
    LastNameBox: styled.div`
    ${idStyles};
    `,
    EmailBox: styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    padding: 12px;
    border: 1px solid lightgrey;
    border-radius: 10px;
    width: 100%;
    height: 100px;
    margin-bottom: 20px; 
    `,
};

const MailBox = () => {
    return (
        <S.Wrapper>
            <S.IdSection>
                <S.FirstNameBox>First Name...</S.FirstNameBox>
                <S.LastNameBox>Last Name...</S.LastNameBox>
            </S.IdSection>
                <S.EmailBox>Email address...</S.EmailBox>
                <S.EmailBox>Password...</S.EmailBox>
        </S.Wrapper>
    );
};

export default MailBox;