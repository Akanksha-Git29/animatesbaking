import React from 'react'
import arrow from '../images/arrow.svg'
import blob1 from '../images/blob_top.svg'
import blob2 from '../images/blob_bottom.svg'
import styled from 'styled-components';

function AnimatedButton({name}) {
    return (
        <AnimatedButtonStyled>
            {name}
            <img src={arrow} className="arrow" />
            <img src={blob1} className="blob1"/>
            <img src={blob2}className="blob2" />
        </AnimatedButtonStyled>
    )
}

const AnimatedButtonStyled =styled.button`
    background-color: var(--dark-primary);
    padding: 0rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 3.5rem;
    justify-content: space-between;
    position:relative;
    overflow:hidden;
    .arrow{
        padding-left: .9rem;
        transition: all .4s ease-in-out;
    }

    &:hover{
        .blob1{
            transform: translateX(-30px);
        }
        .blob2{
            transform: translateX(30px);
        }

        .arrow{
            padding-left: 1.9rem;
        }
    }

    .blob1, .blob2{
        position:absolute;
        pointer-events:none;
        transition: all .4s ease-in-out;
    }

    .blob1{
        top:0;
        right:0;
    }

    .blob2{
        bottom:0;
        
        left:0;
    }
`

export default AnimatedButton
