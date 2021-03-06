import React from 'react'
import styled from 'styled-components/macro'
import welcome from '../images/awesomeday.png'

export default function home() {
    return (
            <>
            <StyledParagraph>
                THAT WAS AN AWESOME DAY!
            </StyledParagraph>
            <StyledImage>
                <img src={welcome} alt="Welcomeimage" />
            </StyledImage>
            </>
    )}

    const StyledImage = styled.div `
        display: flex;
        justify-content: center; 
        overflow: hidden;

        img {
            animation: bounce 3s ease infinite alternate;
        }    
    `
    const StyledParagraph = styled.p `    
        margin-top: 40px;
        font-weight: lighter;
        font-size: 22px;
        letter-spacing: 0.05em;
    `




