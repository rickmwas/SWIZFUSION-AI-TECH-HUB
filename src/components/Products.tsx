import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Eye, MessageSquare, Cog, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "SwizAI Engine",
      description: "Our flagship AI processing engine that powers intelligent decision-making across industries.",
      features: ["Real-time Processing", "Multi-modal AI", "Scalable Architecture", "Cloud-native"],
      status: "Available Now",
      statusColor: "bg-green-500",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "VisionBot Pro",
      description: "Advanced computer vision system for quality control, surveillance, and automated inspection.",
      features: ["Object Detection", "Quality Assurance", "Real-time Analysis", "Custom Training"],
      status: "Beta Release",
      statusColor: "bg-orange-500",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "ConversaAI",
      description: "Intelligent conversational AI platform for customer service and business automation.",
      features: ["Natural Language", "Multi-language", "Context Aware", "Integration Ready"],
      status: "Available Now",
      statusColor: "bg-green-500",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "AutoMate Suite",
      description: "Comprehensive robotics automation platform for manufacturing and industrial applications.",
      features: ["Process Automation", "Predictive Maintenance", "IoT Integration", "Safety Systems"],
      status: "Coming Soon",
      statusColor: "bg-blue-500",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-muted/30">
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
              Our <span className="gradient-text">Products</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge AI and robotics products designed to solve real-world challenges 
              and drive innovation across industries.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${product.gradient} rounded-2xl text-white group-hover:scale-110 transition-transform duration-300`}>
                        {product.icon}
                      </div>
                      <Badge className={`${product.statusColor} text-white`}>
                        {product.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {product.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className={`w-2 h-2 bg-gradient-to-r ${product.gradient} rounded-full mr-3`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Button
                        onClick={scrollToContact}
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Featured Product Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge className="bg-primary text-primary-foreground mb-4">
                      🚀 Featured Product
                    </Badge>
                    <h3 className="text-3xl font-bold mb-4">SwizAI Engine</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      Experience the power of our flagship AI engine that's already transforming 
                      businesses worldwide. Built with cutting-edge technology and designed for scale.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={scrollToContact}
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Request Demo
                      </Button>
                      <Button variant="outline" size="lg">
                        View Documentation
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-muted-foreground">Interactive Demo Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;