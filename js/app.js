/**
 * CyberShield — AI-Powered IoT Security Platform
 * Frontend Prototype State & Controller (Vanilla JS)
 */

// Centralized state
const state = {
  activeView: 'dashboard',
  selectedThreatId: 'threat-01',
  selectedDeviceId: null,
  
  stats: {
    totalDevices: 24,
    onlineDevices: 21,
    activeThreats: 3,
    highRiskDevices: 2
  },

  aiEngine: {
    status: 'Active',
    mode: 'Behavioral Anomaly Detection',
    baselineStatus: 'Baseline Profile Established',
    behaviorDeviation: '82%',
    activeRiskScore: '87/100'
  },

  devices: [
    {
      id: 'dev-07',
      name: 'Smart-Camera-07',
      type: 'Security Camera',
      ip: '192.168.1.107',
      mac: '00:1A:79:42:07:BC',
      status: 'Online',
      protocol: 'RTSP / HTTPS',
      activity: '1.8 MB/s',
      packetRate: '1,420 pps',
      risk: 'High',
      riskScore: 87,
      zone: 'Zone B - Perimeter',
      firmware: 'v3.1.2-sec',
      lastSeen: 'Just now',
      eventsCount: 4,
      baselineBandwidth: '12 KB/s',
      anomalyFlag: true
    },
    {
      id: 'dev-12',
      name: 'Temperature-Sensor-12',
      type: 'Temperature Sensor',
      ip: '192.168.1.112',
      mac: '24:0A:C4:18:12:DF',
      status: 'Online',
      protocol: 'MQTT',
      activity: '0.4 KB/s',
      packetRate: '1 pps',
      risk: 'Low',
      riskScore: 12,
      zone: 'Zone A - Server Room',
      firmware: 'v1.4.0',
      lastSeen: '12s ago',
      eventsCount: 0,
      baselineBandwidth: '0.4 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-03',
      name: 'Gateway-03',
      type: 'IoT Gateway',
      ip: '192.168.1.103',
      mac: '00:15:5D:82:03:AA',
      status: 'Online',
      protocol: 'CoAP / MQTT',
      activity: '42.5 KB/s',
      packetRate: '180 pps',
      risk: 'Medium',
      riskScore: 58,
      zone: 'Core Infrastructure',
      firmware: 'v4.0.8',
      lastSeen: 'Just now',
      eventsCount: 2,
      baselineBandwidth: '35.0 KB/s',
      anomalyFlag: true
    },
    {
      id: 'dev-21',
      name: 'Motion-Sensor-21',
      type: 'Motion Sensor',
      ip: '192.168.1.121',
      mac: '50:02:91:A1:21:7E',
      status: 'Online',
      protocol: 'Zigbee Gateway',
      activity: '1.2 KB/s',
      packetRate: '4 pps',
      risk: 'Medium',
      riskScore: 54,
      zone: 'Zone C - Warehouse',
      firmware: 'v2.0.1',
      lastSeen: '45s ago',
      eventsCount: 1,
      baselineBandwidth: '0.8 KB/s',
      anomalyFlag: true
    },
    {
      id: 'dev-04',
      name: 'Industrial-Sensor-04',
      type: 'Industrial Sensor',
      ip: '192.168.1.104',
      mac: '00:80:E1:FF:04:19',
      status: 'Offline',
      protocol: 'Modbus TCP',
      activity: '0.0 KB/s',
      packetRate: '0 pps',
      risk: 'High',
      riskScore: 82,
      zone: 'Zone D - Assembly Floor',
      firmware: 'v1.0.9-legacy',
      lastSeen: '14m ago',
      eventsCount: 3,
      baselineBandwidth: '4.5 KB/s',
      anomalyFlag: true
    },
    {
      id: 'dev-01',
      name: 'Smart-Lock-01',
      type: 'Access Control',
      ip: '192.168.1.101',
      mac: '3C:71:BF:11:01:4C',
      status: 'Online',
      protocol: 'HTTPS / TLS 1.3',
      activity: '2.1 KB/s',
      packetRate: '5 pps',
      risk: 'Low',
      riskScore: 18,
      zone: 'Main Entrance',
      firmware: 'v2.2.0',
      lastSeen: '1m ago',
      eventsCount: 0,
      baselineBandwidth: '2.0 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-02',
      name: 'HVAC-Controller-02',
      type: 'Environmental Unit',
      ip: '192.168.1.102',
      mac: 'B8:27:EB:42:02:99',
      status: 'Online',
      protocol: 'BACnet / IP',
      activity: '8.4 KB/s',
      packetRate: '22 pps',
      risk: 'Low',
      riskScore: 24,
      zone: 'Facility Level 1',
      firmware: 'v3.0.1',
      lastSeen: '3m ago',
      eventsCount: 0,
      baselineBandwidth: '8.0 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-09',
      name: 'Energy-Meter-09',
      type: 'Smart Meter',
      ip: '192.168.1.109',
      mac: '70:B3:D5:19:09:A3',
      status: 'Online',
      protocol: 'MQTT',
      activity: '3.6 KB/s',
      packetRate: '12 pps',
      risk: 'Low',
      riskScore: 15,
      zone: 'Substation B',
      firmware: 'v2.1.4',
      lastSeen: 'Just now',
      eventsCount: 0,
      baselineBandwidth: '3.5 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-15',
      name: 'Water-Flow-15',
      type: 'Flow Monitor',
      ip: '192.168.1.115',
      mac: '94:E6:86:77:15:2B',
      status: 'Online',
      protocol: 'CoAP',
      activity: '0.8 KB/s',
      packetRate: '2 pps',
      risk: 'Low',
      riskScore: 14,
      zone: 'Utility Plant',
      firmware: 'v1.8.2',
      lastSeen: '2m ago',
      eventsCount: 0,
      baselineBandwidth: '0.8 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-18',
      name: 'Smart-Lighting-18',
      type: 'Lighting Grid',
      ip: '192.168.1.118',
      mac: '68:C6:3A:55:18:11',
      status: 'Online',
      protocol: 'MQTT',
      activity: '5.2 KB/s',
      packetRate: '16 pps',
      risk: 'Low',
      riskScore: 20,
      zone: 'Zone B - Offices',
      firmware: 'v2.0.0',
      lastSeen: '30s ago',
      eventsCount: 0,
      baselineBandwidth: '5.0 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-22',
      name: 'Fire-Alarm-Node-22',
      type: 'Safety Sensor',
      ip: '192.168.1.122',
      mac: 'AC:67:B2:33:22:8F',
      status: 'Online',
      protocol: 'MQTT / TLS',
      activity: '0.2 KB/s',
      packetRate: '1 pps',
      risk: 'Low',
      riskScore: 8,
      zone: 'Emergency Sector',
      firmware: 'v5.1.0',
      lastSeen: 'Just now',
      eventsCount: 0,
      baselineBandwidth: '0.2 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-24',
      name: 'Asset-Tracker-24',
      type: 'RFID Beacon',
      ip: '192.168.1.124',
      mac: '48:3F:DA:11:24:60',
      status: 'Online',
      protocol: 'BLE Gateway',
      activity: '1.4 KB/s',
      packetRate: '6 pps',
      risk: 'Low',
      riskScore: 19,
      zone: 'Logistics Dock',
      firmware: 'v1.2.0',
      lastSeen: '5m ago',
      eventsCount: 0,
      baselineBandwidth: '1.3 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-05',
      name: 'Smart-Thermostat-05',
      type: 'Climate Controller',
      ip: '192.168.1.105',
      mac: 'A4:CF:12:88:05:31',
      status: 'Online',
      protocol: 'BACnet / IP',
      activity: '3.1 KB/s',
      packetRate: '8 pps',
      risk: 'Low',
      riskScore: 16,
      zone: 'Executive Floor',
      firmware: 'v2.4.1',
      lastSeen: '1m ago',
      eventsCount: 0,
      baselineBandwidth: '3.0 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-08',
      name: 'Air-Quality-Node-08',
      type: 'Environmental Sensor',
      ip: '192.168.1.108',
      mac: '74:4D:28:90:08:EE',
      status: 'Online',
      protocol: 'MQTT',
      activity: '0.6 KB/s',
      packetRate: '2 pps',
      risk: 'Low',
      riskScore: 11,
      zone: 'Research Lab 2',
      firmware: 'v1.1.5',
      lastSeen: 'Just now',
      eventsCount: 0,
      baselineBandwidth: '0.5 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-10',
      name: 'Pressure-Transducer-10',
      type: 'Industrial Sensor',
      ip: '192.168.1.110',
      mac: '00:1E:C0:29:10:44',
      status: 'Online',
      protocol: 'Modbus TCP',
      activity: '2.4 KB/s',
      packetRate: '7 pps',
      risk: 'Low',
      riskScore: 22,
      zone: 'Hydraulics Bay',
      firmware: 'v3.2.0',
      lastSeen: '4m ago',
      eventsCount: 0,
      baselineBandwidth: '2.4 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-11',
      name: 'Vibration-Monitor-11',
      type: 'Industrial Sensor',
      ip: '192.168.1.111',
      mac: '00:50:C2:71:11:AB',
      status: 'Online',
      protocol: 'Modbus TCP',
      activity: '4.8 KB/s',
      packetRate: '14 pps',
      risk: 'Low',
      riskScore: 19,
      zone: 'Generator Room',
      firmware: 'v2.0.4',
      lastSeen: 'Just now',
      eventsCount: 0,
      baselineBandwidth: '4.8 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-13',
      name: 'Perimeter-Beam-13',
      type: 'Intrusion Sensor',
      ip: '192.168.1.113',
      mac: 'B0:B9:8A:33:13:90',
      status: 'Online',
      protocol: 'HTTPS',
      activity: '1.1 KB/s',
      packetRate: '3 pps',
      risk: 'Low',
      riskScore: 25,
      zone: 'Perimeter North',
      firmware: 'v1.9.0',
      lastSeen: '2m ago',
      eventsCount: 0,
      baselineBandwidth: '1.0 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-14',
      name: 'Smart-Badge-Reader-14',
      type: 'Access Control',
      ip: '192.168.1.114',
      mac: 'E0:CB:BC:62:14:1D',
      status: 'Online',
      protocol: 'HTTPS / Wiegand',
      activity: '1.8 KB/s',
      packetRate: '5 pps',
      risk: 'Low',
      riskScore: 17,
      zone: 'East Entrance',
      firmware: 'v4.1.2',
      lastSeen: '30s ago',
      eventsCount: 0,
      baselineBandwidth: '1.8 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-16',
      name: 'Humidity-Sensor-16',
      type: 'Environmental Sensor',
      ip: '192.168.1.116',
      mac: '5C:CF:7F:44:16:72',
      status: 'Online',
      protocol: 'MQTT',
      activity: '0.5 KB/s',
      packetRate: '1 pps',
      risk: 'Low',
      riskScore: 13,
      zone: 'Clean Room 1',
      firmware: 'v1.0.8',
      lastSeen: '1m ago',
      eventsCount: 0,
      baselineBandwidth: '0.5 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-17',
      name: 'Backup-Generator-Node-17',
      type: 'Power Telemetry',
      ip: '192.168.1.117',
      mac: '30:AE:A4:78:17:F1',
      status: 'Online',
      protocol: 'SNMP v3',
      activity: '6.2 KB/s',
      packetRate: '18 pps',
      risk: 'Low',
      riskScore: 21,
      zone: 'Substation Yard',
      firmware: 'v3.5.0',
      lastSeen: 'Just now',
      eventsCount: 0,
      baselineBandwidth: '6.0 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-19',
      name: 'Gas-Leak-Detector-19',
      type: 'Safety Sensor',
      ip: '192.168.1.119',
      mac: 'CC:50:E3:19:19:B2',
      status: 'Online',
      protocol: 'CoAP / TLS',
      activity: '0.3 KB/s',
      packetRate: '1 pps',
      risk: 'Low',
      riskScore: 9,
      zone: 'Chemical Storage',
      firmware: 'v2.8.0',
      lastSeen: 'Just now',
      eventsCount: 0,
      baselineBandwidth: '0.3 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-20',
      name: 'Cold-Storage-Probe-20',
      type: 'Industrial Sensor',
      ip: '192.168.1.120',
      mac: '84:F3:EB:20:20:C6',
      status: 'Online',
      protocol: 'MQTT',
      activity: '0.9 KB/s',
      packetRate: '3 pps',
      risk: 'Low',
      riskScore: 15,
      zone: 'Cold Vault B',
      firmware: 'v1.3.4',
      lastSeen: '3m ago',
      eventsCount: 0,
      baselineBandwidth: '0.9 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-06',
      name: 'Parking-Barrier-06',
      type: 'Facility Gate',
      ip: '192.168.1.106',
      mac: '90:A2:DA:06:06:84',
      status: 'Offline',
      protocol: 'CAN / Ethernet',
      activity: '0.0 KB/s',
      packetRate: '0 pps',
      risk: 'Low',
      riskScore: 28,
      zone: 'North Gate Entrance',
      firmware: 'v2.1.0',
      lastSeen: '2h ago',
      eventsCount: 1,
      baselineBandwidth: '1.2 KB/s',
      anomalyFlag: false
    },
    {
      id: 'dev-23',
      name: 'Elevator-Gateway-23',
      type: 'Transit Controller',
      ip: '192.168.1.123',
      mac: 'F8:DC:7A:23:23:3D',
      status: 'Offline',
      protocol: 'BACnet / IP',
      activity: '0.0 KB/s',
      packetRate: '0 pps',
      risk: 'Low',
      riskScore: 31,
      zone: 'Tower Central Shaft',
      firmware: 'v3.0.0',
      lastSeen: '45m ago',
      eventsCount: 0,
      baselineBandwidth: '2.5 KB/s',
      anomalyFlag: false
    }
  ],

  threats: [
    {
      id: 'threat-01',
      title: 'Unusual Network Behavior',
      deviceId: 'dev-07',
      deviceName: 'Smart-Camera-07',
      deviceType: 'Security Camera',
      ip: '192.168.1.107',
      riskScore: 87,
      severity: 'HIGH',
      status: 'Active',
      time: '18:42 UTC',
      category: 'Data Exfiltration Anomaly',
      aiReasons: [
        "Network traffic increased significantly above the device's normal baseline (150x spike).",
        "Device communicated with an unknown external destination (198.51.100.42:4444).",
        "Communication pattern differs from previously observed video streaming behavior.",
        "Activity frequency and outbound connection bursts are higher than the learned baseline."
      ],
      normalBehavior: {
        title: 'Normal Learned Baseline',
        description: 'Low and predictable outbound traffic restricted to local NVR stream',
        bandwidth: '12 KB/s average',
        destination: '192.168.1.5 (Local NVR)',
        ports: 'RTSP (554), HTTPS (443)'
      },
      observedBehavior: {
        title: 'Observed Anomaly',
        description: 'Sudden high-volume encrypted transmission to external unregistered node',
        bandwidth: '1.8 MB/s persistent burst',
        destination: '198.51.100.42 (External Suspicious IP)',
        ports: 'Non-standard TLS (4444)'
      },
      forensics: {
        packetVolume: '48,290 packets in 60s',
        anomalyRatio: '82% deviation index',
        payloadEntropy: '7.94 (High entropy / encrypted payload)',
        recommendedAction: 'Immediate network quarantine (MAC/VLAN isolation)'
      }
    },
    {
      id: 'threat-02',
      title: 'Device Risk Score Spike',
      deviceId: 'dev-04',
      deviceName: 'Industrial-Sensor-04',
      deviceType: 'Industrial Sensor',
      ip: '192.168.1.104',
      riskScore: 82,
      severity: 'HIGH',
      status: 'Active',
      time: '18:37 UTC',
      category: 'Firmware & Telemetry Drift',
      aiReasons: [
        'Device abruptly stopped periodic heartbeat telemetry with industrial controller.',
        'Unrecognized binary firmware hash detected in last handshake packet before offline.',
        'Repeated Modbus register polling attempts outside allowable operating range.'
      ],
      normalBehavior: {
        title: 'Normal Learned Baseline',
        description: 'Standard 4.5 KB/s polling interval to PLC controller',
        bandwidth: '4.5 KB/s constant',
        destination: '192.168.1.10 (PLC Gateway)',
        ports: 'Modbus TCP (502)'
      },
      observedBehavior: {
        title: 'Observed Anomaly',
        description: 'Connection drop following unverified configuration command injection',
        bandwidth: '0.0 KB/s (Offline after crash)',
        destination: 'Unknown internal broadcast',
        ports: 'Port 502 / Raw socket'
      },
      forensics: {
        packetVolume: 'Zero egress post-18:37',
        anomalyRatio: '78% deviation index',
        payloadEntropy: '6.42',
        recommendedAction: 'Physical port inspection and firmware recovery'
      }
    },
    {
      id: 'threat-03',
      title: 'Device Authentication Anomaly',
      deviceId: 'dev-03',
      deviceName: 'Gateway-03',
      deviceType: 'IoT Gateway',
      ip: '192.168.1.103',
      riskScore: 58,
      severity: 'MEDIUM',
      status: 'Active',
      time: '18:21 UTC',
      category: 'Credential Spray / Brute-Force',
      aiReasons: [
        'Rapid succession of invalid JWT tokens submitted to device administrative API.',
        'Authentication request rate exceeded standard human administrator threshold (45 req/min).',
        'Requests originated from multiple non-whitelisted management subnet IPs.'
      ],
      normalBehavior: {
        title: 'Normal Learned Baseline',
        description: 'Single session login from administrative console (192.168.1.20)',
        bandwidth: '35.0 KB/s nominal',
        destination: 'Authorized Admin Subnet',
        ports: 'HTTPS (8443)'
      },
      observedBehavior: {
        title: 'Observed Anomaly',
        description: 'Cyclic authentication failures accompanied by rapid token fuzzing',
        bandwidth: '42.5 KB/s elevated',
        destination: 'Distributed internal probes',
        ports: 'API Port (8443)'
      },
      forensics: {
        packetVolume: '2,150 API request attempts',
        anomalyRatio: '54% deviation index',
        payloadEntropy: '5.18',
        recommendedAction: 'Apply rate-limiting rule and rotate gateway master keys'
      }
    }
  ],

  recentEvents: [
    {
      time: '18:42',
      desc: 'Unusual network behavior detected',
      device: 'Smart-Camera-07',
      severity: 'high',
      threatId: 'threat-01'
    },
    {
      time: '18:37',
      desc: 'Device risk score increased',
      device: 'Industrial-Sensor-04',
      severity: 'high',
      threatId: 'threat-02'
    },
    {
      time: '18:21',
      desc: 'Device authentication anomaly',
      device: 'Gateway-03',
      severity: 'medium',
      threatId: 'threat-03'
    },
    {
      time: '17:56',
      desc: 'Suspicious outbound traffic detected',
      device: 'Motion-Sensor-21',
      severity: 'medium',
      threatId: null
    }
  ],

  incidents: [
    {
      time: '18:42',
      title: 'Threat Detected',
      detail: 'Behavioral deviation alert triggered by AI engine on Smart-Camera-07. Outbound spike 150x above baseline.',
      type: 'alert'
    },
    {
      time: '18:43',
      title: 'AI Risk Assessment Completed',
      detail: 'Behavioral deviation calculated at 82%. Dynamic risk score elevated to 87/100 (HIGH).',
      type: 'default'
    },
    {
      time: '18:43',
      title: 'Explainable Alert Generated',
      detail: 'SOC explainability matrix populated: unexpected destination IP 198.51.100.42 and non-standard protocol behavior.',
      type: 'default'
    },
    {
      time: '18:44',
      title: 'Automated Containment Recommended',
      detail: 'Policy engine recommended device software isolation to halt prospective data exfiltration.',
      type: 'default'
    },
    {
      time: '18:46',
      title: 'Forensic Snapshot Initiated',
      detail: 'Captured initial 256KB netflow telemetry and memory state for smart camera stream.',
      type: 'action'
    },
    {
      time: '18:49',
      title: 'Evidence Secured & Hashed',
      detail: 'Forensic packet trace and event timeline sealed into tamper-evident audit record.',
      type: 'success'
    }
  ],

  evidence: {
    algorithm: 'SHA-256',
    hash: '7a4c89f2e105b38d4e9c702b814df35e1289ac6428d0b284920c78a1599191ef',
    status: 'Integrity Verified',
    timestamp: '2026-09-30 18:49:12 UTC',
    auditId: 'AUD-IOT-2026-8894',
    sealedItems: '6 Timeline Events, 24 Telemetry Snapshots, NetFlow PCAP #884'
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupFilterControls();
  setupModals();
  renderAll();
  startClock();
});

function setupModals() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDeviceModal();
      closeInvestigationModal();
    }
  });
}

// Setup navigation listeners
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = item.getAttribute('data-view');
      if (targetView) {
        switchView(targetView);
      }
    });
  });
}

// Switch view handler
function switchView(viewName) {
  state.activeView = viewName;

  // Update navigation items active state
  document.querySelectorAll('.nav-item').forEach(item => {
    if (item.getAttribute('data-view') === viewName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Update view sections visibility
  document.querySelectorAll('.view-section').forEach(section => {
    section.classList.remove('active');
  });

  const activeSection = document.getElementById(`view-${viewName}`);
  if (activeSection) {
    activeSection.classList.add('active');
  }

  // Update title headline
  updateHeaderTitle(viewName);

  // Re-render specific view if needed
  if (viewName === 'devices') {
    renderDevicesTable();
  } else if (viewName === 'threats') {
    renderThreatsView();
  } else if (viewName === 'incidents') {
    renderAuditView();
  } else if (viewName === 'dashboard') {
    renderDashboardView();
  }
}

function updateHeaderTitle(viewName) {
  const titleEl = document.getElementById('pageTitle');
  const subEl = document.getElementById('pageSubtitle');
  if (!titleEl || !subEl) return;

  switch (viewName) {
    case 'dashboard':
      titleEl.textContent = 'IoT Security Overview';
      subEl.textContent = 'Real-time monitoring and AI-based threat detection';
      break;
    case 'devices':
      titleEl.textContent = 'IoT Device Monitoring';
      subEl.textContent = 'Monitor device activity, behavior and security risk';
      break;
    case 'threats':
      titleEl.textContent = 'Threat & Anomaly Analysis';
      subEl.textContent = 'Explainable AI alerts and actionable threat mitigation';
      break;
    case 'incidents':
      titleEl.textContent = 'Incident & Audit Trail';
      subEl.textContent = 'Chronological containment record and evidence integrity verification';
      break;
  }
}

// Render all views and widgets
function renderAll() {
  updateNavCounters();
  renderDashboardView();
  renderDevicesTable();
  renderThreatsView();
  renderAuditView();
}

function updateNavCounters() {
  const threatCount = state.threats.filter(t => t.status === 'Active').length;
  const threatCounterEl = document.getElementById('threatCounter');
  if (threatCounterEl) {
    threatCounterEl.textContent = threatCount;
    threatCounterEl.style.display = threatCount > 0 ? 'inline-block' : 'none';
  }
}

// -------------------------------------------------------------------------
// DASHBOARD VIEW
// -------------------------------------------------------------------------
function renderDashboardView() {
  // Update Top Stats
  const totalDevEl = document.getElementById('statTotalDevices');
  const onlineDevEl = document.getElementById('statOnlineDevices');
  const activeThreatsEl = document.getElementById('statActiveThreats');
  const highRiskEl = document.getElementById('statHighRisk');

  const onlineCount = state.devices.filter(d => d.status === 'Online').length;
  const activeThreatCount = state.threats.filter(t => t.status === 'Active').length;
  const highRiskCount = state.devices.filter(d => d.risk === 'High' && d.status !== 'Isolated').length;

  if (totalDevEl) totalDevEl.textContent = state.stats.totalDevices;
  if (onlineDevEl) onlineDevEl.textContent = onlineCount;
  if (activeThreatsEl) activeThreatsEl.textContent = activeThreatCount;
  if (highRiskEl) highRiskEl.textContent = highRiskCount;

  // Render Network Activity SVG Chart
  renderNetworkChart();

  // Render Risk Distribution
  renderRiskDistribution();

  // Render Recent Security Events
  renderRecentEvents();
}

// Render clean, small network activity chart via SVG
function renderNetworkChart() {
  const svg = document.getElementById('networkChartSvg');
  if (!svg) return;

  // 16 data points for baseline and observed traffic (Kb/s or relative units)
  const baselinePoints = [15, 18, 14, 16, 20, 19, 18, 17, 22, 19, 21, 18, 20, 19, 18, 20];
  const observedPoints = [16, 17, 15, 19, 21, 20, 19, 18, 28, 45, 82, 95, 98, 89, 75, 42];

  const width = 500;
  const height = 155;
  const paddingTop = 16;
  const paddingBottom = 22;
  const paddingX = 20;

  const maxVal = 100;
  const stepX = (width - paddingX * 2) / (baselinePoints.length - 1);
  const chartHeight = height - paddingTop - paddingBottom;

  // Generate path coordinates
  const makePath = (data) => {
    return data.map((val, idx) => {
      const x = paddingX + idx * stepX;
      const y = height - paddingBottom - (val / maxVal) * chartHeight;
      return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(' ');
  };

  const baselinePathD = makePath(baselinePoints);
  const observedPathD = makePath(observedPoints);

  // Generate Area under observed curve
  const areaObservedD = `${observedPathD} L ${width - paddingX} ${height - paddingBottom} L ${paddingX} ${height - paddingBottom} Z`;

  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.innerHTML = `
    <!-- Grid lines -->
    <line x1="${paddingX}" y1="${paddingTop}" x2="${width - paddingX}" y2="${paddingTop}" stroke="#233249" stroke-dasharray="3,3" />
    <line x1="${paddingX}" y1="${paddingTop + chartHeight / 2}" x2="${width - paddingX}" y2="${paddingTop + chartHeight / 2}" stroke="#233249" stroke-dasharray="3,3" />
    <line x1="${paddingX}" y1="${height - paddingBottom}" x2="${width - paddingX}" y2="${height - paddingBottom}" stroke="#2e415e" />
    
    <!-- Area gradient for observed -->
    <defs>
      <linearGradient id="observedGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ef4444" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#ef4444" stop-opacity="0.0"/>
      </linearGradient>
    </defs>

    <path d="${areaObservedD}" fill="url(#observedGrad)" />
    <path d="${baselinePathD}" fill="none" stroke="#06b6d4" stroke-width="2" stroke-dasharray="4,2" />
    <path d="${observedPathD}" fill="none" stroke="#ef4444" stroke-width="2.5" />
    
    <!-- Anomaly Indicator Marker -->
    <circle cx="${paddingX + 12 * stepX}" cy="${height - paddingBottom - (98 / maxVal) * chartHeight}" r="5" fill="#ef4444" stroke="#ffffff" stroke-width="1.8" />
    <text x="${paddingX + 12 * stepX - 16}" y="${height - paddingBottom - (98 / maxVal) * chartHeight - 10}" fill="#f87171" font-size="11" font-family="var(--font-mono)" font-weight="700">82% Spike</text>

    <!-- Time axis labels -->
    <text x="${paddingX}" y="${height - 5}" fill="#64748b" font-size="10" font-family="var(--font-mono)">18:00</text>
    <text x="${paddingX + 5 * stepX - 12}" y="${height - 5}" fill="#64748b" font-size="10" font-family="var(--font-mono)">18:15</text>
    <text x="${paddingX + 10 * stepX - 12}" y="${height - 5}" fill="#64748b" font-size="10" font-family="var(--font-mono)">18:30</text>
    <text x="${width - paddingX - 22}" y="${height - 5}" fill="#94a3b8" font-size="10" font-family="var(--font-mono)" font-weight="600">LIVE</text>
  `;
}

// Render Risk Distribution
function renderRiskDistribution() {
  const container = document.getElementById('riskBreakdownContainer');
  if (!container) return;

  const total = state.devices.length;
  const lowCount = state.devices.filter(d => d.risk === 'Low').length;
  const mediumCount = state.devices.filter(d => d.risk === 'Medium').length;
  const highCount = state.devices.filter(d => d.risk === 'High' && d.riskScore < 85).length;
  const criticalCount = state.devices.filter(d => d.riskScore >= 85).length;

  const lowPct = Math.round((lowCount / total) * 100);
  const medPct = Math.round((mediumCount / total) * 100);
  const highPct = Math.round((highCount / total) * 100);
  const critPct = Math.round((criticalCount / total) * 100);

  container.innerHTML = `
    <div class="risk-item">
      <div class="risk-item-header">
        <span class="risk-level-name">Low (Baseline Nominal)</span>
        <span class="risk-level-count">${lowCount} devices (${lowPct}%)</span>
      </div>
      <div class="risk-bar-track">
        <div class="risk-bar-fill fill-low" style="width: ${lowPct}%"></div>
      </div>
    </div>

    <div class="risk-item">
      <div class="risk-item-header">
        <span class="risk-level-name">Medium (Elevated Scans)</span>
        <span class="risk-level-count">${mediumCount} devices (${medPct}%)</span>
      </div>
      <div class="risk-bar-track">
        <div class="risk-bar-fill fill-medium" style="width: ${medPct}%"></div>
      </div>
    </div>

    <div class="risk-item">
      <div class="risk-item-header">
        <span class="risk-level-name">High (Anomalous Activity)</span>
        <span class="risk-level-count">${highCount} device (${highPct}%)</span>
      </div>
      <div class="risk-bar-track">
        <div class="risk-bar-fill fill-high" style="width: ${highPct}%"></div>
      </div>
    </div>

    <div class="risk-item">
      <div class="risk-item-header">
        <span class="risk-level-name">Critical (Action Required)</span>
        <span class="risk-level-count">${criticalCount} device (${critPct}%)</span>
      </div>
      <div class="risk-bar-track">
        <div class="risk-bar-fill fill-critical" style="width: ${critPct}%"></div>
      </div>
    </div>
  `;
}

// Render Recent Security Events
function renderRecentEvents() {
  const container = document.getElementById('recentEventsList');
  if (!container) return;

  container.innerHTML = state.recentEvents.map(evt => {
    let badgeClass = 'badge-medium';
    if (evt.severity === 'high') badgeClass = 'badge-high';
    if (evt.severity === 'critical') badgeClass = 'badge-critical';
    if (evt.severity === 'safe') badgeClass = 'badge-low';

    return `
      <div class="event-row" onclick="handleEventRowClick('${evt.threatId}')">
        <div class="event-time">${evt.time}</div>
        <div class="event-desc">
          ${evt.desc} &mdash; <span class="event-device">${evt.device}</span>
        </div>
        <div class="event-badge">
          <span class="badge ${badgeClass}">${evt.severity}</span>
        </div>
      </div>
    `;
  }).join('');
}

function handleEventRowClick(threatId) {
  if (threatId) {
    state.selectedThreatId = threatId;
    switchView('threats');
  } else {
    switchView('devices');
  }
}

// -------------------------------------------------------------------------
// DEVICES VIEW
// -------------------------------------------------------------------------
let deviceFilter = 'all';
let deviceSearchTerm = '';

function setupFilterControls() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      deviceFilter = btn.getAttribute('data-filter') || 'all';
      renderDevicesTable();
    });
  });

  const searchInput = document.getElementById('deviceSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      deviceSearchTerm = e.target.value.toLowerCase().trim();
      renderDevicesTable();
    });
  }
}

function renderDevicesTable() {
  const tbody = document.getElementById('devicesTableBody');
  if (!tbody) return;

  const filteredDevices = state.devices.filter(dev => {
    // Filter by category
    if (deviceFilter === 'online' && dev.status !== 'Online') return false;
    if (deviceFilter === 'offline' && dev.status !== 'Offline') return false;
    if (deviceFilter === 'isolated' && dev.status !== 'Isolated') return false;
    if (deviceFilter === 'high-risk' && dev.risk !== 'High') return false;

    // Search by name, ip, or type
    if (deviceSearchTerm) {
      const matchName = dev.name.toLowerCase().includes(deviceSearchTerm);
      const matchIp = dev.ip.toLowerCase().includes(deviceSearchTerm);
      const matchType = dev.type.toLowerCase().includes(deviceSearchTerm);
      return matchName || matchIp || matchType;
    }
    return true;
  });

  if (filteredDevices.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 32px; color: var(--text-muted);">
          No IoT devices matched your current filter criteria.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filteredDevices.map(dev => {
    // Status Badge
    let statusBadgeClass = 'badge-online';
    if (dev.status === 'Offline') statusBadgeClass = 'badge-offline';
    if (dev.status === 'Isolated') statusBadgeClass = 'badge-isolated';

    // Risk Badge
    let riskBadgeClass = 'badge-low';
    if (dev.risk === 'Medium') riskBadgeClass = 'badge-medium';
    if (dev.risk === 'High') riskBadgeClass = 'badge-high';

    return `
      <tr onclick="openDeviceModal('${dev.id}')">
        <td>
          <div class="device-name-cell">
            ${dev.name}
          </div>
          <div class="device-subtext">${dev.mac}</div>
        </td>
        <td>${dev.type}</td>
        <td class="ip-cell">${dev.ip}</td>
        <td>
          <span class="badge ${statusBadgeClass}">${dev.status}</span>
        </td>
        <td>
          <span class="activity-metric">${dev.activity}</span>
          <span style="font-size:11px; color:var(--text-muted); display:block;">${dev.packetRate}</span>
        </td>
        <td>
          <span class="badge ${riskBadgeClass}">${dev.risk} (${dev.riskScore})</span>
        </td>
        <td>
          <button class="table-btn" onclick="event.stopPropagation(); openDeviceModal('${dev.id}')">
            View Details
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// Open Device Detail Modal
function openDeviceModal(deviceId) {
  const dev = state.devices.find(d => d.id === deviceId);
  if (!dev) return;

  state.selectedDeviceId = deviceId;
  const modal = document.getElementById('deviceModal');
  const modalContent = document.getElementById('deviceModalBody');
  const modalTitle = document.getElementById('deviceModalTitle');
  const isolateBtn = document.getElementById('modalIsolateBtn');

  if (modalTitle) modalTitle.textContent = `${dev.name} — Device Profile`;

  if (isolateBtn) {
    if (dev.status === 'Isolated') {
      isolateBtn.textContent = 'Restore Device Connection';
      isolateBtn.className = 'btn btn-secondary';
      isolateBtn.onclick = () => restoreDevice(dev.id);
    } else {
      isolateBtn.textContent = 'Isolate Device';
      isolateBtn.className = 'btn btn-danger';
      isolateBtn.onclick = () => isolateDevice(dev.id);
    }
  }

  if (modalContent) {
    modalContent.innerHTML = `
      <div class="device-detail-grid">
        <div class="detail-item">
          <div class="detail-label">Device Type</div>
          <div class="detail-val">${dev.type}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">IP Address</div>
          <div class="detail-val">${dev.ip}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">MAC Address</div>
          <div class="detail-val">${dev.mac}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Network Zone</div>
          <div class="detail-val">${dev.zone}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Current Status</div>
          <div class="detail-val" style="color: ${dev.status === 'Isolated' ? 'var(--status-isolated)' : dev.status === 'Online' ? 'var(--status-safe)' : 'var(--text-muted)'};">
            ${dev.status}
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-label">AI Risk Score</div>
          <div class="detail-val" style="color: ${dev.riskScore > 75 ? 'var(--status-high)' : dev.riskScore > 40 ? 'var(--status-medium)' : 'var(--status-safe)'};">
            ${dev.riskScore} / 100 (${dev.risk})
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Network Protocol</div>
          <div class="detail-val">${dev.protocol}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Firmware Build</div>
          <div class="detail-val">${dev.firmware}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Observed Throughput</div>
          <div class="detail-val">${dev.activity} (${dev.packetRate})</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Learned Baseline Throughput</div>
          <div class="detail-val">${dev.baselineBandwidth}</div>
        </div>
      </div>

      <div style="background: var(--bg-card); padding: 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); margin-top: 12px;">
        <div style="font-size: 11px; text-transform: uppercase; color: var(--text-muted); font-weight: 600; margin-bottom: 6px;">Behavior Telemetry Status</div>
        <div style="font-size: 13px; color: ${dev.anomalyFlag ? '#fb7185' : 'var(--status-safe)'}; display: flex; align-items: center; gap: 8px;">
          <span>${dev.anomalyFlag ? '⚠ Behavioral Anomaly Detected — Exceeds standard operating parameters' : '✓ Operating within standard learned baseline model'}</span>
        </div>
        <div style="font-size: 11px; color: var(--text-secondary); margin-top: 4px;">Last telemetry beacon received: <strong>${dev.lastSeen}</strong></div>
      </div>
    `;
  }

  modal.classList.add('open');
}

function closeDeviceModal() {
  const modal = document.getElementById('deviceModal');
  if (modal) modal.classList.remove('open');
}

// -------------------------------------------------------------------------
// THREATS VIEW
// -------------------------------------------------------------------------
function renderThreatsView() {
  const threatListContainer = document.getElementById('threatListItems');
  if (!threatListContainer) return;

  threatListContainer.innerHTML = state.threats.map(t => {
    const isSelected = t.id === state.selectedThreatId;
    let badgeClass = 'badge-high';
    if (t.severity === 'MEDIUM') badgeClass = 'badge-medium';
    if (t.status === 'Resolved') badgeClass = 'badge-resolved';
    if (t.status === 'Contained') badgeClass = 'badge-contained';

    return `
      <div class="threat-list-item ${isSelected ? 'selected' : ''}" onclick="selectThreat('${t.id}')">
        <div class="threat-item-top">
          <span class="threat-item-title">${t.title}</span>
          <span class="badge ${badgeClass}">${t.status}</span>
        </div>
        <div class="threat-item-meta">
          <span>${t.deviceName}</span>
          <span>Risk ${t.riskScore}/100</span>
        </div>
      </div>
    `;
  }).join('');

  renderSelectedThreatDetail();
}

function selectThreat(threatId) {
  state.selectedThreatId = threatId;
  renderThreatsView();
}

function renderSelectedThreatDetail() {
  const container = document.getElementById('threatDetailContent');
  if (!container) return;

  const threat = state.threats.find(t => t.id === state.selectedThreatId) || state.threats[0];
  if (!threat) return;

  const device = state.devices.find(d => d.id === threat.deviceId);

  let statusBadge = 'badge-active';
  if (threat.status === 'Contained') statusBadge = 'badge-contained';
  if (threat.status === 'Resolved') statusBadge = 'badge-resolved';

  const isIsolated = device && device.status === 'Isolated';
  const isResolved = threat.status === 'Resolved';

  container.innerHTML = `
    <div class="threat-detail-header">
      <div class="threat-title-group">
        <h3>${threat.title}</h3>
        <div class="threat-target-info">
          <span>Target: <strong>${threat.deviceName}</strong> (${threat.deviceType})</span>
          <span>IP: <strong>${threat.ip}</strong></span>
          <span>Detected: <strong>${threat.time}</strong></span>
        </div>
      </div>
      <div>
        <span class="badge ${statusBadge}" style="font-size: 13px; padding: 6px 12px;">${threat.status}</span>
      </div>
    </div>

    <!-- Metrics Row -->
    <div class="threat-metrics-row">
      <div class="metric-box">
        <div class="metric-box-title">Risk Score</div>
        <div class="metric-box-val" style="color: ${threat.riskScore > 75 ? 'var(--status-high)' : 'var(--status-medium)'};">
          ${threat.riskScore} <span style="font-size: 13px; font-weight: normal; color: var(--text-muted);">/ 100</span>
        </div>
      </div>
      <div class="metric-box">
        <div class="metric-box-title">Severity Level</div>
        <div class="metric-box-val" style="color: ${threat.severity === 'HIGH' ? 'var(--status-high)' : 'var(--status-medium)'};">
          ${threat.severity}
        </div>
      </div>
      <div class="metric-box">
        <div class="metric-box-title">Anomaly Deviation</div>
        <div class="metric-box-val" style="color: var(--accent-cyan);">
          ${threat.forensics.anomalyRatio}
        </div>
      </div>
    </div>

    <!-- AI Analysis Card -->
    <div class="ai-explanation-box">
      <div class="ai-box-header">
        <span class="ai-tag">AI ENGINE</span>
        <span class="ai-box-title">Explainable Detection Rationale</span>
      </div>
      <ul class="ai-reason-list">
        ${threat.aiReasons.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>

    <!-- Behavior Comparison -->
    <div style="margin-bottom: 8px; font-size: 12px; font-weight: 600; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.6px;">
      Behavioral Baseline Deviation Comparison
    </div>
    <div class="behavior-comparison-grid">
      <div class="behavior-card normal">
        <div class="behavior-header">
          <span>✓</span> ${threat.normalBehavior.title}
        </div>
        <div class="behavior-text">
          ${threat.normalBehavior.description}
        </div>
        <div class="behavior-stats-line">Throughput: ${threat.normalBehavior.bandwidth}</div>
        <div class="behavior-stats-line">Target: ${threat.normalBehavior.destination}</div>
        <div class="behavior-stats-line">Protocol: ${threat.normalBehavior.ports}</div>
      </div>

      <div class="behavior-card observed">
        <div class="behavior-header">
          <span>⚠</span> ${threat.observedBehavior.title}
        </div>
        <div class="behavior-text">
          ${threat.observedBehavior.description}
        </div>
        <div class="behavior-stats-line">Throughput: ${threat.observedBehavior.bandwidth}</div>
        <div class="behavior-stats-line">Target: ${threat.observedBehavior.destination}</div>
        <div class="behavior-stats-line">Protocol: ${threat.observedBehavior.ports}</div>
      </div>
    </div>

    <!-- Response Actions -->
    <div class="action-buttons-row">
      <button class="btn btn-danger" id="isolateActionBtn" onclick="isolateDevice('${threat.deviceId}')" ${isIsolated ? 'disabled' : ''}>
        ${isIsolated ? '✓ Device Isolated' : 'Isolate Device'}
      </button>

      <button class="btn btn-secondary" onclick="openInvestigationModal('${threat.id}')">
        Investigate
      </button>

      <button class="btn btn-success" onclick="resolveThreat('${threat.id}')" ${isResolved ? 'disabled' : ''}>
        ${isResolved ? '✓ Marked as Resolved' : 'Mark as Resolved'}
      </button>
    </div>
  `;
}

// -------------------------------------------------------------------------
// SIMULATED RESPONSE ACTIONS
// -------------------------------------------------------------------------

// 1. Isolate Device
function isolateDevice(deviceId) {
  const targetId = deviceId || state.selectedDeviceId;
  const device = state.devices.find(d => d.id === targetId);
  if (!device) return;

  // Change device status
  device.status = 'Isolated';
  device.activity = '0.0 KB/s (Quarantined)';
  device.packetRate = '0 pps';
  device.anomalyFlag = false;

  // Update corresponding threat if active
  const associatedThreat = state.threats.find(t => t.deviceId === targetId);
  if (associatedThreat && associatedThreat.status !== 'Resolved') {
    associatedThreat.status = 'Contained';
  }

  // Add event to timeline
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  state.incidents.push({
    time: timeStr,
    title: 'Device Isolated',
    detail: `${device.name} quarantined via SDN access-control list. Network egress blocked.`,
    type: 'action'
  });

  // Add event to recent events
  state.recentEvents.unshift({
    time: timeStr,
    desc: `Device isolated as part of automated incident response`,
    device: device.name,
    severity: 'medium',
    threatId: associatedThreat ? associatedThreat.id : null
  });

  // Update audit evidence hash to reflect newly appended action
  generateNewAuditEvidenceHash();

  // Notify user
  showToast(`Action Executed: ${device.name} has been isolated successfully.`, 'danger');

  // Close modal if open
  closeDeviceModal();

  // Re-render
  renderAll();
}

// Restore device connection
function restoreDevice(deviceId) {
  const targetId = deviceId || state.selectedDeviceId;
  const device = state.devices.find(d => d.id === targetId);
  if (!device) return;

  device.status = 'Online';
  device.activity = device.baselineBandwidth;
  device.packetRate = '12 pps';

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  state.incidents.push({
    time: timeStr,
    title: 'Device Quarantine Lifted',
    detail: `${device.name} network isolation removed by security analyst. Returned to normal monitoring.`,
    type: 'default'
  });

  showToast(`Connection Restored: ${device.name} is now back online.`, 'success');
  closeDeviceModal();
  renderAll();
}

// 2. Investigate Action Modal
function openInvestigationModal(threatId) {
  const threat = state.threats.find(t => t.id === threatId) || state.threats[0];
  if (!threat) return;

  const modal = document.getElementById('investigationModal');
  const modalContent = document.getElementById('investigationModalBody');
  const modalTitle = document.getElementById('investigationModalTitle');

  if (modalTitle) modalTitle.textContent = `Forensic Telemetry Investigation — ${threat.deviceName}`;

  if (modalContent) {
    modalContent.innerHTML = `
      <div style="margin-bottom: 16px; font-size: 13px; color: var(--text-secondary);">
        Detailed behavioral and netflow telemetry captured by the AI monitoring engine for anomaly correlation.
      </div>

      <div class="device-detail-grid">
        <div class="detail-item">
          <div class="detail-label">Detected Anomaly Type</div>
          <div class="detail-val" style="color: var(--accent-cyan);">${threat.category}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Payload Entropy Index</div>
          <div class="detail-val">${threat.forensics.payloadEntropy} (Encrypted)</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Packet Ingestion Spike</div>
          <div class="detail-val">${threat.forensics.packetVolume}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Deviation Ratio</div>
          <div class="detail-val" style="color: var(--status-high);">${threat.forensics.anomalyRatio}</div>
        </div>
      </div>

      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 14px; margin-top: 14px;">
        <div style="font-size: 11px; text-transform: uppercase; color: var(--text-muted); font-weight: 600; margin-bottom: 6px;">External Communication Endpoint</div>
        <div style="font-family: var(--font-mono); font-size: 12px; color: #fb7185;">
          Destination IP: ${threat.observedBehavior.destination}
        </div>
        <div style="font-family: var(--font-mono); font-size: 11px; color: var(--text-muted); margin-top: 2px;">
          Threat Intelligence Flag: Unregistered egress IP &bull; ASN 13335 Suspicious Host &bull; Port 4444
        </div>
      </div>

      <div style="background: rgba(37, 99, 235, 0.08); border-left: 3px solid var(--accent-blue); padding: 12px 14px; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; margin-top: 14px;">
        <div style="font-size: 11px; text-transform: uppercase; color: var(--accent-blue); font-weight: 600; margin-bottom: 2px;">SOC Recommended Mitigation</div>
        <div style="font-size: 13px; color: var(--text-primary);">${threat.forensics.recommendedAction}</div>
      </div>
    `;
  }

  modal.classList.add('open');
}

function closeInvestigationModal() {
  const modal = document.getElementById('investigationModal');
  if (modal) modal.classList.remove('open');
}

// 3. Mark as Resolved Action
function resolveThreat(threatId) {
  const threat = state.threats.find(t => t.id === threatId);
  if (!threat) return;

  threat.status = 'Resolved';
  threat.riskScore = 15;

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  // Add event to timeline
  state.incidents.push({
    time: timeStr,
    title: 'Alert Resolved',
    detail: `Threat "${threat.title}" on ${threat.deviceName} marked as resolved following manual analyst review.`,
    type: 'success'
  });

  // Add event to recent events
  state.recentEvents.unshift({
    time: timeStr,
    desc: `Alert resolved by security analyst`,
    device: threat.deviceName,
    severity: 'safe',
    threatId: threat.id
  });

  // Re-hash evidence audit
  generateNewAuditEvidenceHash();

  showToast(`Alert Resolved: Threat on ${threat.deviceName} has been marked as resolved.`, 'success');

  renderAll();
}

// -------------------------------------------------------------------------
// INCIDENTS & AUDIT VIEW
// -------------------------------------------------------------------------
function renderAuditView() {
  // Render timeline
  const timelineContainer = document.getElementById('auditTimeline');
  if (timelineContainer) {
    timelineContainer.innerHTML = state.incidents.map(inc => {
      let nodeClass = 'timeline-node';
      if (inc.type === 'alert') nodeClass += ' node-alert';
      if (inc.type === 'action') nodeClass += ' node-action';
      if (inc.type === 'success') nodeClass += ' node-success';

      return `
        <div class="timeline-item">
          <div class="${nodeClass}"></div>
          <div class="timeline-header">
            <span class="timeline-time">${inc.time}</span>
            <span class="timeline-title">${inc.title}</span>
          </div>
          <div class="timeline-detail">${inc.detail}</div>
        </div>
      `;
    }).join('');
  }

  // Render evidence integrity card
  const evidenceContainer = document.getElementById('evidenceCardContainer');
  if (evidenceContainer) {
    evidenceContainer.innerHTML = `
      <div class="evidence-header">
        <span class="evidence-title">Cryptographic Evidence Integrity</span>
        <span class="badge badge-resolved">
          <span>✓</span> ${state.evidence.status}
        </span>
      </div>

      <div class="evidence-field">
        <div class="evidence-field-label">Verification Algorithm</div>
        <div class="evidence-field-val">${state.evidence.algorithm}</div>
      </div>

      <div class="evidence-field">
        <div class="evidence-field-label">Current Audit Ledger Digest (Merkle Root)</div>
        <div class="evidence-field-val" id="evidenceHashDisplay">${state.evidence.hash}</div>
      </div>

      <div class="evidence-field">
        <div class="evidence-field-label">Audit Record ID & Timestamp</div>
        <div class="evidence-field-val" style="color: var(--text-secondary);">
          ${state.evidence.auditId} &bull; Sealed at ${state.evidence.timestamp}
        </div>
      </div>

      <div class="evidence-note">
        <strong>Security Notice:</strong> Hash verification helps detect unauthorized modification of stored evidence. 
        <em>Note: Hash integrity alone does not guarantee legal admissibility without a verified custody workflow.</em>
      </div>

      <div style="margin-top: 18px; display: flex; gap: 10px;">
        <button class="btn btn-secondary" onclick="verifyEvidenceHash()">
          Verify Hash Signature
        </button>
        <button class="btn btn-secondary" onclick="exportAuditReport()">
          Export Audit Trail (JSON)
        </button>
      </div>
    `;
  }
}

// Generate new deterministic simulated SHA-256 hash when changes occur
function generateNewAuditEvidenceHash() {
  const chars = '0123456789abcdef';
  let newHash = '';
  for (let i = 0; i < 64; i++) {
    newHash += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  state.evidence.hash = newHash;
  state.evidence.timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
}

function verifyEvidenceHash() {
  showToast('Evidence Verification: SHA-256 Digest matches tamper-evident ledger signature.', 'success');
}

function exportAuditReport() {
  const report = {
    platform: 'CyberShield IoT Security Platform',
    reportType: 'Incident Response & Evidence Audit Log',
    generatedAt: new Date().toISOString(),
    evidenceIntegrity: state.evidence,
    incidentTimeline: state.incidents,
    activeThreats: state.threats,
    monitoredDevices: state.devices.map(d => ({
      name: d.name,
      ip: d.ip,
      status: d.status,
      riskScore: d.riskScore
    }))
  };

  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(report, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `cybershield-audit-${Date.now()}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  showToast('Audit trail exported successfully as JSON.', 'success');
}

// -------------------------------------------------------------------------
// UI UTILITIES
// -------------------------------------------------------------------------
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${message}</span>
    <span style="cursor: pointer; margin-left: 12px; font-weight: bold;" onclick="this.parentElement.remove()">×</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function startClock() {
  const clockEl = document.getElementById('liveClock');
  if (!clockEl) return;

  const update = () => {
    const now = new Date();
    const utcHours = String(now.getUTCHours()).padStart(2, '0');
    const utcMins = String(now.getUTCMinutes()).padStart(2, '0');
    const utcSecs = String(now.getUTCSeconds()).padStart(2, '0');
    clockEl.textContent = `${utcHours}:${utcMins}:${utcSecs} UTC`;
  };

  update();
  setInterval(update, 1000);
}

// Make functions globally accessible for inline event handlers
window.switchView = switchView;
window.openDeviceModal = openDeviceModal;
window.closeDeviceModal = closeDeviceModal;
window.openInvestigationModal = openInvestigationModal;
window.closeInvestigationModal = closeInvestigationModal;
window.isolateDevice = isolateDevice;
window.restoreDevice = restoreDevice;
window.resolveThreat = resolveThreat;
window.selectThreat = selectThreat;
window.handleEventRowClick = handleEventRowClick;
window.verifyEvidenceHash = verifyEvidenceHash;
window.exportAuditReport = exportAuditReport;
