import React, {Reducer, useEffect, useReducer, useState} from 'react';
import {Counter} from "./components/Counter";
import {Container} from "./components/Container/Container";
import {FlexWrapper} from "./components/FlexWrapper";
import {paramChecker} from "./utils";
import {ActionTypes, counterReducer, increaseCounterValueAC, setErrorMsgAC, StateType} from "./reducer/counter-reducer";

function App() {

    const [maxValue, setMaxValue] = useState<number>(paramChecker('maxValue'));
    const [minValue, setMinValue] = useState<number>(paramChecker('minValue'));
    const [counter, setCounter] = useState<number>(paramChecker('counter'));
    // const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const [isShownSetting, setIsShownSetting] = useState<boolean>(false)

    const [counterCopy, dispatchToCounterCopyReducer] = useReducer<Reducer<StateType, ActionTypes>>(counterReducer, {
        counterValue: 0,
        maxValue: 5,
        minValue: 0,
        errorMsgValue: false
    })

    const increaseCounter = () => {
        dispatchToCounterCopyReducer(increaseCounterValueAC())
    }



    useEffect(() => {
        dispatchToCounterCopyReducer(setErrorMsgAC((minValue >= maxValue || minValue < 0)))
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('minValue', JSON.stringify(minValue));
        localStorage.setItem('counter', JSON.stringify(counter));
    }, [maxValue, minValue, counter])


    return (
        <Container>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <Counter increaseCounter={increaseCounter}
                         counter={counterCopy.counterValue}
                         errorMsg={counterCopy.errorMsgValue}
                         maxValue={maxValue}
                         minValue={minValue}
                         isShownSetting={isShownSetting}
                         setIsShownSetting={setIsShownSetting}
                         setMaxValue={setMaxValue}
                         setMinValue={setMinValue}
                         setCounter={setCounter}
                />
            </FlexWrapper>
        </Container>
    );
}

export default App;
