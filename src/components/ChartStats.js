import React from 'react'
import styled from 'styled-components';


function ChartStats({name, amount}) {
    return (
        <ChartStatsStyled>
            <p><b>{name}</b></p>
            <h4>{amount}</h4>
        </ChartStatsStyled>
    )
}

const ChartStatsStyled = styled.div`
    background-color:white;
    border-radius:40px;
    border:1px solid var(--border-colour);
    width:100%;
    height:10rem;
    padding: 2rem;
    margin-right:2rem;
    
    h4{
        font-size:2rem;
        color: var(--purple-primary);
    }
    p{
        color:black;
    }
`

export default ChartStats
