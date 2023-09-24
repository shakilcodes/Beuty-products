import Link from 'next/link';
import React from 'react';
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Navbar = () => {
    return (
        <nav className='md:p-3 px-10'>

            <div className='fixed md:static left-0 right-0 top-0'>
                <div className="flex mr-5">
                    <div className="dropdown w-full">
                        <div className='flex items-center justify-between mr-5 text-white'>
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                <Link className='block md:hidden' href=''>GlamourGlow</Link>

                            </label>

                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[200px]">
                            <div className=''>
                                <li><Link href=''>GlamourGlow</Link></li>
                                <li><Link href='' className=''>Skin Care</Link></li>
                                <li><Link href='' className=''>Body & Hand </Link></li>
                                <li><Link href='' className=''>Fragrance </Link></li>
                                <li> <Link href='' className=''>Home </Link></li>
                                <li><Link href='' className=''>Kits & Travel </Link></li>
                                <li> <Link href='' className=''>Gifts </Link></li>
                                <li> <Link href='' className=''>Read </Link></li>
                                <li> <Link href='' className=''>Stores </Link></li>
                                <li><Link href='' className=''>Facial Appointments </Link></li>
                                <li>  <Link href='' className=''>Log in </Link></li>
                                <li> <Link href='' className=''>Cabinet </Link></li>
                                <li></li>
                                <li></li>
                            </div>
                        </ul>
                    </div>

                    <div className='flex justify-between gap-5 text-white'>
                        <Link className='block md:hidden' href=''><BsSearch className='text-xl mt-1'></BsSearch></Link>
                        <Link className='block md:hidden' href=''><AiOutlineHeart className='mt-1 text-xl'></AiOutlineHeart></Link>
                        <Link className='block md:hidden' href=''>Cart </Link>

                    </div>


                </div>
                <div className=" ">
                    <ul >
                        <div className='flex justify-between items-center w-full gap-10'>
                            <div className='flex items-center gap-3'>
                                <Link className='hidden md:block text-2xl font-bold' href=''>GlamourGlow</Link>
                                <Link href='' className=' hidden md:block'>Skin Care</Link>
                                <Link href='' className=' hidden md:block'>Body & Hand </Link>
                               
                                <Link href='' className=' hidden md:block'>Home </Link>
                                
                                <Link href='' className=' hidden md:block'>Gifts </Link>
                              
                                
                                <Link href='' className=' hidden md:block'> Appointments </Link>
                                <Link className='hidden md:block' href=''><BsSearch className='text-xl'></BsSearch></Link>

                            </div>

                            <div className='flex gap-3'>
                                <Link href='' className='hidden md:block'>Log in </Link>
                                <Link className='hidden md:block font-bold' href=''>Cart </Link>
                            </div>

                        </div>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;