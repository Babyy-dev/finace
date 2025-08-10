/*
  # FinSim Pro Database Schema

  This schema creates the complete database structure for the financial simulation platform.

  ## Tables Created:
  1. **users** - User accounts and profiles
  2. **financial_institutions** - Banks and financial institutions
  3. **loan_products** - Available loan products with rates and terms
  4. **user_simulations** - User simulation history and results
  5. **user_diagnostics** - Financial health diagnostic results
  6. **articles** - Financial articles and content
  7. **product_rankings** - Dynamic ranking data
  8. **user_favorites** - User saved products and comparisons

  ## Security:
  - Row Level Security (RLS) enabled on all user-related tables
  - Policies for authenticated users to access their own data
  - Public read access for product and article data

  ## Features:
  - Multi-language support with JSON fields
  - Comprehensive financial product data
  - User simulation and diagnostic history
  - Article content management
  - Product ranking and comparison system
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table for authentication and profiles
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  email text UNIQUE NOT NULL,
  full_name text,
  preferred_language text DEFAULT 'en' CHECK (preferred_language IN ('en', 'ja')),
  age integer,
  occupation text,
  annual_income numeric(15,2),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Financial institutions table
CREATE TABLE IF NOT EXISTS financial_institutions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name jsonb NOT NULL, -- {"en": "Bank Name", "ja": "銀行名"}
  code text UNIQUE NOT NULL,
  logo_url text,
  website_url text,
  rating numeric(2,1) DEFAULT 0,
  total_users integer DEFAULT 0,
  established_year integer,
  headquarters text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Loan products table
CREATE TABLE IF NOT EXISTS loan_products (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  institution_id uuid REFERENCES financial_institutions(id) ON DELETE CASCADE,
  name jsonb NOT NULL, -- {"en": "Product Name", "ja": "商品名"}
  description jsonb, -- {"en": "Description", "ja": "説明"}
  category text NOT NULL CHECK (category IN ('mortgage', 'refinance', 'personal', 'business')),
  interest_rate_min numeric(5,3) NOT NULL,
  interest_rate_max numeric(5,3) NOT NULL,
  interest_rate_type text DEFAULT 'fixed' CHECK (interest_rate_type IN ('fixed', 'variable', 'mixed')),
  loan_amount_min numeric(15,2) DEFAULT 0,
  loan_amount_max numeric(15,2),
  loan_term_min integer DEFAULT 1, -- in years
  loan_term_max integer DEFAULT 35, -- in years
  processing_fee numeric(10,2) DEFAULT 0,
  early_repayment_fee numeric(10,2) DEFAULT 0,
  features jsonb, -- ["feature1", "feature2"]
  requirements jsonb, -- {"min_income": 3000000, "min_age": 20, "max_age": 65}
  rating numeric(2,1) DEFAULT 0,
  total_users integer DEFAULT 0,
  is_featured boolean DEFAULT false,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- User simulations table
CREATE TABLE IF NOT EXISTS user_simulations (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  product_id uuid REFERENCES loan_products(id) ON DELETE SET NULL,
  simulation_type text NOT NULL CHECK (simulation_type IN ('loan', 'mortgage', 'refinance')),
  input_data jsonb NOT NULL, -- All simulation inputs
  results jsonb NOT NULL, -- Calculated results
  created_at timestamptz DEFAULT now()
);

-- User diagnostics table
CREATE TABLE IF NOT EXISTS user_diagnostics (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  age integer,
  monthly_income numeric(12,2),
  monthly_expenses numeric(12,2),
  total_savings numeric(15,2),
  total_debt numeric(15,2),
  investment_goal numeric(15,2),
  health_score integer,
  savings_rate numeric(5,2),
  debt_to_income_ratio numeric(5,2),
  emergency_fund_months numeric(5,2),
  recommendations jsonb,
  created_at timestamptz DEFAULT now()
);

-- Articles table
CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title jsonb NOT NULL, -- {"en": "Title", "ja": "タイトル"}
  excerpt jsonb, -- {"en": "Excerpt", "ja": "抜粋"}
  content jsonb, -- {"en": "Content", "ja": "内容"}
  category text NOT NULL,
  author_name text,
  author_title text,
  featured_image_url text,
  read_time_minutes integer DEFAULT 5,
  is_trending boolean DEFAULT false,
  is_featured boolean DEFAULT false,
  is_published boolean DEFAULT true,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Product rankings table (for dynamic rankings)
CREATE TABLE IF NOT EXISTS product_rankings (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id uuid REFERENCES loan_products(id) ON DELETE CASCADE,
  category text NOT NULL,
  ranking_type text NOT NULL CHECK (ranking_type IN ('rate', 'popularity', 'rating', 'featured')),
  rank_position integer NOT NULL,
  score numeric(10,4),
  calculated_at timestamptz DEFAULT now(),
  UNIQUE(product_id, category, ranking_type)
);

-- User favorites table
CREATE TABLE IF NOT EXISTS user_favorites (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  product_id uuid REFERENCES loan_products(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_simulations ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_diagnostics ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_favorites ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- RLS Policies for user_simulations table
CREATE POLICY "Users can read own simulations"
  ON user_simulations
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own simulations"
  ON user_simulations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for user_diagnostics table
CREATE POLICY "Users can read own diagnostics"
  ON user_diagnostics
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own diagnostics"
  ON user_diagnostics
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for user_favorites table
CREATE POLICY "Users can manage own favorites"
  ON user_favorites
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Public read access for product and content tables
CREATE POLICY "Public read access for institutions"
  ON financial_institutions
  FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Public read access for loan products"
  ON loan_products
  FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Public read access for articles"
  ON articles
  FOR SELECT
  TO public
  USING (is_published = true);

CREATE POLICY "Public read access for rankings"
  ON product_rankings
  FOR SELECT
  TO public
  USING (true);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_loan_products_category ON loan_products(category);
CREATE INDEX IF NOT EXISTS idx_loan_products_institution ON loan_products(institution_id);
CREATE INDEX IF NOT EXISTS idx_loan_products_rating ON loan_products(rating DESC);
CREATE INDEX IF NOT EXISTS idx_loan_products_interest_rate ON loan_products(interest_rate_min);
CREATE INDEX IF NOT EXISTS idx_user_simulations_user ON user_simulations(user_id);
CREATE INDEX IF NOT EXISTS idx_user_diagnostics_user ON user_diagnostics(user_id);
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_product_rankings_category ON product_rankings(category, ranking_type, rank_position);

-- Functions for updating timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updating timestamps
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_financial_institutions_updated_at BEFORE UPDATE ON financial_institutions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_loan_products_updated_at BEFORE UPDATE ON loan_products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON articles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();