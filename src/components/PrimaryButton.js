import React from 'react';
import styled from 'styled-components';

const Primarybutton = () => {
    return (
        <ButtonStyles>
            Sign Up
        </ButtonStyles>
    );
}

const ButtonStyles = styled.button`
    background-color:var(--button-color);
    padding:0.5rem 1.5rem;
    font-family: inherit;
    font-size:inherit;
    color:inherit;
    border-radius: 15px;
    outline:none;
    border:none;
`

export default Primarybutton;
