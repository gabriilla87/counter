import styled from "styled-components";
import React, {ChangeEvent} from 'react';
import {FlexWrapper} from "./FlexWrapper";

type InputPropsType = {
    title: string
    value?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    errorMsg: boolean
    className?: string
}

export const Input = ({title, value, onChange, errorMsg, className}: InputPropsType) => {

    return (
        <StyledInput>
            <FlexWrapper justify={'space-around'} align={'center'}>
                <span>{title}</span>
                <StyledNumberInput className={className} onChange={onChange} value={value} errorMsg={errorMsg}/>
            </FlexWrapper>
        </StyledInput>
    );
};

type StyledNumberInputPropsType = {
    errorMsg: boolean
}

const StyledNumberInput = styled.input.attrs(() => ({
    type: 'number'
}))<StyledNumberInputPropsType>`
    outline: 1px solid #CB6CE6;
    text-align: center;
    width: 100px;
    height: 50px;
    border-radius: 15px;
    background-color: #EFDA2F;
    font-size: 24px;
    font-weight: bold;
    color: #CB6CE6;
    
    &:focus {
        outline: 3px solid ${props => props.errorMsg ? 'red' : "#CB6CE6"};
    }
`

export const StyledInput = styled.div`
    color: #CB6CE6;
    width: 100%;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
`