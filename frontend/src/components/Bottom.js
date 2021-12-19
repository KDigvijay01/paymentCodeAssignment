import React from 'react';
import {Button, Grid, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';









const Bottom = (props) => {

    
    return (
        <Grid container spacing={1}>
            <Grid item lg={6} container>
                <ArrowBackIcon/>
                <Typography>Back</Typography>
            </Grid>
            <Grid item lg={2} style={{ display: 'flex', justifyContent:'flex-end'}}>
                <Button variant='outlined' style={{borderRadius:'50px' , fontSize:'10px', border:'1px solid black', width:'180px', height:'35px'}}>CONTINUE SHOPPING</Button>
            </Grid>
            <Grid item lg={2}>
                <Button variant='outlined' onClick={props.pay} style={{borderRadius:'50px' , fontSize:'10px', width:'180px', height:'35px', backgroundColor:'#66CDAA', color:'white'}}>PROCEED TO PAYMENT</Button>
            </Grid>
        </Grid>
    )
}

export default Bottom
