 import { Grid,Flex,Button } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
 //context
 import { AuthContext } from "../authcontext/authcontext";
import { useContext } from "react";

import axios from "axios";

 const Login=()=>{

const {setAuthState}=useContext(AuthContext)
const trackInput=useRef()

const navigate=useNavigate();

const login= async()=>{
  axios({
    method:'post',
    url:"https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
    data:{
      email:"bruce@wayne.com",
      password:"gotham123"
  }
})
.then((status)=>{
  console.log(status);
}).catch((err)=>{
  console.log(err);
})
setAuthState({isAuthenticated: true, token: null, email: trackInput.current })
navigate('/')
}


    return(
        <>
         <Grid w='80%' placeItems='center' rowGap='8px' margin='auto' mt='20'>
          <h1 style={{fontSize:"24px"}}>Login Page</h1>
        <input  placeholder="Enter Email" type="email" style={{border:"1px solid black"}} onChange={(e)=>{
            trackInput.current=e.target.value
        }}/>
        <input type="password" placeholder="Enter password" style={{border:'1px solid black'}}/>
        <Button onClick={()=>{
           

          
         login()
        }}>Login</Button>
        {/** after user perform login page will auto redirected to home page */}
        </Grid>
        </>
    )
}

export default Login;