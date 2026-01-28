import FeatureTab from "../components/Home/FeatureTab";
import { Tab } from "@/types";

export const tabs: Tab[] = [
  {
    id: 0,
    title: "Central Command",
    content: (
      <FeatureTab
        title="Everything Commanders need, at their fingertips."
        header1="Cargo Logistics"
        header2="Subspace Comms"
        description1="View all payload manifests and live telemetry with your hub partners in one holographic interface. Send your hubs requisitions with our easy-to-use launch tool."
        description2="VoidRunner's full suite of protocols are optimized across all terminals. Access our command deck from anywhere in the system, with no biological implants required."
        imageUrl="/Images/feature-image.png"
        linkUrl="/live-chat"
      />
    ),
  },
  {
    id: 1,
    title: "Credit Sync",
    content: (
      <FeatureTab
        title="Automated Ledgering."
        header1="Quantum Ledger"
        header2="Hyper-Connected Systems"
        description1="Facilitate zero-latency transfers between outposts and their orbital hubs. Digitally access all historical manifests, individual docking fees, and more."
        description2="VoidRunner's billing product is fully integrated with the hub's OS, saving your logistics officer valuable time by automatically posting and reconciling credits."
        imageUrl="/Images/labPay.png"
        linkUrl="/live-chat"
      />
    ),
  },
  {
    id: 2,
    title: "Launch Control",
    content: (
      <FeatureTab
        title="Precision launch sequences."
        header1="Intuitive HUD"
        header2="99.9% Route Efficiency"
        description1="Our HUD is ergonomically designed for zero-g environments. Every feature ensures a smooth and efficient user experience, even during high-g maneuvers."
        description2="We take pride in our astrogation accuracy! Our platform has the lowest drift rate of any logistics platform in the sector."
        imageUrl="/Images/orderEntry.png"
        linkUrl="/live-chat"
      />
    ),
  },
  {
    id: 3,
    title: "Direct Comms",
    content: (
      <FeatureTab
        title="Immediate distress signal response."
        header1="Eliminates Comm Latency"
        header2="Hull Integrated"
        description1="Experience faster-than-light support! Commanders can now swiftly connect with hub traffic control, eliminating tedious wait times. Resolve anomalies faster."
        description2="Direct Comms is hardwired into every terminal of VoidRunner's platform, making it easy for commanders to get fast support from anywhere in the void."
        imageUrl="/Images/chat.png"
        linkUrl="/live-chat"
      />
    ),
  },
];
