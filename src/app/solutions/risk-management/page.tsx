import { Metadata } from "next";
import SolutionLayout from "../components/SolutionLayout";

export const metadata: Metadata = {
  title: "Risk Management Solutions | KORP Software",
  description: "Robust risk management system with real-time monitoring, exposure limits, and automated alerts for compliance.",
};

const features = [
  {
    title: "Real-time Monitoring",
    description: "Monitor risk exposure in real-time across all market segments. Get instant alerts when limits are breached or unusual activity detected.",
    icon: "⚡",
  },
  {
    title: "Exposure Limits",
    description: "Set and manage exposure limits at client, branch, and company levels. Multiple limit types including turnover, MTM, and scrip-wise limits.",
    icon: "🛡️",
  },
  {
    title: "Margin Shortfall Alerts",
    description: "Automatic detection of margin shortfalls with configurable alert thresholds. SMS and email notifications for immediate action.",
    icon: "🚨",
  },
  {
    title: "Auto Square-off",
    description: "Configure automatic square-off of positions when risk limits are breached. Priority-based square-off with customizable rules.",
    icon: "🔒",
  },
  {
    title: "Concentration Risk",
    description: "Monitor concentration risk across clients and scrips. Track large positions and identify potential systemic risks.",
    icon: "📊",
  },
  {
    title: "Compliance Reporting",
    description: "Generate risk compliance reports for regulatory submissions. Maintain audit trails for all risk management activities.",
    icon: "✅",
  },
];

const benefits = [
  "24/7 risk monitoring",
  "Multi-level limit controls",
  "Instant alert notifications",
  "Automated risk mitigation",
  "Regulatory compliance ready",
  "Historical risk analytics",
];

export default function RiskManagementPage() {
  return (
    <SolutionLayout
      title="Risk Management"
      subtitle="Comprehensive Risk Monitoring & Control"
      description="Protect your trading operations with our advanced Risk Management solution. From real-time monitoring to automated controls, we provide comprehensive tools to manage and mitigate trading risks effectively."
      features={features}
      benefits={benefits}
      image="/images/solutions/risk-management.jpg"
      gradient="from-red-500 to-red-600"
    />
  );
}
