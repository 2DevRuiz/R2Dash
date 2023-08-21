export const setupDarkStyle = () => {
  const getTheme = () => {
    if (process.client) {
      // Verifica si se está ejecutando en el lado del cliente
      const darkModeValue = window.localStorage.getItem("dark");
      console.log(darkModeValue);
      if (window.localStorage.getItem("dark")) {
        // return JSON.parse(window.localStorage.getItem('dark'))
        const localStorageItem = window.localStorage.getItem("dark");
        const defaultValue = "";
        console.log();
        if (localStorageItem !== null) {
          return JSON.parse(localStorageItem);
        } else {
          // Proporcionar un valor predeterminado o manejar la situación de algún otro modo.
          return defaultValue; // Cambia "defaultValue" por el valor que deseas retornar en caso de que el valor sea null.
        }
      }
      return (
        !!window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
  };

  const setTheme = (value: any) => {
    if (process.client) {
        window.localStorage.setItem("dark", value);
    }
    
  };

  return {
    loading: true,
    isDark: getTheme(),
    toggleTheme() {
        console.log("Changed theme color is this color: "+this.isDark )
      this.isDark = !this.isDark;
      setTheme(this.isDark);
    },
  };
};

// export default setupDarkStyle;
