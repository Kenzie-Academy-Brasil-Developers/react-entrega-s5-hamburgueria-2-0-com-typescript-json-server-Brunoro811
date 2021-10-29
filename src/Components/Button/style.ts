import styled from "styled-components";

interface ButtonProps{
    primary?:boolean | undefined;
    maxWidth?: string;
}

export const ButtonComponent = styled.button<ButtonProps>`
    width: 100%;
    max-width: ${(props)=>props.maxWidth ? props.maxWidth : "1000px"};
    height: 60px;
    line-height: 40px;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    background-color: ${(props)=>props.primary ? "var(--primary)" : "var(--gray-4)"};
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;
    border: 2px;
        border-color: #ffffff;
        border-style: solid;
    :hover{
        border: 2px;
        border-color: var(--gray-600);
        border-style: solid;
        border-radius: 5px;
    }
`