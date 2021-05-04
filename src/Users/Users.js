import React from 'react'
import '../Users/Users.css'
import {Link} from 'react-router-dom'
const Users = ({el}) => {
    return (
        <div>
            
<main class="page-content">
  <div class="card" style={{backgroundImage: `url(${ el.img})` , backgroundSize: 'cover',  backgroundRepeat: 'no-repeat',height: '100%' }} >
    <div class="content">
      <h2 class="title">{el.name}</h2>
      <p class="copy">{el.birthday}</p>
     <Link  to={`/UserDetails/${el.name}`}><button class="btnn" >View more</button></Link> 
    </div>
  </div>
 

</main>
        </div>
    )
}

export default Users
