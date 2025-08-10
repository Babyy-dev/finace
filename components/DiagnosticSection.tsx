'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle, TrendingUp, DollarSign } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function DiagnosticSection() {
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    savings: '',
    monthlyExpenses: '',
    currentDebt: '',
    investmentGoal: ''
  });
  const [diagnosis, setDiagnosis] = useState<any>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateDiagnosis = () => {
    const income = parseFloat(formData.income) || 0;
    const savings = parseFloat(formData.savings) || 0;
    const expenses = parseFloat(formData.monthlyExpenses) || 0;
    const debt = parseFloat(formData.currentDebt) || 0;
    const age = parseFloat(formData.age) || 0;

    const savingsRate = ((income - expenses) / income) * 100;
    const debtToIncomeRatio = (debt / (income * 12)) * 100;
    const emergencyFundMonths = savings / expenses;
    
    const healthScore = Math.max(0, Math.min(100, 
      (savingsRate > 20 ? 25 : savingsRate * 1.25) +
      (debtToIncomeRatio < 30 ? 25 : 25 - (debtToIncomeRatio - 30)) +
      (emergencyFundMonths > 6 ? 25 : emergencyFundMonths * 4.17) +
      (age < 65 ? 25 : 25 - (age - 65))
    ));

    const recommendations = [];
    if (savingsRate < 20) recommendations.push({ type: 'warning', text: 'Increase your savings rate to at least 20%' });
    if (debtToIncomeRatio > 30) recommendations.push({ type: 'error', text: 'Reduce debt to below 30% of annual income' });
    if (emergencyFundMonths < 6) recommendations.push({ type: 'warning', text: 'Build emergency fund to cover 6 months expenses' });
    if (recommendations.length === 0) recommendations.push({ type: 'success', text: 'Your financial health looks great!' });

    const balanceSheetData = [
      { name: 'Savings', value: savings, fill: '#10B981' },
      { name: 'Debt', value: debt, fill: '#EF4444' },
      { name: 'Net Worth', value: Math.max(0, savings - debt), fill: '#3B82F6' }
    ];

    const projectionData = Array.from({ length: 10 }, (_, i) => ({
      year: new Date().getFullYear() + i,
      savings: savings * Math.pow(1.07, i) + (income - expenses) * 12 * i,
      debt: Math.max(0, debt * Math.pow(0.9, i))
    }));

    setDiagnosis({
      healthScore: Math.round(healthScore),
      savingsRate: savingsRate.toFixed(1),
      debtToIncomeRatio: debtToIncomeRatio.toFixed(1),
      emergencyFundMonths: emergencyFundMonths.toFixed(1),
      recommendations,
      balanceSheetData,
      projectionData,
      netWorth: (savings - debt).toFixed(0)
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Financial Health Diagnostic
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get a comprehensive analysis of your financial situation with personalized recommendations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="e.g., 35"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="income">Monthly Income (¥)</Label>
                  <Input
                    id="income"
                    type="number"
                    placeholder="e.g., 500000"
                    value={formData.income}
                    onChange={(e) => handleInputChange('income', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="savings">Total Savings (¥)</Label>
                  <Input
                    id="savings"
                    type="number"
                    placeholder="e.g., 5000000"
                    value={formData.savings}
                    onChange={(e) => handleInputChange('savings', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="monthlyExpenses">Monthly Expenses (¥)</Label>
                  <Input
                    id="monthlyExpenses"
                    type="number"
                    placeholder="e.g., 300000"
                    value={formData.monthlyExpenses}
                    onChange={(e) => handleInputChange('monthlyExpenses', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currentDebt">Current Debt (¥)</Label>
                  <Input
                    id="currentDebt"
                    type="number"
                    placeholder="e.g., 2000000"
                    value={formData.currentDebt}
                    onChange={(e) => handleInputChange('currentDebt', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="investmentGoal">Investment Goal (¥)</Label>
                  <Input
                    id="investmentGoal"
                    type="number"
                    placeholder="e.g., 10000000"
                    value={formData.investmentGoal}
                    onChange={(e) => handleInputChange('investmentGoal', e.target.value)}
                  />
                </div>
              </div>
              
              <Button 
                onClick={generateDiagnosis} 
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={!formData.income || !formData.monthlyExpenses}
              >
                Generate Financial Diagnosis
              </Button>
            </CardContent>
          </Card>

          {diagnosis && (
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Financial Health Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{diagnosis.healthScore}/100</div>
                    <Progress value={diagnosis.healthScore} className="w-full h-3" />
                    <div className="text-sm text-gray-600 mt-2">
                      {diagnosis.healthScore >= 80 ? 'Excellent' : 
                       diagnosis.healthScore >= 60 ? 'Good' : 
                       diagnosis.healthScore >= 40 ? 'Fair' : 'Needs Improvement'}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">{diagnosis.savingsRate}%</div>
                      <div className="text-sm text-gray-600">Savings Rate</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{diagnosis.debtToIncomeRatio}%</div>
                      <div className="text-sm text-gray-600">Debt to Income</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {diagnosis.recommendations.map((rec: any, index: number) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                        {rec.type === 'success' && <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />}
                        {rec.type === 'warning' && <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />}
                        {rec.type === 'error' && <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />}
                        <span className="text-sm text-gray-700">{rec.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Balance Sheet Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-gray-900">Net Worth: ¥{parseFloat(diagnosis.netWorth).toLocaleString()}</div>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={diagnosis.balanceSheetData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {diagnosis.balanceSheetData.map((entry: any, index: number) => (
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
                  <CardTitle>10-Year Financial Projection</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={diagnosis.projectionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip formatter={(value: any) => [`¥${value.toLocaleString()}`, '']} />
                        <Line type="monotone" dataKey="savings" stroke="#10B981" name="Savings" strokeWidth={2} />
                        <Line type="monotone" dataKey="debt" stroke="#EF4444" name="Debt" strokeWidth={2} />
                      </LineChart>
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