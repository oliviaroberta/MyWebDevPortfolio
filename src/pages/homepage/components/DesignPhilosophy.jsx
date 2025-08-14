import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DesignPhilosophy = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophyPrinciples = [
    {
      id: 1,
      title: "Beautiful Code Architecture",
      subtitle: "Clean, Maintainable, Scalable",
      description: `Every line of code is crafted with intention. I believe in writing code that not only functions flawlessly but reads like poetry. Clean architecture, meaningful variable names, and thoughtful component structure create a foundation that scales beautifully with your business growth.`,
      icon: "Code2",
      color: "accent",
      codeExample: `// Clean, semantic component structure
const UserProfile = ({ user, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <ProfileContainer>
      <Avatar src={user.avatar} alt={user.name} />
      <UserDetails user={user} />
      {isEditing && <EditForm onSave={onUpdate} />}
    </ProfileContainer>
  );
};`
    },
    {
      id: 2,
      title: "User-Centered Design",
      subtitle: "Empathy-Driven Development",
      description: `Technology should feel invisible to users. Every interaction is designed with empathy, considering accessibility, cognitive load, and emotional response. I create interfaces that anticipate user needs and guide them effortlessly toward their goals.`,
      icon: "Heart",
      color: "secondary",
      codeExample: `// Accessible, user-friendly interactions
const AccessibleButton = ({ children, loading, ...props }) => (
  <button
    {...props}
    aria-busy={loading}
    aria-describedby="button-help"
    className="focus:ring-2 focus:ring-accent"
  >
    {loading ? <Spinner aria-hidden /> : children}
  </button>
);`
    },
    {
      id: 3,
      title: "Performance Excellence",
      subtitle: "Speed as a Feature",
      description: `Performance isn't just about fast loading times—it's about creating delightful experiences. Through code splitting, lazy loading, and optimization techniques, I ensure every interaction feels instant and responsive across all devices.`,
      icon: "Zap",
      color: "success",
      codeExample: `// Performance-optimized component loading
const LazyDashboard = lazy(() => 
  import('./Dashboard').then(module => ({
    default: module.Dashboard
  }))
);

const App = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <LazyDashboard />
  </Suspense>
);`
    }
  ];

  const designValues = [
    { icon: "Palette", title: "Aesthetic Excellence", description: "Every pixel serves a purpose" },
    { icon: "Users", title: "Human-Centered", description: "Technology that feels natural" },
    { icon: "Layers", title: "Systematic Approach", description: "Consistent, scalable design systems" },
    { icon: "Sparkles", title: "Delightful Details", description: "Micro-interactions that surprise" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-surface via-background to-surface-elevated">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Lightbulb" size={16} className="text-accent" />
            <span className="text-sm font-inter font-medium text-accent">Design Philosophy</span>
          </div>
          
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The <span className="gradient-text">Beautiful Code</span> Approach
          </h2>
          
          <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My development philosophy centers on the belief that exceptional code and beautiful design 
            are not separate disciplines, but complementary forces that create extraordinary digital experiences.
          </p>
        </div>

        {/* Philosophy Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 w-full">
          {/* Navigation */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {philosophyPrinciples.map((principle, index) => (
                <button
                  key={principle.id}
                  onClick={() => setActivePhilosophy(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                    activePhilosophy === index
                      ? `bg-${principle.color}/10 border-${principle.color}/30 shadow-warm`
                      : 'bg-card border-border hover:border-border/60 hover:bg-surface'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${
                      activePhilosophy === index 
                        ? `bg-${principle.color}/20` 
                        : 'bg-muted'
                    }`}>
                      <Icon 
                        name={principle.icon} 
                        size={24} 
                        className={`${
                          activePhilosophy === index 
                            ? `text-${principle.color}` 
                            : 'text-muted-foreground'
                        }`} 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-playfair text-lg font-semibold mb-1 ${
                        activePhilosophy === index ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {principle.title}
                      </h3>
                      <p className="text-sm font-inter text-muted-foreground">
                        {principle.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Display */}
          <div className="lg:col-span-8">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-warm">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-xl bg-${philosophyPrinciples[activePhilosophy].color}/20`}>
                    <Icon 
                      name={philosophyPrinciples[activePhilosophy].icon} 
                      size={24} 
                      className={`text-${philosophyPrinciples[activePhilosophy].color}`} 
                    />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold text-foreground">
                      {philosophyPrinciples[activePhilosophy].title}
                    </h3>
                    <p className={`text-sm font-inter font-medium text-${philosophyPrinciples[activePhilosophy].color}`}>
                      {philosophyPrinciples[activePhilosophy].subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-font-inter text-muted-foreground leading-relaxed mb-6">
                  {philosophyPrinciples[activePhilosophy].description}
                </p>
              </div>

              {/* Code Example */}
              <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-sm font-inter font-medium text-gray-400 ml-4">
                      Example Implementation
                    </span>
                  </div>
                  <Icon name="Copy" size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </div>
                
                <pre className="text-sm text-gray-300 font-mono leading-relaxed overflow-x-auto">
                  <code>{philosophyPrinciples[activePhilosophy].codeExample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Design Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designValues.map((value, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-warm transition-all duration-300 group"
            >
              <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon name={value.icon} size={24} className="text-accent" />
              </div>
              
              <h4 className="font-playfair text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h4>
              
              <p className="text-sm font-inter text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy Quote */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-accent/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-accent/20">
            <blockquote className="font-playfair text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-4">
              "Beautiful code is not just about aesthetics—it's about creating digital experiences 
              that feel effortless, perform flawlessly, and inspire both users and developers."
            </blockquote>
            <cite className="text-accent font-inter font-medium">— My Development Philosophy</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;