import React, { useContext, useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Shopcontext } from './Shopcontext'

const Navbar = () => {
    const [menu, setmenu] = useState("men")
    const {totalcartitem} = useContext(Shopcontext);
    return (
        <>
            <nav className="navbar navbar-expand-lg  bg-primary bg-opacity-50 bg-gradient">
                <div className="container-fluid">
                    <div className="nav-logo">
                        <img src={logo} alt="logo" />
                        <h6>E-Commerce</h6>
                    </div>
                    <div className=" nav collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav collapse navbar-collapse justify-content-center fs-3">
                            <li className="nav-item mx-4"  onClick={()=>{setmenu("shop")}}><Link className="nav-link" to='/'>Shop</Link>{menu==="shop"?<></>:<></>}</li>
                            <li className="nav-item mx-4" onClick={()=>{setmenu("mens")}}><Link className="nav-link" to='/mens'>Men</Link>{menu==="mens"?<></>:<></>}</li>
                            <li className="nav-item mx-4" onClick={()=>{setmenu("womens")}}><Link className="nav-link" to='/womens'>Women</Link>{menu==="womens"?<></>:<></>}</li>
                            <li className="nav-item mx-4" onClick={()=>{setmenu("kids")}}><Link className="nav-link" to='/kids'>Kids</Link>{menu==="kids"?<></>:<></>}</li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success ms-2 bg-secondary bg-gradient text-white" type="submit">Search</button>
                        </form>
                        <div className="nav-login-cart me-4">
                            <Link to='/login'><button className="btn btn-outline-success me-4 ms-4 bg-secondary bg-gradient text-white" type="submit">LOGIN</button></Link>
                            <Link to='/cart'><img src={cart_icon} alt="" className="btn position-relative"/></Link>   
                            <span className="position-absolute top-40 start-70 translate-middle badge rounded-pill bg-danger">{totalcartitem()}</span>     
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
