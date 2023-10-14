import styled, { css } from 'styled-components'

const buttonStyles = css`

    border: 2px solid #ffffff;
    background: linear-gradient(red, darkblue);
    color: #ffffff;
    border-radius: 30px;
    padding: 10px 30px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    

    &:hover {
        background: #ffffff;
        color: #000044;
        box-shadow: 0px 0px 20px 5px #ff0000;
        font-weight: bold;
    }
`

export const ButtonWhite = styled.button`
    ${buttonStyles}
  
`



export const ButtonRed = styled.button`
    ${buttonStyles}

    background: #ff0000;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0/ 30%);

    &:hover {
        box-shadow: 0px 0px 20px 5px #ffffff;
        background: #ff0000;
        color: #ffffff;
    }
`