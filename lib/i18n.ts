import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Header
      brandName: 'MortgageCheck',
      mortgageSearch: 'Mortgage Search',
      comparison: 'Comparison',
      news: 'News',
      about: 'About Service',
      
      // Hero Section
      heroTitle: 'Mortgage Refinancing',
      heroSubtitle: 'Comparison Service',
      heroDescription: 'Find the perfect mortgage for you and reduce your monthly payments',
      loanAmount: 'Loan Amount',
      loanAmountPlaceholder: '30,000,000',
      currentRate: 'Current Rate',
      currentBalance: 'Current Balance',
      currentBalancePlaceholder: '25,000,000',
      prefecture: 'Prefecture',
      selectPlaceholder: 'Please select',
      tokyo: 'Tokyo',
      osaka: 'Osaka',
      kanagawa: 'Kanagawa',
      saitama: 'Saitama',
      chiba: 'Chiba',
      searchMortgage: 'Search Mortgages',
      paymentSimulation: 'Payment Simulation',
      partnerInstitutions: 'Partner Institutions',
      totalUsers: 'Total Users',
      averageSavings: 'Average Savings',
      monthlySavings: '¥23,000/month',
      
      // Search Section
      refinance: 'Refinance',
      newLoan: 'New Loan',
      investment: 'Investment',
      setRefinanceConditions: 'Set Refinance Conditions',
      tenThousandYen: '¥10,000',
      
      // Product List
      searchResults: 'Search Results',
      items: ' items',
      foundMatchingMortgages: 'Found mortgages matching your criteria',
      sortBy: 'Sort by',
      sortByRate: 'Lowest Rate',
      sortBySavings: 'Highest Savings',
      sortByRating: 'Highest Rating',
      sortByUsers: 'Most Users',
      compareItems: 'Compare {{count}} items',
      
      search: 'Search',
      
      // Hero Section
      heroTitle: 'Smart Financial',
      heroSubtitle: 'Simulation Platform',
      heroDescription: 'Compare loans, mortgages, and financial products with our advanced simulation tools. Make informed decisions with personalized recommendations.',
      startSimulation: 'Start Simulation',
      viewRankings: 'View Rankings',
      
      // Simulation Section
      loanSimulationTitle: 'Loan Simulation Calculator',
      loanSimulationDesc: 'Get accurate calculations for your loan scenarios with detailed breakdowns and visualizations',
      loanParameters: 'Loan Parameters',
      loanAmount: 'Loan Amount (¥)',
      interestRate: 'Interest Rate (%)',
      loanTerm: 'Loan Term (Years)',
      loanType: 'Loan Type',
      monthlyIncome: 'Monthly Income (¥)',
      monthlyExpenses: 'Monthly Expenses (¥)',
      calculateLoan: 'Calculate Loan',
      calculationResults: 'Calculation Results',
      monthlyPayment: 'Monthly Payment',
      incomeRatio: 'Income Ratio',
      totalPayment: 'Total Payment',
      totalInterest: 'Total Interest',
      paymentSchedule: 'Payment Schedule Preview',
      
      // Loan Types
      homeMortgage: 'Home Mortgage',
      refinancing: 'Refinancing',
      personalLoan: 'Personal Loan',
      businessLoan: 'Business Loan',
      
      // Rankings Section
      rankingsTitle: 'Financial Product Rankings',
      rankingsDesc: 'Compare and choose from the best financial products based on rates, fees, and customer satisfaction',
      selectCategory: 'Select category',
      sortBy: 'Sort by',
      mostPopular: 'Most Popular',
      bestRate: 'Best Rate',
      recommended: 'Recommended',
      fastest: 'Fastest',
      new: 'New',
      fees: 'Fees',
      rating: 'Rating',
      users: 'Users',
      viewDetails: 'View Details',
      compare: 'Compare',
      loadMore: 'Load More Products',
      
      // Diagnostic Section
      diagnosticTitle: 'Financial Health Diagnostic',
      diagnosticDesc: 'Get a comprehensive analysis of your financial situation with personalized recommendations',
      personalInfo: 'Personal Information',
      age: 'Age',
      totalSavings: 'Total Savings (¥)',
      currentDebt: 'Current Debt (¥)',
      investmentGoal: 'Investment Goal (¥)',
      generateDiagnosis: 'Generate Financial Diagnosis',
      healthScore: 'Financial Health Score',
      savingsRate: 'Savings Rate',
      debtToIncome: 'Debt to Income',
      recommendations: 'Recommendations',
      balanceSheet: 'Balance Sheet Analysis',
      netWorth: 'Net Worth',
      projection: '10-Year Financial Projection',
      excellent: 'Excellent',
      good: 'Good',
      fair: 'Fair',
      needsImprovement: 'Needs Improvement',
      
      // Articles Section
      articlesTitle: 'Financial Insights & Articles',
      articlesDesc: 'Stay informed with expert analysis, market trends, and practical financial advice',
      readMore: 'Read More',
      viewAllArticles: 'View All Articles',
      
      // Footer
      footerDesc: 'Your trusted partner for financial simulation and comparison services.',
      services: 'Services',
      resources: 'Resources',
      contact: 'Contact',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cookiePolicy: 'Cookie Policy',
      allRightsReserved: 'All rights reserved.',
      
      // Categories
      all: 'All',
      mortgage: 'Mortgage',
      personal: 'Personal Loans',
      business: 'Business',
      investment: 'Investment',
      fintech: 'Fintech'
    }
  },
  ja: {
    translation: {
      // Header
      brandName: 'モゲチェック',
      mortgageSearch: '住宅ローン検索',
      comparison: '比較',
      news: 'ニュース',
      about: 'サービス概要',
      
      // Hero Section
      heroTitle: '住宅ローン借り換え',
      heroSubtitle: '一括比較サービス',
      heroDescription: 'あなたにぴったりの住宅ローンを見つけて、毎月の返済額を削減しましょう',
      loanAmount: '借入希望額',
      loanAmountPlaceholder: '3000万円',
      currentRate: '現在の金利',
      currentBalance: '現在の残高',
      currentBalancePlaceholder: '2500万円',
      prefecture: '都道府県',
      selectPlaceholder: '選択してください',
      tokyo: '東京都',
      osaka: '大阪府',
      kanagawa: '神奈川県',
      saitama: '埼玉県',
      chiba: '千葉県',
      searchMortgage: '住宅ローンを検索',
      paymentSimulation: '返済シミュレーション',
      partnerInstitutions: '提携金融機関',
      totalUsers: '利用者数',
      averageSavings: '平均削減額',
      monthlySavings: '月額2.3万円',
      
      // Search Section
      refinance: '借り換え',
      newLoan: '新規借入',
      investment: '投資用',
      setRefinanceConditions: '借り換え条件を設定',
      tenThousandYen: '万円',
      
      // Product List
      searchResults: '検索結果',
      items: '件',
      foundMatchingMortgages: 'あなたの条件に合った住宅ローンが見つかりました',
      sortBy: '並び替え',
      sortByRate: '金利の低い順',
      sortBySavings: '削減額の大きい順',
      sortByRating: '評価の高い順',
      sortByUsers: '利用者数の多い順',
      compareItems: '{{count}}件を比較する',
      
      simulation: 'シミュレーション',
      rankings: 'ランキング',
      diagnostic: '診断',
      articles: '記事',
      
      // Hero Section
      heroTitle: 'スマート金融',
      heroSubtitle: 'シミュレーションプラットフォーム',
      heroDescription: '高度なシミュレーションツールでローン、住宅ローン、金融商品を比較。個別の推奨事項で情報に基づいた決定を行います。',
      startSimulation: 'シミュレーション開始',
      viewRankings: 'ランキングを見る',
      
      // Simulation Section
      loanSimulationTitle: 'ローンシミュレーション計算機',
      loanSimulationDesc: '詳細な内訳と視覚化でローンシナリオの正確な計算を取得',
      loanParameters: 'ローンパラメータ',
      loanAmount: 'ローン金額（¥）',
      interestRate: '金利（%）',
      loanTerm: 'ローン期間（年）',
      loanType: 'ローンタイプ',
      monthlyIncome: '月収（¥）',
      monthlyExpenses: '月間支出（¥）',
      calculateLoan: 'ローン計算',
      calculationResults: '計算結果',
      monthlyPayment: '月々の支払い',
      incomeRatio: '収入比率',
      totalPayment: '総支払額',
      totalInterest: '総利息',
      paymentSchedule: '支払いスケジュール予覧',
      
      // Loan Types
      homeMortgage: '住宅ローン',
      refinancing: 'リファイナンス',
      personalLoan: '個人ローン',
      businessLoan: '事業ローン',
      
      // Rankings Section
      rankingsTitle: '金融商品ランキング',
      rankingsDesc: '金利、手数料、顧客満足度に基づいて最高の金融商品を比較・選択',
      selectCategory: 'カテゴリを選択',
      sortBy: '並び替え',
      mostPopular: '最も人気',
      bestRate: '最良金利',
      recommended: 'おすすめ',
      fastest: '最速',
      new: '新着',
      fees: '手数料',
      rating: '評価',
      users: 'ユーザー',
      viewDetails: '詳細を見る',
      compare: '比較',
      loadMore: 'もっと見る',
      
      // Diagnostic Section
      diagnosticTitle: '金融健康診断',
      diagnosticDesc: '個別の推奨事項で金融状況の包括的な分析を取得',
      personalInfo: '個人情報',
      age: '年齢',
      totalSavings: '総貯蓄（¥）',
      currentDebt: '現在の借金（¥）',
      investmentGoal: '投資目標（¥）',
      generateDiagnosis: '金融診断を生成',
      healthScore: '金融健康スコア',
      savingsRate: '貯蓄率',
      debtToIncome: '借金対収入比',
      recommendations: '推奨事項',
      balanceSheet: '貸借対照表分析',
      netWorth: '純資産',
      projection: '10年間の金融予測',
      excellent: '優秀',
      good: '良好',
      fair: '普通',
      needsImprovement: '改善が必要',
      
      // Articles Section
      articlesTitle: '金融インサイト＆記事',
      articlesDesc: '専門家の分析、市場動向、実用的な金融アドバイスで最新情報を入手',
      readMore: '続きを読む',
      viewAllArticles: 'すべての記事を見る',
      
      // Footer
      footerDesc: '金融シミュレーションと比較サービスの信頼できるパートナー。',
      services: 'サービス',
      resources: 'リソース',
      contact: 'お問い合わせ',
      privacyPolicy: 'プライバシーポリシー',
      termsOfService: '利用規約',
      cookiePolicy: 'クッキーポリシー',
      allRightsReserved: 'すべての権利を保有。',
      
      // Categories
      all: 'すべて',
      mortgage: '住宅ローン',
      personal: '個人ローン',
      business: '事業',
      investment: '投資',
      fintech: 'フィンテック'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;