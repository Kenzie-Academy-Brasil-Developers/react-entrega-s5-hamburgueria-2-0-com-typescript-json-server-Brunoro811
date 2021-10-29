import styled from "styled-components";

interface ButtonProps{
    icon : string;
}


export const Button = styled.button<ButtonProps>`
    background-color: transparent;
    border:none;
    background-image: ${(props)=>props.icon ? `${props.icon}` : ""};
    cursor: pointer;
`
export const Total = styled.span`
    width: 16px;
    height: 16px;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 150px;
    background-color: var(--success);
    color: var(--colorText);
    transform: translate3d(15px, 2px, 16px);
`