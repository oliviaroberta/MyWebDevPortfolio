import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const featuredProjects = [
    {
      id: 1,
      title: "Portfolio Website",
      category: "React • TypeScript • Tailwind CSS",
      description: "A personal portfolio website showcasing skills, projects, and experience of a Virtual Assistant, built with React, Next.js, and TypeScript.",
      image:"/assets/images/Screenshot.png",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://jonathanekowedubaafo.vercel.app/",
      githubUrl: "https://github.com/oliviaroberta/VirtualAssistantPortfolioWebsite",
      featured: true
    },

    {
      id: 2,
      title: "E-Commerce Website",
      category: "React • JavaScript • Tailwind CSS",
      description: "A premium activewear e-commerce platform showcasing modern web development capabilities while creating a seamless shopping experience that reflects the brand's luxury aesthetic.",
      image:"/assets/images/Screenshot1A.png",
      techStack: ["React", "JavaScript", "Tailwind CSS", "Vite.js", "Framer Motion"," React Router"," Redux Toolkit"],
      liveUrl:"https://luxe-active-ecommerce.vercel.app/",
      githubUrl: "https://github.com/oliviaroberta/LuxeActive_Ecommerce",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Briefcase" size={16} className="text-accent" />
            <span className="text-sm font-inter font-medium text-accent">Featured Work</span>
          </div>
          
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
           My <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each project represents a unique challenge solved through thoughtful design, 
            clean code architecture, and meticulous attention to user experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
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
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <a
                          href={project.liveUrl}
                          className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-2 hover:bg-white/30 transition-colors"
                        >
                          <Icon name="ExternalLink" size={16} className="text-white" />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-2 hover:bg-white/30 transition-colors"
                        >
                          <Icon name="Github" size={16} className="text-white" />
                        </a>
                      </div>
                      
                      <div className="bg-accent/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-inter font-medium text-white">Featured</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm font-inter font-medium text-accent">{project.category}</span>
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm font-inter text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>



                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-inter font-medium bg-muted text-muted-foreground px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs font-inter font-medium text-accent">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Animation Indicator */}
              <div className={`absolute top-4 right-4 transition-all duration-300 ${
                hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <div className="bg-accent/90 backdrop-blur-sm rounded-full p-2">
                  <Icon name="Eye" size={16} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Link to="/portfolio">
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              iconName="ArrowRight"
              iconPosition="right"
              iconSize={20}
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;