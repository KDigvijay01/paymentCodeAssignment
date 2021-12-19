import React, {useState} from 'react'
import{Grid, Typography, Button, TextField} from '@material-ui/core';
import { Link } from 'react-router-dom'

import Login from './Login'




// <Grid lg={12}><TextField variant='outlined' label='Poland'></TextField></Grid>

const Body = (props) => {
    // console.log(props)
    // console.log("data1", props.data1);
    const data=props.data1;
    const user=props.user;

  
    
    return (

       <div>
            <Grid container spacing={2} style={{width: '550px'}}>
                <Grid item lg={12} style={{ height: "200px", display:'flex', flexDirection:'column', justifyContent:'space-evenly', marginLeft:'40px' }}>
                    <Typography variant='body1' style={{marginLeft:'10px'}}>Shipping and Payment</Typography>
                    <div style={{ width:'41%', display:'flex', justifyContent:'space-between'}}>
                        {(user.name.length > 1) ? (
                            <Typography variant='h5' style={{color:'#4e0000'}}><span style={{color:'green'}}>Welcome...</span>{user.name}</Typography>
                        ):(
                            <React.Fragment>
                                <Link to='/login'><Button variant="outlined" style={{borderRadius:'20px', backgroundColor:'#66CDAA', color:'white'}} size='Large'>LOG IN</Button></Link>
                                <Button variant="outlined" style={{borderRadius:'20px'}} size='Large'>SIGN UP</Button>
                            </React.Fragment>
                        )}
                        </div>
                </Grid>

                <Grid item lg={12} style={{marginLeft:'42px'}}>
                    <Typography variant='body2'>Shipping information</Typography>
                </Grid>

                <Grid item lg={12} style={{marginLeft:'40px'}} container spacing={0}>       
                        <Grid item lg={6} container spacing={2}>
                            <Grid item lg={11}>
                                <input type='email' name='email' value={data.email} onChange={(e)=>props.filldata1(e)} placeholder='Email' style={{ width:'105%',height:'40px', borderRadius:'40px', textAlign:'center', border:'1px solid #365264', fontSize:'10px'}}/>
                            </Grid>

                            <Grid item lg={11}>
                                <input type='text' name='fname' placeholder='First name' value={data.fname} onChange={(e)=>props.filldata1(e)} style={{ width:'105%',height:'40px', borderRadius:'40px', textAlign:'center', border:'1px solid #365264', fontSize:'10px'}}/>
                            </Grid>

                            <Grid item lg={11}>
                                <input type='text' name='lname' placeholder='Last name' value={data.lname} onChange={(e)=>props.filldata1(e)} style={{ width:'105%',height:'40px', borderRadius:'40px', textAlign:'center', border:'1px solid #365264', fontSize:'10px'}}/>
                            </Grid>

                            <Grid item lg={11}>
                                <input type='tel' name='phone' placeholder='phone number' value={data.phone} onChange={(e)=>props.filldata1(e)} style={{ width:'105%',height:'40px', borderRadius:'40px', textAlign:'center', border:'1px solid #365264', fontSize:'10px'}}/>
                            </Grid>

                        </Grid>
                        

                        <Grid item lg={6} container spacing={2}>

                            <Grid item lg={12}>
                                <input type='text' name='address' placeholder='Address' value={data.address} onChange={(e)=>props.filldata1(e)} style={{ width:'105%',height:'40px', borderRadius:'40px', textAlign:'center', border:'1px solid #365264', fontSize:'10px'}}/>
                            </Grid>

                            <Grid item lg={12}>
                                <input type='text' name='city' placeholder='City' value={data.city} onChange={(e)=>props.filldata1(e)} style={{ width:'105%',height:'40px', borderRadius:'40px', textAlign:'center', border:'1px solid #365264', fontSize:'10px'}}/>
                            </Grid>

                            <Grid item lg={12}>
                                <input type='text' name='postal' placeholder='Postal Code / ZIP' value={data.postal} onChange={(e)=>props.filldata1(e)} style={{ width:'105%',height:'40px', borderRadius:'40px', textAlign:'center', border:'1px solid #365264', fontSize:'10px'}}/>
                            </Grid>
                            <Grid item lg={12}>
                                <input type='text' name='country' placeholder='Poland' value={data.country} onChange={(e)=>props.filldata1(e)} style={{ width:'105%',height:'40px', borderRadius:'40px', textAlign:'center', border:'1px solid #365264', fontSize:'10px'}}/>
                            </Grid>
                        </Grid>
                </Grid>
            </Grid>
       </div>
    )
}

export default Body
