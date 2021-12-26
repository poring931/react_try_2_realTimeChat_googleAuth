import { Box, Button, Container, Grid, TextField, Avatar } from '@material-ui/core';

import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index.js';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Loader from './Loader.js';
import firebase from 'firebase/compat/app';

const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth) 
    const [value, setValue] = useState('')

    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createAt')
    )

    const sendMessage = async () =>{
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if (loading){
        return <Loader/>
    }
    return (
        <Container>
             <Grid container 
                style={{height: window.innerHeight - 50, marginTop:20}}
                        alignItems={"center"}
                        justifyContent={"center"}
            >
            <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY:'auto'}}>
            {messages.map(message =>
                <div style={{
                    margin:20,
                    border: user.uid=== message.uid ? '2px solid green' : '2px dashed red', 
                    marginLeft: user.uid=== message.uid ? 'auto' : '10px',
                    width:'fit-content',
                    padding:10
                    }}>

                    <Grid container>
                        <Avatar srct={message.photoURL}/>
                        <div>{message.displayName}</div>
                    </Grid>
                        <div>{message.text}</div>
                </div>    
            )}
            </div>
                 <Grid container direction={"column"} alignItems={"flex-end"} style={{width:'80%'}}> 
                    <TextField varint={"outlined"} fullWidth rowsMax={2} value={value} onChange={e => setValue(e.target.value)}/>
                    <Button onClick={sendMessage} varint={"outlined"}>Отправить</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;