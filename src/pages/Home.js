import React from 'react'
import styled from 'styled-components/macro'

export default function Home() {
    return (
            <>
            <ImageStyled src="../images/awesomeday.png" alt="Welcomeimage" />
            <p>klala</p>
            </>
    )}

const ImageStyled = styled.image `
    margin-top: 2000px;
    img {
        height: 200px;
        }
`

