import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface FinancialInstitution {
  id: string;
  name: { en: string; ja: string };
  code: string;
  logo_url?: string;
  website_url?: string;
  rating: number;
  total_users: number;
  established_year?: number;
  headquarters?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface LoanProduct {
  id: string;
  institution_id: string;
  name: { en: string; ja: string };
  description?: { en: string; ja: string };
  category: 'mortgage' | 'refinance' | 'personal' | 'business';
  interest_rate_min: number;
  interest_rate_max: number;
  interest_rate_type: 'fixed' | 'variable' | 'mixed';
  loan_amount_min: number;
  loan_amount_max?: number;
  loan_term_min: number;
  loan_term_max: number;
  processing_fee: number;
  early_repayment_fee: number;
  features?: string[];
  requirements?: Record<string, any>;
  rating: number;
  total_users: number;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  financial_institutions?: FinancialInstitution;
}

export interface Article {
  id: string;
  title: { en: string; ja: string };
  excerpt?: { en: string; ja: string };
  content?: { en: string; ja: string };
  category: string;
  author_name?: string;
  author_title?: string;
  featured_image_url?: string;
  read_time_minutes: number;
  is_trending: boolean;
  is_featured: boolean;
  is_published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface UserSimulation {
  id: string;
  user_id: string;
  product_id?: string;
  simulation_type: 'loan' | 'mortgage' | 'refinance';
  input_data: Record<string, any>;
  results: Record<string, any>;
  created_at: string;
}

export interface UserDiagnostic {
  id: string;
  user_id: string;
  age?: number;
  monthly_income: number;
  monthly_expenses: number;
  total_savings: number;
  total_debt: number;
  investment_goal?: number;
  health_score: number;
  savings_rate: number;
  debt_to_income_ratio: number;
  emergency_fund_months: number;
  recommendations?: Array<{ type: string; text: string }>;
  created_at: string;
}