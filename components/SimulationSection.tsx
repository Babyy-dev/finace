'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function SimulationSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    loanAmount: '',
    interestRate: '',
    loanTerm: '',
    loanType: '',
    income: '',
    expenses: ''
  });
  const [results, setResults] = useState<any>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateLoan = () => {
    const principal = parseFloat(formData.loanAmount);
    const rate = parseFloat(formData.interestRate) / 100 / 12;
    const payments = parseFloat(formData.loanTerm) * 12;
    
    const monthlyPayment = (principal * rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1);
    const totalPayment = monthlyPayment * payments;
    const totalInterest = totalPayment - principal;
    
    const income = parseFloat(formData.income) || 0;
    const expenses = parseFloat(formData.expenses) || 0;
    const affordabilityRatio = (monthlyPayment / income) * 100;
    
    setResults({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      affordabilityRatio: affordabilityRatio.toFixed(1),
      principalData: [
        { name: 'Principal', value: principal, fill: '#3B82F6' },
        { name: 'Interest', value: totalInterest, fill: '#EF4444' }
      ],
      paymentSchedule: Array.from({ length: Math.min(5, payments / 12) }, (_, i) => ({
        year: i + 1,
        principal: (principal / (payments / 12)) * (i + 1),
        interest: totalInterest * (1 - (i + 1) / (payments / 12)),
        balance: principal * (1 - (i + 1) / (payments / 12))
      }))
    });
  };

  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('loanSimulationTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            {t('loanSimulationDesc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <Card className="p-6">
            <CardHeader>
              <CardTitle>{t('loanParameters')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="loanAmount">{t('loanAmount')}</Label>
                <Input
                  id="loanAmount"
                  type="number"
                  placeholder="e.g., 30000000"
                  value={formData.loanAmount}
                  onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="interestRate">{t('interestRate')}</Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.01"
                  placeholder="e.g., 2.5"
                  value={formData.interestRate}
                  onChange={(e) => handleInputChange('interestRate', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="loanTerm">{t('loanTerm')}</Label>
                <Select onValueChange={(value) => handleInputChange('loanTerm', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('loanTerm')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10 years</SelectItem>
                    <SelectItem value="15">15 years</SelectItem>
                    <SelectItem value="20">20 years</SelectItem>
                    <SelectItem value="25">25 years</SelectItem>
                    <SelectItem value="30">30 years</SelectItem>
                    <SelectItem value="35">35 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="loanType">{t('loanType')}</Label>
                <Select onValueChange={(value) => handleInputChange('loanType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('loanType')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mortgage">{t('homeMortgage')}</SelectItem>
                    <SelectItem value="refinance">{t('refinancing')}</SelectItem>
                    <SelectItem value="personal">{t('personalLoan')}</SelectItem>
                    <SelectItem value="business">{t('businessLoan')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="income">{t('monthlyIncome')}</Label>
                  <Input
                    id="income"
                    type="number"
                    placeholder="e.g., 500000"
                    value={formData.income}
                    onChange={(e) => handleInputChange('income', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="expenses">{t('monthlyExpenses')}</Label>
                  <Input
                    id="expenses"
                    type="number"
                    placeholder="e.g., 200000"
                    value={formData.expenses}
                    onChange={(e) => handleInputChange('expenses', e.target.value)}
                  />
                </div>
              </div>
              
              <Button 
                onClick={calculateLoan} 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={!formData.loanAmount || !formData.interestRate || !formData.loanTerm}
              >
                {t('calculateLoan')}
              </Button>
            </CardContent>
          </Card>

          {results && (
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>{t('calculationResults')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">¥{results.monthlyPayment}</div>
                      <div className="text-sm text-gray-600">{t('monthlyPayment')}</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">{results.affordabilityRatio}%</div>
                      <div className="text-sm text-gray-600">{t('incomeRatio')}</div>
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-base sm:text-lg font-semibold text-gray-700">{t('totalPayment')}: ¥{results.totalPayment}</div>
                    <div className="text-sm text-gray-600">{t('totalInterest')}: ¥{results.totalInterest}</div>
                  </div>
                  
                  <div className="h-48 sm:h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={results.principalData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {results.principalData.map((entry: any, index: number) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value: any) => [`¥${value.toLocaleString()}`, '']} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle>{t('paymentSchedule')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 sm:h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={results.paymentSchedule}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip formatter={(value: any) => [`¥${value.toLocaleString()}`, '']} />
                        <Bar dataKey="principal" fill="#3B82F6" name="Principal" />
                        <Bar dataKey="interest" fill="#EF4444" name="Interest" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}