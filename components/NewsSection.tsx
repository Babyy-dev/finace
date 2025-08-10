'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, TrendingUp, Calendar, ArrowRight } from 'lucide-react';

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: '住信SBIネット銀行が住宅ローン金利を引き下げ、変動金利0.298%に',
      excerpt: '住信SBIネット銀行は2024年2月より住宅ローンの変動金利を0.298%に引き下げると発表しました。業界最低水準の金利で注目を集めています。',
      category: '金利情報',
      publishedAt: '2024-02-01',
      readTime: '3分',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400',
      trending: true
    },
    {
      id: 2,
      title: '2024年住宅ローン控除の改正内容と注意点',
      excerpt: '2024年度の住宅ローン控除制度の改正内容について詳しく解説。控除額の上限や適用条件の変更点をまとめました。',
      category: '税制',
      publishedAt: '2024-01-28',
      readTime: '5分',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400',
      trending: false
    },
    {
      id: 3,
      title: 'フラット35の金利動向と今後の見通し',
      excerpt: '住宅金融支援機構のフラット35の金利動向を分析。長期固定金利の今後の見通しについて専門家が解説します。',
      category: '市場分析',
      publishedAt: '2024-01-25',
      readTime: '4分',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=400',
      trending: true
    },
    {
      id: 4,
      title: '借り換えで失敗しないための5つのポイント',
      excerpt: '住宅ローンの借り換えを検討する際に注意すべきポイントを専門家がアドバイス。手数料や諸費用の計算方法も詳しく説明します。',
      category: '借り換え',
      publishedAt: '2024-01-22',
      readTime: '6分',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      trending: false
    },
    {
      id: 5,
      title: 'ネット銀行vs都市銀行 住宅ローン徹底比較',
      excerpt: 'ネット銀行と都市銀行の住宅ローンを金利、手数料、サービス内容で徹底比較。それぞれのメリット・デメリットを解説します。',
      category: '比較',
      publishedAt: '2024-01-20',
      readTime: '7分',
      image: 'https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&w=400',
      trending: true
    },
    {
      id: 6,
      title: '団体信用生命保険の選び方と注意点',
      excerpt: '住宅ローンに付帯する団体信用生命保険の種類と選び方について解説。がん保障や三大疾病保障の違いも詳しく説明します。',
      category: '保険',
      publishedAt: '2024-01-18',
      readTime: '5分',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400',
      trending: false
    }
  ];

  const categories = ['すべて', '金利情報', '税制', '市場分析', '借り換え', '比較', '保険'];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            住宅ローンニュース・コラム
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            最新の金利情報や住宅ローンに関する専門家のアドバイスをお届けします
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={news[0].image}
                  alt={news[0].title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-blue-600 text-white">
                    {news[0].category}
                  </Badge>
                  {news[0].trending && (
                    <Badge className="bg-red-500 text-white flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      注目
                    </Badge>
                  )}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  {news[0].title}
                </h3>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  {news[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(news[0].publishedAt).toLocaleDateString('ja-JP')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{news[0].readTime}</span>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-blue-600 hover:bg-blue-700">
                  続きを読む
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Articles */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-red-500" />
                  注目記事
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {news.filter(article => article.trending).slice(1, 4).map(article => (
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
                        <span>{new Date(article.publishedAt).toLocaleDateString('ja-JP')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>カテゴリ別記事数</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.slice(1).map(category => (
                    <div key={category} className="flex justify-between items-center">
                      <span className="text-gray-700">{category}</span>
                      <Badge variant="outline">
                        {news.filter(article => article.category === category).length}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Articles Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">最新記事</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.slice(1).map(article => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
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
                
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.publishedAt).toLocaleDateString('ja-JP')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    続きを読む
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            すべての記事を見る
          </Button>
        </div>
      </div>
    </section>
  );
}