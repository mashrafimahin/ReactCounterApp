import styled from "styled-components";

// container 
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
    padding: 30px 40px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 4px 2px 0 rgb(0,0,0,0.08);
    scale: 2;
    transition: 0.3s ease-in-out;
    
    // hover effect 
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 2px 0 rgb(0,0,0,0.2);
    }
`
// title
export const Text = styled.h1`
    font-size: 36px;
    color: #222;
`

// display
export const Display = styled.p`
    font-size: 32px ;
    color: #444;
`

// button div
export const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

// button 
export const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    background-color: darkcyan;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.08s ease-in-out;

    // active
    &:active {
        scale: 0.8;
    }
`