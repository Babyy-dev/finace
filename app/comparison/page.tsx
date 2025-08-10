'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Check, X, Phone, Globe, Calculator } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

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

export default function ComparisonPage() {
  const [selectedProducts] = useState(['1', '2', '3']);

  const products = [
    {
      id: '1',
      bankName: 'SBI Sumishin Net Bank',
      productName: 'Net Exclusive Mortgage',
      rate: 0.298,
      monthlyPayment: 89420,
      totalSavings: 2840000,
      processingFee: 0,
      guaranteeFee: 0,
      rating: 4.8,
      features: {
        cancerCoverage: true,
        allDiseaseCoverage: true,
        onlineComplete: true,
        atmFree: false,
        consultation: false
      },
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: '2',
      bankName: 'au Jibun Bank',
      productName: 'Full-Term Discount Plan',
      rate: 0.319,
      monthlyPayment: 89890,
      totalSavings: 2720000,
      processingFee: 0,
      guaranteeFee: 0,
      rating: 4.7,
      features: {
        cancerCoverage: true,
        allDiseaseCoverage: true,
        onlineComplete: true,
        atmFree: true,
        consultation: false
      },
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: '3',
      bankName: 'Mizuho Bank',
      productName: 'Mizuho Net Mortgage',
      rate: 0.375,
      monthlyPayment: 90520,
      totalSavings: 2450000,
      processingFee: 33000,
      guaranteeFee: 0,
      rating: 4.5,
      features: {
        cancerCoverage: false,
        allDiseaseCoverage: true,
        onlineComplete: false,
        atmFree: true,
        consultation: true
      },
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const comparisonProducts = products.filter(p => selectedProducts.includes(p.id));

  const chartData = comparisonProducts.map(product => ({
    name: product.bankName,
    monthlyPayment: product.monthlyPayment,
    totalSavings: product.totalSavings / 10000,
    rate: product.rate
  }));

  const pieData = comparisonProducts.map((product, index) => ({
    name: product.bankName,
    value: product.totalSavings,
    fill: ['#3B82F6', '#10B981', '#F59E0B'][index]
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.section 
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0">
          <img
            src="/images/MnWVyaz.jpg"
            alt="Financial comparison meeting"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-blue-800/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="relative text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Mortgage Comparison
            </h1>
            <p className="text-xl text-blue-100">
              Compare {comparisonProducts.length} selected products in detail
            </p>
          </motion.div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Comparison Charts */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 mb-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>Monthly Payment Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value: any) => [`¥${value.toLocaleString()}`, 'Monthly Payment']} />
                      <Bar dataKey="monthlyPayment" fill="#3B82F6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>Total Savings Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: any) => [`¥${value.toLocaleString()}`, 'Total Savings']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Detailed Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Detailed Comparison Table</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 md:px-6 py-4 text-left text-xs md:text-sm font-medium text-gray-900">Feature</th>
                      {comparisonProducts.map(product => (
                        <th key={product.id} className="px-3 md:px-6 py-4 text-center text-xs md:text-sm font-medium text-gray-900 min-w-32 md:min-w-64">
                          <div className="flex flex-col items-center gap-2">
                            <img
                              src={product.logo}
                              alt={product.bankName}
                              className="w-8 h-8 md:w-12 md:h-12 rounded-lg object-cover"
                            />
                            <div>
                              <div className="font-bold text-xs md:text-sm">{product.bankName}</div>
                              <div className="text-xs text-gray-600 hidden md:block">{product.productName}</div>
                            </div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 md:px-6 py-4 text-xs md:text-sm font-medium text-gray-900">Interest Rate</td>
                      {comparisonProducts.map(product => (
                        <td key={product.id} className="px-3 md:px-6 py-4 text-center">
                          <div className="text-lg md:text-2xl font-bold text-red-600">{product.rate}%</div>
                          <div className="text-xs text-gray-600">Variable Rate</div>
                        </td>
                      ))}
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Monthly Payment</td>
                      {comparisonProducts.map(product => (
                        <td key={product.id} className="px-6 py-4 text-center">
                          <div className="text-xl font-bold text-blue-600">
                            ¥{product.monthlyPayment.toLocaleString()}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Total Savings</td>
                      {comparisonProducts.map(product => (
                        <td key={product.id} className="px-6 py-4 text-center">
                          <div className="text-xl font-bold text-green-600">
                            ¥{product.totalSavings.toLocaleString()}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Processing Fee</td>
                      {comparisonProducts.map(product => (
                        <td key={product.id} className="px-6 py-4 text-center">
                          <div className="text-lg font-semibold">
                            ¥{product.processingFee.toLocaleString()}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Rating</td>
                      {comparisonProducts.map(product => (
                        <td key={product.id} className="px-6 py-4 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-lg font-bold">{product.rating}</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">50% Cancer Coverage</td>
                      {comparisonProducts.map(product => (
                        <td key={product.id} className="px-6 py-4 text-center">
                          {product.features.cancerCoverage ? (
                            <Check className="h-6 w-6 text-green-600 mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-red-600 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">All Disease Coverage</td>
                      {comparisonProducts.map(product => (
                        <td key={product.id} className="px-6 py-4 text-center">
                          {product.features.allDiseaseCoverage ? (
                            <Check className="h-6 w-6 text-green-600 mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-red-600 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Online Complete</td>
                      {comparisonProducts.map(product => (
                        <td key={product.id} className="px-6 py-4 text-center">
                          {product.features.onlineComplete ? (
                            <Check className="h-6 w-6 text-green-600 mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-red-600 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {comparisonProducts.map(product => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-4 mobile-card">
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-gray-900 mb-2">{product.bankName}</h3>
                    <div className="text-2xl font-bold text-red-600 mb-2">{product.rate}%</div>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 mobile-button">
                      <Globe className="h-4 w-4 mr-2" />
                      Official Site
                    </Button>
                    <Button variant="outline" className="w-full mobile-button">
                      <Phone className="h-4 w-4 mr-2" />
                      Phone Consultation
                    </Button>
                    <Button variant="outline" className="w-full mobile-button">
                      <Calculator className="h-4 w-4 mr-2" />
                      Detailed Calculation
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}