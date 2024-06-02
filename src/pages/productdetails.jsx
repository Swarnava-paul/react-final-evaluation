import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
// chakra
import { Text,Grid ,Image,Button,Flex} from "@chakra-ui/react";
// axios

import axios from "axios";
 const Product_Details_Page=()=>{

    const[productData,setProductData]=useState([])

    const {id} =useParams()

// state to maintain alert box with click of add to cart button
const[addToCart,setAddToCart]=useState('not')
    const fetchSingleProductData= async()=>{
        axios({
            url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`,
            method:"get"
        }).then((data)=>{
            let products=[...productData]
            products.push(data.data.data)
           
           setProductData(products)
        }).catch((err)=>{
            console.log(err);
        })
    
    }
    useEffect(()=>{
     fetchSingleProductData()
    },[])
 
    return(
        <>
        <Grid w='20%' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'  margin='auto' mt={30} p={3}>
            {
               productData &&  productData.map(item=>(
                    <> 
 
                    <Image src={item.image} w='100%'/>
                    <Text>Brand :{item.brand}</Text>
                   <Text>Product Name :{item.title}</Text>
                    <Text>Category :{item.category}</Text>
                   <Text>Price :{item.price}</Text>
                    <Button onClick={()=>{
                        setAddToCart('addtoCart')
                    }}>Add to Cart</Button>
                   </>
    
                ))
                
    
        
            }
    
        </Grid>

        {
                    (addToCart=='not'?(
                        ''
                      ):(
                          <AddtoCart setAddToCart={setAddToCart} addToCart={addToCart}/>
                      ))
    }
       
        </>
    )
}


const AddtoCart=({setAddToCart,addToCart})=>{

    const[confirm,setConfirm]=useState('not')
    return(
        <>
      {
        confirm=='not'?(
            <Grid pos='absolute' w='100%' top='0%' height='100vh' bg='rgb(21, 21, 21,0.8)' placeItems='center'>
            <Grid bg='white' w='30%' h='30%' borderRadius={10}>
             <Flex justify='center' align='center' gap={10} >
             <Button w='40%' onClick={()=>{
              setAddToCart('not')
             }}>Cancel</Button>
              <Button w='40%' onClick={()=>{
                 setConfirm('confirm')
              }}>Confirm</Button>
             </Flex>
            </Grid>
          </Grid>
        ):(
            <Grid pos='absolute' w='100%' top='0%' height='100vh' bg='rgb(21, 21, 21,0.8)' placeItems='center'>
            <Grid bg='white' w='30%' h='30%' borderRadius={10} alignItems='center'>
               <Text fontSize={20} textAlign='center'>Item added to Cart</Text>
                {
                    setTimeout(()=>{
                       setAddToCart('not')
                    },2000)
                }
            </Grid>
          </Grid>
        )
      }
        </>
    )
}

export default Product_Details_Page;