'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, Award, Clock, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: '安心・安全',
      description: '金融庁認可の正規サービス。お客様の個人情報は厳重に管理し、安全にサービスを提供します。',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: '50万人の実績',
      description: 'これまでに50万人以上のお客様にご利用いただき、多くの方の住宅ローン選びをサポートしてきました。',
      color: 'text-green-600'
    },
    {
      icon: Award,
      title: '専門家監修',
      description: 'ファイナンシャルプランナーや住宅ローンアドバイザーが監修した信頼性の高い情報を提供します。',
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: '24時間対応',
      description: 'オンラインサービスなので24時間いつでもご利用可能。お忙しい方でも空いた時間に比較検討できます。',
      color: 'text-orange-600'
    }
  ];

  const steps = [
    {
      step: '01',
      title: '条件入力',
      description: '借入希望額や現在の金利など、簡単な条件を入力してください。'
    },
    {
      step: '02',
      title: '商品検索',
      description: 'あなたの条件に合った住宅ローン商品を自動で検索・表示します。'
    },
    {
      step: '03',
      title: '詳細比較',
      description: '気になる商品を選んで詳細な条件や特典を比較できます。'
    },
    {
      step: '04',
      title: '申込サポート',
      description: '選んだ商品の申込方法や必要書類について詳しくご案内します。'
    }
  ];

  const stats = [
    { number: '1,200+', label: '提携金融機関数', description: '全国の銀行・信用金庫と提携' },
    { number: '50万+', label: '利用者数', description: '累計利用者数' },
    { number: '平均230万円', label: '削減実績', description: '借り換えによる平均削減額' },
    { number: '98%', label: '満足度', description: 'お客様満足度' }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            モゲチェックについて
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            住宅ローンの借り換えや新規借入をお考えの方に、最適な商品選びをサポートする無料比較サービスです。
            1,200以上の金融機関と提携し、あなたにぴったりの住宅ローンを見つけるお手伝いをします。
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            無料で住宅ローンを比較する
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            モゲチェックが選ばれる理由
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Icon className={`h-12 w-12 ${feature.color} mx-auto mb-4`} />
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* How it Works Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            ご利用の流れ
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
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
              </div>
            ))}
          </div>
        </div>

        {/* Service Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>提供サービス</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  '住宅ローン借り換え比較',
                  '新規住宅ローン比較',
                  '投資用不動産ローン比較',
                  '返済シミュレーション',
                  '金利動向レポート',
                  '専門家による無料相談'
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>お問い合わせ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">電話でのお問い合わせ</div>
                    <div className="text-blue-600 font-semibold">0120-123-456</div>
                    <div className="text-sm text-gray-600">平日 9:00-18:00</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">メールでのお問い合わせ</div>
                    <div className="text-blue-600">support@mogecheck.jp</div>
                    <div className="text-sm text-gray-600">24時間受付</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">所在地</div>
                    <div className="text-gray-700">〒100-0001</div>
                    <div className="text-gray-700">東京都千代田区千代田1-1-1</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            今すぐ住宅ローンを比較してみませんか？
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            無料で利用できる住宅ローン比較サービス。あなたにぴったりの商品が見つかります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              無料で比較を始める
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              専門家に相談する
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}