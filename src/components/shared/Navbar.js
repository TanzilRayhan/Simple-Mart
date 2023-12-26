"use client"

import React from 'react';
import Link from 'next/link';
const Navbar = () => {
   
    return (
        <div className="max-w-6xl mx-auto py-5 navbar">
            <div className="navbar-start">

                <a className=" font-bold text-3xl">Simple Mart</a>
            </div>
            <div className="navbar-end gap-4">
                <Link href='/' className="btn">Home</Link>
            </div>
        </div>
    );
};

export default Navbar;