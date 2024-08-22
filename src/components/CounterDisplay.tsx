import React from 'react';
import styled from "styled-components";

type CounterDisplayPropsType = {
    counter: number
    maxValue: number | null
    // infoMsg: string | null
}

export const CounterDisplay = ({counter, maxValue,
                                   // infoMsg
}: CounterDisplayPropsType) => {
    return (
        <StyledCounterDisplay counter={counter}
                              maxValue={maxValue}
                              // infoMsg={infoMsg}
        >
            {counter}
        </StyledCounterDisplay>
    );
};

type StyledCounterDisplayPropsType = {
    direction?: string
    gap?: string
    errorMsg?: string | null | undefined
    maxValue?: number | null
    counter?: number
    infoMsg?: string | null
}

export const StyledCounterDisplay = styled.div<StyledCounterDisplayPropsType>`
    width: 380px;
    height: 260px;
    border: 5px solid #CB6CE6;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${props => props.gap || '0'};
    flex-direction: ${props => props.direction || "row"};
    font-size: ${props => (props.errorMsg || props.infoMsg) ? '44px' : '96px'};
    font-weight: bold;
    text-align: center;
    color: ${props => props.counter === props.maxValue ? 'red' : "#CB6CE6"};
`
