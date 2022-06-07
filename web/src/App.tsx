import { Home } from "./components/pages/Home";
import { Sun } from "phosphor-react";
import { Moon } from "phosphor-react";


export function App(){
  return (
    <div>
      <button className="bg-[#8257E5] w-20 h-120 rounded-full border-4 flex justify-center p-2">
        <Sun size={24} color="#EAC435" />
        <Moon size={24} color="#345995" /> 
      </button>
      <Home />
    </div>

  )
}