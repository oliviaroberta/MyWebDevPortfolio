import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';


const ContactMethods = () => {
  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      description: 'Perfect for detailed project discussions',
      value: 'robertadogbey@gmail.com',
      action: 'mailto:robertadogbey@gmail.com',
      actionLabel: 'Send Email',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
      {
      icon: 'Phone',
      title: 'Phone',
      description: 'Ideal for quick calls and updates',
      value: '+233 53 490 9845',
      action: 'tel:+233534909845',
      actionLabel: 'Call Now',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    }

  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/oliviaroberta',
      description: 'Check out my code repositories',
      color: 'text-gray-700 hover:text-gray-900'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Contact Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-surface-elevated rounded-xl border border-border/30 p-6 shadow-warm"
      >
        <div className="flex items-center space-x-2 mb-6">
          <Icon name="Phone" size={18} className="text-accent" />
          <h3 className="font-playfair text-xl font-semibold text-foreground">Get In Touch</h3>
        </div>

        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background rounded-lg p-4 border border-border/20 hover:border-accent/30 transition-colors duration-300 group"
            >
              <div className="flex items-start space-x-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <Icon name={method.icon} size={18} className="text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-inter font-semibold text-foreground text-sm mb-1">
                    {method.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                    {method.description}
                  </p>
                  <p className="text-sm font-inter font-medium text-foreground mb-3">
                    {method.value}
                  </p>
                  
                  <a
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : '_self'}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="inline-flex items-center space-x-1 text-xs font-inter font-medium text-accent hover:text-accent/80 transition-colors duration-200 group-hover:underline"
                  >
                    <span>{method.actionLabel}</span>
                    <Icon name="ArrowUpRight" size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-surface-elevated rounded-xl border border-border/30 p-6 shadow-warm"
      >
        <div className="flex items-center space-x-2 mb-6">
          <Icon name="Share2" size={18} className="text-accent" />
          <h3 className="font-playfair text-xl font-semibold text-foreground">Follow Along</h3>
        </div>

        <div className="space-y-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg bg-background border border-border/20 hover:border-accent/30 transition-all duration-300 group hover:shadow-sm"
            >
              <div className={`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${social.color} transition-colors duration-300`}>
                <Icon name={social.icon} size={16} />
              </div>
              
              <div className="flex-1">
                <h4 className="font-inter font-medium text-foreground text-sm">
                  {social.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {social.description}
                </p>
              </div>
              
              <Icon 
                name="ArrowUpRight" 
                size={14} 
                className="text-muted-foreground group-hover:text-accent transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 " 
              />
            </motion.a>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-border/30">
          <p className="text-xs font-inter text-muted-foreground text-center leading-relaxed">
            I love connecting with fellow developers, designers, and anyone passionate about creating beautiful digital experiences.
          </p>
        </div>
      </motion.div>


    </div>
  );
};

export default ContactMethods;