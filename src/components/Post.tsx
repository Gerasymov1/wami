import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            backgroundColor: 'darkgray',
            minHeight: '100px',
            marginTop: '20px',
            cursor: 'pointer'
        },
    }),
);

interface IPostInformation {
    title: string
}

export const Post: React.FC<IPostInformation> = ({title}) => {
    const classes = useStyles()
    return (
            <Paper className={classes.paper}>{title}</Paper>
    )
}

