import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-card rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
{/* Project Image */}
<div className="relative h-64 overflow-hidden">
  <div className="w-full h-full flex items-center justify-center">
    <Image
      src={project.image}
      alt={project.title}
      width={800}  
      height={600}
      className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105" // Reduced hover scale
      style={{
        maxWidth: '100%',
        maxHeight: '100%',
        objectPosition: 'center'
      }}
    />
  </div>
  

  <div className="absolute top-4 left-4">
    <span className="px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full backdrop-blur-sm">
      {project.type}
    </span>
  </div>
  


        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <Icon name="Star" size={16} className="text-white fill-current" />
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-playfair text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
  {project.technologies
    .filter(tech => tech !== 'Next.js') 
    .slice(0, 4)
    .map((tech, index) => (
      <span
        key={index}
        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
      >
        {tech}
      </span>
    ))}
</div>

        {/* Action Buttons - Fixed Responsive Layout */}
        <div className="space-y-3 sm:space-y-0">
          {/* Top row: Live Demo and Code buttons */}
          <div className="flex items-center space-x-2">
            {project.liveUrl && (
              <Button
                variant="ghost"
                size="sm"
                className="text-accent hover:text-accent hover:bg-accent/10"
                iconName="ExternalLink"
                iconSize={14}
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
                iconName="Github"
                iconSize={14}
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                Code
              </Button>
            )}
          </div>
          
          {/* Bottom row: View Case Study button - full width on mobile */}
          <div className="sm:flex sm:justify-end">
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              iconName="ArrowRight"
              iconPosition="right"
              iconSize={14}
              onClick={() => onViewDetails(project)}
            >
              View Case Study
            </Button>
          </div>
        </div>
      </div>

      {/* Hover Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-2 right-2 w-2 h-2 bg-accent/30 rounded-full transition-all duration-500 ${
          isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-0'
        }`}></div>
        <div className={`absolute bottom-2 left-2 w-1 h-1 bg-secondary/30 rounded-full transition-all duration-700 ${
          isHovered ? 'scale-200 opacity-100' : 'scale-100 opacity-0'
        }`}></div>
      </div>
    </div>
  );
};

export default ProjectCard;