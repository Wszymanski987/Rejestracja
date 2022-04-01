import react from "react";
import styled, {css} from "styled-components";

const S = {
    Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    // margin-top: 10px;
    margin-left: 20px;
    `,
    SocialRegistration: styled.div`
    border: solid #413fb5;
    border-radius: 10px;
    // padding: 10px 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 60px;
    width: 440px;
    `,
    Text: styled.div`
    font-weight: bold;
    font-size: 22px;
    `
};


const SocialBox = () => {

    return (
        <S.Wrapper>
            <S.SocialRegistration>
                <img src="/photos/fbIcon.png" alt = 'FB' />
                <S.Text>Rejestracja przez Facebook</S.Text>
            </S.SocialRegistration>
            <S.SocialRegistration>
                <img src="/photos/instaIcon.png" alt = 'IG' />
                <S.Text>Rejestracja przez Instagram</S.Text>
            </S.SocialRegistration>
        </S.Wrapper>
    );
};

export default SocialBox;

