import React from 'react'
import styled from "styled-components";
import { InnerLayout } from '../styles/layouts';
import logo from '../images/logo.svg'

function Footer() {
    return (
        <FooterStyled>
            <InnerLayout>
                <div className="footer-container">
                    <div className="logo-container">
                        <div className="logo-items">
                            <img src={logo} />
                            <p>
                                Copyright @2021 LoremIpsum. <br />
                                All rights reserved.
                            </p>
                        </div>
                    </div>
                    <ul className="bottom-nav">
                        <div className="links1">
                            <li>
                                <a href="#">Team</a>
                            </li>
                            <li>
                                <a href="#">Press</a>
                            </li>
                            <li>
                                <a href="#">Fees</a>
                            </li>
                        </div>
                        <div className="links2">
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">Affiliate</a>
                            </li>
                        </div>
                        <div className="links3">
                            <li>
                                <a href="#">Terms of use</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </InnerLayout>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    padding:0 18rem;
    background-color:#DCE2F0;

    @media screen and (max-width: 990px){
        padding: 3rem 2rem;
    }

    @media screen and (max-width: 550px){
        padding: 3rem 3rem;
    }

    .footer-container{
        display:grid;
        grid-template-columns:auto auto;
    }

    .logo-container{
        display:flex;
        align-items:center;
        img{
            width:80px;
        }
    }

    .bottom-nav{
        display:flex;
        justify-content:space-between;
        li{
            padding:1.3rem 0;
            color:#16194F;
        }
    }
`

export default Footer
