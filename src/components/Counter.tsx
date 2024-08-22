import React from 'react';
import '../styles/Counter.styles.css';
import {CounterDisplay} from "./CounterDisplay";
import {StyledButtonHandler} from "./ButtonHandler/ButtonHandler";
import styled from "styled-components";
import {Button} from "./ButtonHandler/Button";
import {CounterSetting} from "./CounterSetting";
import {ActionTypes, setCounterValueAC} from "../reducer/counter-reducer";
import {CounterDisplayButtons} from "./CounterDisplayButtons";

type CounterPropsType = {
    setIsShownSetting: (value: boolean) => void
    dispatch: (action: ActionTypes) => void

    counterValue: number
    maxValue: number
    minValue: number
    errorMsg: boolean
    isShownSetting: boolean
}

export const Counter = ({
                            dispatch,
                            counterValue,
                            maxValue,
                            minValue,
                            errorMsg,
                            isShownSetting,
                            setIsShownSetting,
                        }: CounterPropsType) => {



    const setValuesHandler = () => {
        dispatch(setCounterValueAC(minValue))
        setIsShownSetting(false)
    }

    return (
        <StyledCounter>
            {
                !isShownSetting
                    ? <CounterDisplay counter={counterValue} maxValue={maxValue}/>
                    : <CounterSetting minValue={minValue} maxValue={maxValue} errorMsg={errorMsg} dispatch={dispatch}/>
            }

            <StyledButtonHandler>
                {
                    !isShownSetting
                        ? <CounterDisplayButtons counterValue={counterValue} maxValue={maxValue} minValue={minValue} dispatch={dispatch} errorMsg={errorMsg} setIsShownSetting={setIsShownSetting}/>
                        : <Button title={"Set"} onClick={setValuesHandler} isDisabled={errorMsg}/>
                }
            </StyledButtonHandler>
        </StyledCounter>
    );
};

export const StyledCounter = styled.div`
    width: 400px;
    height: 400px;
    padding: 20px;
    border: 5px solid #CB6CE6;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

