import React from 'react';
import { Grid, AppBar, Paper , Typography} from '@material-ui/core'
import StyleIcon from '@material-ui/icons/Style';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Nav = () => {
    return (
        <div>
            <Paper style={{ display: 'flex', justifyContent:'center', height:'70px', marginTop:'4px'}}>
                <div style={{width:'40%', display: 'flex', marginLeft:'20px'}}>
                    <StyleIcon/><br/><br/>
                    <Typography variant='h6' style={{fontSize:'15px', marginLeft:'10px'}}><span style={{color:'orange'}}> E-</span>Shop</Typography>
                </div>
                <div style={{ width:'40%', display: 'flex', justifyContent:'center'}}>
                    <Typography variant='subtitle2' style={{ width:'80px'}}>Men</Typography>
                    <Typography variant='subtitle2' style={{ width:'90px'}}>Women</Typography>
                    <Typography variant='subtitle2' style={{ width:'80px'}}>Kids</Typography>
                </div>
                <div style={{ width:'30%', display: 'flex', justifyContent:'center'}}>
                    <SearchIcon style={{width:'10%', fontSize: '25px'}}/>
                    <ShoppingCartOutlinedIcon style={{width:'10%', fontSize: '22px'}}/>
                    <i class="user outline icon" style={{width:'10%', fontSize: '18px' , marginTop:'2px'}}></i>
                </div>
            </Paper>
        </div>
    )
}

export default Nav
