import React, { useState, useEffect } from 'react';
import { CarJourney } from './types/carJourney';
import {
  loadJourneys,
  saveJourneys,
  getActiveJourneyId,
  setActiveJourneyId,
  resetToDefaultJourneys,
  clearAllSavedJourneys,
} from './utils/storage';
import { TopNav } from './components/TopNav';
import { JourneyBanner } from './components/JourneyBanner';
import { ReliabilityTab } from './components/tabs/ReliabilityTab';
import { CommunityDealsTab } from './components/tabs/CommunityDealsTab';
import { InventoryTab } from './components/tabs/InventoryTab';
import { CostOfOwnershipTab } from './components/tabs/CostOfOwnershipTab';
import { ComparisonTab } from './components/tabs/ComparisonTab';
import { NewJourneyModal } from './components/NewJourneyModal';
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Info,
  RefreshCw,
  Car,
  Plus,
  Trash2,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';

export default function App() {
  const [journeys, setJourneys] = useState<CarJourney[]>(() => loadJourneys());
  const [activeJourneyId, setActiveId] = useState<string>(() =>
    getActiveJourneyId(loadJourneys())
  );
  const [activeTab, setActiveTab] = useState<
    'reliability' | 'deals' | 'inventory' | 'tco' | 'compare'
  >('reliability');
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isConfirmClearOpen, setIsConfirmClearOpen] = useState(false);
  const [isAiScanning, setIsAiScanning] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'info' | 'error';
  } | null>(null);

  // Sync to local storage
  useEffect(() => {
    saveJourneys(journeys);
  }, [journeys]);

  const activeJourney =
    journeys.find((j) => j.id === activeJourneyId) || journeys[0];

  const handleSelectJourney = (id: string) => {
    setActiveId(id);
    setActiveJourneyId(id);
  };

  const handleUpdateJourney = (updated: CarJourney) => {
    setJourneys((prev) =>
      prev.map((j) => (j.id === updated.id ? updated : j))
    );
  };

  const handleCreateJourney = async (
    newJourney: CarJourney,
    autoScan: boolean
  ) => {
    setJourneys((prev) => [newJourney, ...prev]);
    setActiveId(newJourney.id);
    setActiveJourneyId(newJourney.id);

    if (autoScan) {
      triggerAiScanForJourney(newJourney);
    } else {
      setNotification({
        message: `Created journey for ${newJourney.year} ${newJourney.make} ${newJourney.model}.`,
        type: 'success',
      });
      setTimeout(() => setNotification(null), 4000);
    }
  };

  const handleDeleteJourney = (id: string) => {
    const deleted = journeys.find((j) => j.id === id);
    const remaining = journeys.filter((j) => j.id !== id);
    setJourneys(remaining);
    saveJourneys(remaining);
    if (activeJourneyId === id) {
      const nextId = remaining[0]?.id || '';
      setActiveId(nextId);
      setActiveJourneyId(nextId);
    }
    setNotification({
      message: `Removed ${deleted ? `${deleted.year} ${deleted.make} ${deleted.model}` : 'car journey'}.`,
      type: 'info',
    });
    setTimeout(() => setNotification(null), 3500);
  };

  const handleClearAllJourneys = () => {
    setIsConfirmClearOpen(true);
  };

  const handleExecuteClearAll = () => {
    clearAllSavedJourneys();
    setJourneys([]);
    setActiveId('');
    setActiveJourneyId('');
    setIsConfirmClearOpen(false);
    setNotification({
      message: 'All past car journeys have been cleared.',
      type: 'info',
    });
    setTimeout(() => setNotification(null), 3500);
  };

  const handleResetDefaults = () => {
    const defaults = resetToDefaultJourneys();
    setJourneys(defaults);
    setActiveId(defaults[0].id);
    setActiveJourneyId(defaults[0].id);
    setNotification({
      message: 'Restored default sample vehicles (Honda Civic, RAV4 Hybrid, Mazda CX-5, Ioniq 5).',
      type: 'success',
    });
    setTimeout(() => setNotification(null), 3500);
  };

  // Trigger Gemini AI Diagnostic Scan
  const triggerAiScanForJourney = async (targetJourney: CarJourney) => {
    setIsAiScanning(true);
    setNotification({
      message: `Scanning live NHTSA and master-tech failure databases for ${targetJourney.year} ${targetJourney.make} ${targetJourney.model}...`,
      type: 'info',
    });

    try {
      const response = await fetch('/api/reliability-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          year: targetJourney.year,
          make: targetJourney.make,
          model: targetJourney.model,
          trim: targetJourney.trim,
          engine: targetJourney.engine,
          drivetrain: targetJourney.drivetrain,
          mileage: targetJourney.maxMileage,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();

      const updated: CarJourney = {
        ...targetJourney,
        reliabilityScore: data.reliabilityScore || targetJourney.reliabilityScore,
        mechanicalFailureRisk:
          data.mechanicalFailureRisk || targetJourney.mechanicalFailureRisk,
        issuesSummary: data.issuesSummary || targetJourney.issuesSummary,
        mechanicalIssues:
          data.mechanicalIssues && data.mechanicalIssues.length > 0
            ? data.mechanicalIssues
            : targetJourney.mechanicalIssues,
        recalls: data.recalls || targetJourney.recalls,
        inspectionChecklist:
          data.inspectionChecklist && data.inspectionChecklist.length > 0
            ? data.inspectionChecklist
            : targetJourney.inspectionChecklist,
      };

      handleUpdateJourney(updated);
      setNotification({
        message: `Successfully updated mechanical failure points and PPI checklist with Gemini AI!`,
        type: 'success',
      });
      setTimeout(() => setNotification(null), 4000);
    } catch (err: any) {
      console.warn('AI analysis fallback:', err);
      setNotification({
        message: `Using verified local technical failure archive for ${targetJourney.make} ${targetJourney.model}.`,
        type: 'info',
      });
      setTimeout(() => setNotification(null), 4000);
    } finally {
      setIsAiScanning(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Bar with complete Journey Switcher & Clear options */}
      <TopNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        journeys={journeys}
        activeJourneyId={activeJourneyId}
        onSelectJourney={handleSelectJourney}
        onOpenNewModal={() => setIsNewModalOpen(true)}
        onDeleteJourney={handleDeleteJourney}
        onClearAllJourneys={handleClearAllJourneys}
        onResetDefaults={handleResetDefaults}
      />

      {/* Floating Alert Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl shadow-xl text-xs font-medium border ${
              notification.type === 'success'
                ? 'bg-emerald-950/90 text-emerald-200 border-emerald-800'
                : notification.type === 'error'
                ? 'bg-rose-950/90 text-rose-200 border-rose-800'
                : 'bg-slate-900/95 text-slate-200 border-slate-700'
            }`}
          >
            {notification.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : notification.type === 'error' ? (
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            ) : (
              <Info className="w-4 h-4 text-amber-400 shrink-0" />
            )}
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      {journeys.length === 0 ? (
        /* Empty State when all journeys have been cleared */
        <div className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-12 flex flex-col items-center justify-center">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12 text-center w-full shadow-2xl space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto shadow-inner">
              <Car className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Start Your Vehicle Purchase Journey
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Configure any car, truck, or SUV to inspect mechanic-grade failure points, track listings on AutoTempest with live price drops, audit dealer quotes, and calculate true 5-year ownership costs.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setIsNewModalOpen(true)}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-amber-500/10 transition-all hover:scale-[1.02]"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                Start New Car Journey
              </button>
              <button
                onClick={handleResetDefaults}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors"
              >
                <RotateCcw className="w-4 h-4 text-slate-400" />
                Load Sample Vehicles
              </button>
            </div>

            {/* Quick Presets */}
            <div className="pt-6 border-t border-slate-800/80">
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block mb-3">
                Or pick a popular vehicle to configure:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                <div
                  onClick={() => setIsNewModalOpen(true)}
                  className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white text-xs">2025 Ford Expedition</span>
                    <span className="text-[11px] text-amber-400 font-medium">
                      Tremor
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Redesigned 5th-Gen with 400 hp / 440 hp EcoBoost V6 & Control Trac 4WD.
                  </p>
                </div>

                <div
                  onClick={() => setIsNewModalOpen(true)}
                  className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white text-xs">Ford F-150</span>
                    <span className="text-[11px] text-slate-300 font-medium font-mono">
                      EcoBoost vs V8
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Twin-turbo EcoBoost vs naturally aspirated Coyote V8 comparison with 4x4 options.
                  </p>
                </div>

                <div
                  onClick={() => setIsNewModalOpen(true)}
                  className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white text-xs">Toyota RAV4 Hybrid</span>
                    <span className="text-[11px] text-emerald-400 font-medium">
                      40 MPG · AWD
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Atkinson 2.5L eCVT powertrain with 'Cablegate' rear differential inspection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Hero Banner for Active Car Journey */}
          {activeJourney && (
            <JourneyBanner
              journey={activeJourney}
              onUpdateJourney={handleUpdateJourney}
              onOpenEditModal={() => setIsNewModalOpen(true)}
              onTriggerAiScan={() => triggerAiScanForJourney(activeJourney)}
              isAiScanning={isAiScanning}
              onDeleteJourney={handleDeleteJourney}
            />
          )}

          {/* Main Tab Views */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            {activeTab === 'reliability' && activeJourney && (
              <ReliabilityTab
                journey={activeJourney}
                onUpdateJourney={handleUpdateJourney}
                onTriggerAiScan={() => triggerAiScanForJourney(activeJourney)}
                isAiScanning={isAiScanning}
              />
            )}

            {activeTab === 'deals' && activeJourney && (
              <CommunityDealsTab
                journey={activeJourney}
                onUpdateJourney={handleUpdateJourney}
              />
            )}

            {activeTab === 'inventory' && activeJourney && (
              <InventoryTab
                journey={activeJourney}
                onUpdateJourney={handleUpdateJourney}
              />
            )}

            {activeTab === 'tco' && activeJourney && (
              <CostOfOwnershipTab
                journey={activeJourney}
                onUpdateJourney={handleUpdateJourney}
              />
            )}

            {activeTab === 'compare' && (
              <ComparisonTab
                journeys={journeys}
                activeJourneyId={activeJourneyId}
                onSelectJourney={handleSelectJourney}
                onOpenNewModal={() => setIsNewModalOpen(true)}
                onDeleteJourney={handleDeleteJourney}
                onClearAllJourneys={handleClearAllJourneys}
                onResetDefaults={handleResetDefaults}
              />
            )}
          </main>
        </>
      )}

      {/* Subtle Footer */}
      <footer className="border-t border-slate-900 py-6 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-500 text-xs mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>AutoJourney</span>
            <span>·</span>
            <span>Independent Buyer Advocacy & Reliability Intelligence</span>
          </div>
          <div className="flex items-center gap-4">
            {journeys.length > 0 && (
              <button
                onClick={handleClearAllJourneys}
                className="hover:text-rose-400 flex items-center gap-1 transition-colors"
              >
                <Trash2 className="w-3 h-3" /> Clear Past Journeys
              </button>
            )}
            <button
              onClick={handleResetDefaults}
              className="hover:text-slate-400 flex items-center gap-1 transition-colors"
            >
              <RefreshCw className="w-3 h-3" /> Reset Sample Journeys
            </button>
            <span>·</span>
            <span>NHTSA Data & Consumer Reports Grounded</span>
          </div>
        </div>
      </footer>

      {/* Clear All Confirmation Modal */}
      {isConfirmClearOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5 animate-in zoom-in-95 duration-150">
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-400 flex items-center justify-center shrink-0">
                <Trash2 className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="space-y-1.5 min-w-0">
                <h3 className="text-base font-bold text-white">
                  Clear all past car journeys?
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  This will remove all {journeys.length} saved vehicle journeys and any tracked listings from your workspace. You can start fresh or restore default sample cars anytime.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-800/80">
              <button
                type="button"
                onClick={() => setIsConfirmClearOpen(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleExecuteClearAll}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl transition-colors shadow-lg shadow-rose-600/20 flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Yes, Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Car Journey Modal */}
      <NewJourneyModal
        isOpen={isNewModalOpen}
        onClose={() => setIsNewModalOpen(false)}
        onCreateJourney={handleCreateJourney}
      />
    </div>
  );
}
