
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="mt-16 border-t border-orange-500/10">
            <div className="container mx-auto px-4 py-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} ONORA. Tous droits réservés.</p>
                <nav className="mt-4 flex justify-center space-x-6">
                    <Link to="/case-studies" className="text-sm hover:text-orange-500 transition-colors">Cas Clients</Link>
                    <Link to="/about" className="text-sm hover:text-orange-500 transition-colors">À propos</Link>
                    <Link to="/contact" className="text-sm hover:text-orange-500 transition-colors">Contact</Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
