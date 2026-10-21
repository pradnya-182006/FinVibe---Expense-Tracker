import React from 'react';
import {
  LayoutDashboard,
  ArrowLeftRight,
  Target,
  BarChart3,
  Settings,
  Plus,
  Sparkles,
  Wallet,
} from 'lucide-react';
import { useFinance } from '../../context/FinanceContext';
import { formatCurrency } from '../../utils/formatters';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'transactions', label: 'Transactions', icon: ArrowLeftRight },
  { id: 'budgets', label: 'Budgets', icon: Target },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  const { activeTab, setActiveTab, openAddModal, metrics, currency } = useFinance();

  return (
    <aside className="hidden lg:flex lg:flex-col w-64 bg-white border-r border-slate-200/80 min-h-screen p-5 shrink-0 select-none">
      {/* Brand Header */}
      <div className="flex items-center space-x-3 px-2 py-1 mb-8">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
          <Wallet className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center space-x-1.5">
            <span className="font-bold text-lg text-slate-900 tracking-tight">FinVibe</span>
            <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full uppercase">
              Pro
            </span>
          </div>
          <p className="text-xs text-slate-400 font-medium">Smart Finance Tracker</p>
        </div>
      </div>

      {/* Main Navigation Links */}
      <nav className="space-y-1.5 flex-1" aria-label="Main Navigation">
        <p className="text-[11px] font-semibold uppercase text-slate-400 tracking-wider px-3 mb-2">
          Menu
        </p>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-emerald-50 text-emerald-700 font-semibold shadow-sm border border-emerald-100/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Icon
                className={`w-4 h-4 transition-colors ${
                  isActive ? 'text-emerald-600' : 'text-slate-400'
                }`}
              />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Quick Action Button */}
      <div className="my-4">
        <button
          onClick={openAddModal}
          className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-xl shadow-md shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" />
          <span>Add Transaction</span>
        </button>
      </div>

      {/* Mini Wallet Snapshot Card */}
      <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-100/80">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-slate-500">Net Balance</span>
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
        </div>
        <p className="text-lg font-bold text-slate-900 tracking-tight">
          {formatCurrency(metrics.netBalance, currency)}
        </p>
        <p className="text-[11px] text-slate-400 mt-1">Across all accounts & cash</p>
      </div>
    </aside>
  );
}
