import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full p-4">
      <h1 className="text-2xl font-bold mb-4 md:mb-0">SieloTech</h1>
      <nav className="flex items-center space-x-6">
        <Link 
          href="https://www.linkedin.com/company/sielotech" 
          className="flex items-center gap-2 hover:text-blue-500"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
          <span className="hidden md:inline">LinkedIn</span>
        </Link>
        <Link 
          href="mailto:info@sielotech.com" 
          className="flex items-center gap-2 hover:text-blue-500"
          aria-label="Email"
        >
          <MdEmail size={20} />
          <span className="hidden md:inline">Email</span>
        </Link>
      </nav>
    </div>
  );
} 