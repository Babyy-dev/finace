"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, Search, TrendingUp } from "lucide-react";

interface SearchFilters {
  loanAmount: string;
  currentRate: string;
  loanBalance: string;
  prefecture: string;
}

interface HeroSectionProps {
  searchFilters: SearchFilters;
  setSearchFilters: React.Dispatch<React.SetStateAction<SearchFilters>>;
  // setSearchFilters: (filters: SearchFilters) => void;
}

export default function HeroSection({
  searchFilters,
  setSearchFilters,
}: HeroSectionProps) {
  const { t } = useTranslation();

  const handleInputChange = (field: keyof SearchFilters, value: string) => {
    setSearchFilters((prev: SearchFilters) => {
      const newFilters: SearchFilters = { ...prev, [field]: value };
      return newFilters;
    });
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("heroTitle")}
            <span className="block text-yellow-300">{t("heroSubtitle")}</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            {t("heroDescription")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 text-gray-900">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("loanAmount")}
              </label>
              <Input
                type="number"
                placeholder={t("loanAmountPlaceholder")}
                value={searchFilters.loanAmount}
                onChange={(e) =>
                  handleInputChange("loanAmount", e.target.value)
                }
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("currentRate")}
              </label>
              <Input
                type="number"
                step="0.01"
                placeholder="1.5%"
                value={searchFilters.currentRate}
                onChange={(e) =>
                  handleInputChange("currentRate", e.target.value)
                }
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("currentBalance")}
              </label>
              <Input
                type="number"
                placeholder={t("currentBalancePlaceholder")}
                value={searchFilters.loanBalance}
                onChange={(e) =>
                  handleInputChange("loanBalance", e.target.value)
                }
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("prefecture")}
              </label>
              <Select
                onValueChange={(value) =>
                  handleInputChange("prefecture", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("selectPlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tokyo">{t("tokyo")}</SelectItem>
                  <SelectItem value="osaka">{t("osaka")}</SelectItem>
                  <SelectItem value="kanagawa">{t("kanagawa")}</SelectItem>
                  <SelectItem value="saitama">{t("saitama")}</SelectItem>
                  <SelectItem value="chiba">{t("chiba")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
            >
              <Search className="h-5 w-5 mr-2" />
              {t("searchMortgage")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
            >
              <Calculator className="h-5 w-5 mr-2" />
              {t("paymentSimulation")}
            </Button>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-yellow-300 mb-2">
              1,200+
            </div>
            <div className="text-blue-100">{t("partnerInstitutions")}</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-yellow-300 mb-2">
              50万人+
            </div>
            <div className="text-blue-100">{t("totalUsers")}</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-yellow-300 mb-2">
              {t("averageSavings")}
            </div>
            <div className="text-blue-100">{t("monthlySavings")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
