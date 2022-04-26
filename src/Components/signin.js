import {React,useEffect,useState} from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'
import './Styles/signin.css'
import  Button  from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'
function Signin(props) {
  return (
    <div className='signIn'>
      <div className='sigin-header'>
        <Header/>
        <Link to="/signup">
          <Button variant='contained' color='primary'>
            SignUp
          </Button>
        </Link>
        </div>
        
        <hr/>
        <TextField id="standard-basic" label="email" variant="standard" onChange={e=>props.setEmail(e.target.value)}/>
        <br></br>
        <TextField id="standard-basic" label="Password" variant="standard" onChange={e=>props.setPassword(e.target.value)}/>
        <br></br><br></br>
        <Link to="/product">
            <Button variant='contained' color='primary'>
              LogIn
            </Button>
        </Link>
        {/* {console.log(email,password)} */}
    </div>
  )
}

export default Signin