import React, {ChangeEvent} from 'react';
import {StyledCounterDisplay} from "./CounterDisplay";
import {Input} from "./Input";
import s from "./Counter.module.css";
import {ActionTypes, setMaxValueAC, setMinValueAC} from "../reducer/counter-reducer";

type CounterSettingPropsType = {
    minValue: number
    maxValue: number
    errorMsg: boolean
    dispatch: (action: ActionTypes) => void
}

export const CounterSetting = ({minValue, maxValue, errorMsg, dispatch}: CounterSettingPropsType) => {
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(parseInt(e.currentTarget.value)))
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueAC(parseInt(e.currentTarget.value)))
    }

    return (
        <StyledCounterDisplay direction={'column'} gap={'30px'}>
            <Input className={s.maxValueInput} title={'max value'} onChange={onChangeMaxValueHandler}
                   value={JSON.stringify(maxValue)}
                   errorMsg={errorMsg}/>
            <Input title={'start value'} onChange={onChangeMinValueHandler} value={JSON.stringify(minValue)}
                   errorMsg={errorMsg}/>
        </StyledCounterDisplay>
    )
}


