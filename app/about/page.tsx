'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, Award, Clock, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutPage() {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Licensed financial service approved by regulatory authorities. Your personal information is strictly managed and securely protected.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: '500K+ Users',
      description: 'Over 500,000 customers have used our services, and we have supported many people in choosing the right mortgage.',
      color: 'text-green-600'
    },
    {
      icon: Award,
      title: 'Expert Supervised',
      description: 'Reliable information supervised by certified financial planners and mortgage advisors.',
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: '24/7 Available',
      description: 'Online service available 24/7. Compare and review options anytime, even with a busy schedule.',
      color: 'text-orange-600'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Enter Conditions',
      description: 'Input simple conditions such as desired loan amount and current interest rate.'
    },
    {
      step: '02',
      title: 'Product Search',
      description: 'Automatically search and display mortgage products that match your conditions.'
    },
    {
      step: '03',
      title: 'Detailed Comparison',
      description: 'Select products of interest and compare detailed conditions and benefits.'
    },
    {
      step: '04',
      title: 'Application Support',
      description: 'Detailed guidance on application methods and required documents for selected products.'
    }
  ];

  const stats = [
    { number: '1,200+', label: 'Partner Financial Institutions', description: 'Partnerships with banks and credit unions nationwide' },
    { number: '500K+', label: 'Total Users', description: 'Cumulative number of users' },
    { number: 'Avg ¥2.3M', label: 'Savings Achievement', description: 'Average savings through refinancing' },
    { number: '98%', label: 'Satisfaction Rate', description: 'Customer satisfaction rate' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.section 
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              About MortgageCheck
            </h1>
            <p className="text-xl text-blue-100">
              Your trusted partner for finding the perfect mortgage solution
            </p>
          </motion.div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About MortgageCheck
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A free comparison service that supports optimal product selection for those considering mortgage refinancing or new borrowing.
            We partner with over 1,200 financial institutions to help you find the perfect mortgage.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Compare Mortgages for Free
          </Button>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Why Choose MortgageCheck
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-0">
                      <Icon className={`h-12 w-12 ${feature.color} mx-auto mb-4`} />
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* How it Works Section */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            How It Works
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-x-8"></div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Service Details */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>Our Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    'Mortgage Refinancing Comparison',
                    'New Mortgage Comparison',
                    'Investment Property Loan Comparison',
                    'Payment Simulation',
                    'Interest Rate Trend Reports',
                    'Free Expert Consultation'
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Phone Inquiries</div>
                      <div className="text-blue-600 font-semibold">0120-123-456</div>
                      <div className="text-sm text-gray-600">Weekdays 9:00-18:00</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Email Inquiries</div>
                      <div className="text-blue-600">support@mortgagecheck.com</div>
                      <div className="text-sm text-gray-600">24/7 Available</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Office Location</div>
                      <div className="text-gray-700">123 Financial District</div>
                      <div className="text-gray-700">New York, NY 10001</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-6 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            Ready to Compare Mortgages?
          </h3>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100">
            Free mortgage comparison service. Find the perfect product for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 mobile-button sm:w-auto">
              Start Free Comparison
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 mobile-button sm:w-auto">
              Consult with Expert
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}