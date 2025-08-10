'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Check, X, Phone, Globe, Calculator } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface ComparisonSectionProps {
  selectedProducts: string[];
  setSelectedProducts: (products: string[]) => void;
}

export default function ComparisonSection({ selectedProducts, setSelectedProducts }: ComparisonSectionProps) {
  const products = [
    {
      id: '1',
      bankName: '住信SBIネット銀行',
      productName: 'ネット専用住宅ローン',
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
      bankName: 'auじぶん銀行',
      productName: '住宅ローン全期間引下げプラン',
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
      bankName: 'みずほ銀行',
      productName: 'みずほネット住宅ローン',
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
    totalSavings: product.totalSavings / 10000, // Convert to 万円
    rate: product.rate
  }));

  const pieData = comparisonProducts.map((product, index) => ({
    name: product.bankName,
    value: product.totalSavings,
    fill: ['#3B82F6', '#10B981', '#F59E0B'][index]
  }));

  if (selectedProducts.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">商品比較</h2>
          <p className="text-xl text-gray-600 mb-8">
            比較したい商品を選択してください（最大3件まで）
          </p>
          <Button onClick={() => window.history.back()} className="bg-blue-600 hover:bg-blue-700">
            商品一覧に戻る
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">住宅ローン比較</h2>
          <p className="text-xl text-gray-600">
            選択した{comparisonProducts.length}件の商品を詳しく比較できます
          </p>
        </div>

        {/* Comparison Chart */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>月々の返済額比較</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value: any) => [`¥${value.toLocaleString()}`, '月々の返済額']} />
                    <Bar dataKey="monthlyPayment" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>総削減額比較</CardTitle>
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
                    <Tooltip formatter={(value: any) => [`¥${value.toLocaleString()}`, '総削減額']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Comparison Table */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>詳細比較表</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">項目</th>
                    {comparisonProducts.map(product => (
                      <th key={product.id} className="px-6 py-4 text-center text-sm font-medium text-gray-900 min-w-64">
                        <div className="flex flex-col items-center gap-2">
                          <img
                            src={product.logo}
                            alt={product.bankName}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <div className="font-bold">{product.bankName}</div>
                            <div className="text-xs text-gray-600">{product.productName}</div>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">金利</td>
                    {comparisonProducts.map(product => (
                      <td key={product.id} className="px-6 py-4 text-center">
                        <div className="text-2xl font-bold text-red-600">{product.rate}%</div>
                        <div className="text-xs text-gray-600">変動金利</div>
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">月々の返済額</td>
                    {comparisonProducts.map(product => (
                      <td key={product.id} className="px-6 py-4 text-center">
                        <div className="text-xl font-bold text-blue-600">
                          ¥{product.monthlyPayment.toLocaleString()}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">総削減額</td>
                    {comparisonProducts.map(product => (
                      <td key={product.id} className="px-6 py-4 text-center">
                        <div className="text-xl font-bold text-green-600">
                          ¥{product.totalSavings.toLocaleString()}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">事務手数料</td>
                    {comparisonProducts.map(product => (
                      <td key={product.id} className="px-6 py-4 text-center">
                        <div className="text-lg font-semibold">
                          ¥{product.processingFee.toLocaleString()}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">評価</td>
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
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">がん50%保障</td>
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
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">全疾病保障</td>
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
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">ネット完結</td>
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
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">ATM手数料無料</td>
                    {comparisonProducts.map(product => (
                      <td key={product.id} className="px-6 py-4 text-center">
                        {product.features.atmFree ? (
                          <Check className="h-6 w-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-600 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">店舗相談</td>
                    {comparisonProducts.map(product => (
                      <td key={product.id} className="px-6 py-4 text-center">
                        {product.features.consultation ? (
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

        {/* Action Buttons */}
        <div className="mt-8 text-center">
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {comparisonProducts.map(product => (
              <Card key={product.id} className="p-4">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-gray-900 mb-2">{product.bankName}</h3>
                  <div className="text-2xl font-bold text-red-600 mb-2">{product.rate}%</div>
                </div>
                <div className="space-y-2">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <Globe className="h-4 w-4 mr-2" />
                    公式サイト
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    電話相談
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calculator className="h-4 w-4 mr-2" />
                    詳細計算
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}