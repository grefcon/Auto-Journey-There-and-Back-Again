import React, { useState } from 'react';
import { CarJourney, OwnershipCostInputs } from '../../types/carJourney';
import { calculateTCO } from '../../utils/tcoCalculator';
import {
  DollarSign,
  TrendingDown,
  Gauge,
  Shield,
  Wrench,
  Fuel,
  CreditCard,
  FileText,
  AlertTriangle,
  RotateCcw,
} from 'lucide-react';

interface CostOfOwnershipTabProps {
  journey: CarJourney;
  onUpdateJourney: (updated: CarJourney) => void;
}

export const CostOfOwnershipTab: React.FC<CostOfOwnershipTabProps> = ({
  journey,
  onUpdateJourney,
}) => {
  const [inputs, setInputs] = useState<OwnershipCostInputs>(journey.tcoInputs);

  const handleInputChange = (field: keyof OwnershipCostInputs, value: any) => {
    const updated = {
      ...inputs,
      [field]: value,
    };
    setInputs(updated);
    onUpdateJourney({
      ...journey,
      tcoInputs: updated,
    });
  };

  const tco = calculateTCO(
    journey.marketFairAverage,
    inputs,
    journey.reliabilityScore,
    journey.mechanicalFailureRisk
  );

  const costCategories = [
    {
      label: 'Vehicle Depreciation',
      amount: tco.depreciationTotal,
      color: 'bg-indigo-500',
      textColor: 'text-indigo-400',
      icon: TrendingDown,
      desc: 'Estimated loss in vehicle market value over ownership period',
    },
    {
      label: 'Financing Interest',
      amount: tco.financingTotal,
      color: 'bg-rose-500',
      textColor: 'text-rose-400',
      icon: CreditCard,
      desc: 'Loan finance charges based on APR and term length',
    },
    {
      label: inputs.fuelType === 'electric' ? 'Electricity Charging' : 'Fuel / Gasoline',
      amount: tco.fuelTotal,
      color: 'bg-amber-500',
      textColor: 'text-amber-400',
      icon: Fuel,
      desc: `Based on ${inputs.annualMiles.toLocaleString()} miles/yr at ${inputs.efficiency} ${inputs.fuelType === 'electric' ? 'mi/kWh' : 'MPG'}`,
    },
    {
      label: 'Auto Insurance',
      amount: tco.insuranceTotal,
      color: 'bg-cyan-500',
      textColor: 'text-cyan-400',
      icon: Shield,
      desc: `Comprehensive & collision coverage (~$${inputs.insurancePerMonth}/mo)`,
    },
    {
      label: 'Routine Maintenance',
      amount: tco.maintenanceTotal,
      color: 'bg-emerald-500',
      textColor: 'text-emerald-400',
      icon: Wrench,
      desc: 'Oil changes, tire rotations, brake pads, cabin filters',
    },
    {
      label: 'Anticipated Repair Reserve',
      amount: tco.anticipatedRepairsTotal,
      color: 'bg-orange-500',
      textColor: 'text-orange-400',
      icon: AlertTriangle,
      desc: `Tied to ${journey.mechanicalFailureRisk} mechanical failure risk score`,
    },
    {
      label: 'Taxes & Registration Fees',
      amount: tco.taxesAndFeesTotal,
      color: 'bg-slate-500',
      textColor: 'text-slate-400',
      icon: FileText,
      desc: `State sales tax (${inputs.salesTaxRate}%) + annual DMV fees`,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Overview TCO Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-amber-400 tracking-wide uppercase">
                Total Cost of Ownership (TCO) Model
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-slate-400">
                {inputs.yearsOwned}-Year Projected Ownership Cost
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {journey.year} {journey.make} {journey.model} {journey.trim}
            </h2>
          </div>

          <div className="flex items-baseline gap-3 bg-slate-950 p-3 rounded-lg border border-slate-800">
            <div>
              <div className="text-[10px] text-slate-400 uppercase">Monthly True Cost</div>
              <div className="text-2xl font-extrabold text-amber-400 font-mono tabular-nums">
                ${tco.monthlyCost.toLocaleString()}
                <span className="text-xs text-slate-400 font-normal"> / mo</span>
              </div>
            </div>
            <div className="border-l border-slate-800 pl-3">
              <div className="text-[10px] text-slate-400 uppercase">Cost Per Mile</div>
              <div className="text-lg font-bold text-white font-mono tabular-nums">
                ${tco.costPerMile}
                <span className="text-xs text-slate-400 font-normal"> / mi</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Year Total Sum Banner */}
        <div className="mt-5 p-4 bg-slate-950/70 rounded-xl border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs text-slate-400">5-Year All-In Total Outlay:</span>
            <div className="text-3xl font-extrabold text-white font-mono tabular-nums mt-0.5">
              ${tco.totalCost.toLocaleString()}
            </div>
          </div>
          <div className="text-xs text-slate-400 sm:text-right">
            Purchase basis: <strong className="text-slate-200">${journey.marketFairAverage.toLocaleString()}</strong>
            <br />
            Includes depreciation, gas, financing, insurance & repairs
          </div>
        </div>

        {/* Visual Stacked Bar */}
        <div className="mt-6 space-y-2">
          <div className="h-4 w-full bg-slate-950 rounded-full overflow-hidden flex shadow-inner">
            {costCategories.map((cat, idx) => {
              const pct = (cat.amount / tco.totalCost) * 100;
              return (
                <div
                  key={idx}
                  style={{ width: `${pct}%` }}
                  className={`${cat.color} h-full transition-all duration-300 relative group`}
                  title={`${cat.label}: $${cat.amount.toLocaleString()} (${pct.toFixed(1)}%)`}
                />
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-400 pt-1">
            {costCategories.map((cat, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full ${cat.color}`} />
                <span>{cat.label}</span>
                <span className="text-slate-300 font-mono font-medium">
                  (${Math.round(cat.amount / 1000)}k)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Two-Column Grid: Interactive Parameter Sliders (Left 6 cols) & Breakdown Cards (Right 6 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT COLUMN: Interactive Parameter Sliders */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Gauge className="w-4 h-4 text-amber-400" />
              Customize Ownership Parameters
            </h3>
            <span className="text-[11px] text-slate-400">Live recalculation</span>
          </div>

          <div className="space-y-4 text-xs">
            {/* Annual Miles */}
            <div className="space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-300">Annual Driving Mileage</span>
                <span className="font-mono text-amber-400 font-bold tabular-nums">
                  {inputs.annualMiles.toLocaleString()} miles / yr
                </span>
              </div>
              <input
                type="range"
                min={5000}
                max={30000}
                step={1000}
                value={inputs.annualMiles}
                onChange={(e) => handleInputChange('annualMiles', Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Down Payment & Financing */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-slate-400 block mb-1">Down Payment ($)</label>
                <input
                  type="number"
                  value={inputs.downPayment}
                  onChange={(e) => handleInputChange('downPayment', Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Loan Interest Rate (APR %)</label>
                <input
                  type="number"
                  step="0.1"
                  value={inputs.interestRate}
                  onChange={(e) => handleInputChange('interestRate', Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-400 block mb-1">Loan Term</label>
                <select
                  value={inputs.loanTermMonths}
                  onChange={(e) => handleInputChange('loanTermMonths', Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white"
                >
                  <option value={36}>36 Months (3 Years)</option>
                  <option value={48}>48 Months (4 Years)</option>
                  <option value={60}>60 Months (5 Years)</option>
                  <option value={72}>72 Months (6 Years)</option>
                </select>
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Years Owned</label>
                <select
                  value={inputs.yearsOwned}
                  onChange={(e) => handleInputChange('yearsOwned', Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white"
                >
                  <option value={3}>3 Years</option>
                  <option value={5}>5 Years (Standard)</option>
                  <option value={7}>7 Years</option>
                </select>
              </div>
            </div>

            {/* Fuel / Energy */}
            <div className="pt-2 border-t border-slate-800/80 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block mb-1">
                    {inputs.fuelType === 'electric' ? 'Electricity Rate ($/kWh)' : 'Fuel Price ($/gal)'}
                  </label>
                  <input
                    type="number"
                    step="0.05"
                    value={inputs.fuelCostPerUnit}
                    onChange={(e) => handleInputChange('fuelCostPerUnit', Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">
                    Efficiency ({inputs.fuelType === 'electric' ? 'mi/kWh' : 'Combined MPG'})
                  </label>
                  <input
                    type="number"
                    value={inputs.efficiency}
                    onChange={(e) => handleInputChange('efficiency', Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Insurance & Maintenance */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-slate-400 block mb-1">Monthly Insurance ($)</label>
                <input
                  type="number"
                  value={inputs.insurancePerMonth}
                  onChange={(e) => handleInputChange('insurancePerMonth', Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                />
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Routine Service ($/yr)</label>
                <input
                  type="number"
                  value={inputs.annualMaintenanceRoutine}
                  onChange={(e) => handleInputChange('annualMaintenanceRoutine', Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Cost Breakdown Itemization */}
        <div className="lg:col-span-6 space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center justify-between">
            <span>Detailed Cost Component Itemization</span>
            <span className="text-xs text-slate-400 font-normal">5-Year Sum</span>
          </h3>

          <div className="space-y-2.5">
            {costCategories.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex items-start justify-between gap-3 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className={`w-4 h-4 ${item.textColor}`} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.label}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-sm font-bold text-white font-mono tabular-nums">
                      ${item.amount.toLocaleString()}
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      ${Math.round(item.amount / (inputs.yearsOwned * 12))}/mo
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION: YEAR-BY-YEAR CASH FLOW SCHEDULE */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-4">
        <h3 className="text-base font-bold text-white">Year-by-Year Projected Cash Outlay</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="text-[11px] uppercase tracking-wider text-slate-400 bg-slate-950 border-b border-slate-800">
              <tr>
                <th className="py-2.5 px-3 font-semibold">Year</th>
                <th className="py-2.5 px-3 font-semibold text-right">Depreciation</th>
                <th className="py-2.5 px-3 font-semibold text-right">Loan Interest</th>
                <th className="py-2.5 px-3 font-semibold text-right">Fuel / Energy</th>
                <th className="py-2.5 px-3 font-semibold text-right">Insurance</th>
                <th className="py-2.5 px-3 font-semibold text-right">Maintenance & Repairs</th>
                <th className="py-2.5 px-3 font-semibold text-right text-amber-400">Total Year Outlay</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono tabular-nums">
              {tco.yearlyCashFlow.map((row) => (
                <tr key={row.year} className="hover:bg-slate-950/40 transition-colors">
                  <td className="py-2.5 px-3 font-bold text-white font-sans">Year {row.year}</td>
                  <td className="py-2.5 px-3 text-right text-slate-300">${row.depreciation.toLocaleString()}</td>
                  <td className="py-2.5 px-3 text-right text-slate-300">${row.financing.toLocaleString()}</td>
                  <td className="py-2.5 px-3 text-right text-slate-300">${row.fuel.toLocaleString()}</td>
                  <td className="py-2.5 px-3 text-right text-slate-300">${row.insurance.toLocaleString()}</td>
                  <td className="py-2.5 px-3 text-right text-orange-400">${row.maintenanceAndRepairs.toLocaleString()}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-amber-400">${row.total.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
