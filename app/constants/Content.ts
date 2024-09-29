// constants/Content.ts
export interface NavigationItem {
  label: string;
  path: string;
}

export const NAVIGATION: NavigationItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];
