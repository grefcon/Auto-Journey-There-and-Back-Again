import React, { useState, useEffect, useRef } from 'react';
import { CarJourney } from '../types/carJourney';
import { Car, ChevronDown, Plus, Trash2, RotateCcw } from 'lucide-react';

interface TopNavProps {
  activeTab: 'reliability' | 'deals' | 'inventory' | 'tco' | 'compare';
  setActiveTab: (tab: 'reliability' | 'deals' | 'inventory' | 'tco' | 'compare') => void;
  journeys: CarJourney[];
  activeJourneyId: string;
  onSelectJourney: (id: string) => void;
  onOpenNewModal: () => void;
  onDeleteJourney?: (id: string) => void;
  onClearAllJourneys?: () => void;
  onResetDefaults?: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  activeTab,
  setActiveTab,
  journeys,
  activeJourneyId,
  onSelectJourney,
  onOpenNewModal,
  onDeleteJourney,
  onClearAllJourneys,
  onResetDefaults,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeJourney = journeys.find((j) => j.id === activeJourneyId) || journeys[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'reliability', label: 'Issues & Risks' },
    { id: 'deals', label: 'Deals & Quotes' },
    { id: 'inventory', label: 'Market & Inventory' },
    { id: 'tco', label: 'Ownership Cost' },
    { id: 'compare', label: `Compare (${journeys.length})` },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        {/* Wordmark Brand */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-sm">
            <Car className="w-4 h-4 stroke-[2.2]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold tracking-tight text-white">
              AutoJourney
            </span>
            <span className="hidden sm:inline-block text-xs text-slate-400 font-normal">
              Buyer Intelligence
            </span>
          </div>
        </div>

        {/* Primary Segmented Navigation */}
        <nav className="hidden lg:flex items-center p-1 bg-slate-900/80 border border-slate-800 rounded-lg">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-slate-800 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Vehicle Switcher & New Journey */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Active Vehicle Switcher */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 rounded-lg text-xs font-medium text-slate-200 transition-colors"
            >
              <span className="truncate max-w-[140px] sm:max-w-[180px]">
                {activeJourney
                  ? `${activeJourney.year} ${activeJourney.make} ${activeJourney.model}`
                  : 'Select Vehicle'}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-76 bg-slate-900 border border-slate-800 rounded-xl shadow-xl py-1 z-50 animate-in fade-in duration-100">
                <div className="px-3 py-2 border-b border-slate-800/80 flex items-center justify-between text-[11px] font-medium text-slate-400">
                  <span>Vehicles ({journeys.length})</span>
                  {journeys.length > 0 && onClearAllJourneys && (
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        onClearAllJourneys();
                      }}
                      className="text-rose-400 hover:text-rose-300 text-[10px] transition-colors"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                <div className="max-h-60 overflow-y-auto divide-y divide-slate-800/40">
                  {journeys.length === 0 ? (
                    <div className="p-4 text-center text-xs text-slate-400">
                      No vehicles configured yet.
                    </div>
                  ) : (
                    journeys.map((j) => (
                      <div
                        key={j.id}
                        className={`w-full px-3 py-2.5 flex items-center justify-between text-xs hover:bg-slate-850 transition-colors group cursor-pointer ${
                          j.id === activeJourneyId ? 'bg-slate-800/60 font-medium' : 'text-slate-300'
                        }`}
                        onClick={() => {
                          onSelectJourney(j.id);
                          setDropdownOpen(false);
                        }}
                      >
                        <div className="truncate pr-2 min-w-0">
                          <div className="text-white truncate">
                            {j.year} {j.make} {j.model}
                          </div>
                          <div className="text-[11px] text-slate-400 truncate">
                            {j.trim} · ${j.targetBudget.toLocaleString()}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[10px] text-slate-400 font-mono">
                            {j.stage}
                          </span>
                          {onDeleteJourney && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onDeleteJourney(j.id);
                              }}
                              className="text-slate-500 hover:text-rose-400 p-0.5 transition-colors opacity-0 group-hover:opacity-100"
                              title="Delete vehicle"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="p-2 border-t border-slate-800/80 bg-slate-950/40 space-y-1">
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      onOpenNewModal();
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-1.5 text-xs text-amber-400 hover:text-amber-300 hover:bg-slate-800 rounded-md font-medium transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add Another Vehicle
                  </button>

                  {onResetDefaults && (
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        onResetDefaults();
                      }}
                      className="w-full text-center text-[11px] text-slate-400 hover:text-slate-200 py-1 transition-colors flex items-center justify-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" /> Restore defaults
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* New Vehicle Primary Button */}
          <button
            onClick={onOpenNewModal}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold rounded-lg shadow-xs transition-colors whitespace-nowrap"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.2]" />
            <span>New Journey</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Strip */}
      <div className="lg:hidden border-t border-slate-800/60 bg-slate-950 overflow-x-auto px-4 py-2 flex items-center gap-1 scrollbar-none">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
