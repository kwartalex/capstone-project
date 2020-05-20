import React from 'react'
import styled from 'styled-components/macro'

export default function Home() {
    return (
            <>
            <StyledImage>
                <img 
                height="350px" 
                width="auto"               
                src="../images/awesomeday.png" alt="Welcomeimage" />
            </StyledImage>
            <p>Awesome Day!</p>
            </>
    )}

    const StyledImage = styled.div `
        display: flex;
        align-items: center;
        justify-content: center;       
    `



