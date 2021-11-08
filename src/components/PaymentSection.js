import React from 'react'
import styled from "styled-components";
import { InnerLayout } from '../styles/layouts';
import Card from './Card'
import card from '../images/creditcard.svg'
import inactive from '../images/inactive.svg'
import active from '../images/active.svg'
import check from '../images/check.svg'
import checkdis from '../images/check-disabled.svg'

function PaymentSection() {
    return (
        <PaymentStyle>
            <InnerLayout>
                <h3 className="small-heading">
                    An exceptional service,
                    <span>
                        at the right price
                    </span>
                </h3>
                <p  className="center-para" >
                    Start with our free plan and switch to premium as you grow.
                </p>
                <div className="card-container">
                    <Card 
                    account={'Free'} 
                    amount={'$0'}
                    text={'Manage your business with a simple and efficient account.'}
                    button={'Get Started'}
                    card={card}
                    active={active}
                    inactive={inactive}
                    check={check}
                    checkDis = {checkdis}
                    text1={'10 free local transfers'}
                    text2={'Free ATM withdrawals in Dollar up to $250 per month'}
                    text3={'Free payments to other Draft accounts'}
                    text4={'Prepaid debit cards'}
                    text5={'Virtual cards'}
                    text6={'Priority 24/7 support'}
                    text7={'Exchange 24 currencies'}
                    text8={'Multi-user access'}
                    />
                    <Card 
                    account={'Premium'} 
                    amount={'$10'}
                    text={'Manage your business with a simple and efficient account.'}
                    button={'Get Started'}
                    card={card}
                    active={active}
                    inactive={inactive}
                    check={check}
                    checkDis = {checkdis}
                    text1={'10 free local transfers'}
                    text2={'Free ATM withdrawals in Dollar up to $250 per month'}
                    text3={'Free payments to other Draft accounts'}
                    text4={'Prepaid debit cards'}
                    text5={'Virtual cards'}
                    text6={'Priority 24/7 support'}
                    text7={'Exchange 24 currencies'}
                    text8={'Multi-user access'}
                    />
                </div>
            </InnerLayout>
        </PaymentStyle>
    )
}

const PaymentStyle = styled.section`
    .card-container{
        display:grid;
        grid-template-columns: auto auto;
        @media screen and (max-width: 550px){
            grid-template-columns: repeat(1,1fr);
        }
        grid-gap:2.5rem;
        margin-left:5rem;
        justify-content:center;
        padding-top:5rem;
    }
    .center-para{
        text-align:center;
    }

`

export default PaymentSection
