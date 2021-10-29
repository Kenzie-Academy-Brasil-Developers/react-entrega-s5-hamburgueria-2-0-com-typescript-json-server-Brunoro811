import styled from "styled-components";

interface ButtonProps{
    icon : string;
}


export const Button = styled.button<ButtonProps>`
    background-color: transparent;
    padding: 10px;
    border:none;
    background-image: ${(props)=>props.icon ? `${props.icon}` : ""};
    cursor: pointer;
`