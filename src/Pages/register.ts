import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    max-width: 1040px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width:600px){
        margin-top: 100px;
        flex-direction: row;
    }
`
export const Col = styled.div`
    width: 100%;
    max-width: 500px;
    padding: 10px;
    gap: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
`
export const CardBag = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 10px;
    border: 1px;
    border-style: solid;
    border-color: var(--gray-100);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
`
export const Bag = styled.div`
    width: 100%;
    max-width: 50px;
    height: 50px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: rgba(39,174,96,0.1);
`
export const ColBag = styled.div`
    font-size: 0.8rem;
    color: #828282;
    line-height: 20px;
    span{
        color: #000000;
    }
`