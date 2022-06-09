import { ThemeProvider } from "./components/darkSide/ThemeContext";
import { Home } from "./components/pages/Home";


export function App(){
  return (
    <ThemeProvider initialTheme='light'>
    <div className="min-h-screen flex flex-col items-center transition duration-200 dark:bg-gray-900">
      <Home />
    </div>
    </ThemeProvider>

  )
}