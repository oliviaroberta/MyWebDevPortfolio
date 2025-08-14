import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ProjectFitAssessment from './components/ProjectFitAssessment';

const ContactProfessionalConnectionHub = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta 
          name="description" 
          content="Ready to bring your vision to life? Connect with a frontend artisan who transforms ideas into beautiful, performant digital experiences. Let's discuss your project." 
        />
        <meta name="keywords" content="Contact Frontend Developer, React Developer, Web Development Consultation, UI/UX Design Services, Project Collaboration" />
        <meta property="og:title" content="Let's Create Amazing Things Together - Contact Olivia-Roberta" />
        <meta property="og:description" content="Connect with a frontend artisan who transforms ideas into beautiful digital experiences" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Let's Create Amazing Things Together - Contact Olivia-Roberta" />
        <meta name="twitter:description" content="Connect with a frontend artisan who transforms ideas into beautiful digital experiences" />
        <link rel="canonical" href="/contact-professional-connection-hub" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <ContactHero />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                <ProjectFitAssessment />
              </div>
              
              {/* Sidebar */}
              <div className="space-y-8">
                <ContactMethods />
              </div>
            </div>
          </div>
        </main>

  {/* Footer */}
        <footer className="bg-surface border-t border-border/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg overflow-hidden shadow-warm group-hover:shadow-warm-lg transition-all duration-300">
                  <img
                    src="/assets/images/logo.png"
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                </div>

                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground">OLIVIA-ROBERTA</h3>
                    <p className="text-sm text-muted-foreground">Beautiful Code, Beautiful Experiences</p>
                  </div>
                </div>
                <p className="text-sm font-inter text-muted-foreground leading-relaxed mb-4">
                  Frontend Artisan crafting pixel-perfect implementations with design sensibility. 
                  Transforming creative visions into seamless digital experiences.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/olivia-roberta-dogbey-42b09b226/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/oliviaroberta"
                  target="_blank"
                  rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-accent transition-colors">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-inter font-semibold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm font-inter text-muted-foreground">
                  <li><a href="/homepage" className="hover:text-accent transition-colors">Home</a></li>
                  <li><a href="/portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
                  <li><a href="/about" className="hover:text-accent transition-colors">About</a></li>
                  <li><a href="/skills" className="hover:text-accent transition-colors">Skills</a></li>
                  <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-inter font-semibold text-foreground mb-4">Services</h4>
                <ul className="space-y-2 text-sm font-inter text-muted-foreground">
                  <li><span className="hover:text-accent transition-colors cursor-pointer">Custom Website Development</span></li>
                  <li><span className="hover:text-accent transition-colors cursor-pointer">Landing Page Development</span></li>
                  <li><span className="hover:text-accent transition-colors cursor-pointer">UI/UX Collaboration</span></li>
                  <li><span className="hover:text-accent transition-colors cursor-pointer">API Integration</span></li>
                  <li><span className="hover:text-accent transition-colors cursor-pointer">Perfomance Optimization</span></li>
                 <li><span className="hover:text-accent transition-colors cursor-pointer">Responsive Design Implementation</span></li> 
                </ul>
              </div>
            </div>

            <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm font-inter text-muted-foreground">
                © {new Date().getFullYear()} OLIVIA-ROBERTA. All rights reserved.
              </p>

            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactProfessionalConnectionHub;