import styled from "styled-components";
interface ColmiMiniProps{
    isBackground? : boolean;
}

export const Container = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
`
export const Row = styled.div`
       width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Col = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
`
export const ColMini = styled.div<ColmiMiniProps>`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${(props)=>props.isBackground ? "background-color: rgba(39,174,96,0.1);" : "" }
    h4{
        color: var(--gray-600);
    }
    img{
        width: 55px;
        padding:15px;
    }
`
export const Count = styled.div`
background-color: var(--background-secundary);
display: flex;
flex-direction: row;
    p{
        width: 40px;
        line-height: 35px;
        background-color: var(--background);
    }
`
export const CountButton  = styled.button`
    background-color: transparent;
    border: none;
    width: 30px;
    height: 34px;
    color: var(--secundary);
    font-size: 1.5rem;
    cursor: pointer;
    :active{
        transform: translateY(5px);
    }
`
