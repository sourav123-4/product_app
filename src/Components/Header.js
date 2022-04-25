import React from 'react'
import logo from './logo.jpg'
import {Link} from 'react-router-dom'
import './Styles/Header.css'
import Button  from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home'
function Header() {
  return (
    <div className='container'>
        <Link to="/home"><HomeIcon fontSize='large' color='primary'/></Link>
        <h2>PRODUCT-APP</h2>
        <Link to="/signin">
          <Button variant='contained' color='primary'>
            SignIn
          </Button>
        </Link>
        
    </div>
  )
}

export default Header