
import { Link } from "react-router-dom";
import { Grid,Button,Flex,Text,Image } from "@chakra-ui/react";

export const ProductBoxes=({title,price,category,image,id})=>{

    return(
        <>
          <Grid boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'  alignItems='center' p='10px'  >
                 <img loading="lazy" src={image} style={{width:"100%"}}/>
                 <Text>{title}</Text>
                 <Text>categoty :{category}</Text>
                 <Text>price : {price}</Text>
                 <Button bg='black' color='white' _hover={{bg:"black"}}>
                    <Link to={`/productDetails/${id}`}>View more Details</Link>
                 </Button>
         </Grid>
        </>
    )
}