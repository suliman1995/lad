import React, { useState } from "react";
import {Link} from "react-router-dom"

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    
        <div className="mb-3 ">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            
                              

                                <Link class="navbar-brand" href="#">masal</Link>
                                  <Link  to='/'className="nav-link active" aria-current="page" href="#">Home</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                  
<ul className="navbar-nav">
                            
                            <li className="nav-item">
                                <Link to='/Neworder' className="nav-link" href="#">New order</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Allorder' className="nav-link" href="#">All order</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to= '/Invoices' className="nav-link" href="#">Invoices</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to='/Laboratories' className="nav-link" href="#"></Link>
                            </li>
                            
                            </ul>


    </nav>
    </div>
   
  )
}

export default Nav