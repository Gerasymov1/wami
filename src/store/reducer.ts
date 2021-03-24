import {IPost} from "../models/post-model";
import {
    Actions,
    fetchPostsAction,
    fetchUserAction,
    getItemForPostPage,
    hideModalAction,
    showModalAction
} from "./actions";
import {IUser} from "../models/user-model";

export interface IPostListState {
    postsListInReducer: Array<IPost>,
    postItem: IPost | object,
    userInReducer: IUser | null,
    modal: boolean
}

const initialState: IPostListState = {
    postsListInReducer: [],
    postItem: {},
    userInReducer: null,
    modal: false
}

type PostListAction = ReturnType<typeof fetchPostsAction | typeof fetchUserAction | typeof getItemForPostPage | typeof showModalAction | typeof hideModalAction>

const postListReducer = (state = initialState, action: PostListAction) => {
    switch (action.type) {
        case Actions.FETCH_POSTS:
            return {
            ...state,
                postsListInReducer: action.payload
            };
        case Actions.GET_POST_ITEM_FOR_POST_PAGE:
            return {
                ...state,
                postItem: action.payload
            };
        case Actions.FETCH_USER:
            return {
                ...state,
                userInReducer: action.payload
            };
        case Actions.SHOW_MODAL:
            return {
                ...state,
                modal: true
            };
        case Actions.HIDE_MODAL:
            return {
                ...state,
                modal: false
            };
        default: return state
    }
}

export default postListReducer