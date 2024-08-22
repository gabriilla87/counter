import React, {ChangeEvent} from 'react';
import '../styles/Counter.styles.css';
import s from "./Counter.module.css"
import {CounterDisplay, StyledCounterDisplay} from "./CounterDisplay";
import {StyledButtonHandler} from "./ButtonHandler/ButtonHandler";
import styled from "styled-components";
import {Button} from "./ButtonHandler/Button";
import {Input} from "./Input";

type CounterPropsType = {
    increaseCounter: () => void
    setIsShownSetting: (value: boolean) => void
    setCounter: (counter: number) => void
    setMaxValue: (value: number) => void
    setMinValue: (value: number) => void

    counter: number
    maxValue: number
    minValue: number
    errorMsg: boolean
    // infoMsg: string | null
    isShownSetting: boolean
}

export const Counter = ({
                            increaseCounter,
                            counter,
                            setCounter,
                            maxValue,
                            minValue,
                            errorMsg,
                            // infoMsg,
                            isShownSetting,
                            setIsShownSetting,
                            setMaxValue, setMinValue
                        }: CounterPropsType) => {
    const onClickResetButtonHandler = () => {
        setCounter(minValue)
    }
    const showSettingsHandler = () => {
        setIsShownSetting(true)
    }
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(parseInt(e.currentTarget.value));
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(parseInt(e.currentTarget.value));
    }
    const setValuesHandler = () => {
        setCounter(minValue)
        setIsShownSetting(false)
    }

    return (
        <StyledCounter>
            {
                !isShownSetting
                    ? <CounterDisplay counter={counter} maxValue={maxValue}
                                      // infoMsg={infoMsg}
                    />
                    : <StyledCounterDisplay direction={'column'} gap={'30px'}>
                        <Input className={s.maxValueInput} title={'max value'} onChange={onChangeMaxValueHandler} value={JSON.stringify(maxValue)}
                               errorMsg={errorMsg}/>
                        <Input title={'start value'} onChange={onChangeMinValueHandler} value={JSON.stringify(minValue)}
                               errorMsg={errorMsg}/>
                    </StyledCounterDisplay>
            }

            <StyledButtonHandler>
                {
                    !isShownSetting
                    ? <>
                        <Button isDisabled={counter === maxValue || !(!errorMsg)
                            // || !(!infoMsg)
                        } title={'Increase'}
                                onClick={increaseCounter}/>
                        <Button isDisabled={counter === minValue || !(!errorMsg)
                            // || !(!infoMsg)
                        } title={'Default'}
                                onClick={onClickResetButtonHandler}/>
                        <Button title={"Set"} onClick={showSettingsHandler}/>
                      </>
                        : <Button title={"Set"} onClick={setValuesHandler} isDisabled={!(!errorMsg)}/>
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

