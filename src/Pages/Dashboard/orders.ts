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
    a{
        font-size: 1.1rem;
    font-weight: 600;
    color: var(--gray-600);
    line-height: 60px;
    :hover{
        text-decoration: underline;
    }
    }
`
export const Main = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    
`

export const ContainerBlack = styled.div`
    background-color: rgba(0,0,0,0.4);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`
export const Modal = styled.div`
    width: 100%;
    max-width: 400px;
    border-radius: 3px;
    padding: 0px 0px 20px 0px;
    margin: 0 auto;
    margin-top: 150px;
    background-color: var(--background);
`
export const HeaderModal = styled.div`
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
export const MainModal = styled.div`
    text-align: center;
    padding: 10px;
    line-height: 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
interface RowProps{
    isBorderBottom: boolean;
}
export const Row =  styled.div<RowProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    ${(props)=>props.isBorderBottom ? "border-bottom: 2px solid #E0E0E0;padding-bottom:20px;" : ""}
`
export const RowTotal = styled.div`
  width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p{
        color: var(--gray-600);
        font-weight: 600;
    }
`