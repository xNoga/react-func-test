import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../api/dataApi'
import { Button, Box } from '@material-ui/core'


function Test() {
    const init_state = {
        count: 0,
        count2: 10,
        count3: 20
    }
    const [state, setState] = useState(init_state)
    const dispatch = useDispatch()

    function click(key, val) {
        setState((prevState) => {
            return ({
                ...prevState,
                [key]: val
            })
        })
    }

    const users = useSelector(state => state.data.users)

    return (
        <div>
            <ul>
                {
                    users.map((v, i) => {
                        return <li key={i} >{v.title}</li>
                    })
                }
            </ul>
            <Box ml={2}>
                <Button onClick={() => dispatch(getUser())} variant="outlined">Hejsa</Button>
            </Box>
            <div>
                <p>This is counter1: {state.count}</p>
                <p>This is counter2: {state.count2}</p>
                <p>This is counter3: {state.count3}</p>
                <button onClick={() => click("count", state.count + 1)}>Count</button>
                <button onClick={() => click("count2", state.count2 + 1)} >Count2</button>
            </div>
        </div>
    )
}

export default Test