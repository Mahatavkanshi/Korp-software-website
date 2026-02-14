import { Metadata } from "next";
import SolutionLayout from "../components/SolutionLayout";

export const metadata: Metadata = {
  title: "Capital Market Solutions | KORP Software",
  description: "Complete backoffice solution for equity trading with real-time position tracking, profit/loss calculation, and comprehensive reporting.",
};

const features = [
  {
    title: "Real-time Position Tracking",
    description: "Track all equity positions in real-time with live market data integration. Monitor buy/sell orders, pending settlements, and holding details instantly.",
    icon: "📊",
  },
  {
    title: "Profit/Loss Calculation",
    description: "Automated P&L calculation with FIFO methodology. Get detailed reports on realized and unrealized gains with tax implications.",
    icon: "💰",
  },
  {
    title: "Comprehensive Reporting",
    description: "Generate detailed reports including holding statements, transaction reports, capital gains reports, and regulatory filings with one click.",
    icon: "📈",
  },
  {
    title: "Client Portfolio Management",
    description: "Manage multiple client portfolios with segregated views. Track investments, dividends, and corporate actions for each client separately.",
    icon: "👥",
  },
  {
    title: "Corporate Actions Processing",
    description: "Automatic processing of dividends, bonuses, splits, and rights issues. Stay updated with all corporate actions affecting your holdings.",
    icon: "⚡",
  },
  {
    title: "SEBI Compliance",
    description: "Built-in compliance with SEBI regulations. Generate required reports and maintain audit trails for regulatory inspections.",
    icon: "✅",
  },
];

const benefits = [
  "Reduced operational errors by 40%",
  "Real-time settlement tracking",
  "Automated reconciliation with exchanges",
  "Integration with NSE and BSE",
  "Multi-exchange support",
  "Mobile app for clients",
];

export default function CapitalMarketPage() {
  return (
    <SolutionLayout
      title="Capital Market"
      subtitle="Complete Backoffice Solution for Equity Trading"
      description="Manage all your equity trading operations seamlessly with our comprehensive Capital Market solution. From real-time position tracking to automated reporting, we provide everything you need for efficient equity trading operations."
      features={features}
      benefits={benefits}
      image="/images/solutions/capital-market.jpg"
      gradient="from-blue-500 to-blue-600"
    />
  );
}
