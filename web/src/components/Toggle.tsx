
import { Moon, Sun } from "phosphor-react"
import { memo, useContext } from "react"
import { ThemeContext } from "./darkSide/ThemeContext"

export const DarkModeToggle: React.FC = memo(() => {
    const { theme, setTheme } = useContext(ThemeContext)
    
    return (
  
      <div className='flex justify-center p-6'>
        <button 
        onClick={()=>setTheme(theme==='dark'?'light':'dark')} 
        className="bg-[#8257E5] w-20 h-10 rounded-full border-4 flex justify-center items-center pr-3">
        <span 
            className='ml-3 text-sm'>
            {theme === 'dark' ? <Sun size={24} color="#EAC435" /> : <Moon size={24} color="#345995" /> }
        </span>
        </button>
      </div>
    )
})

  


