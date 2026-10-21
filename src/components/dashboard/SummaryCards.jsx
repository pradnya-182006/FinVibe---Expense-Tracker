import React from 'react';
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Target,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react';
import { useFinance } from '../../context/FinanceContext';
import { formatCurrency, formatMonthYear } from '../../utils/formatters';

export default function SummaryCards() {
  const { metrics, currency, selectedMonth } = useFinance();

  const isBudgetExceeded = metrics.remainingMonthlyBudget < 0;
  const isBudgetWarning =
    !isBudgetExceeded && metrics.budgetUsedPercentage >= 80;

  const monthLabel =
    selectedMonth === 'all' ? 'All Time' : formatMonthYear(selectedMonth);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {/* 1. Total Balance */}
      <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-soft hover:shadow-soft-lg transition-all relative overflow-hidden group">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Total Balance
          </span>
          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
            <Wallet className="w-5 h-5" />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {formatCurrency(metrics.netBalance, currency)}
          </p>
          <div className="flex items-center text-xs text-slate-500">
            <span className="font-medium text-slate-600">Net available</span>
            <span className="mx-1.5 text-slate-300">•</span>
            <span>Incl. opening balance</span>
          </div>
        </div>
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-slate-50 rounded-full opacity-40 pointer-events-none group-hover:scale-110 transition-transform" />
      </div>

      {/* 2. Total Income */}
      <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-soft hover:shadow-soft-lg transition-all relative overflow-hidden group">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Total Income
          </span>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight">
            +{formatCurrency(metrics.periodIncome, currency)}
          </p>
          <div className="flex items-center text-xs text-emerald-600 font-medium">
            <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-100 text-[11px]">
              {monthLabel}
            </span>
          </div>
        </div>
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-50/50 rounded-full opacity-60 pointer-events-none group-hover:scale-110 transition-transform" />
      </div>

      {/* 3. Total Expenses */}
      <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-soft hover:shadow-soft-lg transition-all relative overflow-hidden group">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Total Expenses
          </span>
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
            <TrendingDown className="w-5 h-5" />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-2xl sm:text-3xl font-extrabold text-rose-600 tracking-tight">
            -{formatCurrency(metrics.periodExpenses, currency)}
          </p>
          <div className="flex items-center text-xs text-rose-600 font-medium">
            <span className="bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full border border-rose-100 text-[11px]">
              {monthLabel}
            </span>
          </div>
        </div>
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-rose-50/50 rounded-full opacity-60 pointer-events-none group-hover:scale-110 transition-transform" />
      </div>

      {/* 4. Remaining Monthly Budget */}
      <div
        className={`rounded-2xl p-5 border transition-all relative overflow-hidden group ${
          isBudgetExceeded
            ? 'bg-rose-50/70 border-rose-200 shadow-soft'
            : isBudgetWarning
            ? 'bg-amber-50/70 border-amber-200 shadow-soft'
            : 'bg-white border-slate-100 shadow-soft hover:shadow-soft-lg'
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Remaining Budget
          </span>
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              isBudgetExceeded
                ? 'bg-rose-200 text-rose-700'
                : isBudgetWarning
                ? 'bg-amber-200 text-amber-700'
                : 'bg-slate-100 text-slate-700'
            }`}
          >
            {isBudgetExceeded ? (
              <AlertTriangle className="w-5 h-5" />
            ) : isBudgetWarning ? (
              <AlertTriangle className="w-5 h-5" />
            ) : (
              <Target className="w-5 h-5" />
            )}
          </div>
        </div>
        <div className="space-y-1">
          <p
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              isBudgetExceeded
                ? 'text-rose-700'
                : isBudgetWarning
                ? 'text-amber-700'
                : 'text-slate-900'
            }`}
          >
            {formatCurrency(metrics.remainingMonthlyBudget, currency)}
          </p>
          <div className="flex items-center text-xs">
            {isBudgetExceeded ? (
              <span className="font-bold text-rose-700">Over budget by {formatCurrency(Math.abs(metrics.remainingMonthlyBudget), currency)}</span>
            ) : isBudgetWarning ? (
              <span className="font-semibold text-amber-700">{metrics.budgetUsedPercentage.toFixed(0)}% budget used</span>
            ) : (
              <span className="text-slate-500 font-medium">{metrics.budgetUsedPercentage.toFixed(0)}% used of budget</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
