import React from 'react';
import { FaInstagram, FaLinkedin, FaBehance } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-black text-white border-t border-white/10 mt-10">
    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-center md:text-left">
        © 2025 dwraputradev. All rights reserved.
      </p>
      <div className="flex space-x-4">
        <a
          href="https://instagram.com/dwraputra"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://linkedin.com/in/dwraputra"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://behance.net/wiradanaputra"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaBehance size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
