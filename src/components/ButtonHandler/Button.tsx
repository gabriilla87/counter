import React from 'react';
import styled from "styled-components";

type ButtonPropsType = {
    title: string
    onClick: () => void
    isDisabled?: boolean
}

export const Button = ({title, onClick, isDisabled}: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        onClick();
    }

    return (
        <StyledButton disabled={isDisabled} onClick={onClickButtonHandler}>{title}</StyledButton>
    );
};


const StyledButton = styled.button`
    height: 60px;
    text-align: center;
    background-color: #CB6CE6;
    color: #EFDA2F;
    font-size: 22px;
    border: none;
    padding: 0 20px 0;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    
    &:active {
        background-color: transparent;
        color: #CB6CE6;
    }
    
    &:disabled {
        opacity: 0.5;
        cursor: default;
        &:active {
            color: #EFDA2F;
            background-color: #CB6CE6;
        }
    }
`
