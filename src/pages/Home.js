import React from 'react'
import styled from 'styled-components/macro'
import Welcome from '../images/awesomeday.png'

export default function Home() {
    return (
            <>
            <StyledImage>
                <img              
                src={Welcome} alt="Welcomeimage" />
            </StyledImage>
            </>
    )}

    const StyledImage = styled.div `
        display: flex;
        align-items: center;
        justify-content: center;   
        height="350px" 
        width="auto"      
    `



