import React from 'react';
import {Button} from "./ButtonHandler/Button";
import {ActionTypes, increaseCounterValueAC, setCounterValueAC} from "../reducer/counter-reducer";

type CounterDisplayButtonsPropsType = {
    counterValue: number
    maxValue: number
    minValue: number
    errorMsg: boolean
    dispatch: (action: ActionTypes) => void
    setIsShownSetting: (value: boolean) => void

}

export const CounterDisplayButtons = ({counterValue, maxValue, minValue, dispatch, setIsShownSetting, errorMsg}: CounterDisplayButtonsPropsType) => {
    const onClickResetButtonHandler = () => {
        dispatch(setCounterValueAC(minValue))
    }
    const showSettingsHandler = () => {
        setIsShownSetting(true)
    }
    const increaseCounterValueBy1 = () => {
        dispatch(increaseCounterValueAC())
    }

    return (
        <>
            <Button isDisabled={counterValue === maxValue || errorMsg} title={'Increase'}
                    onClick={increaseCounterValueBy1}/>
            <Button isDisabled={counterValue === minValue || errorMsg} title={'Default'}
                    onClick={onClickResetButtonHandler}/>
            <Button title={"Set"} onClick={showSettingsHandler}/>
        </>
    );
};