import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import CreateIcon from '../images/nav_create.png'
import HomeIcon from '../images/nav_home.png'
import ReadIcon from '../images/nav_read.png'
import HappyPicIcon from '../images/nav_pic.png'

export default function Navigation () {
    return (
        <>
            <FooterStyled role="footer">

            <LinkStyled
                activeClassName="selected"
                to="/home"
                data-testid="home-link"
                data-cy="home_icon"
                ><img src={HomeIcon} alt="link to home page" />
                </LinkStyled>

                <LinkStyled
                activeClassName="selected"
                to="/entriesall"
                data-testid="entriesall-link"
                data-cy="allentries_icon"
                ><img src={ReadIcon} alt="link to entries page" />
                </LinkStyled>

                <LinkStyled
                activeClassName="selected"
                to="/createentry"
                data-testid="createentry-link"
                data-cy="create_icon"
                ><img src={CreateIcon} alt="link to create page" />
                </LinkStyled>

                <LinkStyled
                activeClassName="selected"
                to="/happypic"
                data-testid="happypic-link"
                data-cy="happypic_icon">
                <img src={HappyPicIcon} alt="link to happypic page" />
                </LinkStyled>

            </FooterStyled>
        </>
    )
}

const FooterStyled = styled.footer `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
    margin: 0;
    padding: -20px;
    width: 100vw;
    height: 90px;
    background: transparent;
    cursor: auto;

    img {
        height: 76px;
        }
    `

const LinkStyled = styled(NavLink) `
    text-align: center;
    cursor: nw-resize;
    &.selected {
        img {
            animation: bounce ease 1s;
            -webkit-animation: bounce ease 1s;
            -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            -ms-transform: scale(1.2);
            -o-transform: scale(1.2);
            transform: scale(1.2);
          }
          
          @keyframes bounce {
            from {
              margin-top: 0;
            }
            to {
              margin-top: -12px;
            }
          }
        }
    } 
    `