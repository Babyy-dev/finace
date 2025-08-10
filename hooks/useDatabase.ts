'use client';

import { useState, useEffect } from 'react';
import { supabase, type LoanProduct, type Article, type FinancialInstitution } from '@/lib/supabase';

export function useLoanProducts(category?: string) {
  const [products, setProducts] = useState<LoanProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        let query = supabase
          .from('loan_products')
          .select(`
            *,
            financial_institutions (*)
          `)
          .eq('is_active', true);

        if (category && category !== 'all') {
          query = query.eq('category', category);
        }

        const { data, error } = await query.order('rating', { ascending: false });

        if (error) throw error;
        setProducts(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [category]);

  return { products, loading, error };
}

export function useArticles(category?: string) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        let query = supabase
          .from('articles')
          .select('*')
          .eq('is_published', true);

        if (category && category !== 'all') {
          query = query.eq('category', category);
        }

        const { data, error } = await query.order('published_at', { ascending: false });

        if (error) throw error;
        setArticles(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, [category]);

  return { articles, loading, error };
}

export function useFinancialInstitutions() {
  const [institutions, setInstitutions] = useState<FinancialInstitution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInstitutions() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('financial_institutions')
          .select('*')
          .eq('is_active', true)
          .order('rating', { ascending: false });

        if (error) throw error;
        setInstitutions(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchInstitutions();
  }, []);

  return { institutions, loading, error };
}