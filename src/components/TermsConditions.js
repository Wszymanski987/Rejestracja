import react from "react";
import styled from "styled-components";

const S = {
    Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 35px;
    margin-top: 20px;
    `,
    StyledText: styled.div`
    margin-left: 5px;
    font-size: 15px;
    `,
    StyledTextUnderlined: styled.div`
    color: #0000ff;
    height: 3px;
    border-bottom: 2px solid #0000ff;
    `,
    StyledTextWeight: styled.b`
    color: #000000;
    cursor: pointer;
    tranistion: 1s;
    :hover {
        opacity: 0.8;
    }
    `,
    StyledInput: styled.input`
        height: 20px;
        width: 20px;
        cursor: pointer;
        tranistion: 1s;
    `
};

const TermsConditions = () => {
    return ( 
       <S.Wrapper>
           <S.StyledInput type="checkbox" />
            <S.StyledText>I have read the </S.StyledText>
            <S.StyledText>
                <S.StyledTextWeight>The terms & Conditions</S.StyledTextWeight>
                <S.StyledTextUnderlined />
            </S.StyledText>
       </S.Wrapper>        
    );
};

export default TermsConditions;