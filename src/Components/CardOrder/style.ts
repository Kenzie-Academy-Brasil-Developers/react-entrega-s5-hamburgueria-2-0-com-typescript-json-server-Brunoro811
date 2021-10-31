import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 600px;
    border: 2px;
    border-style: solid;
    border-color: var(--gray-100);
    border-radius: 5px;
`
export const Header = styled.div`
    width: 100%;
    padding: 10px;
    line-height: 32px;
    border-radius: 3px 3px 0px 0px;
    background-color: var(--primary);
    color: var(--colorText);
    display: flex;
    justify-content: space-between;
    p{
        font-weight: 600;
        font-size: 1.1rem;
    }
`
export const Main = styled.div`
    width: 100%;
    padding: 10px;
    p{
        color: var(--gray-300);
        strong{
        color: var(--gray-600);

        }
    }
    
`