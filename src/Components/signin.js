import {React,useState} from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'
import './Styles/signin.css'
import  Button  from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'
function Signin() {
    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
  return (
    <div className='signIn'>
        <Header/>
        <hr/>
        <TextField id="standard-basic" label="email" variant="standard" onChange={e=>setUserName(e.target.value)}/><br></br>
        <TextField id="standard-basic" label="Password" variant="standard" onChange={e=>setPassword(e.target.value)}/><br></br><br></br>
        <Link to="/product">
          {(userName && password)?
            <Button variant='contained' color='primary'>
              LogIn
            </Button>:
            <Button variant='contained' disabled>LogIn</Button>
          } 
        </Link>
    </div>
  )
}

export default Signin