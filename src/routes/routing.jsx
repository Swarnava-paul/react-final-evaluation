import { lazy,Suspense } from "react";
import { Route,Routes } from "react-router-dom";

//pages
const Home = lazy(()=>import('../pages/home'))
const Login=lazy(()=>import('../pages/loginpage'))
const Product_Details_Page=lazy(()=>import('../pages/productdetails'))

export const AllRoutes=()=>{

    return(
    <Suspense fallback={<>Loading ...</>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/productDetails/:id" element={<Product_Details_Page/>}/>
      </Routes>
    </Suspense>
    )
}