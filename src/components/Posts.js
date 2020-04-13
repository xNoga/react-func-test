import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Button, Paper, makeStyles } from '@material-ui/core'
import { getPosts } from '../api/dataApi'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3)
    }
}));

function Posts() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const posts = useSelector(state => state.data.posts)
    useEffect(() => {
        console.log("gettings posts");
        dispatch(getPosts())
    }, [dispatch])

    return (
        <React.Fragment>
            <Paper className={classes.paper}>
                <Typography component="h2" variant="h4">Posts <small>{posts.length}</small></Typography>
                <Button variant="outlined" onClick={() => dispatch(getPosts())}>
                    More posts
            </Button>
                {
                    posts.map((p, i) => {
                        return <p key={i}>{p.title}</p>
                    })
                }
            </Paper>
        </React.Fragment>
    )
}

export default Posts