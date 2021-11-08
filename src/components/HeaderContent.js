import React from 'react'
import styled from 'styled-components'
import Secondarybutton from './SecondaryButton'
import phone from '../images/phone.svg'
import ring1 from '../images/ring_orange.svg'
import message1 from '../images/message_pink.svg'
import message2 from '../images/message_blue.svg'

function HeaderContent() {
    return (
        <div>
            <HeaderContentStyled>
                <div className='left-content'>
                    <div className='left-text-container'>
                        <h1>Smart Banking for freelancers</h1>
                        <p className='white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestiae minus dicta ipsum atque est qui vel illo magni voluptates esse, e
                            x commodi corporis quos odio libero temporibus, eveniet nisi.
                        </p>
                        <Secondarybutton name={'Register Now'} />
                    </div>
                </div>
                <div className='right-content'>
                    <img src={phone} alt="" className="phone" />
                    <img src={ring1} alt="" className="ring1"/>
                    <img src={message1} className="message1"/>
                    <img src={message2} className="message2"/>
                </div>
            </HeaderContentStyled>
        </div>
    )
}

const HeaderContentStyled = styled.div`
    display:grid;
    grid-template-columns:repeat(2,1fr);
    padding-top:2rem;
    @media screen and (max-width: 770px){
        grid-template-columns:repeat(1,1fr);
    }
    .left-content{
        display:flex;
        align-items:center;
        // padding-right:6rem;
        width:28rem;
        h1{
            font-size:4rem;
            font-weight:600;
            @media screen and (max-width: 770px){
                font-size:3rem;
            }
            @media screen and (max-width: 570px){
                font-size:2rem;
            }
        }

        .white{
            padding: 1.4rem 0;
            line-height:1.8rem;
            color:white;
        }
    }
    .right-content{
        padding-left:4rem;
        padding-top:4rem;
        position:relative;
        width:100%;
        @media screen and (max-width: 770px){
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .phone{    
            width:120%;
            display:flex;
            justify-content:center;
            align-items:center;
            @media screen and (max-width: 770px){
                width:70%;
            }
        }
        .ring1{
            position:absolute;
            right:0;
            bottom:6rem;
            width:20%;
            animation: move2 5s infinite;
            transition: all .6s ease-in-out;
            @media screen and (max-width: 770px){
                right:20%;
                width:15%;
                bottom:2rem;
            }
        }
        .message1{
            position:absolute;
            top:0;
            right:0;
            width:25%;
            animation: move 5s infinite;
            transition: all .5s ease-in-out;
            @media screen and (max-width: 770px){
                right:20%;
                width:15%;
            }
        }
        .message2{
            position:absolute;
            bottom:12rem;
            left:0;
            width:25%;
            animation: move 5s infinite;
            animation-delay: .5s;
            transition: all .5s ease-in-out;
            @media screen and (max-width: 770px){
                left:15%;
                width:15%;
            }
        }
    }

    //Animations
    .message1{
        @keyframes move{
            0%{
                transform: translateY(0) rotate(0deg) scale(1) translateX(0px);
            }

            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }

            100%{
                transform: translateY(0) rotate(0deg) scale(1) translateX(0px);
            }
        }

        @keyframes move2{
            0%{
                transform: translateY(0) rotate(0deg) scale(1) translateX(0px);
            }

            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
            }

            100%{
                transform: translateY(0) rotate(0deg) scale(1) translateX(0px);
            }
        }
    }
`

export default HeaderContent
