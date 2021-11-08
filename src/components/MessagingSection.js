import React from 'react'
import { InnerLayout } from '../styles/layouts'
import styled from 'styled-components';
import avtar1 from '../images/avatar1.svg'
import avtar2 from '../images/avatar2.svg'
import avtar3 from '../images/avatar3.svg'
import avtar4 from '../images/avatar4.svg'
import avtar5 from '../images/avatar5.svg'
import messaging from '../images/conversation.svg'
import bgCircles from '../images/circleBg.svg'

function MessagingSection() {
    return (
        <MessageStyle>
            <InnerLayout>
                <div className="message-container" >
                <div className="left-items" >
                    <h2 className="secondary-heading">
                        We support you in 5 different languages
                    </h2>
                    <p className="message-para" > 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis distinctio vel, quod repellendus enim exercitationem ullam quas facere sapiente esse incidunt, odio laborum?
                    </p>
                    <div className="images-container" >
                        <img src={avtar1} className="image-1" />
                        <img src={avtar2} className="image-2" />
                        <img src={avtar3} className="image-3" />
                        <img src={avtar4} className="image-4" />
                        <img src={avtar5} className="image-5" />
                        <p>&nbsp; +25</p>
                    </div>
                    <img src={bgCircles} className="bgCircle" />
                </div>
                <div className="right-items">
                    <img src={messaging} className="messaging" />
                    <img src={bgCircles} className="bgCircle" />
                </div>
                </div>
            </InnerLayout>
        </MessageStyle>
        
    )
}

const MessageStyle = styled.section`
    .message-container{
        display:grid;
        grid-template-columns: repeat(2,1fr);
        @media screen and (max-width: 790px){
            grid-template-columns: repeat(1,1fr);
        }

        .left-items{
            padding-right:2rem;
            position:relative;
            .message-para{
                padding:1.5rem 0;
            }

            .images-container{
                display:flex;
                align-items:center;
                .image-2, .image-3, .image-4, .image-5{
                    margin-left:-18px;
                }
            }
            .bgCircle{
                position:absolute;
                top:-5%;
                left:-12%;
                z-index: -1;
            }
        }

        .right-items{
            position:relative;
            @media screen and (max-width: 790px){
                    padding-top: 2rem;
                    display: flex;
                    justify-content: center;
            }
            .messaging{
                padding-left:2rem;
                @media screen and (max-width: 790px){
                    width: 70%;
                }
            }

            .bgCircle{
                position:absolute;
                bottom:-1%;
                right:-5%;
                z-index: -1;
                @media screen and (max-width: 790px){
                    right:5%;
                }
                @media screen and (max-width: 550px){
                    right:5%;
                    bottom:-15%;
                }
            }
        }
    }

`

export default MessagingSection
