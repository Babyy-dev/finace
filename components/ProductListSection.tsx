'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, TrendingUp, Award, Users, Building, Phone, Globe, ChevronDown, ChevronUp } from 'lucide-react';

interface ProductListSectionProps {
  searchFilters: any;
  selectedProducts: string[];
  setSelectedProducts: (products: string[]) => void;
}

export default function ProductListSection({ searchFilters, selectedProducts, setSelectedProducts }: ProductListSectionProps) {
  const [sortBy, setSortBy] = useState('rate');
  const [showDetails, setShowDetails] = useState<string | null>(null);

  const products = [
    {
      id: '1',
      bankName: '住信SBIネット銀行',
      productName: 'ネット専用住宅ローン',
      rate: 0.298,
      rateType: '変動金利',
      monthlyPayment: 89420,
      totalSavings: 2840000,
      processingFee: 0,
      guaranteeFee: 0,
      rating: 4.8,
      users: 15420,
      features: ['団信無料', 'がん50%保障', '全疾病保障', 'ネット完結'],
      badge: '最低金利',
      badgeColor: 'bg-red-500',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100',
      details: {
        conditions: ['年収400万円以上', '勤続年数3年以上', '団体信用生命保険加入'],
        benefits: ['がん診断で住宅ローン残高が半分', '全疾病保障で月々の返済をカバー'],
        notes: ['審査結果により金利が変動する場合があります']
      }
    },
    {
      id: '2',
      bankName: 'auじぶん銀行',
      productName: '住宅ローン全期間引下げプラン',
      rate: 0.319,
      rateType: '変動金利',
      monthlyPayment: 89890,
      totalSavings: 2720000,
      processingFee: 0,
      guaranteeFee: 0,
      rating: 4.7,
      users: 12840,
      features: ['がん50%保障', '全疾病保障', 'au金利優遇', '来店不要'],
      badge: '人気No.1',
      badgeColor: 'bg-blue-500',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100',
      details: {
        conditions: ['年収200万円以上', '勤続年数1年以上', '団体信用生命保険加入'],
        benefits: ['au回線利用で金利優遇', 'がん診断で住宅ローン残高が半分'],
        notes: ['au回線契約者は年0.07%金利引下げ']
      }
    },
    {
      id: '3',
      bankName: 'PayPay銀行',
      productName: '住宅ローン',
      rate: 0.349,
      rateType: '変動金利',
      monthlyPayment: 90180,
      totalSavings: 2580000,
      processingFee: 0,
      guaranteeFee: 0,
      rating: 4.6,
      users: 9680,
      features: ['がん50%保障', '業界最低水準', '24時間申込', '書類郵送不要'],
      badge: '新着',
      badgeColor: 'bg-green-500',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100',
      details: {
        conditions: ['年収200万円以上', '勤続年数1年以上', '団体信用生命保険加入'],
        benefits: ['がん診断で住宅ローン残高が半分', '24時間いつでも申込可能'],
        notes: ['審査は最短10日程度で完了']
      }
    },
    {
      id: '4',
      bankName: 'みずほ銀行',
      productName: 'みずほネット住宅ローン',
      rate: 0.375,
      rateType: '変動金利',
      monthlyPayment: 90520,
      totalSavings: 2450000,
      processingFee: 33000,
      guaranteeFee: 0,
      rating: 4.5,
      users: 8920,
      features: ['8大疾病補償', 'ライフステージ応援', 'ATM手数料無料', '相談窓口充実'],
      badge: '大手銀行',
      badgeColor: 'bg-purple-500',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100',
      details: {
        conditions: ['年収400万円以上', '勤続年数2年以上', '団体信用生命保険加入'],
        benefits: ['8大疾病で住宅ローン残高がゼロ', 'ライフステージに応じた返済プラン'],
        notes: ['店舗での相談も可能']
      }
    },
    {
      id: '5',
      bankName: '三菱UFJ銀行',
      productName: 'ネット専用住宅ローン',
      rate: 0.345,
      rateType: '変動金利',
      monthlyPayment: 90080,
      totalSavings: 2620000,
      processingFee: 0,
      guaranteeFee: 0,
      rating: 4.4,
      users: 7420,
      features: ['7大疾病保障', '出産サポート', 'ATM手数料無料', '専用アプリ'],
      badge: 'おすすめ',
      badgeColor: 'bg-orange-500',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100',
      details: {
        conditions: ['年収400万円以上', '勤続年数3年以上', '団体信用生命保険加入'],
        benefits: ['7大疾病で住宅ローン残高がゼロ', '出産時に金利優遇'],
        notes: ['専用アプリで残高照会・繰上返済が可能']
      }
    }
  ];

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

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'rate': return a.rate - b.rate;
      case 'savings': return b.totalSavings - a.totalSavings;
      case 'rating': return b.rating - a.rating;
      case 'users': return b.users - a.users;
      default: return 0;
    }
  });

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {t('searchResults')} {products.length}{t('items')}
            </h2>
            <p className="text-gray-600">
              {t('foundMatchingMortgages')}
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder={t('sortBy')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rate">{t('sortByRate')}</SelectItem>
                <SelectItem value="savings">{t('sortBySavings')}</SelectItem>
                <SelectItem value="rating">{t('sortByRating')}</SelectItem>
                <SelectItem value="users">{t('sortByUsers')}</SelectItem>
              </SelectContent>
            </Select>
            
            {selectedProducts.length > 0 && (
              <Button className="bg-blue-600 hover:bg-blue-700">
                {t('compareItems', { count: selectedProducts.length })}
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {sortedProducts.map((product, index) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
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
                      <div className="text-sm text-gray-600">月々の返済額</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-xl font-bold text-green-600">
                        ¥{product.totalSavings.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">総削減額</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-xl font-bold text-orange-600">
                        ¥{product.processingFee.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">事務手数料</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-xl font-bold text-purple-600">{product.rating}</span>
                      </div>
                      <div className="text-sm text-gray-600">{product.users.toLocaleString()}人利用</div>
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
                        公式サイトで詳細を見る
                      </Button>
                      <Button variant="outline">
                        <Phone className="h-4 w-4 mr-2" />
                        電話で相談
                      </Button>
                    </div>
                    
                    <Button
                      variant="ghost"
                      onClick={() => toggleDetails(product.id)}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      詳細条件を見る
                      {showDetails === product.id ? (
                        <ChevronUp className="h-4 w-4 ml-1" />
                      ) : (
                        <ChevronDown className="h-4 w-4 ml-1" />
                      )}
                    </Button>
                  </div>
                </div>

                {showDetails === product.id && (
                  <div className="border-t bg-gray-50 p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">借入条件</h4>
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
                        <h4 className="font-semibold text-gray-900 mb-3">特典・保障</h4>
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
                        <h4 className="font-semibold text-gray-900 mb-3">注意事項</h4>
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
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            さらに表示する
          </Button>
        </div>
      </div>
    </section>
  );
}