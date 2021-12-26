import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from '../index.js';
import { LOGIN_ROUTE } from '../utils/consts';

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth) 
    return (
    <AppBar position="static">
        <Toolbar color={"secondary"} position={"static"}>
            <Grid container justifyContent={"flex-end"}>
                {user ?
                    <Button onClick={()=> auth.signOut()} variant={"outlined"}>Выйти</Button>
                    :
                    <NavLink to={LOGIN_ROUTE}>
                        <Button variant={"outlined"}>Логин</Button>
                    </NavLink>
                }
            </Grid>
        </Toolbar>
    </AppBar>
    );
};

export default Navbar;