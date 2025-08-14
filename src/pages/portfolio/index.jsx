import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import StatsSection from './components/StatsSection';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const PortfolioShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTechnology, setActiveTechnology] = useState('all');
  const [activeIndustry, setActiveIndustry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing skills, projects, and experience of a Virtual Assistant, built with React, Next.js, and TypeScript.",
      image: "/assets/images/Screenshot.png",
      type: "Frontend",
      industry: "portfolio",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      featured: true,
      liveUrl: "https://jonathanekowedubaafo.vercel.app/",
      githubUrl: "https://github.com/oliviaroberta/VirtualAssistantPortfolioWebsite",
      duration: "3 weeks",
      
      gallery: [
        "/assets/images/Screenshot2.png",
         "/assets/images/Screenshot5.png",
        "/assets/images/Screenshot3.png",
        "/assets/images/Screenshot4.png",
        "/assets/images/Screenshot7.png",
        "/assets/images/Screenshot8.png",
        "/assets/images/Screenshot9.png"
      ],
      challenge: "The client needed a professional online presence to showcase virtual assistant services, attract potential clients, and display services offered.",
      solution: "I developed a clean, responsive portfolio with an about, education, work experience, toolkit, service, and work samples pages. Implemented smooth animations to enhance user experience while maintaining fast load times.",
      features: [
         "Performance optimized",
        "Responsive design for all devices",
       "Smooth page transitions", 
      ]
    },
    {
      id: 2,
      title: "My Developer Portfolio",
      description: "A comprehensive portfolio website showcasing my skills, projects, and experience as a web developer, built with React, Next.js, and TypeScript.",
      image: "/assets/images/Screenshot1m.png",
      type: "Frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      featured: true,
      liveUrl: "https://designsystem-pro.netlify.app",
      githubUrl: "https://github.com/oliviaroberta/designsystem-pro",
      duration: "3 weeks",
      gallery: [
        "/assets/images/Screenshot3m.png",
        "/assets/images/Screenshot2m.png",
        "/assets/images/Screenshot4m.png",
        "/assets/images/Screenshot5m.png",
        "/assets/images/Screenshot6m.png"
      ],
      challenge: "I needed a professional online presence to showcase web development skills, attract potential clients, and display projects.",
      solution: "I developed a clean, responsive portfolio with sections for skills, projects, and contact. Implemented smooth animations to enhance user experience while maintaining fast load times.",
      features: [
        "Performance optimized",
        "Responsive design for all devices",
        "Smooth page transitions",
        "Interactive project showcases",
        "SEO optimized for better visibility",
        "Fast loading times"
      ],
      
    },
    {
      id: 3,
      title: "An Ecommerce Website",
      description: "A premium activewear e-commerce platform showcasing modern web development capabilities while creating a seamless shopping experience that reflects the brand's luxury aesthetic.",
      image: "/assets/images/Screenshot1A.png",
      type: "Frontend",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vite.js", "Framer Motion"," React Router"," Redux Toolkit"],
      featured: true,
      liveUrl: "https://luxe-active-ecommerce.vercel.app/",
      githubUrl: "https://github.com/oliviaroberta/LuxeActive_Ecommerce",
      duration: "2 weeks",
      gallery: [
        "/assets/images/Screenshot1A.png",
        "/assets/images/Screenshot2A.png",
        "/assets/images/Screenshot3A.png",
      ],
      challenge: "The back-and-forth messaging that typically happens when customers want to purchase items. The client needed a professional online presence to showcase products, attract potential customers, and provide a seamless shopping experience.",
      solution: "Developed a premium activewear e-commerce platform to showcase modern web development capabilities while creating a seamless shopping experience that reflects the brand's luxury aesthetic. ",
      features: [
        "Performance optimized",
        "Responsive design for all devices",
        "Smooth page transitions",
        "Interactive activewear showcases",
        "Product detail pages with interactive galleries",
        "Cart and checkout functionality",
        "SEO optimized for better visibility",
        "Fast loading times"
      ]}
  ];


 const filteredProjects = useMemo(() => {
  let filtered = [...projects]; // Create a copy

  // 1. Filter by category (e.g., "featured")
  if (activeFilter !== 'all') {
    if (activeFilter === 'featured') {
      filtered = filtered.filter(project => project.featured);
    } else if (activeFilter === 'recent') {
      filtered = filtered.slice(0, 3);
    } else if (activeFilter === 'fullstack') {
      filtered = filtered.filter(project => project.type === 'Full Stack');
    } else if (activeFilter === 'frontend') {
      filtered = filtered.filter(project => project.type === 'Frontend');
    }
  }

  // 2. Filter by technology (e.g., "React")
  if (activeTechnology !== 'all') {
    const techMap = {
      'react': 'React',
      'nextjs': 'Next.js',
      'typescript': 'TypeScript',
      'tailwind': 'Tailwind CSS'
    };
    filtered = filtered.filter(project => 
      project.technologies.includes(techMap[activeTechnology])
    );
  }

  // 3. Filter by industry
  if (activeIndustry !== 'all') {
    filtered = filtered.filter(project => project.industry === activeIndustry);
  }

  // 4. Filter by search query
  if (searchQuery) {
    filtered = filtered.filter(project =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => 
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }

  return filtered;
}, [projects, activeFilter, activeTechnology, activeIndustry, searchQuery]); // ✅ Re-runs only when these change

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portfolio - Interactive Project Showcase</title>
        <meta name="description" content="Explore my comprehensive portfolio of React, Next.js, and TypeScript projects. From e-commerce platforms to design systems, discover the technical expertise and creative solutions behind each project." />
        <meta name="keywords" content="React portfolio, Next.js projects, TypeScript development, frontend developer, web development showcase, UI/UX design" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-accent/5"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-2 h-2 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-32 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
            <div className="absolute top-40 right-1/4 w-1 h-1 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              <span>Featured Projects & Case Studies</span>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6 gradient-text">
              Interactive Project Showcase
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore a curated collection of web applications, and digital experiences. 
              Each project tells a story of technical innovation, creative problem-solving, and measurable impact.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-warm hover:shadow-warm-lg"
                iconName="Play"
                iconPosition="left"
                iconSize={20}
                onClick={() => document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Projects
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                iconName="Download"
                iconPosition="left"
                iconSize={20}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection projects={projects} />

        {/* Projects Section */}
        <section id="projects-section" className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
           

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} className="text-muted-foreground" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                  No Projects Found
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Try adjusting your filters or search terms to discover more projects.
                </p>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  iconName="RotateCcw"
                  iconPosition="left"
                  iconSize={16}
                  onClick={() => {
                    setActiveFilter('all');
                    setActiveTechnology('all');
                    setActiveIndustry('all');
                    setSearchQuery('');
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-accent/5 via-background to-secondary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's collaborate to bring your vision to life with beautiful, functional, and scalable web solutions.
            </p>
            
           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
  <a 
    href="mailto:robertadogbey@gmail.com" 
    className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg shadow-warm hover:shadow-warm-lg transition-all duration-300"
  >
    <Icon name="Mail" size={20} className="mr-2" />
    Email
  </a>

  <a 
    href="tel:+233534909845" 
    className="inline-flex items-center justify-center px-6 py-3 border border-border text-muted-foreground hover:text-foreground rounded-lg transition-all duration-300"
  >
    <Icon name="Phone" size={20} className="mr-2" />
    Call
  </a>
</div>

          </div>
        </section>
      </main>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Footer */}
      <footer className="bg-surface border-t border-border py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
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
                  <li><a href="/homepage-interactive-portfolio-experience" className="hover:text-accent transition-colors">Home</a></li>
                  <li><a href="/portfolio-interactive-project-showcase" className="hover:text-accent transition-colors">Portfolio</a></li>
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
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} OLIVIA-ROBERTA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioShowcase;