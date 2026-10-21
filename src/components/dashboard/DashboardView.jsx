import React from 'react';
import SummaryCards from './SummaryCards';
import ChartsSection from './ChartsSection';
import RecentTransactions from './RecentTransactions';

export default function DashboardView() {
  return (
    <div className="space-y-6">
      {/* 1. Summary Cards */}
      <SummaryCards />

      {/* 2. Charts Section */}
      <ChartsSection />

      {/* 3. Recent Transactions */}
      <RecentTransactions />
    </div>
  );
}
