/*
  # Sample Data for FinSim Pro

  This file contains sample data to populate the database with realistic financial products,
  institutions, and content for testing and demonstration purposes.
*/

-- Insert Financial Institutions
INSERT INTO financial_institutions (name, code, logo_url, website_url, rating, total_users, established_year, headquarters) VALUES
(
  '{"en": "Sumitomo Mitsui Banking Corporation", "ja": "三井住友銀行"}',
  'SMBC',
  'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100',
  'https://www.smbc.co.jp',
  4.8,
  15420,
  1996,
  'Tokyo, Japan'
),
(
  '{"en": "Mizuho Bank", "ja": "みずほ銀行"}',
  'MIZUHO',
  'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100',
  'https://www.mizuhobank.co.jp',
  4.6,
  12840,
  2000,
  'Tokyo, Japan'
),
(
  '{"en": "MUFG Bank", "ja": "三菱UFJ銀行"}',
  'MUFG',
  'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100',
  'https://www.bk.mufg.jp',
  4.7,
  9680,
  2006,
  'Tokyo, Japan'
),
(
  '{"en": "Rakuten Bank", "ja": "楽天銀行"}',
  'RAKUTEN',
  'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100',
  'https://www.rakuten-bank.co.jp',
  4.5,
  8920,
  2000,
  'Tokyo, Japan'
),
(
  '{"en": "Japan Net Bank", "ja": "ジャパンネット銀行"}',
  'JNB',
  'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100',
  'https://www.japannetbank.co.jp',
  4.4,
  3420,
  2000,
  'Tokyo, Japan'
);

-- Insert Loan Products
INSERT INTO loan_products (
  institution_id, 
  name, 
  description, 
  category, 
  interest_rate_min, 
  interest_rate_max, 
  loan_amount_min, 
  loan_amount_max, 
  loan_term_min, 
  loan_term_max, 
  processing_fee, 
  features, 
  requirements, 
  rating, 
  total_users, 
  is_featured
) VALUES
(
  (SELECT id FROM financial_institutions WHERE code = 'SMBC'),
  '{"en": "Premium Home Loan", "ja": "プレミアム住宅ローン"}',
  '{"en": "Low-rate mortgage with flexible terms and no processing fees", "ja": "柔軟な条件と手数料無料の低金利住宅ローン"}',
  'mortgage',
  0.375,
  0.875,
  1000000,
  100000000,
  5,
  35,
  0,
  '["No processing fees", "Online application", "Quick approval", "Flexible repayment"]',
  '{"min_income": 3000000, "min_age": 20, "max_age": 65, "employment_years": 2}',
  4.8,
  15420,
  true
),
(
  (SELECT id FROM financial_institutions WHERE code = 'MIZUHO'),
  '{"en": "Super Fixed Rate Loan", "ja": "スーパー固定金利ローン"}',
  '{"en": "Fixed rate mortgage with tax benefits and flexible repayment options", "ja": "税制優遇と柔軟な返済オプション付き固定金利住宅ローン"}',
  'mortgage',
  0.425,
  0.925,
  1000000,
  80000000,
  5,
  35,
  50000,
  '["Fixed rate guarantee", "Tax benefits", "Flexible repayment", "Insurance included"]',
  '{"min_income": 3500000, "min_age": 22, "max_age": 65, "employment_years": 3}',
  4.6,
  12840,
  true
),
(
  (SELECT id FROM financial_institutions WHERE code = 'MUFG'),
  '{"en": "Refinance Plus", "ja": "リファイナンスプラス"}',
  '{"en": "Specialized refinancing with low fees and expert support", "ja": "低手数料と専門サポート付きリファイナンス専門商品"}',
  'refinance',
  0.395,
  0.795,
  1000000,
  100000000,
  5,
  35,
  30000,
  '["Refinancing specialist", "Low fees", "Expert support", "Quick processing"]',
  '{"min_income": 4000000, "min_age": 25, "max_age": 60, "current_loan_balance": 5000000}',
  4.7,
  9680,
  true
),
(
  (SELECT id FROM financial_institutions WHERE code = 'RAKUTEN'),
  '{"en": "Quick Personal Loan", "ja": "クイック個人ローン"}',
  '{"en": "Fast approval personal loan with no collateral required", "ja": "担保不要で迅速審査の個人ローン"}',
  'personal',
  1.9,
  14.5,
  100000,
  10000000,
  1,
  10,
  0,
  '["Same day approval", "No collateral", "Online only", "Flexible terms"]',
  '{"min_income": 2000000, "min_age": 20, "max_age": 65, "employment_years": 1}',
  4.5,
  8920,
  false
),
(
  (SELECT id FROM financial_institutions WHERE code = 'JNB'),
  '{"en": "Business Growth Loan", "ja": "事業成長ローン"}',
  '{"en": "Business loan focused on growth with flexible terms and support", "ja": "柔軟な条件とサポート付き成長重視の事業ローン"}',
  'business',
  2.1,
  8.5,
  1000000,
  50000000,
  1,
  15,
  20000,
  '["Business focused", "Flexible terms", "Growth support", "Expert consultation"]',
  '{"min_revenue": 10000000, "business_years": 2, "min_age": 25, "max_age": 65}',
  4.4,
  3420,
  false
);

-- Insert Product Rankings
INSERT INTO product_rankings (product_id, category, ranking_type, rank_position, score) 
SELECT 
  lp.id,
  lp.category,
  'rate',
  ROW_NUMBER() OVER (PARTITION BY lp.category ORDER BY lp.interest_rate_min),
  (5.0 - lp.interest_rate_min) * 100
FROM loan_products lp;

INSERT INTO product_rankings (product_id, category, ranking_type, rank_position, score) 
SELECT 
  lp.id,
  lp.category,
  'popularity',
  ROW_NUMBER() OVER (PARTITION BY lp.category ORDER BY lp.total_users DESC),
  lp.total_users
FROM loan_products lp;

INSERT INTO product_rankings (product_id, category, ranking_type, rank_position, score) 
SELECT 
  lp.id,
  lp.category,
  'rating',
  ROW_NUMBER() OVER (PARTITION BY lp.category ORDER BY lp.rating DESC),
  lp.rating * 20
FROM loan_products lp;

-- Insert Sample Articles
INSERT INTO articles (title, excerpt, content, category, author_name, author_title, featured_image_url, read_time_minutes, is_trending, is_featured) VALUES
(
  '{"en": "2024 Mortgage Rate Trends and Selection Tips", "ja": "2024年住宅ローン金利動向と選び方のポイント"}',
  '{"en": "Analysis of 2024 mortgage market trends and expert tips for choosing the optimal home loan.", "ja": "2024年の住宅ローン市場の動向を分析し、最適な住宅ローンを選ぶためのポイントを専門家が解説します。"}',
  '{"en": "The mortgage market in 2024 continues to evolve with changing interest rates and new products. Here are the key trends and selection criteria to consider...", "ja": "2024年の住宅ローン市場は金利変動と新商品の登場により進化を続けています。考慮すべき主要なトレンドと選択基準をご紹介します..."}',
  'Mortgage',
  'Financial Expert Team',
  'Senior Financial Analyst',
  'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
  8,
  true,
  true
),
(
  '{"en": "Refinancing: Optimal Timing and Process", "ja": "リファイナンスで得するタイミングと手続きの流れ"}',
  '{"en": "Learn about the optimal timing for mortgage refinancing and the detailed process involved.", "ja": "住宅ローンのリファイナンスを検討する最適なタイミングと、実際の手続きについて詳しく説明します。"}',
  '{"en": "Refinancing can save you significant money when done at the right time. This comprehensive guide covers timing, process, and potential savings...", "ja": "適切なタイミングでのリファイナンスは大幅な節約につながります。この包括的なガイドでは、タイミング、プロセス、潜在的な節約について説明します..."}',
  'Refinancing',
  'Loan Specialist',
  'Mortgage Consultant',
  'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
  6,
  false,
  true
),
(
  '{"en": "Personal Loan Strategies: Smart Borrowing and Repayment", "ja": "個人ローン活用術：賢い借り方と返済戦略"}',
  '{"en": "Effective strategies for utilizing personal loans and efficient repayment methods.", "ja": "個人ローンを有効活用するための借入戦略と、効率的な返済方法について解説します。"}',
  '{"en": "Personal loans can be powerful financial tools when used correctly. Learn about strategic borrowing, repayment optimization, and avoiding common pitfalls...", "ja": "個人ローンは正しく使用すれば強力な金融ツールになります。戦略的な借入、返済の最適化、よくある落とし穴の回避について学びましょう..."}',
  'Personal Loans',
  'Finance Advisor',
  'Personal Finance Expert',
  'https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&w=800',
  5,
  false,
  false
),
(
  '{"en": "Business Funding Options: From Bank Loans to Crowdfunding", "ja": "事業資金調達の選択肢：銀行融資からクラウドファンディングまで"}',
  '{"en": "Compare funding methods for SMEs, detailing the pros and cons of each approach.", "ja": "中小企業向けの資金調達方法を比較し、それぞれのメリット・デメリットを詳しく解説します。"}',
  '{"en": "Small and medium enterprises have various funding options available. This guide explores traditional bank loans, alternative financing, and modern crowdfunding approaches...", "ja": "中小企業には様々な資金調達オプションがあります。このガイドでは、従来の銀行融資、代替融資、現代のクラウドファンディング手法を探ります..."}',
  'Business',
  'Business Consultant',
  'SME Finance Specialist',
  'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
  10,
  false,
  false
),
(
  '{"en": "Investment Strategies in Rising Interest Rate Environment", "ja": "金利上昇局面での資産運用戦略"}',
  '{"en": "Effective asset management methods and risk management points during continued interest rate increases.", "ja": "金利上昇が続く中での効果的な資産運用方法と、リスク管理のポイントについて説明します。"}',
  '{"en": "Rising interest rates create both challenges and opportunities for investors. Learn how to adjust your portfolio and manage risks in this changing environment...", "ja": "金利上昇は投資家にとって課題と機会の両方をもたらします。この変化する環境でポートフォリオを調整し、リスクを管理する方法を学びましょう..."}',
  'Investment',
  'Investment Manager',
  'Portfolio Strategist',
  'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
  7,
  true,
  true
),
(
  '{"en": "New Financial Services in the Fintech Era", "ja": "フィンテック時代の新しい金融サービス活用法"}',
  '{"en": "Explore notable new services in the digitalizing financial industry and their utilization methods.", "ja": "デジタル化が進む金融業界で注目される新サービスと、その活用方法について解説します。"}',
  '{"en": "The fintech revolution is transforming how we manage money. Discover the latest digital financial services and how to leverage them for better financial management...", "ja": "フィンテック革命は私たちのお金の管理方法を変革しています。最新のデジタル金融サービスと、より良い財務管理のためにそれらを活用する方法を発見しましょう..."}',
  'Fintech',
  'Tech Analyst',
  'Fintech Researcher',
  'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
  6,
  false,
  false
);