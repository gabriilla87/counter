import React, {Reducer, useEffect, useReducer, useState} from 'react';
import {Counter} from "./components/Counter";
import {Container} from "./components/Container/Container";
import {FlexWrapper} from "./components/FlexWrapper";
import {ActionTypes, counterReducer, setErrorMsgAC, StateType} from "./reducer/counter-reducer";

function App() {

    // const [maxValue, setMaxValue] = useState<number>(paramChecker('maxValue'));
    // const [minValue, setMinValue] = useState<number>(paramChecker('minValue'));
    // const [counter, setCounter] = useState<number>(paramChecker('counter'));


    const [isShownSetting, setIsShownSetting] = useState<boolean>(false)

    const [counter, dispatchToCounterReducer] = useReducer<Reducer<StateType, ActionTypes>>(counterReducer, {
        counterValue: 0,
        maxValue: 5,
        minValue: 0,
        errorMsgValue: false
    })

    const {counterValue, maxValue, minValue, errorMsgValue} = counter

    useEffect(() => {
        dispatchToCounterReducer(setErrorMsgAC((minValue >= maxValue || minValue < 0)))
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('minValue', JSON.stringify(minValue));
        localStorage.setItem('counter', JSON.stringify(counter));
    }, [maxValue, minValue, counter])


    return (
        <Container>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <Counter counterValue={counterValue}
                         errorMsg={errorMsgValue}
                         maxValue={maxValue}
                         minValue={minValue}
                         isShownSetting={isShownSetting}
                         setIsShownSetting={setIsShownSetting}
                         dispatch={dispatchToCounterReducer}
                />
            </FlexWrapper>
        </Container>
    );
}

export default App;
