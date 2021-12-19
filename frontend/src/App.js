import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Body from './components/Body';
import BodyM from './components/BodyM';
import Items from './components/Items';
import Bottom from './components/Bottom';
import {Grid} from '@material-ui/core';
import Login from './components/Login';

function App() {
  const [data, setdata]=useState({
    email:'',
    fname:'',
    lname:'',
    phone:'',
    address:'',
    city:'',
    postal:'',
    country:'',
    price:'320'
  });

const [user, setUser]= useState({
  name:'',
  email:'',
  password:'',
  nameError:false,
  emailError:false,
  passwordError:false,
  errorMessage:''
})

const userVal=(e)=>{
  setUser({...user, [e.target.name]: e.target.value});
}

const filldata=(e)=>{
  setdata({...data, [e.target.name]: e.target.value})
  // console.log('this is the data', data)
}


const payments= async ()=>{

const resp = await fetch('http://localhost:4000/razorpay', { method: 'POST' }).then((t) =>
t.json()
)

console.log(resp)

const options = {
key:  'rzp_test_ZpOAMT04NiIs47' ,
currency: resp.currency,
amount: resp.amount.toString(),
order_id: resp.id,
name: 'Payment Interface',
description: 'Thank you for payments',
image: '',
// handler: function (response) {
//   alert(response.razorpay_payment_id)
//   alert(response.razorpay_order_id)
//   alert(response.razorpay_signature)
// },


prefill: {
  name: data.fname,
  email: data.email,
  phone_number:  parseInt(data.phone_number)
}
}
const rzrpay = new window.Razorpay(options)
rzrpay.open()
}


console.log("This is the name of the user and user data", user)

useEffect(()=>{
  console.log("changing data", data)
},[data])

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
          <Grid container spacing={5}>
            <Grid item lg={12}><Nav/></Grid>
            <Grid item container spacing={1} style={{marginTop:'10px'}}>
                <Grid item lg={5}><Body user={user} data1={data} filldata1={(e)=>filldata(e)}/></Grid>
                <Grid item lg={4} style={{marginTop:'90px'}}><BodyM /></Grid>
                <Grid item lg={3} style={{marginTop:'10px'}}><Items/></Grid>
            </Grid>
            <Grid item lg={12}><Bottom pay={()=>payments()}/></Grid>
          </Grid>
          }>
        </Route>
        <Route exact path='/login' element={<Login setUser={setUser} user={user} setUserData={(e)=>userVal(e)}/>}></Route>
      </Routes>
    </Router>

      
  );
}

export default App;
