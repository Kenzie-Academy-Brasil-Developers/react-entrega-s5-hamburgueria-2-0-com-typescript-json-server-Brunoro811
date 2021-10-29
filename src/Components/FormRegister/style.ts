import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 600px;
    padding: 10px;
    border: 2px solid var(--gray-0);
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: #ffffff;
    border-radius: 5px;
    form{
        width: 100%;
        display: flex;
    flex-direction: column;
    gap: 15px;

    }
`

export const Title = styled.h1`
    font-size: 1.2rem;
    color: var(--gray-600);
    span{
        float: right;
        a{
            font-weight: 300;
            color: var(--gray-600);
            font-size: 0.8rem;
            text-decoration:underline;
            color: var(--gray-300);
        }
    }
`
export const Paragraph = styled.p`
    color: var(--gray-5);
    text-align: center;
    font-size: 0.8rem;
`