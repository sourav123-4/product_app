import './App.css';
import {React,useEffect,useState} from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './Home'
import SignIn from './Components/signin'
import Product from './Components/Product';
import ProductDetails from './Components/productDetails'
function App() {
  const [products,setProducts]=useState([])
  const [search,setSearch]=useState("")
  const getProducts=async()=>{
    const res=await fetch('https://fakestoreapi.com/products')
    const data=await res.json()
    console.log(data)
    setProducts(data)
  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/product" element={<Product products={products} search={search} setSearch={setSearch}/>}/>
        <Route path="/product/:id" element={<ProductDetails products={products}/>}/>
      </Routes>
    </div>
  );
}

export default App;
