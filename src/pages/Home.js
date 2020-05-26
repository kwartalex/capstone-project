import React from 'react'
import styled from 'styled-components/macro'
import welcome from '../images/awesomeday.png'

export default function home() {
    return (
            <>
            <StyledParagraph>THAT WAS AN AWESOME DAY!</StyledParagraph>
            <StyledImage>
                <img              
                src={welcome} alt="Welcomeimage" />
            </StyledImage>
            </>
    )}

    const StyledImage = styled.div `
        display: flex;
        justify-content: center;
        margin-bottom: 90px;  
        padding: 20px; 
        overflow: hidden;
    `

    const StyledParagraph = styled.p `
        font-weight: lighter;
        font-size: 22px;
        letter-spacing: 0.05em;
        margin-top: 140px; 
    `




