import Navbar1 from "../../components/navbars/navbar1";
import Navbar2 from "../../components/navbars/navbar2";

export const WebCompNavbar = () => {
  return (
    <ul
      className="w-full flex flex-col justify-center items-center sm:flex-row sm:flex-wrap
    sm:justify-start sm:items-center"
    >
      <li>
        <a href="../../" className="active ">
          Home
        </a>
      </li>
      <li>
        <a href="../../pages/navbarPages">Navbars</a>
      </li>
      <li>
        <a href="../../pages/buttonPages">Buttons</a>
      </li>
      <li>
        <a href="../../pages/cardPages">Cards</a>
      </li>
      <li>
        <a href="../../pages/formPages">Forms</a>
      </li>
      <li>
        <a href="../../pages/about">About</a>
      </li>
      <li>
        <a href="../../pages/contact">Contact</a>
      </li>
    </ul>
  );
};

export default function NavbarsPage() {
  return (
    <div>
      <WebCompNavbar />
      <Navbar1 />
      <Navbar2 />
    </div>
  );
}
