import { SymposiumEvent, ScheduleItem } from '../types';

export const EVENTS_DATA: SymposiumEvent[] = [
  {
    id: "evt-01",
    title: "Coding Odyssey",
    category: "technical",
    tagline: "Battle of algorithms, speed, and clean code architecture.",
    description: "Test your computational problem-solving abilities in a timed competitive programming environment. Conquer algorithmic puzzles ranging from data structures to dynamic programming.",
    teamSize: "1 - 2 Members",
    maxTeamSize: 2,
    timing: "10:30 AM - 01:00 PM",
    venue: "Computer Science Lab 1 & 2",
    prize: "₹ 8,000 + Trophy",
    icon: "Code2",
    rules: [
      "Languages permitted: C, C++, Java, Python 3.",
      "Round 1: 30-minute MCQs on data structures & algorithm complexity.",
      "Round 2: 90-minute live coding challenge with 4 algorithmic problems.",
      "Plagiarism or external internet assistance will result in instant disqualification."
    ],
    coordinators: "S. Vignesh (+91 98401 99887) | K. Priya (+91 97891 22334)"
  },
  {
    id: "evt-02",
    title: "Bug Hunt (Debugging)",
    category: "technical",
    tagline: "Spot syntax errors, memory leaks, and logical glitches.",
    description: "An intensive code debugging challenge. Participants are presented with buggy, obfuscated code snippets across multiple languages and must fix compile-time and runtime bugs before time runs out.",
    teamSize: "1 Member (Individual)",
    maxTeamSize: 1,
    timing: "11:00 AM - 01:00 PM",
    venue: "Programming Lab 3",
    prize: "₹ 6,000 + Certificate",
    icon: "Bug",
    rules: [
      "Individual participation only.",
      "Codes will contain syntax errors, logical errors, and edge-case bugs.",
      "Round 1: 20 minutes (Basic C/C++ debugging).",
      "Round 2: 40 minutes (Advanced Python/Java debugging)."
    ],
    coordinators: "R. Karthik (+91 98402 33445)"
  },
  {
    id: "evt-03",
    title: "Web Crafters (Web Development)",
    category: "technical",
    tagline: "Design and build modern responsive web UIs under 2 hours.",
    description: "Showcase your web design and front-end engineering skills! Given a secret theme on the spot, craft a visually stunning, responsive web landing page using HTML5, CSS3, and JavaScript.",
    teamSize: "1 - 2 Members",
    maxTeamSize: 2,
    timing: "10:30 AM - 01:00 PM",
    venue: "Web Technology Lab",
    prize: "₹ 8,000 + Trophy",
    icon: "Layout",
    rules: [
      "All assets and base guidelines provided at start of event.",
      "Frameworks or templates are restricted; vanilla HTML/CSS/JS only.",
      "Judged on UI/UX aesthetic quality, responsive layout, smooth animations, and code cleanliness."
    ],
    coordinators: "M. Aravind (+91 98403 44556)"
  },
  {
    id: "evt-04",
    title: "Mind Matrix (Technical Quiz)",
    category: "technical",
    tagline: "Rapid-fire trivia on Computer Science, AI, and Tech Trends.",
    description: "The ultimate technical quiz testing your breadth of knowledge across computer systems, tech history, famous founders, artificial intelligence, networking, and emerging tech.",
    teamSize: "2 Members",
    maxTeamSize: 2,
    timing: "02:00 PM - 03:45 PM",
    venue: "Main Campus Auditorium",
    prize: "₹ 6,000 + Certificate",
    icon: "Brain",
    rules: [
      "Team of 2 members.",
      "Round 1: Written preliminary screening test (25 Questions).",
      "Top 6 teams advance to the Stage Buzzer Round."
    ],
    coordinators: "P. Harish (+91 98404 55667)"
  },
  {
    id: "evt-05",
    title: "InnovateX (Paper Presentation)",
    category: "technical",
    tagline: "Present your research paper, IoT prototype, or AI innovation.",
    description: "A platform to present groundbreaking research papers, innovative project prototypes, or novel software solutions to a distinguished jury of academicians and industry tech leads.",
    teamSize: "1 - 3 Members",
    maxTeamSize: 3,
    timing: "10:30 AM - 01:00 PM",
    venue: "Seminar Hall A",
    prize: "₹ 10,000 + Trophy",
    icon: "FileText",
    rules: [
      "Abstract must be submitted prior to or on event day.",
      "Presentation time: 7 minutes PPT + 3 minutes Q&A with panel.",
      "IEEE standard paper format encouraged."
    ],
    coordinators: "Dr. R. Sundar (+91 98405 66778)"
  },
  {
    id: "evt-06",
    title: "Connection",
    category: "non-technical",
    tagline: "Connect the clues, images, and hints to uncover hidden words.",
    description: "A fun and brain-teasing image association challenge! Decode cryptic visual puzzles, movie references, tech logos, and everyday proverbs by connecting multiple picture clues.",
    teamSize: "2 Members",
    maxTeamSize: 2,
    timing: "10:30 AM - 01:00 PM",
    venue: "Seminar Hall B",
    prize: "₹ 5,000 + Certificate",
    icon: "Link2",
    rules: [
      "Team of 2 participants.",
      "Round 1: Preliminary visual slides test.",
      "Round 2: Rapid connections on stage."
    ],
    coordinators: "T. Divya (+91 98406 77889)"
  },
  {
    id: "evt-07",
    title: "Treasure Hunt",
    category: "non-technical",
    tagline: "Decipher QR codes and hidden clues across campus.",
    description: "An adventurous campus-wide quest! Solve intricate riddles, decipher encrypted QR codes, and race against time to locate hidden checkpoints scattered throughout the NPSBCET campus.",
    teamSize: "3 - 4 Members",
    maxTeamSize: 4,
    timing: "10:30 AM - 01:00 PM",
    venue: "Central Lawn & Campus-wide",
    prize: "₹ 8,000 + Trophy",
    icon: "Compass",
    rules: [
      "Team size: 3 to 4 members.",
      "Each clue unlocks the location of the subsequent station.",
      "First team to crack the final cipher chest wins!"
    ],
    coordinators: "G. Sanjay (+91 98407 88990)"
  },
  {
    id: "evt-08",
    title: "Meme Alchemy (Meme Creation)",
    category: "non-technical",
    tagline: "Turn tech life and engineering struggles into viral humor.",
    description: "Express your humor and satirical genius! Craft hilarious, relatable memes centered around engineering student life, online classes, programming bugs, and tech industry culture.",
    teamSize: "1 Member (Individual)",
    maxTeamSize: 1,
    timing: "02:00 PM - 03:30 PM",
    venue: "CAD Lab",
    prize: "₹ 4,000 + Certificate",
    icon: "Smile",
    rules: [
      "Individual entry.",
      "Topic will be announced on spot.",
      "45 minutes crafting time."
    ],
    coordinators: "N. Preethi (+91 98408 99001)"
  },
  {
    id: "evt-09",
    title: "Cyber Arena (Gaming E-Sports)",
    category: "non-technical",
    tagline: "Battle royale and tactical FPS tournament for gaming champions.",
    description: "Get your squad ready for ultimate adrenaline! Compete in high-stakes tactical shooter and battle royale matches (BGMI / Valorant) to claim the TECITON Esports Championship.",
    teamSize: "4 Members",
    maxTeamSize: 4,
    timing: "01:30 PM - 04:00 PM",
    venue: "Gaming Arena (Lab 4)",
    prize: "₹ 10,000 + Trophy",
    icon: "Gamepad2",
    rules: [
      "Full squad of 4 players.",
      "Custom room credentials shared prior to match.",
      "Fair play policy enforced."
    ],
    coordinators: "V. Nithin (+91 98409 00112)"
  },
  {
    id: "evt-10",
    title: "Surprise Arena",
    category: "non-technical",
    tagline: "On-spot surprise mini-challenges to test agility and luck.",
    description: "Expect the unexpected! A series of energetic, fast-paced minute-to-win-it games, physical mini-challenges, and spontaneous fun tasks designed to test reflex and team coordination.",
    teamSize: "1 - 2 Members",
    maxTeamSize: 2,
    timing: "02:00 PM - 03:30 PM",
    venue: "Campus Amphitheatre",
    prize: "₹ 4,000 + Certificate",
    icon: "Sparkles",
    rules: [
      "Open to all symposium participants.",
      "Rules revealed 1 minute before each round begins."
    ],
    coordinators: "K. Rahul (+91 98410 11223)"
  }
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  {
    time: "08:30 AM - 09:30 AM",
    title: "Reporting & Desk Verification",
    description: "Delegate check-in, registration pass validation, breakfast, and kit distribution at Main Auditorium.",
    icon: "Sun"
  },
  {
    time: "09:30 AM - 10:15 AM",
    title: "Grand Inauguration Ceremony",
    description: "Welcome address by College Dignitaries, Chief Guest keynote speech, and TECITON 2026 official launch.",
    icon: "Sparkles"
  },
  {
    time: "10:30 AM - 01:00 PM",
    title: "Morning Tech & Non-Tech Round 1",
    description: "Events: Coding Odyssey, Paper Presentation, Bug Hunt, Connection, Treasure Hunt kick-off.",
    icon: "Terminal"
  },
  {
    time: "01:00 PM - 02:00 PM",
    title: "Lunch Break & Delegate Networking",
    description: "Complimentary lunch for all registered delegates in the Campus Dining Hall.",
    icon: "Coffee"
  },
  {
    time: "02:00 PM - 03:45 PM",
    title: "Final Showdowns & E-Sports",
    description: "Web Development final showdown, E-Sports Arena, Meme Contest judging, Tech Quiz stage finals.",
    icon: "Gamepad2"
  },
  {
    time: "04:00 PM - 05:00 PM",
    title: "Valedictory & Prize Distribution",
    description: "Awarding Cash Prizes (₹75,000+), Trophies, Certificates, and Overall Championship Shield!",
    icon: "Trophy",
    isGold: true
  }
];
