import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-surface to-surface-elevated overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-secondary/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-accent/20 rounded-full animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-inter font-medium text-accent">Available for New Projects</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight"
          >
            Let's Create Something{' '}
            <span className="relative">
              <span className="gradient-text">Beautiful</span>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"
              ></motion.div>
            </span>{' '}
            Together
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-inter text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            Ready to transform your vision into a stunning digital experience? 
            I'm here to help bring your ideas to life with craftsmanship, creativity, and code that performs beautifully.
          </motion.p>

          {/* Key Contact Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12"
          >
            <div className="flex items-center space-x-2 text-sm font-inter text-muted-foreground">
              <Icon name="Clock" size={16} className="text-accent" />
              <span>Usually responds within 2 hours</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-inter text-muted-foreground">
              <Icon name="CheckCircle" size={16} className="text-accent" />
              <span>Free initial consultation</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-inter text-muted-foreground">
              <Icon name="Calendar" size={16} className="text-accent" />
              <span>Flexible meeting times</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >


<a
  href="tel:+233534909845"
  className="inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-inter font-medium shadow-warm hover:shadow-warm-lg transition-all duration-300 group"
>
  <Icon name="Phone" size={18} />
  <span>Call Now</span>
  <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
</a>

            
            
            <a 
              href="mailto:robertadogbey@gmail.com" 
              className="inline-flex items-center justify-center space-x-2 border-2 border-border hover:border-accent hover:bg-accent/5 text-foreground px-8 py-3 rounded-lg font-inter font-medium transition-all duration-300 group"
            >
              <Icon name="Mail" size={18} />
              <span>Send Direct Email</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;