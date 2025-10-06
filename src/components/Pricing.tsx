import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Starter",
      icon: <Star className="w-6 h-6" />,
      price: "$99",
      priceValue: 99,
      period: "/month",
      description: "Perfect for small businesses and startups getting started with AI",
      features: [
        "Basic AI Model Access",
        "5,000 API Calls/month",
        "Email Support",
        "Standard Documentation",
        "Community Access"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
  planCode: "PLN_kvglp1eyb09je5"
    },
    {
      name: "Professional",
      icon: <Zap className="w-6 h-6" />,
      price: "$299",
      priceValue: 299,
      period: "/month",
      description: "Advanced features for growing businesses and development teams",
      features: [
        "Advanced AI Models",
        "50,000 API Calls/month",
        "Priority Support",
        "Custom Integrations",
        "Analytics Dashboard",
        "Team Collaboration",
        "SLA Guarantee"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
      popular: true,
      gradient: "from-purple-500 to-pink-500",
  planCode: "PLN_t5avm89dzs1iz25"
    },
    {
      name: "Enterprise",
      icon: <Crown className="w-6 h-6" />,
      price: "Custom",
      priceValue: 0,
      period: "",
      description: "Tailored solutions for large organizations with specific requirements",
      features: [
        "Custom AI Development",
        "Unlimited API Calls",
        "24/7 Dedicated Support",
        "On-premise Deployment",
        "Custom Training",
        "Advanced Security",
        "Compliance Support",
        "Dedicated Account Manager"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false,
      gradient: "from-orange-500 to-red-500",
  planCode: "PLN_xtb5h4ebceat7mr"
    }
  ];
// Paystack script loader
  const loadPaystackScript = () => {
    if (window.PaystackPop) {
      console.log('Paystack script already loaded.');
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://js.paystack.co/v1/inline.js';
      script.onload = () => {
        console.log('Paystack script loaded.');
        resolve();
      };
      script.onerror = () => {
        console.error('Failed to load Paystack script.');
        resolve();
      };
      document.body.appendChild(script);
    });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    // Paystack checkout handler
    const handlePaystackCheckout = async (plan) => {
      console.log('Paystack button clicked for plan:', plan);
      // For Enterprise, fallback to contact scroll
      if (!plan.planCode || plan.priceValue === 0) {
        scrollToContact();
        return;
      }
      await loadPaystackScript();
      if (!window.PaystackPop) {
        alert('Paystack script failed to load.');
        console.error('window.PaystackPop is not available after script load.');
        return;
      }
      // Use verified email, remove currency, call openIframe
      const paystackConfig = {
        key: 'pk_test_f10248c94da9df8ae8ffcaa84a6158e197e660ac',
        email: 'rickmwasswiz@gmail.com',
        plan: plan.planCode,
        callback: function (response) {
          alert('Payment complete! Reference: ' + response.reference);
          console.log('Paystack payment success:', response);
        },
        onClose: function () {
          alert('Payment window closed');
        },
        label: plan.name + ' Subscription',
        metadata: {
          custom_fields: [
            { display_name: 'Plan', variable_name: 'plan_name', value: plan.name }
          ]
        }
      };
      console.log('Calling PaystackPop.setup with config:', paystackConfig);
      window.PaystackPop.setup(paystackConfig).openIframe();
    };

  return (
    <section id="pricing" className="py-20">
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
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your needs. All plans include our core AI capabilities 
              with no hidden fees or surprise charges.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 overflow-hidden ${
                  plan.popular ? 'ring-2 ring-primary/50' : ''
                }`}>
                  <CardHeader className="text-center pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {plan.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground mt-2">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                                <Button
                                  onClick={() => handlePaystackCheckout(plan)}
                                  variant={plan.buttonVariant}
                                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : ''}`}
                                >
                                  {plan.buttonText}
                                </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;