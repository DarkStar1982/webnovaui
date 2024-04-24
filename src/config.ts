export type ThemeVariant = 'light' | 'dark';
export type NavPositionVariant = 'horizontal' | 'vertical' | 'combo' | 'dual';
export type NavTopShapeVariant = 'default' | 'slim';
export type NavbarAppearanceVariant = 'default' | 'darker';
export interface Config {
  isNavbarVerticalCollapsed: boolean;
  openNavbarVertical: boolean;
  theme: ThemeVariant;
  navbarVerticalAppearance: NavbarAppearanceVariant;
  navbarTopAppearance: NavbarAppearanceVariant;
  navbarPosition: NavPositionVariant;
  navbarTopShape: NavTopShapeVariant;
  isRTL: boolean;
  bodyClass?: string;
  isChatWidgetVisible: boolean;
}

export const initialConfig: Config = {
  isNavbarVerticalCollapsed: true,
  openNavbarVertical: false, // for responsive
  theme: 'dark',
  navbarTopAppearance: 'default',
  navbarVerticalAppearance: 'default',
  navbarPosition: 'horizontal',
  navbarTopShape: 'default',
  isRTL: false,
  isChatWidgetVisible: false
};
