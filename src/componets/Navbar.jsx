import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="navbar-container">
            <nav className={`grid md:grid-cols-4 justify-between items-center p-5 bg-gray-600 text-white relative ${toggle ? 'expanded' : ''}`}>
                <h1 className='text-lg md:text-3xl font-bold md:col-span-2'>
                    <Link to='/'>Personal Task Management</Link>
                </h1>
                <ul className={`lg:flex justify-between font-bold ${toggle ? 'visible' : 'hidden'}`}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/all-tasks'>All Task</Link></li>
                    <li><Link to='/add-a-task'>Add A Task</Link></li>
                </ul>
                <div className={`md:flex justify-end ${toggle ? 'visible' : 'hidden'}`}>
                    <span><Link to='/'>Profile</Link></span>
                </div>
                <span onClick={() => setToggle(!toggle)} className='absolute top-5 right-5 lg:hidden'>
                    <FaBars />
                </span>
            </nav>
        </div>
    );
};

export default Navbar;
