import { useContext ,useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authcontext/authcontext";


// chakra
import { Grid,Button,Flex,Text ,Select} from "@chakra-ui/react";
// 3rd party packages
import axios from "axios";

//components
import { ProductBoxes } from "../components/productbox";


const Home=()=>{

    // maintain the product array
    const[mainDataHolder,setMainDataHolder]=useState([])
    const[products,setProducts]=useState([])
    const[categoryTracker,setCategorTracker]=useState()

    const navigate=useNavigate()
    //context
    const {authState}=useContext(AuthContext)
   
    useEffect(()=>{
        if(authState.isAuthenticated==false){
            navigate('/login')
          }
    },[])


   const fetchData= async ()=>{
    axios({
        url:"https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products",
        method:"get"
    }).then((data)=>{
        setProducts(data.data.data);
        setMainDataHolder(data.data.data)
    })
   }    
    useEffect(()=>{
   fetchData()
    },[])

    {/**if user is not loggid in it will redirected user to login page only */}
   
    return(
        <>
       <Text textAlign='center' fontSize='40'>Home Page</Text>
         
         <Flex justify='center' align='center' gap={4}>
            <label htmlFor="by-price">Filter by Price: </label>
            <Select w='20%' id='by-price' onChange={(event)=>{
               if(event.target.value=='all-price'){
                let products=[...mainDataHolder];
                setProducts(products)
               }
               else if(event.target.value=='high-to-low'){
               console.log('high-to-low');
               let product=[...mainDataHolder];
               let sorted= product.sort((a,b)=>b.price-a.price)
               let filtered=sorted.filter(item=>(
                item.category==categoryTracker
               ))
               setProducts(filtered)
               }
               else if(event.target.value=='low-to-high'){
                let product=[...mainDataHolder];
                let sorted= product.sort((a,b)=>a.price-b.price)
                
                let filtered=sorted.filter(item=>(
                    item.category==categoryTracker
                   ))
                   setProducts(filtered)
               }
            }}>
                <option value="all-price">All</option>
                <option value="high-to-low">High to Low</option>
                <option value="low-to-high">Low to High</option>
            </Select>

            <label htmlFor="by-price">Filter by Category: </label>
             <Select w='20%' onChange={(e)=>{
               if(e.target.value=='all'){
                let product=[...mainDataHolder];
                setProducts(product)
               }
               else if(e.target.value=='men'){
                let product=[...mainDataHolder];
                let filteredMens= product.filter(item=>(
                    item.category=='men'
                ))
                setProducts(filteredMens)
                setCategorTracker('men')
               }
               else if(e.target.value=='women'){
                let product=[...mainDataHolder];
                let filteredMens= product.filter(item=>(
                    item.category=='women'

                ))
                setCategorTracker('women')
                setProducts(filteredMens)
               }
               else if(e.target.value=='homedecor'){
                let product=[...mainDataHolder];
                let filteredMens= product.filter(item=>(
                    item.category=='homedecor'
                ))
                setCategorTracker('homedecor')
                setProducts(filteredMens)
               }

             }}>
                <option value="all">All categories</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="homedecor">HomeDecor</option>
             </Select>
         </Flex>

        <Grid templateColumns={['repeat(1,80%)','repeat(2,45%)','repeat(3,20%)']} rowGap={10} columnGap={10} justifyContent='center'  p='10px'>
          {
            products.map(item=>(
              <ProductBoxes key={item.id} {...item} />
            ))
          }
        </Grid>
        </>
    )
}


export default Home;