import react from "react";
import styled from "styled-components";
import LeftBox from "./LeftBox";
import gym from "../Images/gym.jpg";

const S = {
    Wrapper: styled.div`
        border: solid black;
        height: 800px;
        width: 1000px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        background-color: white;
        border-radius: 2%;
        overflow: hidden;
    `,
    RightBox: styled.div`
    height: 800px;
    width: 50%;
    `,
    GymIcon: styled.img`
    width: 100%;eating 
    height: 800px;
    border-top-right-radius: 2%;
    border-bottom-right-radius: 2%
   ` 
};


const Container = () => {
    
    return (
        <S.Wrapper>
            <LeftBox />
             <S.RightBox>
             <S.GymIcon src={gym} alt='gym' />
             </S.RightBox>
        </S.Wrapper>
    );
};

export default Container;