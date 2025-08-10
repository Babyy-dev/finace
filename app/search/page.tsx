'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, SlidersHorizontal, MapPin, Calendar, Star, TrendingUp, Globe, Phone, ChevronDown, ChevronUp } from 'lucide-react';

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

export default function SearchPage() {
  const { t } = useTranslation();
  const [searchFilters, setSearchFilters] = useState({
    serviceType: 'refinance',
    loanAmount: '',
    currentRate: '',
    loanBalance: '',
    prefecture: ''
  });
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [showDetails, setShowDetails] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('rate');

  const handleFilterChange = (field: string, value: string) => {
    setSearchFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleProductSelect = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const toggleDetails = (productId: string) => {
    setShowDetails(showDetails === productId ? null : productId);
  };

  const products = [
    {
      id: '1',
      bankName: 'SBI Sumishin Net Bank',
      productName: 'Net Exclusive Mortgage',
      rate: 0.298,
      rateType: 'Variable Rate',
      monthlyPayment: 89420,
      totalSavings: 2840000,
      processingFee: 0,
      guaranteeFee: 0,
      rating: 4.8,
      users: 15420,
      features: ['Free Group Insurance', '50% Cancer Coverage', 'All Disease Coverage', 'Online Complete'],
      badge: 'Lowest Rate',
      badgeColor: 'bg-red-500',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100',
      details: {
        conditions: ['Annual income ¥4M+', '3+ years employment', 'Group life insurance required'],
        benefits: ['50% loan balance covered on cancer diagnosis', 'All disease coverage for monthly payments'],
        notes: ['Interest rate may vary based on screening results']
      }
    },
    {
      id: '2',
      bankName: 'au Jibun Bank',
      productName: 'Mortgage Full-Term Discount Plan',
      rate: 0.319,
      rateType: 'Variable Rate',
      monthlyPayment: 89890,
      totalSavings: 2720000,
      processingFee: 0,
      guaranteeFee: 0,
      rating: 4.7,
      users: 12840,
      features: ['50% Cancer Coverage', 'All Disease Coverage', 'au Rate Discount', 'No Store Visit Required'],
      badge: 'Most Popular',
      badgeColor: 'bg-blue-500',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100',
      details: {
        conditions: ['Annual income ¥2M+', '1+ years employment', 'Group life insurance required'],
        benefits: ['Rate discount for au subscribers', '50% loan balance covered on cancer diagnosis'],
        notes: ['0.07% annual rate reduction for au subscribers']
      }
    },
    {
      id: '3',
      bankName: 'PayPay Bank',
      productName: 'Mortgage Loan',
      rate: 0.349,
      rateType: 'Variable Rate',
      monthlyPayment: 90180,
      totalSavings: 2580000,
      processingFee: 0,
      guaranteeFee: 0,
      rating: 4.6,
      users: 9680,
      features: ['50% Cancer Coverage', 'Industry Lowest Level', '24/7 Application', 'No Document Mailing'],
      badge: 'New',
      badgeColor: 'bg-green-500',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100',
      details: {
        conditions: ['Annual income ¥2M+', '1+ years employment', 'Group life insurance required'],
        benefits: ['50% loan balance covered on cancer diagnosis', '24/7 application available'],
        notes: ['Screening completed in approximately 10 days']
      }
    }
  ];

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
              Search Results: {products.length} items
            </h1>
            <p className="text-xl text-blue-100">
              Found mortgages matching your criteria
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Search Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs defaultValue="refinance" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="refinance">Refinance</TabsTrigger>
                <TabsTrigger value="new">New Loan</TabsTrigger>
                <TabsTrigger value="investment">Investment</TabsTrigger>
              </TabsList>
              
              <TabsContent value="refinance">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Filter className="h-5 w-5" />
                      Set Refinance Conditions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="loanAmount">Loan Amount</Label>
                        <Input
                          id="loanAmount"
                          type="number"
                          placeholder="30,000,000"
                          value={searchFilters.loanAmount}
                          onChange={(e) => handleFilterChange('loanAmount', e.target.value)}
                        />
                        <div className="text-xs text-gray-500 mt-1">¥</div>
                      </div>
                      
                      <div>
                        <Label htmlFor="currentRate">Current Rate</Label>
                        <Input
                          id="currentRate"
                          type="number"
                          step="0.01"
                          placeholder="1.5"
                          value={searchFilters.currentRate}
                          onChange={(e) => handleFilterChange('currentRate', e.target.value)}
                        />
                        <div className="text-xs text-gray-500 mt-1">%</div>
                      </div>
                      
                      <div>
                        <Label htmlFor="loanBalance">Current Balance</Label>
                        <Input
                          id="loanBalance"
                          type="number"
                          placeholder="25,000,000"
                          value={searchFilters.loanBalance}
                          onChange={(e) => handleFilterChange('loanBalance', e.target.value)}
                        />
                        <div className="text-xs text-gray-500 mt-1">¥</div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button
                        variant="outline"
                        onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                        className="mb-4"
                      >
                        <SlidersHorizontal className="h-4 w-4 mr-2" />
                        Advanced Settings
                      </Button>
                      
                      {showAdvancedFilters && (
                        <motion.div 
                          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-gray-50 rounded-lg"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                        >
                          <div>
                            <Label htmlFor="annualIncome">Annual Income</Label>
                            <Input
                              id="annualIncome"
                              type="number"
                              placeholder="5,000,000"
                              onChange={(e) => handleFilterChange('annualIncome', e.target.value)}
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="age">Age</Label>
                            <Input
                              id="age"
                              type="number"
                              placeholder="35"
                              onChange={(e) => handleFilterChange('age', e.target.value)}
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="propertyType">Property Type</Label>
                            <Select onValueChange={(value) => handleFilterChange('propertyType', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="detached">Detached House</SelectItem>
                                <SelectItem value="apartment">Apartment</SelectItem>
                                <SelectItem value="townhouse">Townhouse</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </motion.div>
                      )}
                    </div>
                    
                    <div className="mt-6 flex gap-4">
                      <Button className="bg-orange-500 hover:bg-orange-600 mobile-button sm:w-auto">
                        Search Matching Mortgages
                      </Button>
                      <Button variant="outline" className="mobile-button sm:w-auto">
                        Reset
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Mortgage Search Results
              </h2>
              <p className="text-gray-600">
                {products.length} products found matching your criteria
              </p>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4 mt-4 md:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rate">Lowest Rate</SelectItem>
                  <SelectItem value="savings">Highest Savings</SelectItem>
                  <SelectItem value="rating">Highest Rating</SelectItem>
                  <SelectItem value="users">Most Users</SelectItem>
                </SelectContent>
              </Select>
              
              {selectedProducts.length > 0 && (
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Compare {selectedProducts.length} items
                </Button>
              )}
            </motion.div>
          </div>

          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {products.map((product, index) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex items-center gap-3">
                            <Checkbox
                              checked={selectedProducts.includes(product.id)}
                              onCheckedChange={() => handleProductSelect(product.id)}
                              disabled={!selectedProducts.includes(product.id) && selectedProducts.length >= 3}
                            />
                            <img
                              src={product.logo}
                              alt={product.bankName}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">{product.bankName}</h3>
                              <p className="text-gray-600">{product.productName}</p>
                            </div>
                          </div>
                          <Badge className={`${product.badgeColor} text-white`}>
                            {product.badge}
                          </Badge>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-3xl font-bold text-red-600 mb-1">
                            {product.rate}%
                          </div>
                          <div className="text-sm text-gray-600">{product.rateType}</div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-4 gap-6 mb-6">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-xl font-bold text-blue-600">
                            ¥{product.monthlyPayment.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">Monthly Payment</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-xl font-bold text-green-600">
                            ¥{product.totalSavings.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">Total Savings</div>
                        </div>
                        <div className="text-center p-4 bg-orange-50 rounded-lg">
                          <div className="text-xl font-bold text-orange-600">
                            ¥{product.processingFee.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">Processing Fee</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-xl font-bold text-purple-600">{product.rating}</span>
                          </div>
                          <div className="text-sm text-gray-600">{product.users.toLocaleString()} users</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.features.map((feature, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
                        <div className="flex gap-3">
                          <Button className="bg-orange-500 hover:bg-orange-600">
                            <Globe className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          <Button variant="outline">
                            <Phone className="h-4 w-4 mr-2" />
                            Contact
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          onClick={() => toggleDetails(product.id)}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          Detailed Conditions
                          {showDetails === product.id ? (
                            <ChevronUp className="h-4 w-4 ml-1" />
                          ) : (
                            <ChevronDown className="h-4 w-4 ml-1" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {showDetails === product.id && (
                      <motion.div 
                        className="border-t bg-gray-50 p-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Loan Conditions</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                              {product.details.conditions.map((condition, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                                  {condition}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Benefits & Coverage</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                              {product.details.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Important Notes</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                              {product.details.notes.map((note, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                                  {note}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Results
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}