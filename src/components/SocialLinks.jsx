import React from 'react';
import { FaInstagram, FaLinkedin, FaBehance } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div className="flex justify-center gap-6 mt-4">
            <a
            href="https://www.instagram.com/dwraputra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition"
            aria-label="Instagram"
            >
                <FaInstagram size={24} />
            </a>
            <a
            href="https://www.linkedin.com/in/dwraputra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
            aria-label="LinkedIn"
            >
                <FaLinkedin size={24} />
            </a>
            <a
            href="https://www.behance.net/wiradanaputra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition"
            aria-label="Behance"
            >
                <FaBehance size={24} />
            </a>
        </div>
    );
};

export default SocialLinks;