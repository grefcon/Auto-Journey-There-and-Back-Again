import { OwnershipCostInputs, TCOResult } from '../types/carJourney';

export function calculateTCO(
  purchasePrice: number,
  inputs: OwnershipCostInputs,
  reliabilityScore: number,
  mechanicalRisk: 'Very Low' | 'Moderate' | 'Above Average' | 'High Alert'
): TCOResult {
  const years = Math.max(1, Math.min(7, inputs.yearsOwned || 5));
  const annualMiles = inputs.annualMiles || 12000;
  
  // 1. Depreciation estimation
  // Year 1: ~15-20%, Years 2-5: ~10-12% annually
  let remainingValue = purchasePrice;
  let totalDepreciation = 0;
  const yearlyDepreciation: number[] = [];
  
  for (let y = 1; y <= years; y++) {
    const depreciationRate = y === 1 ? 0.16 : y === 2 ? 0.12 : y === 3 ? 0.10 : 0.09;
    const yearLoss = remainingValue * depreciationRate;
    remainingValue -= yearLoss;
    totalDepreciation += yearLoss;
    yearlyDepreciation.push(Math.round(yearLoss));
  }

  // 2. Financing (Monthly Loan Payment & Interest)
  const financedAmount = Math.max(0, purchasePrice - (inputs.downPayment || 0));
  const apr = (inputs.interestRate || 6.0) / 100;
  const termMonths = inputs.loanTermMonths || 60;
  const monthlyRate = apr / 12;

  let monthlyLoanPayment = 0;
  let totalFinancingInterest = 0;

  if (financedAmount > 0) {
    if (monthlyRate > 0) {
      monthlyLoanPayment =
        (financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) /
        (Math.pow(1 + monthlyRate, termMonths) - 1);
      totalFinancingInterest = monthlyLoanPayment * termMonths - financedAmount;
    } else {
      monthlyLoanPayment = financedAmount / termMonths;
      totalFinancingInterest = 0;
    }
  }

  // Calculate financing interest paid across the years owned
  const financingYears = Math.min(years, termMonths / 12);
  const annualFinancingCost = totalFinancingInterest / (termMonths / 12);

  // 3. Fuel or Electricity
  // efficiency: mpg or mi/kWh
  const eff = inputs.efficiency > 0 ? inputs.efficiency : 30;
  const unitCost = inputs.fuelCostPerUnit > 0 ? inputs.fuelCostPerUnit : 3.80;
  const annualFuelUnits = annualMiles / eff;
  const annualFuelCost = annualFuelUnits * unitCost;
  const totalFuel = annualFuelCost * years;

  // 4. Insurance
  const monthlyInsurance = inputs.insurancePerMonth || 150;
  const annualInsurance = monthlyInsurance * 12;
  const totalInsurance = annualInsurance * years;

  // 5. Routine Maintenance (Oil, tires, brakes, cabin filters)
  const routineAnnual = inputs.annualMaintenanceRoutine || 550;
  const totalRoutineMaintenance = routineAnnual * years;

  // 6. Anticipated Repair Reserve based on Reliability Score & Failure Risk!
  // Critical for vehicle buyer planning
  let repairMultiplier = 1.0;
  if (mechanicalRisk === 'High Alert') repairMultiplier = 2.4;
  else if (mechanicalRisk === 'Above Average') repairMultiplier = 1.7;
  else if (mechanicalRisk === 'Moderate') repairMultiplier = 1.2;
  else repairMultiplier = 0.7;

  // Older/Higher risk cars encounter failure points around years 2-5
  const baseAnnualRepairReserve = Math.max(200, Math.round((100 - reliabilityScore) * 18 * repairMultiplier));
  const totalAnticipatedRepairs = baseAnnualRepairReserve * years;

  // 7. Taxes & Registration
  const salesTax = purchasePrice * ((inputs.salesTaxRate || 8.0) / 100);
  const annualReg = inputs.registrationAnnual || 280;
  const totalTaxesAndFees = salesTax + annualReg * years;

  // Total TCO
  const grandTotal =
    totalDepreciation +
    (totalFinancingInterest * (financingYears / (termMonths / 12))) +
    totalFuel +
    totalInsurance +
    totalRoutineMaintenance +
    totalAnticipatedRepairs +
    totalTaxesAndFees;

  const monthlyAverage = Math.round(grandTotal / (years * 12));
  const costPerMile = Number((grandTotal / (annualMiles * years)).toFixed(2));

  // Yearly cash flow schedule
  const yearlyCashFlow = [];
  for (let y = 1; y <= years; y++) {
    const isPayingLoan = y <= termMonths / 12;
    const yearFinancing = isPayingLoan ? annualFinancingCost : 0;
    const yearRepairs = Math.round(baseAnnualRepairReserve * (1 + (y - 1) * 0.15));
    const yearTotal =
      yearlyDepreciation[y - 1] +
      yearFinancing +
      Math.round(annualFuelCost) +
      Math.round(annualInsurance) +
      routineAnnual +
      yearRepairs;

    yearlyCashFlow.push({
      year: y,
      depreciation: yearlyDepreciation[y - 1],
      financing: Math.round(yearFinancing),
      fuel: Math.round(annualFuelCost),
      insurance: Math.round(annualInsurance),
      maintenanceAndRepairs: routineAnnual + yearRepairs,
      total: yearTotal,
    });
  }

  return {
    totalCost: Math.round(grandTotal),
    monthlyCost: monthlyAverage,
    costPerMile,
    depreciationTotal: Math.round(totalDepreciation),
    financingTotal: Math.round(totalFinancingInterest),
    fuelTotal: Math.round(totalFuel),
    insuranceTotal: Math.round(totalInsurance),
    maintenanceTotal: Math.round(totalRoutineMaintenance),
    anticipatedRepairsTotal: Math.round(totalAnticipatedRepairs),
    taxesAndFeesTotal: Math.round(totalTaxesAndFees),
    yearlyCashFlow,
  };
}
