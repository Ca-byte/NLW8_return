import { DarkModeToggle } from "../../Toggle";
import { Widget } from "../../Widget";



export function Home() {
  return (
    <div className="w-screen h-screen flex relative bg-[url('/mothers.png')] bg-no-repeat bg-contain bg-center">
      <DarkModeToggle />
      <Widget />
    </div>
  );
}
