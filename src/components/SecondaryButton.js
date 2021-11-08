import React from 'react';
import styled from 'styled-components';
import arrow from '../images/arrow.svg'

function Secondarybutton({name}) {
    return (
        <div>
            <SecondaryButtonStyled>
                {name}
                <img src={arrow} atl=""/>
            </SecondaryButtonStyled>
        </div>
    );
}

const SecondaryButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: 1rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        padding-left: .9rem;
    }
`

export default Secondarybutton;
