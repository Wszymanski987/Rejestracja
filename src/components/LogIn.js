import react from "react";
import styled from "styled-components";

const S = {
    Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-left: 20px;
    margin-bottom: 40px;
    margin-top: 40px;
    `,
    StyledText: styled.div`
    margin-left: 5px;
    font-size: 15px;
    `,
    StyledTextUnderlined: styled.div`
    color: blue;
    height: 3px;
    border-bottom: 2px solid blue;
    `,
    StyledTextWeight: styled.b`
    color: black;
    `
};

const LogIn = () => {
    return (
        <S.Wrapper>
         <S.StyledText>Masz juz konto?</S.StyledText>
         <S.StyledText>
             <S.StyledTextWeight>Zaloguj się</S.StyledTextWeight>
             <S.StyledTextUnderlined></S.StyledTextUnderlined>
         </S.StyledText>
    </S.Wrapper>        
    );
};

export default LogIn;