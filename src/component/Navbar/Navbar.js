import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-secondary">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
                            <li><NavLink className='my-3 text-white' to='/about'>About</NavLink></li>
                            <li><NavLink className='text-white' to='/contact'>Contact</NavLink></li>
                            <li><NavLink className='text-white' to='/login'>Login</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to='/' className="btn btn-ghost normal-case text-xl text-white">daisyUI</NavLink>


                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><NavLink className='text-white' to='/contact'>Contact</NavLink></li>
                        <li><NavLink className='mx-3 text-white' to='/about'>About</NavLink></li>
                        <li><NavLink className='text-white' to='/login'>Login</NavLink></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;