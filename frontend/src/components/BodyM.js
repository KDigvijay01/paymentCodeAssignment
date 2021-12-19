import React from 'react'
import {Grid, Button, Typography, TextField} from '@material-ui/core';
import Paypal from '../images/paypal.png';
import Maestro from '../images/maestro (1).png';
import MasterCard from '../images/mastercard.png';
import DealCard from '../images/payment.png';
import Visa from '../images/visa (2).png';
import DiscoverCard from '../images/discover.png';
import InpostDel from '../images/postDel/inpost-squareLogo-1623771747687.png';
import DhlDel from '../images/postDel/dhl.png';
import FedEx from '../images/postDel/fedex.png';
import DpdDel from '../images/postDel/DPD-logo.png'
// marginLeft:'20px', marginTop:'20px'
//  justifyContent='space-around' alignContent='center'
const BodyM = () => {
    return (
        <div style={{display: 'flex',flexDirection:'column', justifyContent:'center', alignItems:'flex-start', }}>
             <Grid container direction='column' spacing={4} style={{marginLeft:'20px', marginTop:'20px'}}> 
                <Typography variant='body2' style={{marginLeft:'20px'}}>Payment Method</Typography>
                <Grid item container spacing={2} style={{width:'70%'}}>
                    <Grid item lg={4}>
                        <Button variant='outlined' style={{width:'100px', height:'40px', borderRadius:'20px' }}><img src={Paypal} alt='Paypal'></img></Button>
                    </Grid>
                    <Grid item lg={4}>
                        <Button variant='outlined' style={{width:'100px', height:'40px', borderRadius:'20px' }}><img src={Visa} alt='Visa'></img></Button>
                    </Grid>
                    <Grid item lg={4}>
                        <Button variant='outlined' style={{width:'100px', height:'40px', borderRadius:'20px' }}><img src={MasterCard} alt='MasterCard'></img></Button>
                    </Grid>
                    <Grid item lg={4}>
                        <Button variant='outlined' style={{width:'100px', height:'40px', borderRadius:'20px' }}><img src={Maestro} alt='Maestro' style={{width:'38px', height:'38px'}}></img></Button>
                    </Grid>
                    <Grid item lg={4}>
                        <Button variant='outlined' style={{width:'100px', height:'40px', borderRadius:'20px' }}><img src={DiscoverCard} alt='DiscoverCard'></img></Button>
                    </Grid>
                    <Grid item lg={4}>
                        <Button variant='outlined' style={{width:'100px', height:'40px', borderRadius:'20px' }}><img src={DealCard} alt='DealCard' style={{width:'50px', height:'50px'}}></img></Button>
                    </Grid> 
                </Grid>
                <Grid item lg={12}><Typography variant='body2' style={{marginLeft:'5px'}}>Delivery Method</Typography></Grid>
                
                <Grid item container spacing={2} style={{width:'70%'}}>
                    <Grid item lg={6}>
                        <Button variant='outlined' style={{width:'150px', height:'40px', borderRadius:'20px' ,display: 'flex', justifyContent:'space-evenly'}}>
                            <img src={InpostDel} alt='InpostDel' style={{width:'50px', height:'35px'}}></img>
                            <Typography style={{fontSize:'12px'}}>$20.00</Typography>
                        </Button>
                    </Grid>
                    <Grid item lg={6}>
                        <Button variant='outlined' style={{width:'150px', height:'40px', borderRadius:'20px', display: 'flex', justifyContent:'space-evenly'}}>
                            <img src={DpdDel} alt='DpdDel' style={{width:'30px', height:'20px'}}></img>
                            <Typography variant='h6' style={{fontSize:'12px'}}>$12.00</Typography>
                        </Button>
                    </Grid>
                    <Grid item lg={6}>
                        <Button variant='outlined' style={{width:'150px', height:'40px', borderRadius:'20px' ,display: 'flex', justifyContent:'space-evenly'}}>    
                            <img src={DhlDel} alt='DhlDel' style={{width:'50px', height:'40px'}}></img>
                            <Typography style={{fontSize:'12px'}}>$15.00</Typography>
                        </Button>
                    </Grid>
                    <Grid item lg={6}>
                        <Button variant='outlined' style={{width:'150px', height:'40px', borderRadius:'20px',display: 'flex', justifyContent:'space-evenly' }}>
                            <img src={FedEx} alt='FedEx' style={{width:'50px', height:'30px'}}></img>
                            <Typography style={{fontSize:'12px'}}>$10.00</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        
    )
}

export default BodyM
