export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  details: string[];
  toolsUsed: string[];
  year: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Design' | 'Creative Software' | 'Office & Productivity';
  iconName: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}
