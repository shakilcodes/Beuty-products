import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between p-6 px-10'>
            <div className='flex gap-4'>
                <Link href=''>Skin Care</Link>
                <Link href=''>Body & Hand </Link>
                <Link href=''>Fragrance </Link>
                <Link href=''>Home </Link>
                <Link href=''>Kits & Travel </Link>
                <Link href=''>Gifts </Link>
                <Link href=''>Read </Link>
                <Link href=''>Stores </Link>
                <Link href=''>Facial Appointments </Link>
            </div>
            <div className='flex gap-5'>
            <Link href=''>Log in </Link>
            <Link href=''>Cabinet </Link>
            <Link href=''>Cart </Link>
            </div>
        </nav>
    );
};

export default Navbar;