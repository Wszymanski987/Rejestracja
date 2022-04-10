import react from "react";
import styled, {css} from "styled-components";

const basicStyles = css`
    display: flex;
    align-items: center;
    justify-items: space-between;
    width: 100%;
    height: 100%;
`;

const S = {
    Wrapper: styled.div`
        ${basicStyles};
        margin: 0px;
   `,
    StyledInput: styled.input`
        ${basicStyles};
        border: 1px solid lightgrey;
        border-radius: 10px;
        font-size: 20px; 
    `
};

const IdBox = ({text}) => {
    return (
        <S.Wrapper>
            <S.StyledInput type="text" id="fname" name="fname" placeholder={text} />
        </S.Wrapper>
    );
};

export default IdBox;