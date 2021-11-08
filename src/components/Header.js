import React from 'react'
import styled from 'styled-components'
import bg from '../images/bg.svg'
import HeaderContent from './HeaderContent'
import Navigation from './Navigation'

function Header(){
    return(
        <HeaderStyled>
            <div className="header-content">
                <Navigation />  
                <HeaderContent/>
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    
    min-height: 140vh;
    width: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 200%;
    top: 0;
    .header-content{
        padding: 10px 7rem;
        @media screen and (max-width: 990px){
            padding: 3rem 2rem;
        }

        @media screen and (max-width: 550px){
            padding: 3rem 3rem;
        }
    }
`

export default Header