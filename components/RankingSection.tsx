'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, TrendingUp, Award, Users } from 'lucide-react';

export default function RankingSection() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('mortgage');
  const [sortBy, setSortBy] = useState('rate');

  const products = [
    {
      id: 1,
      name: 'Premium Home Loan',
      bank: 'Sumitomo Mitsui Banking',
      rate: 0.375,
      fees: 0,
      rating: 4.8,
      users: 15420,
      category: 'mortgage',
      features: ['No fees', 'Online application', 'Quick approval'],
      badge: t('mostPopular')
    },
    {
      id: 2,
      name: 'Super Fixed Rate Loan',
      bank: 'Mizuho Bank',
      rate: 0.425,
      fees: 50000,
      rating: 4.6,
      users: 12840,
      category: 'mortgage',
      features: ['Fixed rate', 'Tax benefits', 'Flexible repayment'],
      badge: t('bestRate')
    },
    {
      id: 3,
      name: 'Refinance Plus',
      bank: 'MUFG Bank',
      rate: 0.395,
      fees: 30000,
      rating: 4.7,
      users: 9680,
      category: 'refinance',
      features: ['Refinancing specialist', 'Low fees', 'Expert support'],
      badge: t('recommended')
    },
    {
      id: 4,
      name: 'Quick Personal Loan',
      bank: 'Rakuten Bank',
      rate: 1.9,
      fees: 0,
      rating: 4.5,
      users: 8920,
      category: 'personal',
      features: ['Same day approval', 'No collateral', 'Online only'],
      badge: t('fastest')
    },
    {
      id: 5,
      name: 'Business Growth Loan',
      bank: 'Japan Net Bank',
      rate: 2.1,
      fees: 20000,
      rating: 4.4,
      users: 3420,
      category: 'business',
      features: ['Business focused', 'Flexible terms', 'Growth support'],
      badge: t('new')
    }
  ];

  const categories = [
    { value: 'mortgage', label: t('homeMortgage') },
    { value: 'refinance', label: t('refinancing') },
    { value: 'personal', label: t('personal') },
    { value: 'business', label: t('business') }
  ];

  const filteredProducts = products
    .filter(product => product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'rate': return a.rate - b.rate;
        case 'rating': return b.rating - a.rating;
        case 'users': return b.users - a.users;
        default: return 0;
      }
    });

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case t('mostPopular'): return 'bg-blue-100 text-blue-800';
      case t('bestRate'): return 'bg-green-100 text-green-800';
      case t('recommended'): return 'bg-purple-100 text-purple-800';
      case t('fastest'): return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-8 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('rankingsTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            {t('rankingsDesc')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-64">
              <SelectValue placeholder={t('selectCategory')} />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder={t('sortBy')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rate">{t('interestRate')}</SelectItem>
              <SelectItem value="rating">{t('rating')}</SelectItem>
              <SelectItem value="users">{t('users')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6">
          {filteredProducts.map((product, index) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                            <p className="text-gray-600">{product.bank}</p>
                          </div>
                          <Badge className={getBadgeColor(product.badge)}>
                            {product.badge}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.features.map((feature, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">{product.rate}%</div>
                        <div className="text-sm text-gray-600">{t('interestRate')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-blue-600">¥{product.fees.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">{t('fees')}</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-xl sm:text-2xl font-bold text-gray-900">{product.rating}</span>
                        </div>
                        <div className="text-sm text-gray-600">{t('rating')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-purple-600">{product.users.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">{t('users')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:ml-6 lg:w-48 mt-4 lg:mt-0">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      {t('viewDetails')}
                    </Button>
                    <Button variant="outline" className="w-full">
                      {t('compare')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            {t('loadMore')}
          </Button>
        </div>
      </div>
    </section>
  );
}