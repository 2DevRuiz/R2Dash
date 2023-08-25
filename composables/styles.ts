export const setupDarkStyle = () => {
  type Theme = 'light' | 'dark';

  const setColorTheme = (newTheme: Theme) => {
      useColorMode().preference = newTheme
  }
  return {
    loading: true,
    toggleTheme(theme:any) {
      setColorTheme(theme);
    },
  };
};

// export default setupDarkStyle;
