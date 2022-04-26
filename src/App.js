import './App.css';
import {React,useEffect,useState} from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './Home'
import SignIn from './Components/signin'
import Product from './Components/Product';
import ProductDetails from './Components/productDetails'
import SignUp from './Components/Signup'
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
  const [email,setEmail]=useState(()=>{
    const saved=localStorage.getItem("email")
    const initialValue=JSON.parse(saved)
    return initialValue || ""
  })
  const [password,setPassword]=useState(()=>{
    const saved1=localStorage.getItem("password")
    const initialValue1=JSON.parse(saved1)
    return initialValue1 || ""
  })
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signin" element={<SignIn email={email} 
                                               setEmail={setEmail}
                                               password={password}
                                               setPassword={setPassword} />}/>
        <Route path="/signup" element={<SignUp email={email} 
                                               setEmail={setEmail}
                                               password={password}
                                               setPassword={setPassword} />}/>
        <Route path="/product" element={<Product products={products} 
                                                 search={search} 
                                                 setSearch={setSearch}
                                                 password={password}/>}/>
        <Route path="/product/:id" element={<ProductDetails products={products}/>}/>
      </Routes>
    </div>
  );
}

export default App;
