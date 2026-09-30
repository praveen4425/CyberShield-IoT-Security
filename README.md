# CyberShield — AI-Powered IoT Security Platform

> **Hackathon Prototype** | Real-time Behavioral IoT Threat Detection & Explainable Incident Response

---

## Overview

**CyberShield** is an AI-powered cybersecurity platform designed to protect connected environments through real-time behavioral anomaly detection, automated risk scoring, explainable alert generation, and cryptographically verified incident response.

This repository hosts the **IoT Security Frontend Prototype**, tailored specifically for demonstration, evaluation, and hackathon presentation. It simulates a 24-node IoT fleet in an enterprise facility and models the complete operational life cycle of an autonomous Security Operations Center (SOC).

---

## The IoT Cybersecurity Problem

The proliferation of Internet of Things (IoT) devices across industrial control networks, enterprise infrastructure, and critical facilities introduces unprecedented attack surfaces:

1. **Heterogeneous & Insecure Hardware**: IoT sensors and edge gateways frequently run lightweight operating systems with hardcoded credentials, unpatched firmware, and minimal on-device telemetry.
2. **Signature-Based Evasion**: Modern malware (e.g., Mirai variants, botnet loaders, covert data exfiltration beacons) often avoids traditional firewall and static signature defenses by tunneling through encrypted protocols or mimicking legitimate traffic.
3. **SOC Alert Fatigue & Black-Box AI**: Conventional SIEMs trigger high volumes of ambiguous alerts without contextual reasoning, leaving incident response teams unsure why a device was flagged or how to respond safely.

---

## The CyberShield Solution

CyberShield addresses these vulnerabilities with an end-to-end autonomous monitoring and explainable intelligence pipeline:

```
IoT Devices
    │
    ▼
Behavior Monitoring  ───►  Continuous baseline tracking of throughput, protocol & packet cadence
    │
    ▼
AI Anomaly Detection ───►  Identifies behavioral drift and unauthorized egress destinations
    │
    ▼
Risk Scoring         ───►  Dynamically computes severity scores (0-100) based on deviation ratio
    │
    ▼
Explainable Alert    ───►  Breaks down the detection rationale with Baseline vs. Observed comparisons
    │
    ▼
Response Actions     ───►  Enables 1-click simulated device isolation and containment
    │
    ▼
Secure Audit Evidence───►  Seals incident timelines with SHA-256 cryptographic digests
```

---

## Key Features

- **Fleetwide IoT Device Monitoring**: Comprehensive inventory dashboard tracking device operational states (`Online`, `Offline`, `Isolated`), protocols (MQTT, RTSP, CoAP, Modbus TCP), and throughput metrics.
- **Behavioral Anomaly Detection Engine**: Continuous deviation analysis comparing live traffic patterns against established per-device baseline profiles.
- **Dynamic Risk Scoring**: Multi-factor scoring model that categorizes fleet risks into Low, Medium, High, and Critical tiers.
- **Explainable AI (XAI) Alerts**: Unpacks the *why* behind security alerts with transparent reasons, payload entropy metrics, and side-by-side behavioral comparisons.
- **Simulated Response Actions**:
  - **Isolate Device**: Quarantines the affected device via simulated SDN policy and marks threats as contained.
  - **Investigate**: Opens deep forensic telemetry drawers detailing external destination IPs, beacon frequencies, and recommended mitigations.
  - **Mark as Resolved**: Records analyst resolution and updates fleet metrics.
- **Cryptographic Evidence Audit Trail**: Chronological incident timeline and SHA-256 hash verification to model tamper-evident evidence custody.
- **Modular Platform Architecture**: Built with modularity to support future sector expansions (Healthcare, Smart Cities, Industrial OT, Defense).

---

## Prototype Scope

> **Important**: This prototype focuses on **IoT cybersecurity** as one domain-specific implementation of the broader CyberShield modular platform. Future modules planned in the CyberShield roadmap include Healthcare IoMT, Banking Infrastructure, Smart Grid Defense, and Supply Chain Security.

---

## Technology Stack

This prototype is built using zero external dependencies or heavy frameworks to ensure instant portability and simple evaluation:

- **HTML5**: Semantic document structure for SOC dashboards and modals.
- **CSS3**: Modern custom styling featuring a dark charcoal/slate SOC aesthetic, responsive layouts, CSS custom properties, and accessible contrast ratios.
- **Vanilla JavaScript (ES6+)**: Centralized reactive state management, interactive simulation handlers, SVG chart rendering, and dynamic DOM updates.

No npm installations, build steps, or backend servers are required.

---

## Getting Started

### Local Execution

1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/CyberShield-IoT-Security.git
   ```
2. Navigate into the project folder:
   ```bash
   cd CyberShield-IoT-Security
   ```
3. Open `index.html` directly in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari):
   ```bash
   # On Windows PowerShell:
   Start-Process index.html
   ```

---

## Directory Structure

```
CyberShield-IoT-Security/
├── index.html          # Main application markup & SOC layout
├── README.md           # Project documentation and hackathon brief
├── .gitignore          # Standard repository exclusions
├── css/
│   └── style.css       # Design tokens, cybersecurity theme & responsive rules
└── js/
    └── app.js          # Centralized data model, chart generator & interaction logic
```

---

## Hackathon Demonstration Walkthrough

When presenting CyberShield to judges:

1. **Dashboard Overview**: Start on the **Dashboard** to show fleet stats (24 total devices, 3 active threats) and the network activity chart exhibiting an active 82% traffic spike.
2. **Device Inventory**: Switch to **Devices** to showcase realistic IoT endpoints (Security Cameras, Industrial Modbus Sensors, Gateways) and demonstrate live filtering by status and risk.
3. **Threat Detail & AI Explainability**: Navigate to **Threats** and select `Smart-Camera-07`. Walk through the **Explainable Detection Rationale** and highlight the **Baseline vs. Observed Behavior** comparison.
4. **Autonomous Response**: Click **Isolate Device** to trigger simulated software-defined containment. Observe the toast notification, status update to `Isolated`, and threat containment.
5. **Forensic Telemetry**: Click **Investigate** to inspect packet volume, entropy, and malicious egress endpoint telemetry (`198.51.100.42:4444`).
6. **Incident & Evidence Audit**: Transition to **Incidents & Audit** to review the auto-appended timeline and click **Verify Hash Signature** to demonstrate SHA-256 evidence integrity.

---

## Disclaimer

`This is a hackathon prototype using simulated security data and response actions. It does not perform real network intrusion detection or device isolation.`
