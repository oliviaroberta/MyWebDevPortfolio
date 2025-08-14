import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFitAssessment = () => {
  const [activeTab, setActiveTab] = useState('expertise');

  const expertiseAreas = [
    {
      title: 'React & Next.js Development',
      description: 'Modern React applications with server-side rendering, TypeScript, and performance optimization',
      fit: 'perfect',
      icon: 'Code',
      technologies: ['React 18+', 'Next.js 14', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'UI/UX Implementation',
      description: 'Pixel-perfect conversion of designs into responsive, interactive user interfaces',
      fit: 'perfect',
      icon: 'Palette',
      technologies: ['Figma to Code', 'Responsive Design', 'Animation', 'Accessibility']
    },
    {
      title: 'Performance Optimization',
      description: 'Speed optimization, Core Web Vitals improvement, and scalability enhancements',
      fit: 'perfect',
      icon: 'Zap',
      technologies: ['Lighthouse', 'Bundle Analysis', 'Lazy Loading', 'Caching']
    },
    {
      title: 'E-commerce Solutions',
      description: 'Custom shopping experiences with payment integration and inventory management',
      fit: 'good',
      icon: 'ShoppingCart',
      technologies: ['Shopify', 'Stripe', 'PayPal', 'Custom Carts']
    },
    {
      title: 'CMS Integration',
      description: 'Headless CMS setup with content management and dynamic page generation',
      fit: 'good',
      icon: 'Database',
      technologies: ['Contentful', 'Sanity', 'Strapi', 'WordPress API']
    },
    {
      title: 'Mobile App Development',
      description: 'React Native applications for iOS and Android platforms',
      fit: 'limited',
      icon: 'Smartphone',
      technologies: ['React Native', 'Expo', 'Native Modules']
    }
  ];



  const idealProjects = [
    {
      type: 'SaaS Applications',
      description: 'Dashboard interfaces, admin panels, and user-facing applications',
      complexity: 'Medium to High',
      timeline: '2-6 months',
      fit: 95
    },
    {
      type: 'Marketing Websites',
      description: 'Company websites, landing pages, and portfolio sites',
      complexity: 'Low to Medium',
      timeline: '3-8 weeks',
      fit: 90
    },
    {
      type: 'E-commerce Platforms',
      description: 'Custom shopping experiences and marketplace applications',
      complexity: 'Medium to High',
      timeline: '2-4 months',
      fit: 85
    },
    {
      type: 'Web Applications',
      description: 'Custom tools, calculators, and interactive experiences',
      complexity: 'Medium',
      timeline: '1-3 months',
      fit: 90
    }
  ];

  const getFitColor = (fit) => {
    if (fit === 'perfect' || (typeof fit === 'number' && fit >= 90)) {
      return 'text-success bg-success/10 border-success/20';
    } else if (fit === 'good' || (typeof fit === 'number' && fit >= 75)) {
      return 'text-warning bg-warning/10 border-warning/20';
    } else {
      return 'text-muted-foreground bg-muted/50 border-border/50';
    }
  };

  const getFitLabel = (fit) => {
    if (fit === 'perfect' || (typeof fit === 'number' && fit >= 90)) {
      return 'Perfect Fit';
    } else if (fit === 'good' || (typeof fit === 'number' && fit >= 75)) {
      return 'Good Fit';
    } else {
      return 'Limited';
    }
  };

  const tabs = [
    { id: 'expertise', label: 'My Expertise', icon: 'Star' },
    { id: 'projects', label: 'Ideal Projects', icon: 'Target' }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-surface-elevated rounded-2xl border border-border/30 p-1 sm:p-8 lg:p-12 shadow-warm w-full overflow-x-hidden"
    >
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-full h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
            <Icon name="CheckSquare" size={20} className="text-white" />
          </div>
          <h2 className="font-playfair text-2xl lg:text-3xl font-semibold text-foreground">
            Project Fit Assessment
          </h2>
        </div>
        <p className="text-muted-foreground font-inter leading-relaxed">
          Not every project is a perfect match. Here's what I excel at and how I work to help you determine if we're a good fit for each other.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 p-1 bg-background rounded-lg border border-border/30">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md font-inter font-medium text-sm transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-accent text-accent-foreground shadow-warm'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <Icon name={tab.icon} size={16} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'expertise' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-lg p-6 border border-border/20 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={area.icon} size={20} className="text-accent" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-playfair text-lg font-semibold text-foreground">
                        {area.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-inter font-medium border ${getFitColor(area.fit)}`}>
                        {getFitLabel(area.fit)}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground font-inter mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {area.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs font-inter rounded border border-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'style' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            
          </motion.div>
        )}

        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {idealProjects.map((project, index) => (
              <motion.div
                key={project.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-lg p-6 border border-border/20 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                      {project.type}
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-playfair font-bold text-accent">
                      {project.fit}%
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-inter font-medium border ${getFitColor(project.fit)}`}>
                      {getFitLabel(project.fit)}
                    </span>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="BarChart3" size={14} className="text-accent" />
                    <span className="text-muted-foreground">Complexity:</span>
                    <span className="font-medium text-foreground">{project.complexity}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} className="text-accent" />
                    <span className="text-muted-foreground">Timeline:</span>
                    <span className="font-medium text-foreground">{project.timeline}</span>
                  </div>
                </div>
                
                {/* Fit Indicator */}
                <div className="mt-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.fit}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-2 rounded-full bg-gradient-to-r from-secondary to-accent"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* CTA */}
      <div className="mt-8 pt-8 border-t border-border/30">
        <div className="text-center">
          <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
            Think we might be a good fit? Let's have a conversation about your project and see how I can help bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
      <a href="mailto:robertadogbey@gmail.com">
  <Button
    className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-warm hover:shadow-warm-lg"
    iconName="Mail"
    iconPosition="left"
  >
    Send an Email
  </Button>
</a>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectFitAssessment;