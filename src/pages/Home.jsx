import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-[50%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-20'>
            <Link to='/all-tasks'>
                <div className='bg-purple-700 md:text-3xl text-white font-bold p-5 h-[150px] md:h-[200px] flex items-center justify-evenly text-center rounded-lg'>
                    View all your task
                </div>
            </Link>
            <Link to='/add-a-task'>
                <div  className='bg-indigo-600 md:text-3xl text-white font-bold p-5 h-[150px] md:h-[200px] flex items-center justify-evenly text-center rounded-lg'>
                    Add A task
                </div>
            </Link>
        </div>
    );
};

export default Home;