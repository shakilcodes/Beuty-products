import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='mt-[50px] md:mt-[150px] bg-[#252525] text-white p-10 grid md:grid-cols-2 lg:grid-cols-4 justify-around gap-10'>
            <div className='grid gap-2'>
                <h1>Subscribe to Aesop communications</h1>
                <hr className='' />
                <input className='bg-[#252525] border md:px-10 text-xl font-bold' type="text" placeholder='Email Adress' />
                <p>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.</p>
            </div>
            
                <div className='grid gap-2'>
                    <h1>Roders And Support</h1>
                    <hr className='my-2' />
                    <Link href=""><h1>Contact Us</h1></Link>
                    <Link href=""><h1>FAQs</h1></Link>
                    <Link href=""><h1>Shipping</h1></Link>
                    <Link href=""><h1>Returns</h1></Link>
                    <Link href=""><h1>Order History</h1></Link>
                    <Link href=""><h1>Terms and condtions</h1></Link>
                </div>
                <div className='grid gap-2'>
                    <h1>Services</h1>
                    <hr className='' />
                    <Link href=""><h1>Live assistance</h1></Link>
                    <Link href=""> <h1>Corporate gifts</h1></Link>
                    <Link href=""><h1>Facial Appointments</h1></Link>
                    <Link href=""><h1>Click and Collect</h1></Link>
                    <Link href=""><h1>Video Consultaions</h1></Link>
                </div>
                
            <div className='grid gap-2'>
                <h1>Location preferences</h1>
                <hr className='' />
                <Link href=""> <h1>Shipping:</h1></Link>
                <Link href=""><p>Hong KOng SAR, China</p></Link>
                <Link href=""><h1>Language:</h1></Link>
                <Link href=""><p>English</p></Link>
                <Link href=""><p>繁體中文</p></Link>

            </div>
            <div className='grid gap-2'>
                <h1>Sustainability</h1>
                <hr className='' />
                <h1>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</h1>

            </div>
            <div className='grid gap-2'>
                <h1>About</h1>
                <hr className='' />
                <Link href=''><h1>Our Story</h1></Link>
                <Link href=''><p>Careers</p></Link>
                <Link href=''><h1>Privacy plicy</h1></Link>
                <Link href=''><p>Accessibility</p></Link>
                <Link href=''><p>cookie Policy</p></Link>

            </div>
            <div className='grid gap-2'>
                <h1>Social Media</h1>
                <hr className='' />
                <Link href=''><h1>Instagram</h1></Link>
                <Link href=''><p>Twitter</p></Link>
                <Link href=''><h1>LinkedIn</h1></Link>
                <Link href=''><p>WeChat</p></Link>
                <Link href=''><p>Weibo</p></Link>

            </div>

        </footer>
    );
};

export default Footer;