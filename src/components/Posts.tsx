import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Post} from "./Post";
import {useSelector} from "react-redux";
import {IRootStore} from "../store/store";
import {IPost} from "../models/post-model";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchPosts} from "../store/thunk";
import {useHistory} from 'react-router'
import {getItemForPostPage} from "../store/actions";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: 'lightgray',
            width: '100%',
            margin: '0px'
        }
    }),
);


const Posts: React.FC = () => {
    const classes = useStyles();
    const postListReducer: any = useSelector((reduxStore: IRootStore) => reduxStore.postListReducer)
    const dispatch = useDispatch()
    const history = useHistory();
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    localStorage.removeItem('user')

    const onClickHandler = (post: IPost) => {
        console.log(post);
        dispatch(getItemForPostPage(post))
        history.push('/post')
    }

    return (
        <>

            <Grid className={classes.root} container spacing={2}>
                {postListReducer.postsListInReducer.map((post: IPost) => {
                    return (
                        <Grid item xs={4} key={post.id} onClick={() => onClickHandler(post)}>
                            <Post title={post.title}/>
                        </Grid>)
                })}
            </Grid>
        </>
    )
}

export default Posts

