import React from 'react'
import './admin.css'

import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';

export default function Sidebar() {
    const toggleBar = () => {
        document.body.classList.toggle('open')
    }
    const mouseDOWN = (e) => {
        console.log(e.target.id)

    }
    const Burger = () => {
        const Burger = document.getElementsByClassName('burger');
        const SideBar = document.getElementById('sidebar');
        const InsideSideBar = document.querySelector('.InsideSideBar')
        const insidelogo = document.querySelector('.inside-logo')
        console.log('I am Closer')
        SideBar.style.width = '300px'
        InsideSideBar.style.display = 'block'
        insidelogo.style.display = 'flex'
        console.log('I am Burger')
    }
    const Close = () => {
        const Close = document.getElementsByClassName('closeIcon');
        const SideBar = document.getElementById('sidebar');
        const InsideSideBar = document.querySelector('.InsideSideBar')
        const insidelogo = document.querySelector('.inside-logo')
        console.log('I am Closer')
        SideBar.style.width = '80px'
        InsideSideBar.style.display = 'none'
        insidelogo.style.display = 'none'

    }
    return (
        <>
            <div id='sidebar' className="sidebar">

                <div className="logo ">
                    <div /* onClick={Burger} */ onClick={toggleBar} className="burger Toggle">
                    </div>
                    <div className="inside-logo">
                        <img className='side' src="https://t4.ftcdn.net/jpg/02/65/59/57/240_F_265595738_X1Xh7hjDLWkJR0N8hQL1WfmfTaflN5nl.jpg" alt="" />
                        <p className='p'>Murshid</p>
                        {/* <p1 className='p1' onClick={''} ><CloseIcon/></p1> */}
                    </div>

                </div>
                <div className="InsideSideBar">

                    {/* search bar */}
                    <div className="searchbar ">
                        <span> <SearchIcon /></span>

                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="s-container sidenone">

                        {/* Dashboard */}
                        <div className="sidebarAllList">
                            <p><DashboardIcon /></p>
                            <span id='Dashboard' onClick={mouseDOWN}><Link className='link' to={'/admin/dashboard'} >Dashboard</Link></span>
                        </div>
                        {/* User */}
                        <div className="sidebarAllList">
                            <p><AccountCircleIcon /></p>
                            <span id='user' onClick={mouseDOWN}><Link className='link' to={'/admin/user'}>User</Link></span>
                        </div>
                        {/* Message */}
                        <div className="sidebarAllList">
                            <p><MessageIcon /></p>
                            <span><Link className='link' to={'/admin/message'}>Message</Link></span>
                        </div>
                        {/* Order */}
                        <div className="sidebarAllList">
                            <p><ShoppingCartIcon /></p>
                            <span><Link className='link' to={'/admin/order'}>Order</Link></span>
                        </div>
                        <div className="sidebarAllList">
                            <p><ShoppingCartIcon /></p>
                            <span><Link className='link' to={'/admin/reqorder'}>Request Order</Link></span>
                        </div>
                       
                        <div className="sidebarAllList">
                            <p><ShoppingCartIcon /></p>
                            <span><Link className='link' to={'/admin/shipping'}>Shipping</Link></span>
                        </div>
                        <div className="sidebarAllList">
                            <p><ShoppingCartIcon /></p>
                            <span><Link className='link' to={'/admin/grocery'}>Grocery</Link></span>
                        </div>
                        <div className="sidebarAllList">
                            <p><ShoppingCartIcon /></p>
                            <span><Link className='link' to={'/admin/payment'}>Payment</Link></span>
                        </div>
                        <div className="sidebarAllList">
                            <p><ShoppingCartIcon /></p>
                            <span><Link className='link' to={'/admin/add_grocery'}>Add Grocery</Link></span>
                        </div>
                        <div className="sidebarAllList">
                            <p><ShoppingCartIcon /></p>
                            <span><Link className='link' to={'/admin/add_grocery-2'}>Add Grocery-2</Link></span>
                        </div>
                        {/* Saved */}
                        <div className="sidebarAllList">
                            <p><FavoriteIcon /></p>
                            <span><Link className='link' to={'/admin/saved'}>Saved</Link></span>
                        </div>
                        {/* Setting */}
                        <div className="sidebarAllList">
                            <p><SettingsIcon /></p>
                            <span><Link className='link' to={'/admin/setting'}>Setting</Link></span>
                        </div>
                        <div className="sidebarAllList">
                            <p><SettingsIcon /></p>
                            <select name="" id="">
                                <option selected value="">

                                    <span><Link className='link' to={'/product'}>Product</Link></span>

                                </option>
                                <option value="">

                                    <span><Link className='link' to={'/add'}>Add</Link></span>

                                </option>

                            </select>
                        </div>






                    </div>
                    {/*  <div className="logout-page ">
                        <p><LogoutIcon /></p>

                        <div className="inside-logo">
                            <img src="https://t4.ftcdn.net/jpg/02/65/59/57/240_F_265595738_X1Xh7hjDLWkJR0N8hQL1WfmfTaflN5nl.jpg" alt="" />
                            <p1>Log-Out</p1>
                        </div>
                    </div> */}
                </div>

            </div>
        </>
    )
}
