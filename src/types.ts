
export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  tag: string;
}

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnail: string;
}

export enum Section {
  Hero = 'hero',
  About = 'about',
  Services = 'services',
  Work = 'work',
  Contact = 'contact'
}
