import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Portfolio', path: '/portfolio', icon: 'Briefcase' },
    { name: 'About', path: '/about', icon: 'User' },
    { name: 'Skills', path: '/skills', icon: 'Zap' },
    { name: 'Contact', path: '/contact', icon: 'Mail' }
  ];

  const isActivePath = (path) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-warm border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-screen overflow-hidden">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 group transition-smooth hover:scale-105"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-lg overflow-hidden shadow-warm group-hover:shadow-warm-lg transition-all duration-300">
                <img src="/assets/images/logo.png" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-playfair text-xl font-semibold text-foreground gradient-text">
                OLIVIA-ROBERTA
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg font-inter font-medium text-sm transition-all duration-300 group ${
                  isActivePath(item.path)
                    ? 'text-accent bg-accent/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon 
                    name={item.icon} 
                    size={16} 
                    className={`transition-colors duration-300 ${
                      isActivePath(item.path) ? 'text-accent' : 'text-current'
                    }`}
                  />
                  <span>{item.name}</span>
                </div>
                {isActivePath(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-smooth ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-6 py-4 bg-background/95 backdrop-blur-md border-t border-border/50">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-inter font-medium transition-all duration-200 ${
                    isActivePath(item.path)
                      ? 'text-accent bg-accent/10 border border-accent/20'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon 
                    name={item.icon} 
                    size={20} 
                    className={`${
                      isActivePath(item.path) ? 'text-accent' : 'text-current'
                    }`}
                  />
                  <span>{item.name}</span>
                  {isActivePath(item.path) && (
                    <div className="ml-auto w-2 h-2 bg-accent rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-border/50"></div>
          </div>
        </div>
      </div>

      {/* Floating Code Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-4 left-1/4 w-1 h-1 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-6 right-1/4 w-1 h-1 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </header>
  );
};

export default Header;
