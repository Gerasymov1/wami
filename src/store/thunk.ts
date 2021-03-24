import axios from 'axios'
import {IPost} from "../models/post-model";
import {fetchPostsAction, fetchUserAction, hideModalAction, showModalAction} from "./actions";
import {IUser} from "../models/user-model";
import {IFormUser} from "../models/form-user";

export const fetchPosts = () => {
    return async (dispatch: any) => {
        try {
            const response = await axios.get<Array<IPost>>(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
            dispatch(fetchPostsAction(response.data))
        } catch (e) {
            console.log(e);
        }
    }
}

export const fetchUser = (user: IFormUser) => {
    return async (dispatch: any) => {
        try {
            const response = await axios.get<Array<IUser>>(`https://jsonplaceholder.typicode.com/users`)
            const newUser: IUser | undefined = await response.data.find((item: IUser) => {
                return item.username === user.username && item.email === user.email
            })
            if (newUser !== undefined) {
                dispatch(fetchUserAction(newUser))
                dispatch(showModalAction(true))
                localStorage.setItem('user', JSON.stringify(newUser))
            } else  {
                dispatch(fetchUserAction(null))
                dispatch(hideModalAction(false))
            }

        } catch (e) {
            console.log(e);
        }
    }
}