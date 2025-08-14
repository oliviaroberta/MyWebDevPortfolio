import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DayInTheLife = () => {
  const [activeTime, setActiveTime] = useState(0);
  
  const schedule = [
    {
      time: '7:00 AM',
      activity: 'Morning Ritual',
      description: 'Coffee, reflection, and reviewing the day\'s priorities',
      icon: 'Coffee',
      color: 'accent',
      details: 'Start with meditation and planning. Check industry news and prioritize tasks.'
    },
    {
      time: '9:00 AM',
      activity: 'Deep Focus Time',
      description: 'Complex problem-solving and architecture decisions',
      icon: 'Code',
      color: 'secondary',
      details: 'No meetings, no distractions. Pure coding and system design work.'
    },
    {
      time: '11:30 AM',
      activity: 'Collaboration Block',
      description: 'Team standups, code reviews, and pair programming',
      icon: 'Users',
      color: 'accent',
      details: 'Connect with team members, review PRs, and share knowledge.'
    },
    {
      time: '2:00 PM',
      activity: 'Design Iteration',
      description: 'UI/UX refinement and component development',
      icon: 'Palette',
      color: 'secondary',
      details: 'Work closely with designers to perfect user experiences.'
    },
    {
      time: '4:00 PM',
      activity: 'Learning & Growth',
      description: 'Exploring new technologies and writing documentation',
      icon: 'BookOpen',
      color: 'accent',
      details: 'Stay current with latest frameworks and contribute to documentation.'
    },
    {
      time: '6:00 PM',
      activity: 'Community Time',
      description: 'Mentoring, open source, or personal projects',
      icon: 'Heart',
      color: 'secondary',
      details: 'Give back to the community through mentoring and open source work.'
    }
  ];

  const inspirationSources = [
    { name: 'Dribbble', type: 'Visual Design', icon: 'Eye' },
    { name: 'GitHub Trending', type: 'Code Innovation', icon: 'GitBranch' },
    { name: 'Dev.to', type: 'Technical Articles', icon: 'FileText' },
    { name: 'Figma Community', type: 'Design Systems', icon: 'Layers' },
    { name: 'CodePen', type: 'Creative Coding', icon: 'Code' },
    { name: 'A11y Project', type: 'Accessibility', icon: 'Users' }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A Day in the Life
          </h2>
          <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto">
            Get an authentic glimpse into my development process, from morning coffee to evening community contributions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Daily Schedule */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-8">
              Typical Development Day
            </h3>
            
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`bg-card border border-border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    activeTime === index ? 'shadow-warm-lg scale-105' : 'shadow-warm hover:shadow-warm-lg'
                  }`}
                  onClick={() => setActiveTime(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-${item.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon name={item.icon} size={20} className={`text-${item.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`text-sm font-inter font-bold text-${item.color}`}>
                          {item.time}
                        </span>
                        <div className={`w-2 h-2 bg-${item.color} rounded-full`}></div>
                      </div>
                      
                      <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">
                        {item.activity}
                      </h4>
                      
                      <p className="font-inter text-muted-foreground mb-3">
                        {item.description}
                      </p>
                      
                      {activeTime === index && (
                        <div className="bg-muted/50 border border-border/50 rounded-lg p-3 animate-fade-in-up">
                          <p className="text-sm font-inter text-foreground">
                            {item.details}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inspiration & Tools */}
          <div className="space-y-8">
            {/* Inspiration Sources */}
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Daily Inspiration Sources
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {inspirationSources.map((source, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-4 hover:shadow-warm transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon name={source.icon} size={16} className="text-accent" />
                      <span className="font-inter font-medium text-foreground text-sm">
                        {source.name}
                      </span>
                    </div>
                    <p className="text-xs font-inter text-muted-foreground">
                      {source.type}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Setup */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-warm">
              <h4 className="font-playfair text-xl font-semibold text-foreground mb-4">
                My Development Environment
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Monitor" size={16} className="text-secondary" />
                  <span className="font-inter text-sm text-muted-foreground">MacBook Pro M2 + 32" 4K Monitor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Code" size={16} className="text-accent" />
                  <span className="font-inter text-sm text-muted-foreground">VS Code with custom theme & extensions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Terminal" size={16} className="text-secondary" />
                  <span className="font-inter text-sm text-muted-foreground">iTerm2 with Oh My Zsh configuration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Palette" size={16} className="text-accent" />
                  <span className="font-inter text-sm text-muted-foreground">Figma for design collaboration</span>
                </div>
              </div>
            </div>

            {/* Time-lapse Simulation */}
            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border border-border rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Play" size={20} className="text-accent" />
                <h4 className="font-playfair text-lg font-semibold text-foreground">
                  Coding Session Time-lapse
                </h4>
              </div>
              
             <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
  <div className="flex items-center space-x-2 text-green-400 mb-2">
    <span>▶</span>
    <span>Building React Component...</span>
  </div>
  <div className="text-blue-400 ml-4">
    {`const FeatureCard = ({ title, description }) => {`}
  </div>
  <div className="text-yellow-400 ml-8">
    {`  return (`}
  </div>
  <div className="text-purple-400 ml-12">
    {`    <div className="card">`}
  </div>
  <div className="text-gray-400 ml-16">
    {`      // ... implementation details`}
  </div>
  <div className="text-purple-400 ml-12">
    {`    </div>`}
  </div>
  <div className="text-yellow-400 ml-8">
    {`  );`}
  </div>
  <div className="text-blue-400 ml-4">
    {`};`}
  </div>
  <div className="animate-pulse text-green-400">|</div>
</div>

              
              <p className="text-sm font-inter text-muted-foreground mt-3">
                Watch me transform ideas into functional components through iterative development and continuous refinement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayInTheLife;