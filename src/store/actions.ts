import {createAction} from 'redux-actions'
import {IPost} from "../models/post-model";
import {IUser} from "../models/user-model";
export enum Actions {
    FETCH_POSTS = 'FETCH_POSTS',
    GET_POST_ITEM_FOR_POST_PAGE = 'GET_POST_ITEM_FOR_POST_PAGE',
    FETCH_USER = 'FETCH_USER',
    HIDE_MODAL = 'HIDE_MODAL',
    SHOW_MODAL = 'SHOW_MODAL'
}
export const fetchPostsAction = createAction(Actions.FETCH_POSTS,(payload: Array<IPost>) => payload)
export const getItemForPostPage = createAction(Actions.GET_POST_ITEM_FOR_POST_PAGE, (payload: IPost) => payload)
export const fetchUserAction = createAction(Actions.FETCH_USER,(payload: IUser | null) => payload)
export const hideModalAction = createAction(Actions.HIDE_MODAL,(payload: boolean) => payload)
export const showModalAction = createAction(Actions.SHOW_MODAL,(payload: boolean) => payload)
