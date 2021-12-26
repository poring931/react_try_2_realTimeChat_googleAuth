import React from 'react';
import { Box, Button, Container, Grid } from '@material-ui/core';

const Loader = () => {
    return (
        <Container>
            <Grid container 
                style={{height: window.innerHeight - 50}}
                        alignItems={"center"}
                        justifyContent={"center"}
            >
                <Grid  container
                        justifyContent={"center"}
                        direction={"column"}
                        >
                   <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;