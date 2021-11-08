import React,{useState} from 'react'
import styled from "styled-components";
import plus from '../images/plus.svg'
import minus from '../images/minus.svg'
import {Fade} from 'react-reveal'

function Questions({title,description}) {
    const [toggle,setToggle] = useState(false)
    const btnToggle = () =>{
        setToggle(!toggle)
    }
    return (
        <Fade left cascade>
            <QuestionStyled>
                <div className="q-container">
                    <div className="toogle-title">
                        <h4>{title}</h4>
                        <button onClick={btnToggle} >
                            {!toggle && <img src={plus} />}
                            {toggle && <img  src={minus}/>}
                        </button>
                    </div>
                    {toggle && <p>{description}</p>}
                </div>
            </QuestionStyled>
        </Fade>
    )
}

const QuestionStyled = styled.div`
    background-color: #fff;
    margin: 2rem 0;
    padding:1rem 1rem;
    border-radius:25px;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);

    // transition: all .4s ease-in-out;
    h4{
        color:#16194F;
        font-size:1.3rem;
    }
    .toogle-title{
        display:flex;
        align-items:center;
        justify-content:space-between;
        
        button{
            background:transparent;
            outline:none;
            border:none;
            cursor:pointer;
        }

    }
`

export default Questions
