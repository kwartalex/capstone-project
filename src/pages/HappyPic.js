import React from 'react'
import styled from 'styled-components/macro'
import happypic from '../images/dachshund.png'

export default function PicRotation () {
    return (
            <>
            <StyledImage>
                <img              
                src={happypic} alt="Happy pucture of the day" />
            </StyledImage>
            <StyledParagraph>Bitterness keeps you from flying!</StyledParagraph>
            </>
    )}

    const StyledParagraph = styled.p `
        font-weight: lighter;
        font-size: 24px;
    `

    const StyledImage = styled.p `
        
        overflow: hidden;
        border-radius: 50%;
        border: 2px solid var(--septenary);
        width: 240px;
        margin-top: 160px;
        margin-bottom: 40px;
        margin-left: 70px; 
    `
