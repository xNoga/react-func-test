import { addPosts, addUser } from '../slices/dataSlice'
import { fetchData } from './apiHelpers'

// api routes
export const getUser = id => {
    return async dispatch => {
        try {
            const res = await fetchData('https://jsonplaceholder.typicode.com/todos/1', 'GET')
            dispatch(addUser(res))
        } catch (e) {
            console.log(e);
        }
    }
}

export const getPosts = () => {
    return async dispatch => {
        try {
            const res = await fetchData('https://jsonplaceholder.typicode.com/posts', 'GET')
            dispatch(addPosts(res))
        } catch (e) {
            console.log(e);
        }        
    }
}