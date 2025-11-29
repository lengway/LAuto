import { Metadata } from "next";
import { PartsExplorer } from "@/components/parts/parts-explorer";

export const metadata: Metadata = {
  title: "LenAuto Parts",
  description: "VIN-aware marketplace for premium automotive components.",
};

export default function PartsPage() {
  return <PartsExplorer />;
}
