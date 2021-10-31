import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 300px;
    min-height: 400px;
    margin: 15px;
    border-radius: 5px;
    background-color: #ffffff;
    border: 2px solid;
    border-color: var(--gray-100);
    :hover{
        border: 2px solid;
        border-color: var(--success);
    }
    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top:20px;
        padding: 20px;
        .LiButton{
            width: 150px;
            button{
                border-radius: 10px;
                font-size: 1.1rem;
            }
        }
        li{
            padding: 10px;
        }
    }
`
export const Image = styled.div`
    width: 100%;
    max-width: 300px;
    min-height: 100px;
    background-color: var(--gray-0);
    text-align: center;
`

export const Title = styled.h1`
font-size: 1.5rem;
    color: var(--gray-600);
`
export const Paragraph = styled.p`
    color: var(--gray-300);
`
export const Price = styled.p`
    color: var(--success);
    font-weight: 600;
`