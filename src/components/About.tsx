import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Award, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      description: "Ivy League education combined with Seoul's tech ecosystem insights"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Silicon Valley Standards",
      description: "Building world-class solutions with cutting-edge technology"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Diverse Leadership",
      description: "Bridging cultures and continents through innovative technology"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      description: "Pushing boundaries in AI and robotics development"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content with Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-6 mb-6">
              <img
                src="/images/my profile.jpg"
                alt="Founder profile"
                className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-primary/30 bg-background"
                style={{ minWidth: '7rem' }}
              />
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  About Our <span className="gradient-text">Founder</span>
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={isInView ? { opacity: 1, width: "4rem" } : { opacity: 0, width: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full mb-4"
                />
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Born from a vision to bridge global innovation, SwizFusion AI Tech Hub was founded by Eng Erick Mwangi an 
              Ivy League engineer with deep roots in South Korea's dynamic tech ecosystem. Our founder's 
              unique journey from Seoul's cutting-edge tech landscape to Silicon Valley's innovation hub 
              brings a truly global perspective to AI and robotics development.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              We believe that the future of technology lies in combining diverse perspectives, 
              world-class education, and relentless innovation. Our mission is to democratize 
              access to advanced AI and robotics solutions while maintaining the highest standards 
              of excellence and ethical development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Continents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {achievement.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                To democratize access to cutting-edge AI and robotics technology while fostering 
                innovation that bridges cultures, continents, and communities. We're not just building 
                technology – we're crafting the future of human-AI collaboration.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;