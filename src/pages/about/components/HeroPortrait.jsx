import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const HeroPortrait = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const phrases = [
    "Where Design Meets Code,",
    "Where Creativity Meets Logic,",
    "Where Vision Meets Reality,"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-background via-surface to-surface-elevated py-20 lg:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Portrait Section */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Portrait Container */}
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl p-8 shadow-warm-lg">
                  <div className="w-full h-full bg-gradient-to-br from-surface to-surface-elevated rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src="/assets/images/pic.jpg" 
                        alt="Olivia-Roberta Dogbey" 
                        className="w-full h-full object-cover"
                      />
                    </div>

                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full p-3 animate-float">
                  <Icon name="Sparkles" size={24} className="text-accent" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-full p-3 animate-float" style={{ animationDelay: '2s' }}>
                  <Icon name="Heart" size={24} className="text-secondary" />
                </div>
                <div className="absolute top-1/2 -left-8 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full p-2 animate-float" style={{ animationDelay: '1s' }}>
                  <Icon name="Code" size={16} className="text-accent" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-12 animate-fade-in-up">
            {/* Animated Philosophy */}
            <div className="space-y-4">
              <div className="flex flex-col justify-center">
                <h1 className="font-playfair text-4xl lg:text-6xl font-bold leading-tight space-y-2">
                  <span className="block transition-all duration-500 ease-in-out">
                    {phrases[currentPhrase]}
                  </span>
                  <span className="block gradient-text">Magic Happens</span>
                </h1>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
            </div>

            {/* Introduction */}
            <div className="space-y-6 mt-6">
              <p className="text-xl font-inter text-muted-foreground leading-relaxed">
                Hi, I'm Olivia-Roberta Dogbey, a frontend developer with a deep passion for transforming creative visions into pixel-perfect digital experiences. 
                My journey began with a simple curiosity about how beautiful designs come to life on the web.
              </p>

              <p className="text-lg font-inter text-muted-foreground leading-relaxed">
                Today, I specialize in <span className="text-accent font-medium">React development</span>, 
                <span className="text-secondary font-medium"> TypeScript mastery</span>, and creating 
                experiences that feel as good as they look. Every project is an opportunity to blend 
                technical excellence with aesthetic beauty.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-accent" />
                  <span className="text-sm font-inter text-muted-foreground">Based in</span>
                </div>
                <p className="font-inter font-medium text-foreground">Accra, Ghana</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Coffee" size={16} className="text-secondary" />
                  <span className="text-sm font-inter text-muted-foreground">Fueled by</span>
                </div>
                <p className="font-inter font-medium text-foreground">Coffee & Creativity</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-accent" />
                  <span className="text-sm font-inter text-muted-foreground">Experience</span>
                </div>
                <p className="font-inter font-medium text-foreground">2+ Years</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={16} className="text-secondary" />
                  <span className="text-sm font-inter text-muted-foreground">Specialty</span>
                </div>
                <p className="font-inter font-medium text-foreground">React Ecosystems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPortrait;
