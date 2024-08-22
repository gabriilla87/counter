import React, {ChangeEvent} from 'react';
import {StyledCounter} from "./Counter";
import {StyledCounterDisplay} from "./CounterDisplay";
import {StyledButtonHandler} from "./ButtonHandler/ButtonHandler";
import {Button} from "./ButtonHandler/Button";
import {Input} from "./Input";

type CounterSettingPropsType = {
    minValue: number;
    maxValue: number;
    errorMsg: boolean
    setMaxValue: (value: number) => void
    setMinValue: (value: number) => void
    setCounter: (value: number) => void
    setInfoMsg: (value: string | null) => void
}

export const CounterSetting = ({minValue, maxValue, setMinValue, setMaxValue, setCounter, errorMsg, setInfoMsg}: CounterSettingPropsType) => {
    const onChangeMaxValueHandler = (e:  ChangeEvent<HTMLInputElement>) => {
        setMaxValue(parseInt(e.currentTarget.value));
        setInfoMsg(`enter values and press 'set'`)
    }
    const onChangeMinValueHandler = (e:  ChangeEvent<HTMLInputElement>) => {
        setMinValue(parseInt(e.currentTarget.value));
        setInfoMsg(`enter values and press 'set'`)
    }
    const setValuesHandler = () => {
        setCounter(minValue)
        setInfoMsg(null)
    }


    return (
        <StyledCounter>
            <StyledCounterDisplay direction={'column'} gap={'30px'} >
                <Input title={'max value'} onChange={onChangeMaxValueHandler} value={JSON.stringify(maxValue)} errorMsg={errorMsg}/>
                <Input title={'start value'} onChange={onChangeMinValueHandler} value={JSON.stringify(minValue)} errorMsg={errorMsg}/>
            </StyledCounterDisplay>
            <StyledButtonHandler>
                <Button title={"Set"} onClick={setValuesHandler} isDisabled={!(!errorMsg)}/>
            </StyledButtonHandler>
        </StyledCounter>
    );
};

