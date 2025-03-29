import { Link } from "@remix-run/react";
import Logo from "../../public/Logo.png";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-screen bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-row items-center text-white font-bold text-xl">
          <img src={Logo} className=" w-[75px] h-[75px]"></img>
          <Link to="/"></Link>
          <div className=" pl-[35px] text-3xl">Codemax 🚀</div>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
