import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavPizza extends Component{
 render(){

    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
           <Link to="/home/1" className="navbar-brand">Pizza Shop</Link>
           <div className="">
           <ul className="navbar-nav mr-auto">
              <li className="nav-item" key="react">
                  <Link className="nav-link" to="/veg/1">
                     Veg Pizza
                  </Link>
              </li>
              <li className="nav-item" key="angular">
                  <Link className="nav-link" to="/non-veg/2">
                      Non-veg Pizza
                  </Link>
              </li>
              <li className="nav-item" key="android"> 
                  <Link  className="nav-link" to="/sideDishes/3">
                  Side Dishes
                  </Link>
              </li>
              <li className="nav-item" key="android"> 
                  <Link  className="nav-link" to="/otherItem/4">
                  Other Item
                  </Link>
              </li>
              
           </ul>
           </div>
        </nav>
    )
 }
}
export default NavPizza;