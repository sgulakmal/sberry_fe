export interface MenuItem {
  label: string;
  icon: string; // icon identifier or component name
  path: string;
}

export interface MenuSection {
  title?: string;
  items: MenuItem[];
}

export interface NavigationState {
  sections: MenuSection[];
  scrollToTopSignal: number;
}