import react from "react";
import styled from "styled-components";


const S = {
    StyledInput: styled.input`
        display: flex;
        align-items: center;
        justify-items: space-between;
        width: 100%;
        height: 50px;
        border: 1px solid #d3d3d3;
        border-radius: 10px;
        font-size: 20px; 
        box-sizing: border-box;
        padding-left: 15px;
    `
};

const IdBox = ({text}) => {
    return (
           <S.StyledInput type="text" id="fname" name="fname" placeholder={text} />
    );
};

export default IdBox;