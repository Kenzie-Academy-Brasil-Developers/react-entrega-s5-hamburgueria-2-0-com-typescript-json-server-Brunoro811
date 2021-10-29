import styled from "styled-components";

interface DashboardProps{
    isBackground?: boolean | undefined;
}

export const Container = styled.div<DashboardProps>`
    width: 100%;
    padding: 5px;
    ${(props)=>props.isBackground ? "background-color: var(--gray-0);" : ""}
    
`
export const Header = styled.div`
    width: 100%;
    max-width: 1200px;
    line-height: 50px;
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`
export const Logo = styled.h1`
width: 100%;
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--gray-600);
    span{
        color: var(--secundary);
        font-weight: 600;
        font-size: 1.3rem;
    }
    
`
export const Seting = styled.div`
    max-width: 400px;
    display: flex;
`
export const Main = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 20px;
    
`