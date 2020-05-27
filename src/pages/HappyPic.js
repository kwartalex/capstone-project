import React from 'react'
import styled from 'styled-components/macro'

export default function PicRotation () {
    return (
            <HappyPicContainer>
                <StyledParagraphTop>HAPPY PICTURE OF THE DAY</StyledParagraphTop>
                    <StyledImage>
                        <img              
                        src="https://source.unsplash.com/featured/?spring,flower" alt="" />
                    </StyledImage>
                <StyledParagraphBottom>Bitterness keeps you from flying!</StyledParagraphBottom>
            </HappyPicContainer>
    )}

    const HappyPicContainer = styled.div`
        display: flex;
        flex-direction: column;
        height: 100vh;
        align-items: center;
        `
    
    const StyledParagraphTop = styled.p `
        font-weight: lighter;
        font-size: 22px;
        letter-spacing: 0.05em;
        margin-top: 140px; 
        `

    const StyledParagraphBottom = styled.p `
        font-weight: lighter;
        font-size: 22px;
        letter-spacing: 0.05em;
        `

    const StyledImage = styled.div `
        overflow: hidden;
        border-radius: 50%;
        border: 2px solid var(--septenary);
        width: 240px;
        height: 240px;
        margin-top: 40px;
        margin-bottom: 40px;

        img {
            height: 240px;
            width:240px;
        }
        `
