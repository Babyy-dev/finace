'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator, TrendingUp, FileText, BarChart3, Search, Users, Award, Shield } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Calculator,
      title: t('mortgageSearch'),
      description: 'Compare mortgage rates and find the best deals',
      href: '/search',
      color: 'bg-blue-500'
    },
    {
      icon: TrendingUp,
      title: t('comparison'),
      description: 'Side-by-side comparison of financial products',
      href: '/comparison',
      color: 'bg-green-500'
    },
    {
      icon: FileText,
      title: t('news'),
      description: 'Latest financial news and market insights',
      href: '/news',
      color: 'bg-purple-500'
    },
    {
      icon: BarChart3,
      title: t('about'),
      description: 'Learn more about our services',
      href: '/about',
      color: 'bg-orange-500'
    }
  ];

  const stats = [
    { number: '1,200+', label: t('partnerInstitutions'), icon: Users },
    { number: '500K+', label: t('totalUsers'), icon: Award },
    { number: '¥2.3M', label: t('averageSavings'), icon: TrendingUp },
    { number: '98%', label: 'Satisfaction Rate', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('heroTitle')}
              <span className="block text-yellow-300 mt-2">{t('heroSubtitle')}</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('heroDescription')}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/search">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                  <Search className="h-5 w-5 mr-2" />
                  {t('startSimulation')}
                </Button>
              </Link>
              <Link href="/comparison">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  {t('viewRankings')}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-0">
                      <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial tools to help you make informed decisions
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Link href={feature.href}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Perfect Mortgage?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of satisfied customers who found better rates with our platform
            </p>
            <Link href="/search">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                Get Started Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}