import { Metadata } from "next";
import SolutionLayout from "../components/SolutionLayout";

export const metadata: Metadata = {
  title: "Commodity Trading Solutions | KORP Software",
  description: "Multi-commodity trading platform covering precious metals, energy, and agricultural commodities with MCX and NCDEX integration.",
};

const features = [
  {
    title: "Multi-Commodity Coverage",
    description: "Trade in precious metals (Gold, Silver), energy (Crude Oil, Natural Gas), and agricultural commodities. Full MCX and NCDEX support.",
    icon: "🏭",
  },
  {
    title: "Real-time Price Tracking",
    description: "Get real-time commodity prices with live market feeds. Track price movements and set price alerts for key commodities.",
    icon: "📊",
  },
  {
    title: "Lot Size Management",
    description: "Manage different lot sizes for various commodities. Automatic calculation of margin requirements based on lot sizes.",
    icon: "📦",
  },
  {
    title: "Delivery Management",
    description: "Handle physical delivery of commodities with ease. Track delivery instructions and warehouse receipts.",
    icon: "🚚",
  },
  {
    title: "Inventory Tracking",
    description: "Track commodity inventory across multiple warehouses. Monitor stock levels and movement with detailed reports.",
    icon: "📋",
  },
  {
    title: "Commodity Margin",
    description: "Calculate commodity-specific margins with support for SPAN and ELM. Real-time margin monitoring and alerts.",
    icon: "💰",
  },
];

const benefits = [
  "MCX and NCDEX integration",
  "Real-time commodity prices",
  "Physical delivery support",
  "Multi-warehouse management",
  "Client-wise commodity limits",
  "Automated margin calls",
];

export default function CommodityPage() {
  return (
    <SolutionLayout
      title="Commodity"
      subtitle="Multi-Commodity Trading Platform"
      description="Diversify your trading portfolio with our comprehensive Commodity solution. From precious metals to agricultural products, manage all your commodity trading operations through a single integrated platform."
      features={features}
      benefits={benefits}
      image="/images/solutions/commodity.jpg"
      gradient="from-orange-500 to-orange-600"
    />
  );
}
