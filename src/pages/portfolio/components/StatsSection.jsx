import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = ({ projects }) => {
  const stats = [
    {
      icon: 'Folder',
      value: projects.length,
      label: 'Projects Completed',
      description: 'Diverse range of web applications'
    },
    {
      icon: 'Code',
      value: '50K+',
      label: 'Lines of Code',
      description: 'Clean, maintainable, and scalable'
    },
    {
      icon: 'Users',
      value: '10+',
      label: 'Happy Clients',
      description: 'Across various industries'
    },
    {
      icon: 'Award',
      value: '90%',
      label: 'Client Satisfaction',
      description: 'Based on project feedback'
    }
  ];

  const technologies = [
    { name: 'React', count: projects.filter(p => p.technologies.includes('React')).length },
    { name: 'Next.js', count: projects.filter(p => p.technologies.includes('Next.js')).length },
    { name: 'TypeScript', count: projects.filter(p => p.technologies.includes('TypeScript')).length },
    { name: 'Tailwind CSS', count: projects.filter(p => p.technologies.includes('Tailwind CSS')).length }
  ];

  return (
    <div className="bg-card rounded-xl p-8 shadow-warm mb-12">
      <div className="text-center mb-8">
        <h2 className="font-playfair text-3xl font-semibold text-foreground mb-4">
          Portfolio at a Glance
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my development journey, showcasing the breadth and depth of projects 
          that demonstrate technical expertise and creative problem-solving.
        </p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-surface rounded-lg border border-border hover:shadow-warm transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon name={stat.icon} size={24} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-foreground font-playfair mb-1">
              {stat.value}
            </div>
            <div className="font-medium text-foreground mb-2">
              {stat.label}
            </div>
            <div className="text-sm text-muted-foreground">
              {stat.description}
            </div>
          </div>
        ))}
      </div>

      {/* Technology Distribution */}
      <div className="border-t border-border pt-8">
        <h3 className="font-playfair text-xl font-semibold text-foreground mb-6 text-center">
          Technology Focus
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-surface rounded-lg border border-border"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon 
                    name={tech.name === 'React' ? 'Atom' : tech.name === 'Next.js' ? 'Zap' : tech.name === 'TypeScript' ? 'FileCode' : 'Palette'} 
                    size={16} 
                    className="text-accent" 
                  />
                </div>
                <span className="font-medium text-foreground text-sm">{tech.name}</span>
              </div>
              <span className="text-accent font-bold">{tech.count}</span>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default StatsSection;