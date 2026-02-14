import { Metadata } from "next";
import SolutionLayout from "../components/SolutionLayout";

export const metadata: Metadata = {
  title: "Currency Derivative Solutions | KORP Software",
  description: "Specialized solution for forex trading with currency pair management, exposure tracking, and regulatory compliance.",
};

const features = [
  {
    title: "Multi-Currency Support",
    description: "Trade in all major currency pairs including USD/INR, EUR/INR, GBP/INR, JPY/INR. Support for cross-currency pairs available.",
    icon: "💱",
  },
  {
    title: "Currency Pair Management",
    description: "Manage multiple currency pairs with segregated position tracking. View real-time exchange rates and spot prices.",
    icon: "🌍",
  },
  {
    title: "Exposure Tracking",
    description: "Track currency exposure across all clients with consolidated views. Monitor open positions and pending settlements.",
    icon: "📊",
  },
  {
    title: "Hedging Strategies",
    description: "Implement hedging strategies to protect against currency fluctuations. Support for forwards, futures, and options.",
    icon: "🛡️",
  },
  {
    title: "RBI Compliance",
    description: "Stay compliant with RBI regulations for currency trading. Generate required reports for regulatory submissions.",
    icon: "✅",
  },
  {
    title: "Settlement Management",
    description: "Automated settlement processing with T+1 settlement cycle. Integration with CCIL for seamless settlement.",
    icon: "⚡",
  },
];

const benefits = [
  "Real-time currency rates",
  "Support for NSE Currency segment",
  "RBI compliant reporting",
  "Exposure limit monitoring",
  "Multi-branch operations",
  "Client-wise currency limits",
];

export default function CurrencyDerivativePage() {
  return (
    <SolutionLayout
      title="Currency Derivative"
      subtitle="Forex Trading & Currency Management"
      description="Navigate the global currency markets with confidence using our comprehensive Currency Derivative solution. From multi-currency support to hedging strategies, we provide everything you need for successful forex trading operations."
      features={features}
      benefits={benefits}
      image="/images/solutions/currency-derivative.jpg"
      gradient="from-purple-500 to-purple-600"
    />
  );
}
