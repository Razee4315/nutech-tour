export const locations = [
  {
    id: 1,
    title: 'Academic Block',
    image: `${process.env.PUBLIC_URL}/images/Academic_block.jpg`,
    info: 'NUTECH Academic Block: Classrooms, labs, and faculty offices.',
    hotSpots: [
      { yaw: -4.96, pitch: 3.33, type: 'custom', text: 'To Atrium', handleClick: (setCurrentLocation) => setCurrentLocation(3) },
      { yaw: -124.78, pitch: 1.07, type: 'custom', text: 'To Campus Pathway', handleClick: (setCurrentLocation) => setCurrentLocation(1) },
      { yaw: -157.51, pitch: 0.16, type: 'info', cssClass: 'info-hotspot', text: 'Secondary Admin area access.' },
      { yaw: -77.67, pitch: -0.34, type: 'info', cssClass: 'info-hotspot', text: 'Lab Block.' },
      { yaw: -3.79, pitch: 12.55, type: 'info', cssClass: 'info-hotspot', text: 'NUTECH Academic Block.' },
      { yaw: 63.72, pitch: 6.50, type: 'info', cssClass: 'info-hotspot', text: 'NSDD Office Block.' },
      { yaw: -129.24, pitch: 1.15, type: 'info', cssClass: 'info-hotspot', text: 'HBL ATM.' },
      { yaw: -42.96, pitch: 5.61, type: 'info', cssClass: 'info-hotspot', text: 'Student Cafeteria.' }
    ]
  },
  {
    id: 2,
    title: 'Campus Pathway',
    image: `${process.env.PUBLIC_URL}/images/Campus_Pathway.jpg`,
    info: 'Central NUTECH pathway connecting key campus areas.',
    hotSpots: [
      { yaw: 14.89, pitch: -0.28, type: 'custom', text: 'To Academic Block', handleClick: (setCurrentLocation) => setCurrentLocation(0) },
      { yaw: 44.66, pitch: 7.84, type: 'custom', text: 'To Auditorium Area', handleClick: (setCurrentLocation) => setCurrentLocation(5) },
      { yaw: 133.71, pitch: 6.48, type: 'custom', text: 'To Main Walkway', handleClick: (setCurrentLocation) => setCurrentLocation(2) },
      { yaw: -15.69, pitch: 11.07, type: 'info', cssClass: 'info-hotspot', text: 'Lab Block.' },
      { yaw: 4.64, pitch: 11.56, type: 'info', cssClass: 'info-hotspot', text: 'Academic Block.' },
      { yaw: -38.50, pitch: 1.65, type: 'info', cssClass: 'info-hotspot', text: 'Faculty & Guest Parking.' },
      { yaw: 36.87, pitch: 15.53, type: 'info', cssClass: 'info-hotspot', text: 'Auditorium.' }
    ]
  },
  {
    id: 3,
    title: 'Main Walkway',
    image: `${process.env.PUBLIC_URL}/images/Main_walkway.jpg`,
    info: 'Main Walkway: Primary access to the NUTECH campus.',
    hotSpots: [
      { yaw: -63.61, pitch: -5.24, type: 'custom', text: 'To Campus Pathway', handleClick: (setCurrentLocation) => setCurrentLocation(1) },
      { yaw: -162.86, pitch: 8.29, type: 'custom', text: 'To Main Entrance', handleClick: (setCurrentLocation) => setCurrentLocation(6) },
      { yaw: -155.52, pitch: 6.60, type: 'info', cssClass: 'info-hotspot', text: 'NUTECH Exit Point.' },
      { yaw: 86.96, pitch: 13.55, type: 'info', cssClass: 'info-hotspot', text: 'CTTI Building (Adjacent).' },
      { yaw: 46.79, pitch: 3.63, type: 'info', cssClass: 'info-hotspot', text: 'Friendship Park.' },
      { yaw: 2.46, pitch: 3.97, type: 'info', cssClass: 'info-hotspot', text: 'Flag Display Area.' }
    ]
  },
  {
    id: 7,
    title: 'Atrium',
    image: `${process.env.PUBLIC_URL}/images/Atrium.jpg`,
    info: 'NUTECH Atrium: Central information and networking hub.',
    hotSpots: [
      { yaw: 27.52, pitch: -5.70, type: 'custom', text: 'To Level 3 Exhibits', handleClick: (setCurrentLocation) => setCurrentLocation(4) },
      { yaw: -176.84, pitch: -7.05, type: 'custom', text: 'To Academic Block', handleClick: (setCurrentLocation) => setCurrentLocation(0) },
      { yaw: -67.22, pitch: -5.24, type: 'info', cssClass: 'info-hotspot', text: 'Information Desk.' },
      { yaw: 0.72, pitch: -2.09, type: 'info', cssClass: 'info-hotspot', text: 'Elevator Access.' },
      { yaw: 24.18, pitch: 3.33, type: 'info', cssClass: 'info-hotspot', text: 'Access to Level 3 where Job Fair display are hosted.' },
      { yaw: 79.22, pitch: -3.44, type: 'info', cssClass: 'info-hotspot', text: 'NUTECH Info & Display.' }
    ]
  },
  {
    id: 8,
    title: 'Level 3',
    image: `${process.env.PUBLIC_URL}/images/level_3.jpg`,
    info: 'NUTECH Level 3: Main display area for Job Fair exhibits and company booths.',
    hotSpots: [
      { yaw: -92.03, pitch: -25.09, type: 'custom', text: 'Back to Atrium', handleClick: (setCurrentLocation) => setCurrentLocation(3) },
      { yaw: 1.17, pitch: -5.24, type: 'info', cssClass: 'info-hotspot', text: 'Job Fair displays and company interactions are hosted in this area.' }
    ]
  },
  {
    id: 12,
    title: 'Auditorium External View',
    image: `${process.env.PUBLIC_URL}/images/Auditorium_external_view.jpg`,
    info: 'NUTECH Auditorium: Venue for presentations and company interactions.',
    hotSpots: [
      { yaw: 168.72, pitch: -4.79, type: 'custom', text: 'To Campus Pathway', handleClick: (setCurrentLocation) => setCurrentLocation(1) },
      { yaw: -56.84, pitch: 7.60, type: 'info', cssClass: 'info-hotspot', text: 'NUTECH Auditorium Entrance.' }
    ]
  },
  {
    id: 14,
    title: 'Main Entrance',
    image: `${process.env.PUBLIC_URL}/images/main_entrance.jpg`,
    info: 'NUTECH Main Entrance: Primary access point for visitors.',
    hotSpots: [
      { yaw: -1.35, pitch: 0.62, type: 'custom', text: 'To Main Walkway', handleClick: (setCurrentLocation) => setCurrentLocation(2) },
      { yaw: -16.51, pitch: 1.40, type: 'info', cssClass: 'info-hotspot', text: 'NUTECH Entrance.' },
      { yaw: 40.15, pitch: 0.50, type: 'info', cssClass: 'info-hotspot', text: 'CTTI Entrance (Adjacent).' },
      { yaw: 99.25, pitch: 2.76, type: 'info', cssClass: 'info-hotspot', text: 'Visitor Parking.' },
      { yaw: -87.97, pitch: -0.85, type: 'info', cssClass: 'info-hotspot', text: 'Security Checkpoint.' },
      { yaw: -130.38, pitch: -2.66, type: 'info', cssClass: 'info-hotspot', text: 'Main IJP Road Access.' }
    ]
  }
];

export const tutorialSteps = [
  {
    title: 'NUTECH Virtual Tour',
    content: 'Campus navigation guide. Use hotspots to move between locations.'
  },
  {
    title: 'Campus Navigation',
    content: 'Click labeled text hotspots to change views. Hover on blue icons for brief location info.'
  },
  {
    title: 'Explore NUTECH',
    content: 'View key campus areas like the Atrium and Auditorium.'
  },
  {
    title: 'Navigation Tools',
    content: 'Use "All Views" to jump to locations. "Home" returns to Main Entrance. "Previous" goes back.'
  },
  {
    title: 'End of Guide',
    content: 'You can now navigate the NUTECH campus tour.'
  }
]; 