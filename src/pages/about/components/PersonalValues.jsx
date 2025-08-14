import React from 'react';
import Icon from '../../../components/AppIcon';

const PersonalValues = () => {
  const values = [
    {
      icon: 'Users',
      title: 'Inclusive Design',
      description: 'Every interface should be accessible and welcoming to all users, regardless of their abilities or background.',
      color: 'accent',
      examples: ['WCAG 2.1 AA compliance', 'Screen reader optimization', 'Keyboard navigation', 'Color contrast']
    },
    {
      icon: 'Leaf',
      title: 'Sustainable Code',
      description: 'Writing clean, maintainable code that performs efficiently and stands the test of time.',
      color: 'secondary',
      examples: ['Performance optimization', 'Bundle size reduction', 'Clean architecture', 'Documentation']
    },
    {
      icon: 'Heart',
      title: 'Empowering Others',
      description: 'Sharing knowledge and lifting up fellow developers, especially in underrepresented communities.',
      color: 'accent',
      examples: ['Mentoring junior devs', 'Open source contributions', 'Technical writing', 'Community talks']
    },
    {
      icon: 'Lightbulb',
      title: 'Continuous Innovation',
      description: 'Staying curious about new technologies while applying them thoughtfully and purposefully.',
      color: 'secondary',
      examples: ['Experimental projects', 'Tech exploration', 'Best practices research', 'Industry trends']
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Core Values & Principles
          </h2>
          <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto">
            The beliefs and principles that guide my approach to development and shape every project I work on.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 shadow-warm hover:shadow-warm-lg transition-all duration-300 group">
              {/* Icon Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-14 h-14 bg-${value.color}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={value.icon} size={28} className={`text-${value.color}`} />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-foreground">
                  {value.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-inter text-muted-foreground leading-relaxed mb-6">
                {value.description}
              </p>

              {/* Examples */}
              <div className="space-y-3">
                <h4 className="font-inter font-medium text-foreground text-sm uppercase tracking-wide">
                  In Practice:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {value.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="bg-muted/50 rounded-lg px-3 py-2">
                      <span className="text-sm font-inter text-foreground">
                        {example}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Statement */}
        <div className="bg-gradient-to-br from-accent/5 to-secondary/5 border border-border rounded-2xl p-8 lg:p-12 text-center">
          <Icon name="Quote" size={32} className="text-accent mx-auto mb-6" />
          <blockquote className="font-playfair text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-6">
            "Technology should amplify human potential, not replace human connection. 
            Every line of code is an opportunity to make someone's day a little better."
          </blockquote>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
            <Icon name="Heart" size={16} className="text-secondary" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-accent" />
            </div>
            <div className="font-playfair text-3xl font-bold text-accent mb-2">15+</div>
            <div className="font-inter text-muted-foreground">Developers Mentored</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="GitBranch" size={24} className="text-secondary" />
            </div>
            <div className="font-playfair text-3xl font-bold text-secondary mb-2">25+</div>
            <div className="font-inter text-muted-foreground">Open Source Contributions</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={24} className="text-accent" />
            </div>
            <div className="font-playfair text-3xl font-bold text-accent mb-2">100%</div>
            <div className="font-inter text-muted-foreground">Accessibility Standards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalValues;