import React from 'react'
import {useSelector} from "react-redux";
import {IRootStore} from '../store/store';
import Paper from "@material-ui/core/Paper";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'lightgray',
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            backgroundColor: 'lightblue',
            minHeight: '100px',
            width: '400px',
            marginTop: '20px',
            marginBottom: '20px'

        },
    }),
);

const PostPage: React.FC = () => {
    const classes = useStyles()
    const post: any = useSelector((reduxStore: IRootStore) => reduxStore.postListReducer)
    return (
        <div className={classes.container}>
        <Paper className={classes.paper}>
            <p>{post.postItem.title}</p>
            <p>{post.postItem.body}</p>
        </Paper>
        </div>
    )
}

export default PostPage;