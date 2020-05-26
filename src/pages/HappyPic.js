import React from 'react'
import styled from 'styled-components/macro'

export default function PicRotation () {
    return (
            <>
            <StyledParagraphTop>HAPPY PICTURE OF THE DAY</StyledParagraphTop>
                <StyledImage>
                    <img              
                    src="https://source.unsplash.com/featured/?puppy" alt="" />
                </StyledImage>
            <StyledParagraphBottom>Bitterness keeps you from flying!</StyledParagraphBottom>
            </>
    )}

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

    const StyledImage = styled.p `
        overflow: hidden;
        border-radius: 50%;
        border: 2px solid var(--septenary);
        width: 240px;
        margin-top: 20px;
        margin-bottom: 40px;
        margin-left: 70px; 

        img {
            height: 240px;
        }
    `
