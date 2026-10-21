import React from 'react';
import {
  LayoutDashboard,
  ArrowLeftRight,
  Target,
  BarChart3,
  Settings,
  X,
  Wallet,
  Plus,
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

export default function MobileNav({ isOpen, onClose }) {
  const { activeTab, setActiveTab, openAddModal, metrics, currency } = useFinance();

  return (
    <>
      {/* Mobile Drawer (Slide in) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
            onClick={onClose}
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col z-10 animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                  <Wallet className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-base text-slate-900">FinVibe</span>
                  <p className="text-[11px] text-slate-400">Expense Tracker</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav list */}
            <nav className="space-y-1 flex-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      onClose();
                    }}
                    className={`w-full flex items-center space-x-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 font-semibold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`}
                    />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Action button & Mini stats */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  onClose();
                  openAddModal();
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-emerald-600 text-white font-medium text-sm rounded-xl shadow-md shadow-emerald-500/20"
              >
                <Plus className="w-4 h-4" />
                <span>Add Transaction</span>
              </button>

              <div className="bg-slate-50 p-3 rounded-xl text-center">
                <p className="text-xs text-slate-500">Net Balance</p>
                <p className="text-base font-bold text-slate-900 mt-0.5">
                  {formatCurrency(metrics.netBalance, currency)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-2 py-1.5 z-40 flex items-center justify-around shadow-lg">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg text-[10px] font-medium transition-colors ${
                isActive ? 'text-emerald-600 font-semibold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
