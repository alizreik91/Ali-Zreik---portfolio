import { Project, Skill, Experience, Certificate, Education } from './types';

import img36 from './assets/images/photo_2026-04-05_00-41-36.jpg';
import img44 from './assets/images/photo_2026-04-05_00-41-44.jpg';
import img47 from './assets/images/photo_2026-04-05_00-41-47.jpg';
import img50 from './assets/images/photo_2026-04-05_00-41-50.jpg';
import img56 from './assets/images/photo_2026-04-05_00-41-56.jpg';
import img02 from './assets/images/photo_2026-04-05_00-42-02.jpg';
import img05 from './assets/images/photo_2026-04-05_00-42-05.jpg';
import img09 from './assets/images/photo_2026-04-05_00-42-09.jpg';
import img13 from './assets/images/photo_2026-04-05_00-42-13.jpg';
import img16 from './assets/images/photo_2026-04-05_00-42-16.jpg';
import img20 from './assets/images/photo_2026-04-05_00-42-20.jpg';
import img23 from './assets/images/photo_2026-04-05_00-42-23.jpg';
import img25 from './assets/images/photo_2026-04-05_00-42-25.jpg';

export const projectsData: Project[] = [
  {
    id: '01',
    title: 'Brand Reveal Poster',
    category: 'Social Media Poster',
    description: 'High-end social media campaign poster introducing a minimalist brand aesthetic.',
    imageUrl: img36,
    details: [
      'Balanced layout with high-impact central typography.',
      'Carefully curated color grading tailored for luxury aesthetics.',
      'Optimized for digital feed display and social engagement.'
    ],
    toolsUsed: ['Visual Design', 'Typography'],
    year: '2025'
  },
  {
    id: '02',
    title: 'Social Media Campaign',
    category: 'Social Media Poster',
    description: 'Dynamic feed graphic and high-converting visual poster that boosts online engagement.',
    imageUrl: img44,
    details: [
      'Custom layout designed to capture audience attention instantly.',
      'Strategic color mapping aligned with modern branding rules.',
      'Highly legible call-to-actions built for maximum interaction.'
    ],
    toolsUsed: ['Creative Direction', 'Color Theory'],
    year: '2025'
  },
  {
    id: '03',
    title: 'Editorial Fashion Poster',
    category: 'Social Media Poster',
    description: 'Avant-garde social media poster blending fashion portraiture with bold typographic overlays.',
    imageUrl: img47,
    details: [
      'Clean, asymmetrical layout utilizing generous white space.',
      'High-contrast header styling to establish visual hierarchy.',
      'Sophisticated placement of promotional copy for editorial appeal.'
    ],
    toolsUsed: ['Typography', 'Layout Design'],
    year: '2026'
  },
  {
    id: '04',
    title: 'Vanguard Coffee Poster',
    category: 'Social Media Poster',
    description: 'Organic-themed promo poster showcasing premium specialty packaging for coffee lovers.',
    imageUrl: img50,
    details: [
      'Warm, earth-toned color selection to evoke rich organic flavors.',
      'Elegant botanical illustrations blended with clean brand elements.',
      'Balanced visual spacing highlighting sensory details.'
    ],
    toolsUsed: ['Vector Illustration', 'Brand Integration'],
    year: '2025'
  },
  {
    id: '05',
    title: 'Aura Cosmetics Poster',
    category: 'Social Media Poster',
    description: 'Soft-pastel product showcase poster highlighting organic beauty ingredients.',
    imageUrl: img56,
    details: [
      'Cohesive palette blending rose gold and warm off-whites.',
      'Elegant product placement set against a textured backplate.',
      'Symmetric typography accenting natural ingredients.'
    ],
    toolsUsed: ['Visual Composition', 'Color Curation'],
    year: '2025'
  },
  {
    id: '06',
    title: 'Exhibition Promotional Poster',
    category: 'Social Media Poster',
    description: 'Swiss-style modern exhibition announcement designed for high-contrast social feeds.',
    imageUrl: img02,
    details: [
      'Strict alignment grids inspired by mid-century modernism.',
      'Bold, readable typographic arrangements.',
      'High-contrast graphic assets for maximum screen visibility.'
    ],
    toolsUsed: ['Grid Systems', 'Typography'],
    year: '2025'
  },
  {
    id: '07',
    title: 'Sonder Studio Logo',
    category: 'Logo Design',
    description: 'Mathematical, geometry-based vector brandmark and clean corporate monogram.',
    imageUrl: img05,
    details: [
      'Precise geometric grid blueprints and proportions mapping.',
      'Highly scalable emblem designed for diverse physical and digital mediums.',
      'Corporate guidelines document specifying clear space and usage.'
    ],
    toolsUsed: ['Logo Design', 'Vector Graphics'],
    year: '2025'
  },
  {
    id: '08',
    title: 'Chronos Watch Logo',
    category: 'Logo Design',
    description: 'Prestige luxury watch company logo and refined high-end visual icon.',
    imageUrl: img09,
    details: [
      'Bespoke emblem reflecting mechanical precision and heritage.',
      'Sophisticated luxury-focused layout and timeless balance.',
      'High-contrast aesthetic optimized for metal engraving and foil stamp.'
    ],
    toolsUsed: ['Vector Art', 'Brand Strategy'],
    year: '2024'
  },
  {
    id: '09',
    title: 'Prestige Whiskey Poster',
    category: 'Social Media Poster',
    description: 'Intricate bottle showcase poster promoting aged single malt whiskey collections.',
    imageUrl: img13,
    details: [
      'Intricate vector borders and gold metallic accents.',
      'Rich charcoal background textures conveying heritage and value.',
      'Symmetric, balanced product positioning.'
    ],
    toolsUsed: ['Ad Layouts', 'Texture Mapping'],
    year: '2024'
  },
  {
    id: '10',
    title: 'Bespoke Product Poster',
    category: 'Social Media Poster',
    description: 'Creative social media poster using color-grading to showcase design excellence.',
    imageUrl: img16,
    details: [
      'Expertly balanced product photography and background.',
      'Strategic margin offsets creating depth and focus.',
      'Minimalist branding text supporting the product story.'
    ],
    toolsUsed: ['Creative Direction', 'Color Theory'],
    year: '2025'
  },
  {
    id: '11',
    title: 'Corporate Marketing Poster',
    category: 'Social Media Poster',
    description: 'Polished digital marketing flyer designed to present corporate metrics clearly.',
    imageUrl: img20,
    details: [
      'Consistent corporate brand guidelines enforcement.',
      'High contrast readability for key promotional values.',
      'Sleek, uncluttered modern business presentation.'
    ],
    toolsUsed: ['Information Design', 'Marketing Layouts'],
    year: '2024'
  },
  {
    id: '12',
    title: 'Digital Advertisement Poster',
    category: 'Social Media Poster',
    description: 'High-impact promotional poster optimized for mobile-screen social stories.',
    imageUrl: img23,
    details: [
      'Dynamic color contrast and prominent typography.',
      'Carefully calculated margins to prevent overlap with app UI elements.',
      'Sleek visual hierarchy created for fast-paced digital scrolling.'
    ],
    toolsUsed: ['Motion Assets', 'Visual Flow'],
    year: '2025'
  },
  {
    id: '13',
    title: 'Eco-Friendly Box Poster',
    category: 'Social Media Poster',
    description: 'Promo poster highlighting sustainable packaging structures and modern boxes.',
    imageUrl: img25,
    details: [
      'Clean, structural layout detailing box alignments.',
      'Textured earthy backdrops supporting an eco-friendly brand story.',
      'Legible typography layout outlining package highlights.'
    ],
    toolsUsed: ['Layout Balance', 'Brand Presentation'],
    year: '2025'
  }
];

export const skillsData: Skill[] = [
  { name: 'Adobe Photoshop', level: 95, category: 'Creative Software', iconName: 'Image' },
  { name: 'Adobe Illustrator', level: 98, category: 'Creative Software', iconName: 'PenTool' },
  { name: 'Adobe XD', level: 90, category: 'Creative Software', iconName: 'Figma' },
  { name: 'InDesign', level: 92, category: 'Creative Software', iconName: 'BookOpen' },
  { name: 'Canva', level: 95, category: 'Design', iconName: 'Layers' },
  { name: 'CapCut', level: 90, category: 'Creative Software', iconName: 'Video' },
  { name: 'Microsoft Word', level: 85, category: 'Office & Productivity', iconName: 'FileText' },
  { name: 'Microsoft Excel', level: 80, category: 'Office & Productivity', iconName: 'BarChart' }
];

export const experienceData: Experience[] = [
  {
    role: 'Freelance Graphic Designer',
    company: 'Freelance',
    period: '2026 - Present',
    responsibilities: [
      'Social Media Design: Formulated visual aesthetics, customized graphic templates, and dynamic carousels that boosted engagement by 40% across client profiles.',
      'Brand Identity: Directed comprehensive redesigns, modern logos, and standard style manuals for emerging Middle Eastern businesses.',
      'Marketing Graphics: Engineered persuasive high-converting visual ads, creative flyers, and banners for multi-channel promotional campaigns.',
      'Promotional Campaigns: Collaborated with marketing strategists to design high-impact graphics for major seasonal launches and product reveals.',
      'Visual Content Creation: Shot, edited, and post-processed high-quality social Reels, promotional videos, and elegant design stories.'
    ]
  },
  {
    role: 'Junior Graphic Designer',
    company: '',
    period: '2024 - 2026',
    responsibilities: [
      'Assisted in the formulation and draft assembly of client brand moodboards, typographical pairings, and corporate visual assets.',
      'Designed high-fidelity daily feed posts, story banners, and promotional templates adhering strictly to established brand guidelines.',
      'Retouched marketing photos, processed print-ready vector logo exports, and arranged interactive catalog mockups.',
      'Collaborated effectively within cross-functional creative teams to meet tight campaign deadlines with pristine design execution.'
    ]
  }
];

export const educationData: Education[] = [
  {
    institution: 'CIS College',
    degree: 'BT1, BT2 & BT3 in Graphic Design',
    period: 'Completed',
    description: 'Comprehensive academic and technical study focusing on typographic structures, package design, history of graphic art, color theory, printmaking layout, and professional digital workflow.'
  }
];

export const certificatesData: Certificate[] = [
  { title: 'BT1 Certificate in Graphic Design', issuer: 'CIS College', year: '2023/2024' },
  { title: 'BT2 Certificate in Graphic Design', issuer: 'CIS College', year: '2024/2025' },
  { title: 'BT3 Certificate in Graphic Design', issuer: 'CIS College', year: '2025/2026' },
  { title: 'Adobe Photoshop Professional Course', issuer: 'BasementX', year: '2024' },
  { title: 'Adobe Illustrator Master Course', issuer: 'BasementX', year: '2024' },
  { title: 'Adobe InDesign Layout Course', issuer: 'BasementX', year: '2024' },
  { title: 'Creative Graphic Design & Composition Studies', issuer: 'YouTube Creative Learning Platforms', year: 'Ongoing' }
];
