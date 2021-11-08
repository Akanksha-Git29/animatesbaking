import React, { Component } from 'react'
import styled from "styled-components";
import { InnerLayout } from '../styles/layouts';
import lines from '../images/lines.svg'
import Questions from './Questions';
import questions from '../question';
export class FAQSection extends Component {
    render() {
        return (
            <FaqStyled>
                <InnerLayout>
                    <h4 className="small-heading">
                        Frequently 
                        <span> asked questions</span>
                    </h4>
                    <p className="cen-para" >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Assumenda maxime ipsa nam expedita dolorem distinctio illo 
                        ad doloribus atque fuga, Nihil laboriosam beatae fugit.
                    </p>
                    <div className="lines">
                        <img src={lines} />
                    </div>
                    <div className="question-container">
                        {
                            questions.map((q)=>{
                                return <Questions key={q.id} {...q} />
                            })
                        }
                        
                    </div>
                </InnerLayout>
            </FaqStyled>
        )
    }
}

const FaqStyled = styled.section`
    .cen-para{
        width:60%;
        margin: 0 auto;
    }

    .lines{
        position:absolute;
        left:0;
        width:100%;
        top:500%;
        z-index:-1;
        img{
            width:100%;
        }
    }

    .question-container{
        padding-top:2rem;
    }
`

export default FAQSection
