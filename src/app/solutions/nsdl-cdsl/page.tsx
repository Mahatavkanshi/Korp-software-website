import { Metadata } from "next";
import SolutionLayout from "../components/SolutionLayout";

export const metadata: Metadata = {
  title: "NSDL & CDSL Depository Solutions | KORP Software",
  description: "Seamless integration with both NSDL and CDSL for demat account management, pledge operations, and corporate actions.",
};

const features = [
  {
    title: "Demat Account Management",
    description: "Manage demat accounts for both NSDL and CDSL through a single interface. Track holdings, transactions, and account details seamlessly.",
    icon: "🏦",
  },
  {
    title: "Online Pledge",
    description: "Direct online pledge facility for both depositories. Real-time pledge status updates with instant confirmation and SMS alerts.",
    icon: "🔐",
  },
  {
    title: "Corporate Actions",
    description: "Automatic processing of corporate actions including dividends, bonuses, splits, and rights. Stay updated with all CA announcements.",
    icon: "⚡",
  },
  {
    title: "Transaction Processing",
    description: "Process delivery and receipt instructions with ease. Support for market trades, off-market transfers, and inter-depository transfers.",
    icon: "📋",
  },
  {
    title: "Holding Statements",
    description: "Generate detailed holding statements with valuation reports. Support for various statement formats as per client requirements.",
    icon: "📄",
  },
  {
    title: "API Integration",
    description: "Direct API integration with NSDL and CDSL for real-time data synchronization. Automated file processing and validation.",
    icon: "🔌",
  },
];

const benefits = [
  "Dual depository support",
  "Real-time pledge status",
  "Auto corporate actions",
  "Statement generation",
  "API integration ready",
  "Compliance reporting",
];

export default function NsdlCdslPage() {
  return (
    <SolutionLayout
      title="NSDL & CDSL"
      subtitle="Complete Depository Operations Management"
      description="Streamline your depository operations with our integrated NSDL & CDSL solution. From demat account management to online pledge, manage all depository-related activities through a single powerful platform."
      features={features}
      benefits={benefits}
      image="/images/solutions/nsdl-cdsl.jpg"
      gradient="from-teal-500 to-teal-600"
    />
  );
}
