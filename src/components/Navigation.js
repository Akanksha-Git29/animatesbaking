import React from 'react';
import styled from 'styled-components';
import Primarybutton from './PrimaryButton';
import logo from '../images/logo.svg'


const Navigation = () => {
    return (
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Features</a>
                </li>
                <li>
                    <a href="">Pricing</a>
                </li>
            </ul>
            <Primarybutton name={'Sign Up'} />
        </NavigationStyled>
    );
}

const NavigationStyled = styled.nav`
    display:flex;
    justify-content: space-between;
    min-height:10vh;
    align-items:center;
    ul{
        display:flex;
        justify-content:space-between;
        width:40%;
    }
`
export default Navigation;
