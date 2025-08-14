import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const floatingElements = [
    { icon: 'Code', position: 'top-20 left-10', delay: '0s' },
    { icon: 'Palette', position: 'top-32 right-20', delay: '2s' },
    { icon: 'Layers', position: 'top-40 left-1/4', delay: '4s' },
    { icon: 'Sparkles', position: 'top-16 right-1/3', delay: '1s' },
    { icon: 'Zap', position: 'top-28 left-2/3', delay: '3s' }
  ];

  return (
    <section className="relative min-h-screen pt-20 bg-gradient-to-br from-background via-surface to-surface-elevated overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} animate-float opacity-20 hover:opacity-40 transition-opacity duration-300`}
            style={{ animationDelay: element.delay }}
          >
            <Icon name={element.icon} size={32} className="text-secondary" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="font-playfair text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-text">Beautiful Code,</span>
                  <br />
                  <span className="text-foreground">Beautiful</span>
                  <br />
                  <span className="text-accent">Experiences</span>
                </h1>

                <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
              </div>

              {/* Introduction */}
              <div className="space-y-4">
                <p className="text-xl font-inter text-muted-foreground leading-relaxed">
                  Frontend Artisan crafting pixel-perfect implementations with design sensibility. 
                  Transforming creative visions into seamless digital experiences through 
                  <span className="text-accent font-medium"> React mastery</span> and 
                  <span className="text-secondary font-medium"> aesthetic precision</span>.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/portfolio">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-warm hover:shadow-warm-lg transition-all duration-300"
                    iconName="ArrowRight"
                    iconPosition="right"
                    iconSize={20}
                  >
                    Explore My Work
                  </Button>
                </Link >
              </div>

            
            </div>

            {/* Right Content - Circular Profile Image */}
            <div className="flex items-center space-x-3 mb-4">
                  <div className="w-100 h-100 rounded-lg overflow-hidden shadow-warm group-hover:shadow-warm-lg transition-all duration-300">
             <img
              src="/assets/images/pic2.png"
              alt="Your Profile"
              className="w-full h-full object-cover"
              />
            </div>


              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-full p-3">
                <Icon name="Zap" size={24} className="text-secondary" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full p-3">
                <Icon name="Heart" size={24} className="text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs font-inter text-muted-foreground">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} className="text-accent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
