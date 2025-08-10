'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, User, TrendingUp } from 'lucide-react';

export default function ArticleSection() {
  const articles = [
    {
      id: 1,
      title: '2024年住宅ローン金利動向と選び方のポイント',
      excerpt: '2024年の住宅ローン市場の動向を分析し、最適な住宅ローンを選ぶためのポイントを専門家が解説します。',
      category: 'Mortgage',
      author: 'Financial Expert Team',
      readTime: '8 min read',
      publishedAt: '2024-01-15',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      trending: true
    },
    {
      id: 2,
      title: 'リファイナンスで得するタイミングと手続きの流れ',
      excerpt: '住宅ローンのリファイナンスを検討する最適なタイミングと、実際の手続きについて詳しく説明します。',
      category: 'Refinancing',
      author: 'Loan Specialist',
      readTime: '6 min read',
      publishedAt: '2024-01-12',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: '個人ローン活用術：賢い借り方と返済戦略',
      excerpt: '個人ローンを有効活用するための借入戦略と、効率的な返済方法について解説します。',
      category: 'Personal Loans',
      author: 'Finance Advisor',
      readTime: '5 min read',
      publishedAt: '2024-01-10',
      image: 'https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: '事業資金調達の選択肢：銀行融資からクラウドファンディングまで',
      excerpt: '中小企業向けの資金調達方法を比較し、それぞれのメリット・デメリットを詳しく解説します。',
      category: 'Business',
      author: 'Business Consultant',
      readTime: '10 min read',
      publishedAt: '2024-01-08',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: '金利上昇局面での資産運用戦略',
      excerpt: '金利上昇が続く中での効果的な資産運用方法と、リスク管理のポイントについて説明します。',
      category: 'Investment',
      author: 'Investment Manager',
      readTime: '7 min read',
      publishedAt: '2024-01-05',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
      trending: true
    },
    {
      id: 6,
      title: 'フィンテック時代の新しい金融サービス活用法',
      excerpt: 'デジタル化が進む金融業界で注目される新サービスと、その活用方法について解説します。',
      category: 'Fintech',
      author: 'Tech Analyst',
      readTime: '6 min read',
      publishedAt: '2024-01-03',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = ['All', 'Mortgage', 'Refinancing', 'Personal Loans', 'Business', 'Investment', 'Fintech'];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Financial Insights & Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with expert analysis, market trends, and practical financial advice
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="hover:bg-blue-50 hover:text-blue-700"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-blue-600 text-white">
                    {article.category}
                  </Badge>
                  {article.trending && (
                    <Badge className="bg-red-500 text-white flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      Trending
                    </Badge>
                  )}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                  </span>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}