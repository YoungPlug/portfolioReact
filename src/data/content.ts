import type {
  StatusRow,
  StackLayer,
  Project,
  TimelineItem,
  NavLink,
} from '../types'

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
]

export const statusRows: StatusRow[] = [
  { label: 'Location', value: 'Novi Sad, Serbia' },
  { label: 'Rate', value: '$15.00 / hr' },
  { label: 'Availability', value: '30+ hrs / week' },
  { label: 'Engagement', value: 'Contract-to-hire' },
  { label: 'Languages', value: 'English, Russian (native)' },
]

export const stackLayers: StackLayer[] = [
  {
    index: 'F',
    label: 'Front-end & web',
    chips: ['HTML / CSS3', 'JavaScript', "Typescript", "React", 'jQuery', 'WordPress', 'SEO'],
  },
  {
    index: 'B',
    label: 'Back-end & data',
    chips: [
      'C#',
      'PHP',
      'ASP.NET',
      'Web API',
      'Database Management',
      'System Administration',
    ],
  },
  {
    index: 'D',
    label: 'Desktop & mobile',
    chips: [
      'SwiftUI',
      'iOS Development',
      'Windows Presentation Foundation',
      'Windows App Development',
      'Desktop App Testing',
    ],
  },
]

export const projects: Project[] = [
  {
    num: '01',
    title: 'TomorrowSkateCrew — E-commerce website',
    description:
      "A personal project built for a skateboard deck brand using ASP.NET Core and Razor Pages: a full product catalog, an order processing system, and a responsive UI styled with Bootstrap.",
    tags: ['ASP.NET Core', 'Razor Pages', 'Bootstrap'],
    linkHref: 'https://github.com/YoungPlug/TomorrowSkateCrew',
    linkLabel: 'View on GitHub →',
  },
]

export const experience: TimelineItem[] = [
  {
    num: '1',
    when: 'September 2025 — Present',
    role: "Senior Engineer, Alkor and Co. (L'Etoile)",
    description:
      "Front-end development of the website for one of the largest beauty retailers in Russia.",
  },
  {
    num: '2',
    when: 'April 2024 — July 2024',
    role: "Junior QA Engineer, Alkor and Co. (L'Etoile)",
    description:
      "Tested the website and iOS application for one of the largest beauty retailers in Russia.",
  },
]

export const education: TimelineItem[] = [
  {
    num: '1',
    when: '2025 — 2030 (expected)',
    role: 'Bachelor of Engineering (BEng), Computer Engineering and Programming',
    description: 'Russian Cooperational University',
  },
  {
    num: '2',
    when: '2020 — 2024',
    role: "Engineer's Degree, Computer Engineering and Programming",
    description: "Moscow's Technical College",
  },
]
