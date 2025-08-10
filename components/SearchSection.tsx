'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Filter, SlidersHorizontal, MapPin, Calendar } from 'lucide-react';

interface SearchSectionProps {
  searchFilters: any;
  setSearchFilters: (filters: any) => void;
}

export default function SearchSection({ searchFilters, setSearchFilters }: SearchSectionProps) {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const handleFilterChange = (field: string, value: string) => {
    setSearchFilters(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Tabs defaultValue="refinance" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="refinance">{t('refinance')}</TabsTrigger>
              <TabsTrigger value="new">{t('newLoan')}</TabsTrigger>
              <TabsTrigger value="investment">{t('investment')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="refinance">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    {t('setRefinanceConditions')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="loanAmount">{t('loanAmount')}</Label>
                      <Input
                        id="loanAmount"
                        type="number"
                        placeholder="30,000,000"
                        value={searchFilters.loanAmount}
                        onChange={(e) => handleFilterChange('loanAmount', e.target.value)}
                      />
                      <div className="text-xs text-gray-500 mt-1">{t('tenThousandYen')}</div>
                    </div>
                    
                    <div>
                      <Label htmlFor="currentRate">{t('currentRate')}</Label>
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
                      <Label htmlFor="loanBalance">{t('currentBalance')}</Label>
                      <Input
                        id="loanBalance"
                        type="number"
                        placeholder="25,000,000"
                        value={searchFilters.loanBalance}
                        onChange={(e) => handleFilterChange('loanBalance', e.target.value)}
                      />
                      <div className="text-xs text-gray-500 mt-1">{t('tenThousandYen')}</div>
                    </div>
                    
                    <div>
                      <Label htmlFor="remainingYears">残り年数</Label>
                      <Select onValueChange={(value) => handleFilterChange('remainingYears', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5年以下</SelectItem>
                          <SelectItem value="10">10年以下</SelectItem>
                          <SelectItem value="15">15年以下</SelectItem>
                          <SelectItem value="20">20年以下</SelectItem>
                          <SelectItem value="25">25年以下</SelectItem>
                          <SelectItem value="30">30年以下</SelectItem>
                          <SelectItem value="35">35年以下</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="prefecture">都道府県</Label>
                      <Select onValueChange={(value) => handleFilterChange('prefecture', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tokyo">東京都</SelectItem>
                          <SelectItem value="osaka">大阪府</SelectItem>
                          <SelectItem value="kanagawa">神奈川県</SelectItem>
                          <SelectItem value="saitama">埼玉県</SelectItem>
                          <SelectItem value="chiba">千葉県</SelectItem>
                          <SelectItem value="hyogo">兵庫県</SelectItem>
                          <SelectItem value="aichi">愛知県</SelectItem>
                          <SelectItem value="fukuoka">福岡県</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="employmentType">雇用形態</Label>
                      <Select onValueChange={(value) => handleFilterChange('employmentType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="regular">正社員</SelectItem>
                          <SelectItem value="contract">契約社員</SelectItem>
                          <SelectItem value="parttime">パート・アルバイト</SelectItem>
                          <SelectItem value="selfemployed">自営業</SelectItem>
                          <SelectItem value="executive">会社役員</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                      className="mb-4"
                    >
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      詳細条件設定
                    </Button>
                    
                    {showAdvancedFilters && (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-gray-50 rounded-lg">
                        <div>
                          <Label htmlFor="annualIncome">年収</Label>
                          <Input
                            id="annualIncome"
                            type="number"
                            placeholder="5,000,000"
                            onChange={(e) => handleFilterChange('annualIncome', e.target.value)}
                          />
                          <div className="text-xs text-gray-500 mt-1">万円</div>
                        </div>
                        
                        <div>
                          <Label htmlFor="age">年齢</Label>
                          <Input
                            id="age"
                            type="number"
                            placeholder="35"
                            onChange={(e) => handleFilterChange('age', e.target.value)}
                          />
                          <div className="text-xs text-gray-500 mt-1">歳</div>
                        </div>
                        
                        <div>
                          <Label htmlFor="propertyType">物件種別</Label>
                          <Select onValueChange={(value) => handleFilterChange('propertyType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="選択してください" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="detached">戸建て</SelectItem>
                              <SelectItem value="apartment">マンション</SelectItem>
                              <SelectItem value="townhouse">タウンハウス</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6 flex gap-4">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                      条件に合う住宅ローンを検索
                    </Button>
                    <Button size="lg" variant="outline">
                      条件をリセット
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="new">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-4">新規借入の検索</h3>
                    <p className="text-gray-600 mb-6">新規で住宅ローンをお探しの方向けの検索機能です</p>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      新規借入を検索
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="investment">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-4">投資用物件ローン</h3>
                    <p className="text-gray-600 mb-6">投資用不動産向けのローン商品を検索できます</p>
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      投資用ローンを検索
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-blue-900 mb-2">地域密着型</h3>
              <p className="text-sm text-blue-700">お住まいの地域に特化した金融機関も検索可能</p>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-green-900 mb-2">最新情報</h3>
              <p className="text-sm text-green-700">金利情報は毎日更新。最新の条件で比較</p>
            </CardContent>
          </Card>
          
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6 text-center">
              <Badge className="bg-orange-600 text-white mx-auto mb-3 text-lg px-3 py-1">無料</Badge>
              <h3 className="font-semibold text-orange-900 mb-2">完全無料</h3>
              <p className="text-sm text-orange-700">すべてのサービスを無料でご利用いただけます</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}