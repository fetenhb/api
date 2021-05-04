import React from 'react'
import '../UserDetails/UserDetails.css'
import { Button } from 'react-bootstrap';
import { Link} from 'react-router-dom'
const UserDetails = (props) => {
    const userFound = props.users.find( (a) => a.name == props.match.params.user);

    return (
        <div>
         <div id="container">	
	
        <div class="product-details">
            
        <h1>{userFound.name}</h1>
        
            <p class="information">" {userFound.status}"</p>
            <p class="information">" {userFound.portrayed}"</p>

    
            
            
    
    </div>
    <div class="product-image">
        
        <img src={userFound.img}  alt="Omar Dsoky" />
        
    <div class="info">
        <h2>The Description</h2>
        <ul>
            <li><strong>category: </strong>{userFound.category}</li>
            <li><strong>nickname: </strong> {userFound.nickname} </li>
           
        </ul>
    </div>
    </div>
    
    
    </div>
    
 <Link to='/'>  <Button variant="secondary" style={{marginLeft:'500px'}}>Home</Button></Link> {' '}

    

        </div>
    )
}

export default UserDetails
