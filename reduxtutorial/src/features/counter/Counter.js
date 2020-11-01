import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    increment,
    decrement,
    incrementByAmount,
    selectCount
} from './counterSlice';

export function Counter(){
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')
    
    return (
        <div>
            <div>
                <button aria-label="Increment value" onClick={ () => dispatch(increment()) }>
                +</button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={()=> dispatch(decrement()) }>
                    -
                </button>
                <input aria-label="Set increment amount" value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)}>
                </input>
                <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)|| 0))}>Add amount</button> 

            </div>
        </div>
    )
}
