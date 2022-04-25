import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import './Styles/product.css'
import { Button, Grid, TextField} from '@material-ui/core'
function Product({products,setSearch,search}) {
  const [page,setPage]=useState(0)
  function prevpage(){
    if(page==1){
      setPage(item=>item-1)
    }
  }
  function nextpage(){
    if(page==0){
      setPage(item=>item+1)
    }
}
  return (
    <div className='container-div'>
        <Header/>
        <hr/>
        <TextField id="standard-basic" label="Search" variant="outlined" onChange={e=>setSearch(e.target.value)}/>
        <br></br><br></br>
        <Grid container spacing={3}>
        {products.filter((val)=>{
          if(search==""){
            return val
          }else if(val.title.toLowerCase().includes(search.toLowerCase())){
            return val
          }
        })
        .map((item)=>{
          if(item.id<=10 && page==0){
            return <Grid item xs={4} className="items">
                <Link to={`/product/${item.id}`}>
                  <img src={item.image} alt="img" width="200px" height="200px"/>
                </Link>
                <p>{item.title}</p>
                </Grid>
          }else if(item.id>10 && page==1){
            return <Grid item xs={4} className="items">
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt="img" width="200px" height="200px"/>
            </Link>
            <p>{item.title}</p>
            </Grid>
          }
        })}
        </Grid>
      {page==0?"":<Button variant="contained" color='primary' onClick={prevpage}>Prev</Button>}
      {page==1?"":<Button variant="contained" color='primary' onClick={nextpage}>Next</Button>}
      {console.log(page)}
    </div>
  )
}

export default Product