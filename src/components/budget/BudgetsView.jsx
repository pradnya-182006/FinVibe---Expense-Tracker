import React from 'react';
import BudgetOverview from './BudgetOverview';
import CategoryBudgets from './CategoryBudgets';

export default function BudgetsView() {
  return (
    <div className="space-y-6">
      {/* 1. Overall Monthly Budget Card & Alert Banners */}
      <BudgetOverview />

      {/* 2. Category-level Spending Limits Grid */}
      <CategoryBudgets />
    </div>
  );
}
