import { Metadata } from "next";
import SolutionLayout from "../components/SolutionLayout";

export const metadata: Metadata = {
  title: "F&O Derivative Solutions | KORP Software",
  description: "Advanced margin calculation and risk management for futures and options trading with scrip-wise margin tracking.",
};

const features = [
  {
    title: "Scrip-wise Margin Calculation",
    description: "Calculate margins at scrip level with support for SPAN and Exposure margins. Get real-time margin requirements based on open positions.",
    icon: "📊",
  },
  {
    title: "Strategy Builder",
    description: "Build and analyze complex F&O strategies with payoff charts. Support for spreads, straddles, strangles, and custom strategies.",
    icon: "🔧",
  },
  {
    title: "Option Chain Analysis",
    description: "View real-time option chains with Greeks (Delta, Gamma, Theta, Vega). Analyze OI data and identify support/resistance levels.",
    icon: "📈",
  },
  {
    title: "Risk Management",
    description: "Set position limits, exposure limits, and MTM limits per client. Automatic alerts when limits are breached.",
    icon: "🛡️",
  },
  {
    title: "Payoff Charts",
    description: "Visualize potential profits and losses with interactive payoff charts. See breakeven points and max profit/loss scenarios.",
    icon: "📉",
  },
  {
    title: "Auto Square-off",
    description: "Automatic square-off of positions when margin shortfall occurs. Configurable square-off timings and priority settings.",
    icon: "⚡",
  },
];

const benefits = [
  "Real-time margin monitoring",
  "Support for all F&O strategies",
  "Integration with NSE F&O segment",
  "Historical data analysis",
  "Client-wise exposure tracking",
  "Automated risk alerts",
];

export default function FnoDerivativePage() {
  return (
    <SolutionLayout
      title="F&O Derivative"
      subtitle="Advanced Margin Calculation & Risk Management"
      description="Take your futures and options trading to the next level with our comprehensive F&O Derivative solution. From strategy building to risk management, we provide all the tools you need for successful derivatives trading."
      features={features}
      benefits={benefits}
      image="/images/solutions/fno-derivative.jpg"
      gradient="from-green-500 to-green-600"
    />
  );
}
