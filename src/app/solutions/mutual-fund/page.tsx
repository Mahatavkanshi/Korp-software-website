import { Metadata } from "next";
import SolutionLayout from "../components/SolutionLayout";

export const metadata: Metadata = {
  title: "Mutual Fund Solutions | KORP Software",
  description: "Comprehensive mutual fund portfolio management with NAV tracking, SIP management, and consolidated reporting.",
};

const features = [
  {
    title: "Portfolio Management",
    description: "Manage comprehensive mutual fund portfolios across multiple AMCs. Track holdings, investments, and redemptions in real-time.",
    icon: "📊",
  },
  {
    title: "SIP Management",
    description: "Set up and manage Systematic Investment Plans with ease. Track SIP registrations, modify amounts, and pause/resume SIPs.",
    icon: "🔄",
  },
  {
    title: "NAV Tracking",
    description: "Get daily NAV updates for all mutual fund schemes. Track NAV history and calculate returns with accurate data.",
    icon: "📈",
  },
  {
    title: "Scheme Comparison",
    description: "Compare mutual fund schemes across different parameters. Analyze performance, risk, and returns before investing.",
    icon: "📋",
  },
  {
    title: "Consolidated Reporting",
    description: "Generate comprehensive reports including portfolio valuation, capital gains, and tax statements. Support for all report types.",
    icon: "📄",
  },
  {
    title: "Online Transactions",
    description: "Process mutual fund transactions online with direct integration to RTAs. Support for lump sum, SIP, STP, and SWP.",
    icon: "💻",
  },
];

const benefits = [
  "Integration with all AMCs",
  "Daily NAV updates",
  "SIP auto-debit support",
  "Consolidated account statements",
  "Tax harvesting reports",
  "Goal-based planning",
];

export default function MutualFundPage() {
  return (
    <SolutionLayout
      title="Mutual Fund"
      subtitle="Complete Mutual Fund Portfolio Management"
      description="Empower your clients with our comprehensive Mutual Fund solution. From SIP management to consolidated reporting, we provide all the tools needed for efficient mutual fund distribution and portfolio management."
      features={features}
      benefits={benefits}
      image="/images/solutions/mutual-fund.jpg"
      gradient="from-pink-500 to-pink-600"
    />
  );
}
