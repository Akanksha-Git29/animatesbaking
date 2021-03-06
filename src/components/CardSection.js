import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/layouts';
import card from '../images/creditcard.svg'

function CardSection() {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container" >
                    <div className="card-left" >
                        <h2 className="secondary-heading" >
                        One card for all your payments
                        </h2>
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit doloremque quia? Odit illo, tempore quod vero exercitationem, 
                        voluptatum laudantium quo harum, adipisci tenetur eum.
                        </p>
                    </div>
                    <div className="card-right" >
                        <img src={card} alt="" className="card-img" />
                    </div>
                </div>
                
            </InnerLayout>
        </CardSectionStyled>
    )
}

const CardSectionStyled = styled.section`
    .card-container{
        display:grid;
        grid-template-columns: auto auto;
        @media screen and (max-width: 790px){
            grid-template-columns: repeat(1,1fr);
        }

        .card-right{
            display:flex;
            justify-content:space-between;
            padding-left:4rem;
            @media screen and (max-width: 790px){
                display: flex;
                justify-content: center;
            }
            @media screen and (max-width: 600px){
                .card-img{
                    width: 90%;
                }
                
            }

        }
        
        .card-left{
            p{
                padding: 1rem 0;
            }
        }
    }
`

export default CardSection
