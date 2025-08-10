'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, TrendingUp, Calendar, ArrowRight, User } from 'lucide-react';

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

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const news = [
    {
      id: 1,
      title: 'SBI Sumishin Net Bank Reduces Mortgage Rates to 0.298%',
      excerpt: 'SBI Sumishin Net Bank announced a reduction in variable mortgage rates to 0.298% starting February 2024, attracting attention as an industry-leading low rate.',
      category: 'Rate Updates',
      publishedAt: '2024-02-01',
      readTime: '3 min',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400',
      trending: true,
      author: 'Financial News Team'
    },
    {
      id: 2,
      title: '2024 Mortgage Tax Deduction Changes and Key Points',
      excerpt: 'Detailed explanation of the 2024 mortgage tax deduction system changes, including updates to deduction limits and eligibility conditions.',
      category: 'Tax Policy',
      publishedAt: '2024-01-28',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400',
      trending: false,
      author: 'Tax Policy Expert'
    },
    {
      id: 3,
      title: 'Flat 35 Interest Rate Trends and Future Outlook',
      excerpt: 'Analysis of Flat 35 interest rate trends from Japan Housing Finance Agency. Expert commentary on long-term fixed rate prospects.',
      category: 'Market Analysis',
      publishedAt: '2024-01-25',
      readTime: '4 min',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=400',
      trending: true,
      author: 'Market Analyst'
    },
    {
      id: 4,
      title: '5 Key Points to Avoid Refinancing Mistakes',
      excerpt: 'Expert advice on important considerations when refinancing mortgages, including detailed explanations of fee and cost calculations.',
      category: 'Refinancing',
      publishedAt: '2024-01-22',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      trending: false,
      author: 'Mortgage Consultant'
    },
    {
      id: 5,
      title: 'Online Banks vs City Banks: Comprehensive Mortgage Comparison',
      excerpt: 'Thorough comparison of online and city bank mortgages by rates, fees, and service content, explaining the pros and cons of each.',
      category: 'Comparison',
      publishedAt: '2024-01-20',
      readTime: '7 min',
      image: 'https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&w=400',
      trending: true,
      author: 'Banking Specialist'
    },
    {
      id: 6,
      title: 'How to Choose Group Credit Life Insurance and Key Considerations',
      excerpt: 'Explanation of types and selection criteria for group credit life insurance attached to mortgages, including detailed coverage differences.',
      category: 'Insurance',
      publishedAt: '2024-01-18',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400',
      trending: false,
      author: 'Insurance Expert'
    }
  ];

  const categories = ['all', 'Rate Updates', 'Tax Policy', 'Market Analysis', 'Refinancing', 'Comparison', 'Insurance'];

  const filteredNews = selectedCategory === 'all' 
    ? news 
    : news.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
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
              Financial News & Insights
            </h1>
            <p className="text-xl text-blue-100">
              Stay updated with the latest mortgage rates, market trends, and expert advice
            </p>
          </motion.div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50 hover:text-blue-700"}
            >
              {category === 'all' ? 'All Categories' : category}
            </Button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={filteredNews[0]?.image}
                    alt={filteredNews[0]?.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-blue-600 text-white">
                      {filteredNews[0]?.category}
                    </Badge>
                    {filteredNews[0]?.trending && (
                      <Badge className="bg-red-500 text-white flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        Trending
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                    {filteredNews[0]?.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                    {filteredNews[0]?.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{filteredNews[0]?.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(filteredNews[0]?.publishedAt || '').toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{filteredNews[0]?.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-red-500" />
                    Trending Articles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {filteredNews.filter(article => article.trending).slice(1, 4).map(article => (
                    <div key={article.id} className="flex gap-3 pb-4 border-b border-gray-200 last:border-b-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2 hover:text-blue-600 cursor-pointer">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categories.slice(1).map(category => (
                      <div key={category} className="flex justify-between items-center">
                        <button
                          onClick={() => setSelectedCategory(category)}
                          className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                          {category}
                        </button>
                        <Badge variant="outline">
                          {news.filter(article => article.category === category).length}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Recent Articles Grid */}
        <div className="mt-12">
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Latest Articles
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {filteredNews.slice(1).map(article => (
              <motion.div key={article.id} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col h-full">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors flex-grow">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4 mt-auto">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span className="text-xs">{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button size="lg" variant="outline">
            Load More Articles
          </Button>
        </motion.div>
      </div>
    </div>
  );
}