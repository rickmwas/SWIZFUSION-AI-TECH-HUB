import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Bot, Code, Database, Cpu, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Model Development",
      description: "Custom machine learning models tailored to your specific business needs and objectives.",
      features: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP Processing"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Robotics Solutions",
      description: "Advanced robotics systems for automation, manufacturing, and intelligent assistance.",
      features: ["Industrial Automation", "Service Robots", "IoT Integration", "Real-time Control"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
      features: ["API Development", "Cloud Deployment", "System Integration", "Performance Optimization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization.",
      features: ["Big Data Processing", "Predictive Analytics", "Data Visualization", "Business Intelligence"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Edge Computing",
      description: "Deploy AI models at the edge for real-time processing and reduced latency.",
      features: ["Edge Deployment", "Real-time Processing", "Offline Capabilities", "Hardware Optimization"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Security",
      description: "Ensure your AI systems are secure, ethical, and compliant with industry standards.",
      features: ["Security Audits", "Ethical AI", "Compliance", "Risk Assessment"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI and robotics solutions designed to transform your business 
              and accelerate your digital transformation journey.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Let's discuss how our AI and robotics solutions can drive innovation 
                  and growth for your organization.
                </p>
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                >
                  Get Started Today
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;