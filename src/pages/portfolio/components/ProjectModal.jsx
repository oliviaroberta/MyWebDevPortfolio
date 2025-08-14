import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const tabs = [
    { key: 'overview', label: 'Overview', icon: 'Eye' },
    { key: 'technical', label: 'Technical Details', icon: 'Code' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h4 className="font-playfair text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">Challenge & Context</h4>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{project.challenge}</p>
            </div>
            <div>
              <h4 className="font-playfair text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">Solution Approach</h4>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{project.solution}</p>
            </div>
            <div>
              <h4 className="font-playfair text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      
      case 'technical':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h4 className="font-playfair text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">Technology Stack</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
                    <Icon name="Code" size={16} className="text-accent" />
                    <span className="text-foreground font-medium text-sm sm:text-base">{tech}</span>
                  </div>
                ))}
              </div>
            </div>


          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-7xl max-h-[95vh] sm:max-h-[90vh] bg-background rounded-lg sm:rounded-xl shadow-warm-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-6 border-b border-border">
          <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Folder" size={20} className="text-white sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-playfair text-lg sm:text-2xl font-semibold text-foreground truncate">{project.title}</h2>
              <p className="text-muted-foreground text-xs sm:text-base truncate">{project.type} • {project.duration}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            {project.liveUrl && (
              <Button
                variant="outline"
                size="sm"
                iconName="ExternalLink"
                iconPosition="left"
                iconSize={14}
                onClick={() => window.open(project.liveUrl, '_blank')}
                className="hidden sm:flex"
              >
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                iconName="Github"
                iconPosition="left"
                iconSize={14}
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="hidden sm:flex"
              >
                View Code
              </Button>
            )}
            {/* Mobile action buttons */}
            <div className="flex sm:hidden space-x-1">
              {project.liveUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ExternalLink"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                />
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Github"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                />
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              onClick={onClose}
            />
          </div>
        </div>

        {/* Content - Responsive Layout */}
        <div className="flex flex-col lg:flex-row overflow-hidden" style={{ height: 'calc(95vh - 80px)' }}>
{/* Image Gallery Section */}
<div className="w-full lg:w-1/2 relative bg-gray-50 h-[250px] sm:h-[500px] lg:h-full">
  <div className="absolute inset-0 flex items-center justify-center p-4">
    <Image
      src={project.gallery[currentImageIndex]}
      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
      width={1000}
      height={1000}
      className="object-contain max-w-full max-h-full"
      style={{
        width: 'auto',
        height: 'auto',
        aspectRatio: '16/9'
      }}
    />
  </div>

  {/* Navigation Arrows  */}
  {project.gallery.length > 1 && (
    <>
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md"
      >
        <Icon name="ChevronLeft" size={20} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md"
      >
        <Icon name="ChevronRight" size={20} />
      </button>
    </>
  )}

  {/* Dots Indicator  */}
  {project.gallery.length > 1 && (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {project.gallery.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentImageIndex(index)}
          className={`w-3 h-3 rounded-full transition-colors ${
            index === currentImageIndex ? 'bg-accent' : 'bg-white/50'
          }`}
        />
      ))}
    </div>
  )}
</div>

          {/* Content Panel */}
          <div className="w-full lg:w-1/2 flex flex-col min-h-0 flex-1">
            {/* Tabs */}
            <div className="flex border-b border-border overflow-x-auto flex-shrink-0">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab.key
                      ? 'text-accent border-b-2 border-accent bg-accent/5' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={tab.icon} size={14} className="sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 p-3 sm:p-6 overflow-y-auto min-h-0">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;