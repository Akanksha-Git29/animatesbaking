import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/layouts';
import ChartStats from './ChartStats';
import chart from '../images/chart.svg'
import AnimatedButton from './AnimatedButton';
import {Roll} from 'react-reveal'
import {Bounce} from 'react-reveal'

function ChartSection() {
    return (
        <ChartSectionStyled>
            <InnerLayout>
                <div className="chart-container" >
                    <div className="chart-left" >
                        <div className="stats">
                            <div className="stats-money" >
                            <ChartStats name={"Balance"} amount = {"$234"}/>
                            <ChartStats name={"Last Transaction"} amount = {"$1298"}/>
                            </div>
                            <img src={chart} alt="" />
                        </div>
                    </div>
                    <div className="chart-right">
                        <h2 className="secondary-heading">
                            Manage your finances like a pro in no time 
                        </h2>
                        <Roll right>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia nemo distinctio dolores necessitatibus odit magni corrupti error, 
                            voluptate alias adipisci ducimus nostrum maiores. Ad?
                            </p>
                        </Roll>
                        <Bounce>
                        <AnimatedButton name={'Learn More'} />
                        </Bounce>

                    </div>
                </div>
            </InnerLayout>
        </ChartSectionStyled>
    )
}

const ChartSectionStyled = styled.div`
    .chart-container{
        display:grid;
        justify-content: center;
        grid-template-columns: repeat(2,1fr);
        @media screen and (max-width: 790px){
            grid-template-columns: repeat(1,1fr);
        }
        
        .chart-left{
            width:69%;
            @media screen and (max-width:990px){
                width: 70%;
            }
            @media screen and (max-width:550px){
                width: 50%;
            }
            .stats{
                img{
                    width:130%;
                    border-radius:50px;
                    border:1px solid var(--border-colour);
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    @media screen and (max-width:700px){
                        width: 90%;
                        margin-left: 25%;
                    }
                }

                .stats-money{
                    display:flex;
                    justify-content: center;
                    padding-bottom: 2rem;
                    margin-left: 45%;
                }
            }
        }
        .chart-right{
            width: 100%;
            padding-top: 2rem;
            @media screen and (max-width:990px){
                width: 70%;
                margin-left: 20%;
            }
            @media screen and (max-width:550px){
                width: 50%;
                margin-left: 25%;
            }
            p{
                padding-top:2rem;
                margin-bottom:2rem;
            }
        }
    }

`

export default ChartSection
