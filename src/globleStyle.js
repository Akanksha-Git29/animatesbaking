import { createGlobalStyle } from 'styled-components'

const GlobleStyles = createGlobalStyle `
    :root{
        --purple-primary: #554DDE;
        --accent-pink: #F44E77;
        --button-color: #103eb9;
        --neutral-light: #F2F6FF;
        --lavender-secondary: #6A6D9E; /*Primary Font Color*/
        --dark-primary: #16194F;
        --border-colour: #CAD6F1;
        
    }
    *{
        margin: 0;
        padding : 0;
        list-style : none;
        box-sizing : border-box;
        font-family: 'Nunito', sans-serif;
        text-decoration:none;
    }

    body{
        background-color: var(--neutral-light);
        color:white;
        font-size:1.2rem;
        margin-top:0;
    }

    a{
        color: inherit;
    }

    p{
        color: var(--lavender-secondary);
        line-height:1.8rem;
    }

    .secondary-heading{
        font-size:2.5rem;
        color: var(--purple-primary);
    }

    .small-heading{
        font-size:2rem;
        color: var(--purple-primary);
        text-align:center;
    }

    span{
        color: var(--accent-pink)
    }

    .cen-para{
        text-align:center;
    }
`;

export default GlobleStyles