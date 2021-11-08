import styled from "styled-components";

export const OuterLayout = styled.section`
    padding: 5rem 7rem;

    @media screen and (max-width: 990px){
        padding: 3rem 2rem;
    }

    @media screen and (max-width: 550px){
        padding: 3rem 3rem;
    }
`

export const InnerLayout = styled.section`
    padding: 8rem 0;
`