'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Calculator, TrendingUp, FileText, BarChart3, Home } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function MobileMenu() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/search', label: t('mortgageSearch'), icon: Calculator },
    { href: '/comparison', label: t('comparison'), icon: TrendingUp },
    { href: '/news', label: t('news'), icon: FileText },
    { href: '/about', label: t('about'), icon: BarChart3 },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="md:hidden p-2">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 sm:w-96">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg md:text-xl font-bold text-blue-600">{t('brandName')}</h2>
            <LanguageSwitcher />
          </div>
          
          <nav className="flex-1">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      isActive
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
          
          <div className="border-t pt-4">
            <div className="space-y-2 text-sm text-gray-600">
              <p>© 2024 {t('brandName')}</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}