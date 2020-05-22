import React from 'react'
import styled from 'styled-components/macro'
import Welcome from '../images/awesomeday.png'

export default function Home() {
    return (
            <>
            <StyledParagraph>THAT WAS AN AWESOME DAY!</StyledParagraph>
            <StyledImage>
                <img              
                src={Welcome} alt="Welcomeimage" />
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
        font-size: 24px;
        margin-top: 140px; 
    `




