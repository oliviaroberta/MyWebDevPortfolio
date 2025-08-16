import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsMatrix = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [animatedProgress, setAnimatedProgress] = useState({});

  const skills = [
    {
      name: 'React',
      level: 'Intermediate',
      progress: 78,
      experience: '1+ years',
      color: 'blue',
      icon: 'Zap',
      projects: ['E-commerce Platform', 'SaaS Dashboard'],
    },
    {
      name: 'TypeScript',
      level: 'Intermediate',
      progress: 75,
      experience: '1+ years',
      color: 'indigo',
      icon: 'Shield',
      projects: ['Enterprise Application', 'Component Library', 'API Integration'],
    },
    {
      name: 'Next.js',
      level: 'Intermediate',
      progress: 80,
      experience: '1+ years',
      color: 'gray',
      icon: 'Rocket',
      projects: ['Marketing Website', 'Blog Platform', 'SEO-Optimized App'],
    },
    {
      name: 'CSS/Tailwind',
      level: 'Intermidiate',
      progress: 79,
      experience: '1+ years',
      color: 'teal',
      icon: 'Palette',
      projects: ['Responsive Layouts', 'Animation Libraries', 'Theme Systems'],
    },
    {
      name: 'Framer Motion',
      level: 'Beginner',
      progress: 60,
      experience: '5+ Months',
      color: 'gray',
      icon: 'Palette',
      projects: ['Animation Libraries', 'Micro-Interactions', 'UI Transitions'],
    },
    {
      name: 'Redux',
      level: 'Beginner',
      progress: 50,
      experience: '5+ months',
      color: 'gray',
      icon: 'Rocket',
      projects: ['State Management', 'Data Fetching', 'Global State'],
    },
    {
      name: 'Vite',
      level: 'Intermediate',
      progress: 85,
      experience: '1+ years',
      color: 'gray',
      icon: 'Rocket',
      projects: ['Marketing Website', 'E-commerce', 'SEO-Optimized App'],
    },
    {
      name: 'JavaScript',
      level: 'Intermediate',
      progress: 80,
      experience: '1+ years',
      color: 'yellow',
      icon: 'Code',
      projects: ['Dynamic Web Apps', 'Interactive Features', 'API Integration'],
    },
    {
      name: 'HTML/CSS',
      level: 'Intermediate',
      progress: 85,
      experience: '1+ years',
      color: 'pink',
      icon: 'FileText',
      projects: ['Landing Pages', 'Email Templates', 'Web Components'],
    },
    {
      name: 'Git/GitHub',
      level: 'Intermediate',
      progress: 90,
      experience: '1+ years',
      color: 'purple',
      icon: 'GitBranch',
      projects: ['Version Control', 'Collaboration', 'Open Source Contributions'],
    },
    {
      name: 'Testing (Jest, React Testing Library)',
      level: 'Beginner',
      progress: 55,
      experience: '5+ months',
      color: 'orange',
      icon: 'CheckCircle',
      projects: ['Unit Tests', 'Integration Tests', 'End-to-End Tests'],
    },
  ];

  // Services data
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and accessible UIs using React, Next.js, and Tailwind CSS.',
      icon: 'LayoutGrid',
    },
    {
      title: 'API Integration',
      description: 'Connecting frontend to backend systems via RESTful APIs or GraphQL.',
      icon: 'Plug',
    },
    {
      title: 'Performance Optimization',
      description: 'Improving load times, reducing bundle sizes, and enhancing UX.',
      icon: 'GaugeCircle',
    },
    {
      title: 'Code Reviews',
      description: 'Ensuring code quality and best practices through thorough reviews.',
      icon: 'CheckSquare',
    },
    {
      title: 'Technical Consulting',
      description: 'Advising on architecture, tech stack, and development processes.',
      icon: 'Lightbulb',
    },
    
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const newProgress = {};
      skills.forEach((skill, index) => {
        newProgress[index] = skill.progress;
      });
      setAnimatedProgress(newProgress);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'text-green-500 bg-green-50';
      case 'Advanced': return 'text-blue-500 bg-blue-50';
      case 'Intermediate': return 'text-yellow-500 bg-yellow-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-surface to-surface-elevated">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h1>
          <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto">
            Interactive breakdown of technical competencies with real project applications and measurable proficiency levels.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-2xl p-6 shadow-warm hover:shadow-warm-lg transition-all duration-300 cursor-pointer ${
                activeSkill === index ? 'ring-2 ring-accent/20 scale-105' : ''
              }`}
              onMouseEnter={() => setActiveSkill(index)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name={skill.icon} size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground">
                      {skill.name}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-inter font-medium ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-playfair font-bold text-accent">
                    {animatedProgress[index] || 0}%
                  </div>
                  <div className="text-sm font-inter text-muted-foreground">
                    {skill.experience}
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-6">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-secondary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${animatedProgress[index] || 0}%` }}
                  ></div>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-6">
                <h4 className="font-inter font-medium text-foreground text-sm mb-3 uppercase tracking-wide">
                  Recent Projects:
                </h4>
                <div className="space-y-2">
                  {skill.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="flex items-center space-x-2">
                      <Icon name="ArrowRight" size={12} className="text-accent" />
                      <span className="text-sm font-inter text-muted-foreground">
                        {project}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        
{/* Services Section */}
<div className="bg-card border border-border rounded-2xl p-8 shadow-warm mt-12">
  <h2 className="text-3xl font-playfair font-bold text-foreground mb-6">Services</h2>
  <p className="text-muted-foreground mb-10 max-w-2xl font-inter">
    I offer a range of services tailored to meet your business or personal project needs, whether you're launching a product, growing your brand, or scaling your platform.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: "Custom Website Development",
        description: "Fully tailored websites built from the ground up for functionality, speed, and maintainability.",
        example: "Examples: Business Website, E-commerce Store, Booking System",
        icon: "Code",
      },
      {
        title: "Landing Page Development",
        description: "Optimized pages focused on conversions, ideal for product launches or campaigns.",
        example: "Examples: Product Launch Page, Portfolio Site, Marketing Campaign Page",
        icon: "Layout",
      },
      {
        title: "UI/UX Collaboration",
        description: "Work closely with designers or clients to bring beautiful, user-friendly interfaces to life.",
        example: "Examples: Figma to Code Conversion, Design System Implementation",
        icon: "UserCheck",
      },
      {
        title: "API Integration",
        description: "Seamlessly connect your website to third-party platforms and services.",
        example: "Examples: Stripe Payments, Google Maps, CMS/API Dashboards",
        icon: "Plug",
      },
      {
        title: "Performance Optimization",
        description: "Speed up load times, reduce bounce rates, and improve overall user experience.",
        example: "Examples: Lazy Loading, Image Compression, Code Splitting",
        icon: "Gauge",
      },
      {
        title: "Responsive Design Implementation",
        description: "Ensure your site looks and works perfectly across all devices and screen sizes.",
        example: "Examples: Mobile-First Layouts, Tablet Optimization, Grid Systems",
        icon: "Smartphone",
      },
    ].map((service, idx) => (
      <div key={idx} className="flex items-start space-x-4">
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
          <Icon name={service.icon} size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-playfair font-semibold text-foreground">
            {service.title}
          </h3>
          <p className="text-sm font-inter text-muted-foreground mb-1">{service.description}</p>
          <p className="text-xs font-inter text-muted-foreground italic">{service.example}</p>
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
    </section>
  );
};

export default SkillsMatrix;
