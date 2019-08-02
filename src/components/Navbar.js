import React from 'react'
import {Link,NavLink,withRouter} from 'react-router-dom'
const Navbar=(props)=>{
//     setTimeout(()=>{
// props.history.push('/about')
//     },2000);

    console.log(props)

    return(
<nav className="nav-wrapper red darken-5">
    

    <div className="container">
        <a className="brand-logo">Sanjay Times</a>
        <ul className="right">

            {/* <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li> */}

            <li><Link to="/">Home</Link></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          {/* in NavLink class active is added  when you are in a present route */}
            </ul>
        </div>
    </nav>

    )
}




export default withRouter(Navbar);




