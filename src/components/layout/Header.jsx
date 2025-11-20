
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
    const navLinks = [
        { name: 'Cas Clients', path: '/case-studies' },
        { name: 'À propos', path: '/about' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-orange-500/10 bg-slate-950/80 backdrop-blur-lg">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                <Link to="/" className="text-2xl font-bold text-orange-500 hover:text-orange-400 transition-colors">
                    ONORA
                </Link>
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors hover:text-orange-500 ${
                                    isActive ? 'text-orange-500' : 'text-gray-300'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>
                <Link to="/contact">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        Contactez-nous
                    </Button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
