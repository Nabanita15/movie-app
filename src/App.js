import { Route, Routes, useLocation, useNavigate} from "react-router";
import Products from "./components/Products";
import ProductInfo from "./components/productInfo";
import { useEffect } from "react";
function App() {
   const navigate = useNavigate()
   const location = useLocation();
   useEffect(()=>{
    if(location.pathname === "/")
      {
         navigate("/products");
      }
   },[])



  return (
    <>
    <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductInfo />} />
    </Routes>
    </>
  );
}

export default App;
