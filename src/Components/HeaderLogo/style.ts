import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    padding: 2px;
`
export const Logo = styled.h1`
    font-size: 2.4rem;
    font-weight: 600;
    color: var(--gray-600);
    span{
        color: var(--secundary);
        font-weight: 600;
        font-size: 1.5rem;
    }
    @media (min-width:600px){
    font-size: 3rem;
        span{
            font-size: 2rem;
        }
    }
`