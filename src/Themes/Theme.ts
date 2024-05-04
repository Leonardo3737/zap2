const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export interface ITheme {
  text: string;
  secondaryText: string;
  background: string;
  fpBackground: string;
  tint: string;
  tabIconDefault: string;
  tabIconSelected: string;
  title: string
  tabLabel: string
}

interface IThemes {
  light: ITheme;
  dark: ITheme;
}

export const Theme: IThemes = {
  light: {
    text: '#262626',
    secondaryText: '#8696a0',
    background: '#fff',
    fpBackground: '#363636',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    title: '#25d366',
    tabLabel: '#146040'
  },
  dark: {
    text: '#eeeeee',
    secondaryText: '#a7a6a6',
    background: '#111b21',
    fpBackground: '#202c33',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    title: '#eeeeee',
    tabLabel: 'rgb(217 252 208)'
  },
};
