import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Button } from '@material-ui/core'
import { getPosts } from '../api/dataApi'

function Posts() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.data.posts)
    useEffect(() => {
        console.log("gettings posts");
        dispatch(getPosts())
    }, [dispatch])
    
    return (
        <React.Fragment>
            <Typography component="h2" variant="h4">Posts <small>{posts.length}</small></Typography>
            <Button variant="outlined" onClick={() => dispatch(getPosts())}>
                More posts
            </Button>
            {
                posts.map((p, i) => {
                    return <p key={i}>{p.title}</p>
                })
            }
        </React.Fragment>
    )
}

export default Posts