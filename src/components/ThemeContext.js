import React, {useContext, useState} from 'react';
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const useThemeUpdate = () => {
    return useContext(ThemeUpdateContext)
}

const ThemeProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false)

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
  
    return (
     <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
        </ThemeUpdateContext.Provider>
     </ThemeContext.Provider>
    )
  }

  export default ThemeProvider;