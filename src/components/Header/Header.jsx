import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="nav-link">Головна</Link>
                <Link to="/catalog" className="nav-link">Каталог</Link>
                <Link to="/favorites" className="nav-link">Вибране</Link>
            </nav>
        </header>
    )
}; 
