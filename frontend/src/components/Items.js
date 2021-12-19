import React from 'react'
import {Grid, Card, Typography, Button, Divider, Step, Stepper, Avatar} from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';


// justifyContent='flex-end' direction='column' alignContent='flex-end




const Items = () => {


    return (
        <div>
            <Grid container  alignItems='center' style={{width:'700px' ,height:'100px' , marginLeft:'100px'}}>
                <Grid item lg={1}>
                    <button type="button" style={{borderRadius:'15px', width:'30px', height:'30px', border:'1px solid aqua', backgroundColor:'transparent'}}>
                        <ShoppingCartOutlinedIcon style={{fontSize:'17px'}}/>
                    </button>
                </Grid>
                <Grid item lg={1}>
                    <hr/>
                </Grid>
                <Grid item lg={1}>
                    <button type="button" style={{borderRadius:'15px', width:'30px', height:'30px', border:'1px solid aqua', backgroundColor:'transparent'}}>
                        <LocalShippingOutlinedIcon style={{fontSize:'17px'}}/>
                    </button>
                </Grid>
            </Grid>
            <Grid container spacing={3} direction='column' justifyContent='flex-end'>
                <Grid item lg={12}>
                    <Typography variant='subtitle2'>Your cart</Typography>
                </Grid>
                <Grid item lg={12} container spacing ={1}>
                    <Grid item ls={3}>
                            <Avatar
                            alt="Remy Sharp"
                            src="https://cdn.shopify.com/s/files/1/0752/6435/products/3_b52e8a82-c914-45b5-b69d-4bc8344382f6_765x.jpg?v=1624356965"
                            sx={{ width: 56, height: 56 }}
                        />
                    </Grid>
                    <Grid item ls={8}>
                            <Typography variant="body2" style={{fontSize:'11px'}}>Shirt</Typography>
                            <Typography variant="body2" style={{ fontSize:'10px'}}>For Men</Typography>
                            <Typography variant="body2" style={{ fontSize:'10px', color:'#dae1e4'}}>#123456</Typography>
                    </Grid>
                    <Grid item ls={3} style={{width:'100px', height:'50px', display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
                        <Typography variant='body2'>$120</Typography>
                    </Grid>
                </Grid>
                <Grid item lg={12} container spacing ={1}>
                    <Grid item ls={3}>
                            <Avatar
                            alt="Remy Sharp"
                            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2019/9/10/52af2f01-d49a-4e0e-a87e-c8bfd6f632921568098611674-1.jpg"
                            sx={{ width: 56, height: 56 }}
                        />
                    </Grid>
                    <Grid item ls={3}>
                            <Typography variant="body2" style={{fontSize:'11px'}}>Jacket</Typography>
                            <Typography variant="body2" style={{ fontSize:'10px'}}>Winter Vibes</Typography>
                            <Typography variant="body2" style={{ fontSize:'10px', color:'#dae1e4'}}>#123789</Typography>
                    </Grid>
                    <Grid item ls={3} style={{width:'80px', height:'50px', display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
                        <Typography variant='body2'>$200</Typography>
                    </Grid>
                </Grid>

                <Grid item>
                    <Button variant='contained' disabled style={{borderRadius:'30px', width:'180px', height:'35px' , display: 'flex', justifyContent:'space-around', backgroundColor:'#f7edfc'}}>
                        <Typography variant='subtitle2' style={{fontSize:'12px'}}>Total cost</Typography>
                        <Typography variant='subtitle2' style={{color:'#676464'}}>$320</Typography>
                    </Button>
                </Grid>
                <Grid item lg={5} container spacing={1} style={{marginTop:'20px'}}>
                    <Grid item lg={2} style={{fontSize:'50px' , marginRight:'10px'}}><LocalShippingOutlinedIcon style={{fontSize:'20px', width:'20px'}}/></Grid>
                    <Grid item lg={9}>
                        <Typography variant='subtitle2' style={{ fontSize:'10px',  width:'100px'}}>You are $30.02 away from free shipping!</Typography>
                    </Grid> 
                </Grid>
            </Grid>
        </div>
    )
}

export default Items
