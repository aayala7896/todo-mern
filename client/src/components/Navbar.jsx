import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="shadow mb-2">
      <nav className="max-w-screen-lg mx-auto flex items-center">
        <NavLink to="/" className="flex items-center">
          <div className="font-nunito bg-light-blue h-12 w-12 rounded-full shadow-2xl px-3 flex items-center text-center text-white text-xl font-mono font-semibold">TM
          </div>
          <div className= "ml-2 font-nunito font-semibold tracking-wide text-center text-black text-xl">Task Manager</div>
        </NavLink>

      </nav>
    </div>
  );
}