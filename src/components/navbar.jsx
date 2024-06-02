import { Flex,Button } from "@chakra-ui/react"
import { Link} from "react-router-dom"

import { AuthContext } from "../authcontext/authcontext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export const Navbar=()=>{
const {authState,setAuthState}=useContext(AuthContext)
const Email=authState.email

const navigate=useNavigate()
    return(
        <>
        <Flex h='12vh' bg='black' color='white' justify='space-between' p='10' align='center'>
          <p>{Email}</p>
          <Link to='/'>Home page</Link>
          <Button onClick={()=>{
            setAuthState({isAuthenticated: false, token: null, email: null })
            navigate('/login')
          }}>Logout</Button>
          {/** after logout button clicked auth state retun to initial null state and
           * user will automatically redirected to the login page
           */}
        </Flex>
        </>
    )
}