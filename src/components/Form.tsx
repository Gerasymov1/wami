import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {IRootStore} from "../store/store";
import {fetchUser} from "../store/thunk";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {ModalComponent} from "./Modal";
import {hideModalAction, showModalAction} from "../store/actions";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'lightgray',
            padding: '20px'
        },
        form: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '500px',
            backgroundColor: 'darkgray',
            padding: '30px'
        },
        field: {
            margin: "10px"
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px'
        }
    })
);

export const Form: React.FC = () => {
    const classes = useStyles();
    const postListReducer: any = useSelector((reduxStore: IRootStore) => reduxStore.postListReducer)
    const dispatch = useDispatch()
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        if(localStorage.getItem('user')) {
            dispatch(showModalAction(true))
        }
    }, [dispatch])


    const handleChange = (event: any) => {
        const target = event.target;
        const value = target.value;
        const name = target.id;
        setUser({
            ...user,
            [name]: value
        })
    }

    const onCloseModal = () => {
        dispatch(hideModalAction(false))
    }

    const submitForm = (e: any) => {
        e.preventDefault();
        dispatch(fetchUser(user))
    }
const itemInLocalStorage: any = localStorage.getItem('user')

    return (
        <div className={classes.container}>
        <form onSubmit={submitForm} className={classes.form} >
            <TextField className={classes.field} value={user?.username || ''} onChange={handleChange} id="username" label="Username" variant="filled"/>
            <TextField className={classes.field} value={user?.email || ''} onChange={handleChange} id="email" label="Email" variant="filled"/>
            <div className={classes.buttonContainer}>
                <Button type='reset' variant="contained" color="secondary">Cancel</Button>
                <Button type='submit' variant="contained" color="primary" >Enter</Button>
            </div>
        </form>
            <ModalComponent open={postListReducer.modal} text={`Hello, ${postListReducer.userInReducer?.username || JSON.parse(itemInLocalStorage)?.username}`} onClose={onCloseModal}/>
        </div>
    )
}

