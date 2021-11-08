import React from 'react'
import styled from "styled-components";

function Card({
    account,amount,text,button,card,active,inactive,check,checkDis,
    text1,text2,text3,text4,text5,text6,text7,text8
}) {
    return (
        <CardStyled>
            <h4 className="card-title">
                {account} 
            </h4>
            <h4 className="card-title">
                {amount} <span>/ m</span>
            </h4>
            <p>{text}</p>
            <div className="button-container">
            <button>{button}</button>
            </div>
            <div className="card-img-container">
            <img src={card} className="card-img" />
            </div>
            <div className="plan-container">
                <img src={active} />
                <img src={inactive} />
            </div>
            <div className="list-container">
                <p className="text-check" >
                    <img src={check} />
                    {text1}
                </p>
                <p className="text-check" >
                    <img src={check} />
                    {text2}
                </p>
                <p className="text-check" >
                    <img src={check} />
                    {text3}
                </p>
                <p className="text-check" >
                    <img src={check} />
                    {text4}
                </p>
                <p className="text-check" >
                    <img src={check} />
                    {text5}
                </p>
                <p className="text-check" >
                    <img src={checkDis} />
                    {text6}
                </p>
                <p className="text-check" >
                    <img src={checkDis} />
                    {text7}
                </p>
                <p className="text-check" >
                    <img src={checkDis} />
                    {text8}
                </p>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    background-color:white;
    padding: 3rem 3rem;
    border-radius:50px;
    width:85%;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    .card-title{
        font-size:2rem;
        color: #000;
        text-align:center;
        padding:1rem 0;
        span{
            font-size:1.2rem;
        }
    }

    .button-container{
        text-align:center;
        padding:1.5rem 0;
        button{
            border: 2px solid #16194F;
            padding: .8rem 1.4rem;
            outline:none;
            cursor:pointer;
            background: transparent;
            border-radius: 20px;
            font-size:inherit;
            color: #16194F;
        }
    }

    .card-img-container{
        display:flex;
        justify-content:center;
        align-items:center;
        img{
            width:70%;
        }
    }

    .plan-container{
        display:flex;
        justify-content:center;
        align-items:center;
        padding:1.5rem 0;
        img{
            padding: 0 0.5rem;
        }
    }

    .text-check{
        display:flex;
        align-items:center;
        padding: 0.3rem 0;
        img{
            padding-right:.3rem;
            width:30px
        }
        &:nth-child(6){
            color: #B7B7B7;
        }

        &:nth-child(7){
            color: #B7B7B7;
        }

        &:nth-child(8){
            color: #B7B7B7;
        }
    }
`

export default Card
