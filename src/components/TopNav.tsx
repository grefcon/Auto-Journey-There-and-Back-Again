import React from 'react';
import { CarJourney } from '../types/carJourney';
import { Car, ChevronDown, Plus, Sparkles, Layers } from 'lucide-react';
import { NAV_ITEMS } from '../utils/journeyStages';
import type { NavItemDef, TabId } from '../utils/journeyStages';

interface TopNavProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
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
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const activeJourney = journeys.find((j) => j.id === activeJourneyId) || journeys[0];

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Ordered along the journey (research -> shop -> buy -> own), not by tool name.
  const navItems = NAV_ITEMS;
  const labelFor = (item: NavItemDef) =>
    item.id === 'compare' ? `${item.label} (${journeys.length})` : item.label;

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        {/* Zone 1: Wordmark Brand */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/10">
            <Car className="w-4 h-4 stroke-[2.2]" />
          </div>
          <div>
            <span className="text-base font-bold tracking-tight text-white whitespace-nowrap">
              AutoJourney
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs text-slate-400 font-normal">
              Vehicle Purchase Planner
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-slate-800 text-amber-400 shadow-sm border border-slate-700'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                {labelFor(item)}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Journey Switcher */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Journey Switcher Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg text-xs font-medium text-slate-200 transition-colors"
            >
              <div className={`w-2 h-2 rounded-full ${activeJourney ? 'bg-emerald-400' : 'bg-slate-600'}`} />
              <span className="truncate max-w-[140px] sm:max-w-[200px]">
                {activeJourney
                  ? `${activeJourney.year} ${activeJourney.make} ${activeJourney.model}`
                  : 'No Active Car'}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-2 border-b border-slate-800 flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  <span>Saved Car Journeys ({journeys.length})</span>
                  {journeys.length > 0 && onClearAllJourneys && (
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        onClearAllJourneys();
                      }}
                      className="text-rose-400 hover:text-rose-300 text-[10px] normal-case font-medium hover:underline"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                <div className="max-h-64 overflow-y-auto divide-y divide-slate-800/50">
                  {journeys.length === 0 ? (
                    <div className="p-4 text-center text-xs text-slate-400">
                      No car journeys saved yet.
                    </div>
                  ) : (
                    journeys.map((j) => (
                      <div
                        key={j.id}
                        className={`w-full px-3 py-2.5 flex items-center justify-between text-xs hover:bg-slate-800 transition-colors group ${
                          j.id === activeJourneyId ? 'bg-slate-800/80 text-amber-300 font-semibold' : 'text-slate-200'
                        }`}
                      >
                        <div
                          onClick={() => {
                            onSelectJourney(j.id);
                            setDropdownOpen(false);
                          }}
                          className="truncate pr-2 flex-1 cursor-pointer"
                        >
                          <div className="font-medium text-white truncate flex items-center gap-1.5">
                            <span>{j.year} {j.make} {j.model}</span>
                            {j.engine && (
                              <span className="text-[10px] text-slate-400 font-normal">
                                ({j.displacement || j.engine})
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400 truncate">
                            {j.trim} · ${j.targetBudget.toLocaleString()} · {j.drivetrain || 'FWD'}
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 whitespace-nowrap">
                            {j.stage}
                          </span>
                          {onDeleteJourney && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onDeleteJourney(j.id);
                              }}
                              className="p-1 text-slate-500 hover:text-rose-400 transition-colors opacity-70 group-hover:opacity-100"
                              title="Delete this journey"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="p-2 border-t border-slate-800 bg-slate-950/60 space-y-1">
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      onOpenNewModal();
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-1.5 text-xs text-amber-400 hover:text-amber-300 hover:bg-slate-800 rounded font-medium transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add Another Car Journey
                  </button>

                  {onResetDefaults && (
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        onResetDefaults();
                      }}
                      className="w-full text-center text-[11px] text-slate-500 hover:text-slate-300 py-1 transition-colors"
                    >
                      Restore Default Sample Cars
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* New Journey CTA */}
          <button
            onClick={onOpenNewModal}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span className="hidden sm:inline">New Car Journey</span>
            <span className="sm:hidden">New Car</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Strip */}
      <div className="lg:hidden border-t border-slate-800/80 bg-slate-950/70 overflow-x-auto px-4 py-2 flex items-center gap-1 scrollbar-none">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-slate-800 text-amber-400 border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {labelFor(item)}
            </button>
          );
        })}
      </div>
    </header>
  );
};
